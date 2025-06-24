<?php

namespace App\Http\Controllers\Worker;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller {
	public function login(Request $request) {
		$validator = Validator::make($request->all(), [
			'email' => 'required|email',
			'password' => 'required',
		]);

		if ($validator->fails()) {
			$errors = collect($validator->errors()->all());

			return response()->json([
				'errors' => $errors,
			], 422);
		}

		$user = User::where('email', $request->email)->first();

		if (!$user || !Hash::check($request->password, $user->password)) {
			return response()->json(['errors' => ['Credenciais inválidas.']], 401);
		}

		if ($user->role != 'client') {
			return response()->json(['errors' => ['Acesso negado: somente prestadores']], 403);
		}

		$token = $user->createToken('auth_token')->plainTextToken;

		$user->token = $token;

		return response()->json([
			'user' => $user
		]);
	}

	public function logout(Request $request) {
		$request->user()->currentAccessToken()->delete();

		return response()->json(['message' => 'Logout efetuado com sucesso'], 200);
	}
}

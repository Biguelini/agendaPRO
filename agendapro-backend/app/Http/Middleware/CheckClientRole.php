<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CheckClientRole {
	/**
	 * Handle an incoming request.
	 */
	public function handle(Request $request, Closure $next) {
		$user = $request->user();

		if (!$user || $user->role !== 'client') {
			return response()->json(['errors' => ['Acesso negado: somente clientes']], 403);
		}

		return $next($request);
	}
}

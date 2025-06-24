<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAdminRole {
	/**
	 * Handle an incoming request.
	 */
	public function handle(Request $request, Closure $next) {
		$user = Auth::user();

		if (!$user || $user->role !== 'admin') {
			return response()->json(['errors' => ['Acesso negado: somente administradores']], 403);
		}

		return $next($request);
	}
}

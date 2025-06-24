<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
	->withRouting(
		web: __DIR__ . '/../routes/web.php',
		api: __DIR__ . '/../routes/api.php',
		commands: __DIR__ . '/../routes/console.php',
		health: '/up',
	)
	->withMiddleware(function (Middleware $middleware): void {
		$middleware->alias([
			'client' => \App\Http\Middleware\CheckClientRole::class,
			'admin' => \App\Http\Middleware\CheckAdminRole::class,
			'worker' => \App\Http\Middleware\CheckWorkerRole::class,
		]);
	})
	->withExceptions(function (Exceptions $exceptions): void {
		$exceptions->render(function (\Illuminate\Auth\AuthenticationException $e, $request) {
			return response()->json([
				'errors' => ['Não autenticado.']
			], 401);
		});
		$exceptions->render(function (\Illuminate\Auth\Access\AuthorizationException $e, $request) {
			return response()->json([
				'errors' => 'Acesso não autorizado.'
			], 403);
		});
		$exceptions->render(function (\Symfony\Component\HttpKernel\Exception\NotFoundHttpException $e, $request) {
			return response()->json([
				'errors' => ['Recurso não encontrado.']
			], 404);
		});
		$exceptions->render(function (\Illuminate\Validation\ValidationException $e, $request) {
			return response()->json([
				'errors' => [$e->errors()],
			], 422);
		});
		$exceptions->render(function (Throwable $e, $request) {
			return response()->json([
				'errors' => ['Erro interno no servidor.'],
				'exception' => config('app.debug') ? $e->getMessage() : null,
			], 500);
		});
	})->create();

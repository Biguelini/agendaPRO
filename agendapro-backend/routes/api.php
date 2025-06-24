<?php

// Client
use App\Http\Controllers\Client\AuthController as ClientAuthController;

// Worker
use App\Http\Controllers\Worker\AuthController as WorkerAuthController;

// Admin
use App\Http\Controllers\Admin\AuthController as AdminAuthController;

use Illuminate\Support\Facades\Route;


Route::prefix('client')->group(function () {
	Route::post('/register', [ClientAuthController::class, 'register']);
	Route::post('/login', [ClientAuthController::class, 'login']);

	Route::middleware(['auth:sanctum', 'client'])->group(function () {
		Route::post('/logout', [ClientAuthController::class, 'logout']);
	});
});

Route::prefix('worker')->group(function () {
	Route::post('/login', [WorkerAuthController::class, 'login']);

	Route::middleware(['auth:sanctum', 'worker'])->group(function () {
		Route::post('/logout', [WorkerAuthController::class, 'logout']);
	});
});

Route::prefix('admin')->group(function () {
	Route::post('/login', [AdminAuthController::class, 'login']);

	Route::middleware(['auth:sanctum', 'admin'])->group(function () {
		Route::post('/logout', [AdminAuthController::class, 'logout']);
	});
});

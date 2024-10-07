<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/categories', [ProductController::class, 'getCategories']);
Route::get('/products/category/{product}', [ProductController::class, 'getProductsByCategory']);
Route::get('/product/{productId}', [ProductController::class, 'getProductById']);
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ProductService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /***
     * Default function upon loading product list page
     */
    public function index(Request $request)
    {
        $page = $request->query('page', 1); // Page 1 default
        $limit = $request->query('limit', 12); // Default to 12 products per page
        $searchTerm = $request->query('search', ''); // Search term
    
        // Start caching results
        $cacheDuration = 7 * 60; // Cache results for 7 mins
        $cacheKey = "products.search.{$searchTerm}.page.{$page}.limit.{$limit}";
    
        // Cache product
        $products = Cache::remember($cacheKey, $cacheDuration, function () use ($searchTerm, $limit, $page) {
            $url = "https://dummyjson.com/products/search?q={$searchTerm}&limit={$limit}&skip=" . ($page - 1) * $limit . "&select=id,title,description,category,price,thumbnail&sortBy=id&order=desc";
            return $this->productService->fetchApi($url);
        });
    
        return response()->json($products, 200);
    }

    public function getProductById(Request $request, $productId)
    {
        //Cache single result
        $cacheKey = "product.{$productId}";
        $cacheDuration = 5 * 60;

        $product = Cache::remember($cacheKey, $cacheDuration, function () use ($productId) {
            $url = "https://dummyjson.com/products/{$productId}";
            return $this->productService->fetchApi($url);
        });

        return response()->json($product, 200);
    }

    public function getCategories(Request $request)
    {
        $url = 'https://dummyjson.com/products/categories/{$limit}';

        try {
            $categories = $this->productService->fetchApi($url);
            return response()->json($categories, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    //to be implemented
    public function getProductsByCategory(Request $request, $product)
    {
        $productCategory = $product;
        $page = $request->query('page', 1); // Default to page 1
        $limit = $request->query('limit', 0); // Default to 10 products per page
        $searchTerm = $request->query('search', '');

        //Log::info($product);

        $url = "https://dummyjson.com/products/category/{$productCategory}?limit={$limit}&skip=" . ($page - 1) * $limit . "&select=id,title,description,category,price,thumbnail";
        try {
            $categories = $this->productService->fetchApi($url);
            return response()->json($categories, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        
    }
}

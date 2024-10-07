<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ProductService;
use Illuminate\Support\Facades\Log;

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
        $searchTerm = $request->query('search', ''); //Search term

        $url = "https://dummyjson.com/products/search?q={$searchTerm}&limit={$limit}&skip=" . ($page - 1) * $limit . "&select=id,title,description,category,price,thumbnail&sortBy=id&order=desc";

        try {
            $products = $this->productService->fetchApi($url);
            return response()->json($products, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getProductById(Request $request, $productId)
    {
        $url = "https://dummyjson.com/products/{$productId}";
        //Log::info($url);

        try {
            $product = $this->productService->fetchApi($url);
            
            return response()->json($product, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
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

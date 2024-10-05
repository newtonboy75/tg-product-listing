<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ProductService
{
    public function fetchApi(string $url)
    {
        $response = Http::async()->get($url)->wait();

        // Handle the response as needed
        if ($response->successful()) {
            return $response->json(); // Return the JSON response
        }

        // You can throw an exception or handle errors as needed
        throw new \Exception('Failed to fetch products: ' . $response->status());
    }
}

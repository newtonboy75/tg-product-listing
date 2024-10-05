# Product Listing App

## Description

This is a full-stack web application built using Laravel for the backend and React.js with TypeScript for the frontend. The app fetches product listings from the Dummy Products API and allows users to filter products based on categories.

## Technologies Used

- **Backend**: Laravel
- **Frontend**: React.js, TypeScript, Tailwind CSS
- **API**: Dummy Products API (https://dummyjson.com)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 12 or later)
- [npm](https://www.npmjs.com/get-npm) (Node package manager, installed with Node.js)
- [Composer](https://getcomposer.org/download/) (for managing PHP dependencies)
- [PHP](https://www.php.net/downloads) (version 7.4 or later)
- [Laravel](https://laravel.com/docs/8.x/installation#installation-via-composer) (if not installed, you can use Composer to install it)

## Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/product-listing-app.git
cd product-listing-app
```

### Backend Setup (Laravel)

1. Navigate to the Laravel backend folder:

   ```bash
   cd tg-product-list
   ```

2. Install the Laravel dependencies:

   ```bash
   composer install
   ```

3. Create a `.env` file by copying the example file:

   ```bash
   cp .env.example .env
   ```

4. Generate the application key:

   ```bash
   php artisan key:generate
   ```

5. Start the Laravel development server:

   ```bash
   php artisan serve
   ```

### Frontend Setup (React)

1. Navigate to the React frontend folder:

   ```bash
   cd tg-product-list-client
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm run dev
   ```
4. Alternatively, you can build the app and run it

   ```bash
   npm run build
   npm run preview
   ```

## Usage

- Open your web browser and navigate to [http://localhost:5173/](http://localhost:5173/) to view the app. (Use http://localhost:4173/ if you want to see the build/preview version)
- The app will fetch products dynamically based on the text typed in the search input without reloading the page.

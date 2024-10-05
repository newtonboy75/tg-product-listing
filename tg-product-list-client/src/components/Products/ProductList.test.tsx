// src/components/Products/ProductList.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductList from './ProductList';
import useProductList from '../../hooks/useProductList';

// Mock the custom hooks
jest.mock('../../hooks/useProductList');
jest.mock('../../hooks/useDebounce');

const mockUseProductList = useProductList as jest.Mock;

describe('ProductList', () => {
    beforeEach(() => {
        // Reset the mocks before each test
        jest.clearAllMocks();
    });

    test('renders the component correctly', () => {
        mockUseProductList.mockReturnValue({
            products: [],
            loading: false,
            hasMore: true,
        });

        render(<ProductList />);
        
        // Check if the input field is rendered
        expect(screen.getByPlaceholderText('Search Products')).toBeInTheDocument();
        
        // Check if the Load more button is rendered
        expect(screen.getByText('Load more')).toBeInTheDocument();
    });

    test('handles search input change', () => {
        mockUseProductList.mockReturnValue({
            products: [],
            loading: false,
            hasMore: true,
        });

        render(<ProductList />);
        
        const input = screen.getByPlaceholderText('Search Products');
        fireEvent.change(input, { target: { value: 'New search term' } });
        
        // Verify the input value has changed
        expect(input).toHaveValue('New search term');
    });

    test('clears search input when clear button is clicked', async () => {
        mockUseProductList.mockReturnValue({
            products: [],
            loading: false,
            hasMore: true,
        });

        render(<ProductList />);
        
        const input = screen.getByPlaceholderText('Search Products');
        const clearButton = screen.getByTitle('Reset');

        // Simulate typing into the input
        fireEvent.change(input, { target: { value: 'Some search term' } });
        expect(input).toHaveValue('Some search term');

        // Simulate clicking the clear button
        fireEvent.click(clearButton);

        await waitFor(() => {
            expect(input).toHaveValue('');
        });
    });

    test('displays loading state', () => {
        mockUseProductList.mockReturnValue({
            products: [],
            loading: true,
            hasMore: true,
        });

        render(<ProductList />);

        // Check if Loading component is rendered
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test('displays no more products message when hasMore is false', () => {
        mockUseProductList.mockReturnValue({
            products: [],
            loading: false,
            hasMore: false,
        });

        render(<ProductList />);

        // Check if no more products message is rendered
        expect(screen.getByText('No more products to load.')).toBeInTheDocument();
    });

    test('calls loadMoreProducts when Load more button is clicked', () => {
        const loadMoreMock = jest.fn();
        mockUseProductList.mockReturnValue({
            products: [],
            loading: false,
            hasMore: true,
        });

        render(<ProductList />);
        const loadMoreButton = screen.getByText('Load more');

        // Simulate clicking the Load more button
        fireEvent.click(loadMoreButton);

        // Check if the mock function was called
        expect(loadMoreMock).toHaveBeenCalled();
    });
});

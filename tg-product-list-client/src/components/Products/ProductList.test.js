var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
// src/components/Products/ProductList.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductList from './ProductList';
import useProductList from '../../hooks/useProductList';
// Mock the custom hooks
jest.mock('../../hooks/useProductList');
jest.mock('../../hooks/useDebounce');
const mockUseProductList = useProductList;
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
        render(_jsx(ProductList, {}));
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
        render(_jsx(ProductList, {}));
        const input = screen.getByPlaceholderText('Search Products');
        fireEvent.change(input, { target: { value: 'New search term' } });
        // Verify the input value has changed
        expect(input).toHaveValue('New search term');
    });
    test('clears search input when clear button is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        mockUseProductList.mockReturnValue({
            products: [],
            loading: false,
            hasMore: true,
        });
        render(_jsx(ProductList, {}));
        const input = screen.getByPlaceholderText('Search Products');
        const clearButton = screen.getByTitle('Reset');
        // Simulate typing into the input
        fireEvent.change(input, { target: { value: 'Some search term' } });
        expect(input).toHaveValue('Some search term');
        // Simulate clicking the clear button
        fireEvent.click(clearButton);
        yield waitFor(() => {
            expect(input).toHaveValue('');
        });
    }));
    test('displays loading state', () => {
        mockUseProductList.mockReturnValue({
            products: [],
            loading: true,
            hasMore: true,
        });
        render(_jsx(ProductList, {}));
        // Check if Loading component is rendered
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
    test('displays no more products message when hasMore is false', () => {
        mockUseProductList.mockReturnValue({
            products: [],
            loading: false,
            hasMore: false,
        });
        render(_jsx(ProductList, {}));
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
        render(_jsx(ProductList, {}));
        const loadMoreButton = screen.getByText('Load more');
        // Simulate clicking the Load more button
        fireEvent.click(loadMoreButton);
        // Check if the mock function was called
        expect(loadMoreMock).toHaveBeenCalled();
    });
});

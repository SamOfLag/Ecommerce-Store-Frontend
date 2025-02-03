import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from 'react';
import { IProductState } from '../Utils/interfaces.utils';
import productReducer from '../Reducers/ProductReducer';
import apiClient from '../Services/apiClient';
import { debounce } from 'lodash';
import { IProductAction } from '../Utils/types.utils';

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
  searchQuery: '',
  filters: {
    category: '',
    priceRange: [0, 1000],
    brands: [],
  },
  hasMore: true,
  page: 1,
  sortBy: 'priceAsc'
};

export const ProductsContext = createContext<
  | {
      state: IProductState;
      dispatch: React.Dispatch<IProductAction>;
      handleSearchInputChange: (
        event: React.ChangeEvent<HTMLInputElement>
      ) => void;
    }
  | undefined
>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await apiClient.get('/products', {
        params: {
          search: state.searchQuery,
          category: state.filters.category,
          minPrice: state.filters.priceRange?.[0],
          maxPrice: state.filters.priceRange?.[1],
          page: state.page,
        },
      });
      console.log('Products:', response)
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: { products: response.data.data || [], page: state.page },
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to load products' });
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [state.searchQuery, state.filters, state.page]);

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    }, 500),
    []
  );

  // Function to handle input changes
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    debouncedSearch(query);
  };

  return (
    <ProductsContext.Provider
      value={{ state, dispatch, handleSearchInputChange }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

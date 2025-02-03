import { IProductState } from '../Utils/interfaces.utils';
import { IProductAction } from '../Utils/types.utils';


const productReducer = (
  state: IProductState,
  action: IProductAction
): IProductState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
      case 'FETCH_SUCCESS':
  return {
    ...state,
    loading: false,
    products: action.payload.page === 1
      ? Array.isArray(action.payload.products)
        ? action.payload.products.map(p => ({ ...p, id: p._id })) // ✅ Map `_id` to `id`
        : []
      : [...state.products, ...(Array.isArray(action.payload.products)
        ? action.payload.products.map(p => ({ ...p, id: p._id })) 
        : [])],
    hasMore: action.payload.products.length > 0,
  };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload, page: 1 };
    case 'SET_FILTERS':
      return { ...state, filters: action.payload, page: 1 };
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };      
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};

export default productReducer;

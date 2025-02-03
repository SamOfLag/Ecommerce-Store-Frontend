import { IProduct } from "./interfaces.utils";

type FetchStartAction = { type: 'FETCH_START' };
type FetchSuccessAction = { type: 'FETCH_SUCCESS'; payload: { products: IProduct[]; page: number } };
type FetchErrorAction = { type: 'FETCH_ERROR'; payload: string };
type SetSearchQueryAction = { type: 'SET_SEARCH_QUERY'; payload: string };
type SetFiltersAction = { type: 'SET_FILTERS'; payload: { category?: string; priceRange?: [number, number] | undefined; brands?: string[]; } }
type SetSortAction = { type: 'SET_SORT'; payload: 'priceAsc' | 'priceDesc' | 'popularity' };
type NextPageAction = { type: 'NEXT_PAGE' };

// Combine all action types
export type IProductAction =
  | FetchStartAction
  | FetchSuccessAction
  | FetchErrorAction
  | SetSearchQueryAction
  | SetFiltersAction
  | NextPageAction
  | SetSortAction;
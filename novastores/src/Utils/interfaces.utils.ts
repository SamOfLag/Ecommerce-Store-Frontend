import { IProductAction } from './types.utils';

export interface IAuthContext {
  token: string | null;
  isAdmin: boolean;
  login: (token: string, role: string) => void;
  logout: () => void;
}
export interface PaystackConfig {
  email: string;
  amount: number;
  publicKey: string;
  metadata: {
    custom_fields: {
      display_name: string;
      variable_name: string;
      value: string;
    }[];
  };
}

export interface IVerifyEmailResponse {
  message: string;
  data: string;
  error: boolean;
}

export interface IProduct {
  _id: string;
  badge: string | undefined;
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}
export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filters: IFilters;
  hasMore: boolean;
  page: number;
  sortBy: 'priceAsc' | 'priceDesc' | 'popularity';
}

export interface IProductContext {
  state: IProductState;
  dispatch: React.Dispatch<IProductAction>;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFilters {
  category?: string;
  priceRange?: [number, number];
  brands?: string[];
}

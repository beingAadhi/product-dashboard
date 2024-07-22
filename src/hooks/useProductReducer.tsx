import { useReducer } from "react";

export type Product = {
  id: number;
  price: number;
  title: string;
};

export type ProductInfo = {
  loading: boolean;
  selectedCategory?: string;
  categoryList?: string[];
  products?: Product[];
  selectedProducts?: Product[];
  showReport: boolean;
};

export type ProductAction =
  | { type: 'SAVE_CATEGORIES'; payload: string[] }
  | { type: 'SELECTED_CATEGORY'; payload: string }
  | { type: 'ADD_PRODUCTS'; payload: Product[] }
  | { type: 'SELECTED_PRODUCTS'; payload: Product[] }
  | { type: 'SHOW_REPORT'; payload: boolean }
  | { type: 'CLEAR_REPORT' };

const initialState: ProductInfo = {
  loading: true,
  showReport: false,
};

const productReducer = (state: ProductInfo, action: ProductAction): ProductInfo => {
  switch (action.type) {
    case 'SAVE_CATEGORIES':
      return {
        ...state,
        categoryList: action.payload,
        loading: false,
      };
    case 'SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SELECTED_PRODUCTS':
      return {
        ...state,
        selectedProducts: action.payload,
      };
    case 'SHOW_REPORT':
      return {
        ...state,
        showReport: action.payload,
      };
    case 'CLEAR_REPORT':
      return {
        ...initialState,
        loading: false,
        categoryList: state.categoryList, // Preserve existing category list
      };
    default:
      return state;
  }
};

export const useProductReducer = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return { state, dispatch };
};

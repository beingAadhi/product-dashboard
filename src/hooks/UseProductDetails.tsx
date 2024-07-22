import { useEffect, useCallback } from "react";
import { Product, useProductReducer } from "./useProductReducer";
import { getCategory, getProductsFromCategory } from "./ProductService";

export const useProductDetails = () => {
  const { state, dispatch } = useProductReducer();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryList = await getCategory();
        dispatch({
          type: "SAVE_CATEGORIES",
          payload: categoryList
        });
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  const updateSelectedCategory = useCallback(async (category: string) => {
    dispatch({
      type: "SELECTED_CATEGORY",
      payload: category
    });

    try {
      const products = await getProductsFromCategory(category);
      dispatch({
        type: "ADD_PRODUCTS",
        payload: products
      });
    } catch (error) {
      console.error(`Failed to fetch products for category ${category}:`, error);
    }
  }, [dispatch]);

  const addProduct = useCallback((product: Product[]) => {
    dispatch({
      type: "SELECTED_PRODUCTS",
      payload: product
    });
  }, [dispatch]);

  const addReport = useCallback(() => {
    dispatch({
      type: "SHOW_REPORT",
      payload: true
    });
  }, [dispatch]);

  const clearReport = useCallback(() => {
    dispatch({
      type: "CLEAR_REPORT"
    });
  }, [dispatch]);

  return {
    loading: state.loading,
    categories: state.categoryList,
    selectedCategory: state.selectedCategory,
    updateselectedCategory: updateSelectedCategory,
    products: state.products,
    addProduct,
    selectedProducts: state.selectedProducts,
    showReport: state.showReport,
    addReport,
    clearReport
  };
};

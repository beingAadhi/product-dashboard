import { Product } from "./useProductReducer"

export const getCategory = async (): Promise<string[]> => {
  try {
    const response = await fetch('https://dummyjson.com/products/category-list');
    if (!response.ok) {
      throw new Error(`Request Failed with status ${response.status}`);
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
};

export const getProductsFromCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    if (!response.ok) {
      throw new Error(`Request Failed with status ${response.status}`);
    }
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error(`Failed to fetch products for category ${category}:`, error);
    throw error;
  }
};

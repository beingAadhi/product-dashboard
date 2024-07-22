import React from 'react';
import './App.css';
import FilterComponent from './components/FilterComponent';
import Report from './components/Report';
import { useProductDetails } from './hooks/UseProductDetails';


function App() {
  const productDetails = useProductDetails();
  return (
    <div className="dashboard">
       <FilterComponent 
          categories={productDetails.categories } 
          selectedCategory={productDetails.updateselectedCategory} 
          products={productDetails.products}
          choosenCategory={productDetails.selectedCategory}
          addSelectedProducts={productDetails.addProduct}
          selectedProducts={productDetails.selectedProducts}
          showReport = {productDetails.showReport}
          displayReport = {productDetails.addReport}
          clearReport= {productDetails.clearReport}
          loading={productDetails.loading}
        />
      <Report 
        selectedProducts={productDetails.selectedProducts ? productDetails.selectedProducts : productDetails.products} 
        showReport = {productDetails.showReport} 
      />
    </div> 
  );
}

export default App;

import React from "react";
import Box from '@mui/material/Box';
import './FilterComponent.css';
import FilterHeader from "./FilterHeader";
import { FilterDropDown } from "./FilterDropDown";
import Button from "@mui/material/Button";
import { FilterMultipleDropDown } from "./FilterMultipleDropDown";
import { Product } from "../hooks/useProductReducer";
import CircularProgress from '@mui/material/CircularProgress';

const FilterComponent: React.FC<{
  categories: string[] | undefined,
  selectedCategory: (category: string) => void,
  products: Product[] | undefined,
  choosenCategory: string | undefined,
  addSelectedProducts: (product: Product[]) => void,
  selectedProducts: Product[] | undefined,
  showReport: boolean,
  displayReport: () => void,
  clearReport: () => void,
  loading: boolean
}> = ({
  categories,
  selectedCategory,
  products,
  choosenCategory,
  addSelectedProducts,
  selectedProducts,
  showReport,
  displayReport,
  clearReport,
  loading
}) => {
  if (loading) {
    return (
      <Box className="filter">
        <CircularProgress className='loader' />
      </Box>
    );
  }

  const isRunReportDisabled = !showReport && ((selectedProducts && ((selectedProducts.length <= 3))) || ( !choosenCategory && !selectedProducts));

  return (
    <Box className="filter">
      <FilterHeader onClear={clearReport} />
      <FilterDropDown 
        items={categories} 
        title="Categories" 
        onChangeCategory={selectedCategory} 
        selectedCategory={choosenCategory} 
      />
      <FilterMultipleDropDown 
        items={products} 
        title="Products" 
        addSelectedProducts={addSelectedProducts} 
      />
      <div className="emptyArea" />
      <Button 
        variant="contained" 
        disabled={isRunReportDisabled} 
        onClick={displayReport}
      >
        Run Report
      </Button>
    </Box>
  );
};

export default FilterComponent;

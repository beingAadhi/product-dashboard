import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useState, useCallback } from "react";
import { Product } from "../hooks/useProductReducer";

export const FilterMultipleDropDown: React.FC<{
  items: Product[] | undefined,
  title: string,
  addSelectedProducts: (product: Product[]) => void
  selectedProjectsFromCategory:Product[] | undefined,
}> = ({ items, title, addSelectedProducts, selectedProjectsFromCategory }) => {
  
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleChange = useCallback((event: SelectChangeEvent<typeof selectedProducts>) => {
    const { value } = event.target;
    const newSelectedProducts = typeof value === 'string' ? value.split(',') : value;
    setSelectedProducts(newSelectedProducts);

    const selectedProductObjects = items?.filter((item) => newSelectedProducts.includes(item.title));
    if (selectedProductObjects) addSelectedProducts(selectedProductObjects);
  }, [items, addSelectedProducts]);

  if( !selectedProjectsFromCategory && selectedProducts.length > 0 ) {
    setSelectedProducts([])
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth disabled={!items}>
        <InputLabel id={`${title}-select-label`}>{title}</InputLabel>
        <Select
          labelId={`${title}-select-label`}
          id={`${title}-select`}
          label={title}
          onChange={handleChange}
          value={selectedProducts}
          multiple
        >
          {items?.map((item) => (
            <MenuItem key={item.id} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

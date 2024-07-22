import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useCallback } from "react";

export const FilterDropDown: React.FC<{
  items: string[] | undefined,
  title: string,
  selectedCategory: string | undefined,
  onChangeCategory: (category: string) => void,
}> = ({
  items,
  title,
  selectedCategory,
  onChangeCategory,
}) => {
  const handleChange = useCallback((event: SelectChangeEvent) => {
    onChangeCategory(event.target.value);
  }, [onChangeCategory]);

  const selectedCategoryTitle = selectedCategory ?? "";
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${title}-select-label`}>{title}</InputLabel>
        <Select
          labelId={`${title}-select-label`}
          id={`${title}-select`}
          label={title}
          onChange={handleChange}
          value={selectedCategoryTitle} 
        >
          {items?.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

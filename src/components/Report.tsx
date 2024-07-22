import { BarChart } from '@mui/x-charts/BarChart';
import React, { useMemo } from "react";
import { Product } from '../hooks/useProductReducer';

const Report: React.FC<{
  selectedProducts: Product[] | undefined,
  showReport: boolean,
}> = ({ selectedProducts, showReport }) => {

  const { productTitles, productPrices } = useMemo(() => {
    if (!showReport) return { productTitles: [], productPrices: [] };

    const titles: string[] = [];
    const prices: number[] = [];

    selectedProducts?.forEach((item) => {
      if (titles.length < 10) {
        titles.push(item.title);
        prices.push(item.price);
      }
    });

    return { productTitles: titles, productPrices: prices };
  }, [selectedProducts, showReport]);

  const valueFormatter = (value: string | null) => {
    let formattedValue = value ?? "";
    if (value && value.length > 15) {
      const valuesArray = value.split(" ");
      formattedValue = valuesArray.slice(0, 2).join(" ");
    }
    return formattedValue;
  };
  

  return (
    <>
      {showReport && (
        <BarChart
          xAxis={[{ scaleType: 'band', data: productTitles, valueFormatter: valueFormatter }]}
          series={[{ data: productPrices }]}
        />
      )}
    </>
  );
}

export default Report;

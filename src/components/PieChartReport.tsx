import React, { useMemo } from "react";
import { Product } from '../hooks/useProductReducer';
import { PieChart } from '@mui/x-charts/PieChart';


type ChartDetail = {
    id: number,
    value: number,
    label: string,
}
const PieChartReport: React.FC<{
  selectedProducts: Product[] | undefined,
  showReport: boolean,
}> = ({ selectedProducts, showReport }) => {

  const { productPrices } = useMemo(() => {
    if (!showReport) return { productTitles: [], productPrices: [] };

    const titles: ChartDetail[] = [];
    selectedProducts?.forEach((item) => {
      if (titles.length < 10) {
        titles.push({
            id: item.id,
            value: item.price,
            label: item.title
        });
      }
    });

    return { productPrices: titles };
  }, [selectedProducts, showReport]);


  return (
    <>
      {showReport && (
        <PieChart
          series={[
            { 
                data: productPrices 
            },
        ]}
        />
      )}
    </>
  );
}

export default PieChartReport;

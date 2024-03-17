'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';
import { useState, useEffect } from 'react';

export default function ChartComponent({
  title,
  description,
  data,
  className
}: {
  title: string;
  description: string;
  data: any;
  className: string;
}) {
  const [chartData, setChartData] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Create a new array for the categories
    const newCategories = data.map((item: any) => item.component_name);

    const allMonths = data
      .flatMap((item: any) =>
        item.ppu_time_series.map((entry: any) => entry.Month)
      )
      .filter(
        (value: any, index: any, self: any) => self.indexOf(value) === index
      );

    // Transform the data for the AreaChart
    const transformedData = allMonths.map((month: string) => {
      const monthData: { [key: string]: number | null | string } = {
        Month: month
      };
      data.forEach((item: any) => {
        // Find the cost entry for the current month
        const costEntry = item.ppu_time_series.find(
          (entry: any) => entry.Month === month
        );
        // Add the cost entry to the monthData
        monthData[item.component_name] = costEntry ? costEntry.Cost : null;
      });
      return monthData;
    });

    // Set the state with the new categories and the transformed data
    setCategories(newCategories);
    setChartData(transformedData);
  }, [data]);

  return (
    <Card className={className}>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <AreaChart
        className="mt-4 h-80"
        data={chartData}
        categories={categories} // This will now be set dynamically
        index="Month"
        valueFormatter={(number) =>
          `$${Intl.NumberFormat('us').format(number)}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}

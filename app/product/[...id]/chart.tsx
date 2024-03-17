'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

export default function Chart({
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
  return (
    <Card className={className}>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Retail', 'Production']}
        index="Month"
        colors={['indigo', 'fuchsia']}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}

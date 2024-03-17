'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NewsArray from '../../components/newsArray';

const chartdata = [
  {
    Month: 'Jan 21',
    Retail: 2890,
    Production: 2400
  },
  {
    Month: 'Jan 22',
    Retail: 1890,
    Production: 2000
  },
  {
    Month: 'Jan 23',
    Retail: 3890,
    Production: 2980
  }
];

export default function ProductPage() {
  const params = useParams<{ id: string }>();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <Image
            src="https://media.wired.com/photos/652db3f0b44e9598aea19183/master/pass/Best-Pixel-Phones-Gear.jpg"
            alt="Product Image"
            width={500}
            height={500}
            className="rounded center"
          />
          <Title>Product Name</Title>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-2"
          >
            <div className="flex space-x-1">
              <Text>Description:</Text>
              <p className="text-sm text-slate-500">Some product detail</p>
            </div>
          </Flex>
        </Card>
        <Chart
          title="Retail/Production"
          description="Comparison between Retail sale price and Production cost"
          data={chartdata}
          className="col-span-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Chart
          title="Retail/Production 2 "
          description="Comparison between Retail sale price and Production cost"
          data={chartdata}
          className=""
        />
        <Chart
          title="Retail/Production 3"
          description="Comparison between Retail sale price and Production cost"
          data={chartdata}
          className=""
        />
        <NewsArray className="" />
      </div>
    </main>
  );
}

// {data.map((item) => (
//   <Card key={item.category}>
//     <Title>{item.category}</Title>
//     <Flex
//       justifyContent="start"
//       alignItems="baseline"
//       className="space-x-2"
//     >
//       <Metric>{item.stat}</Metric>
//       <Text>Total views</Text>
//     </Flex>
//     <Flex className="mt-6">
//       <Text>Pages</Text>
//       <Text className="text-right">Views</Text>
//     </Flex>
//     <BarList
//       data={item.data}
//       valueFormatter={(number: number) =>
//         Intl.NumberFormat('us').format(number).toString()
//       }
//       className="mt-2"
//     />
//   </Card>
// ))}

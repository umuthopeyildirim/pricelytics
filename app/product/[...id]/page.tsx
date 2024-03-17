'use client';

import { Card, Text, Title, Flex } from '@tremor/react';
import Chart from './chart';
import ChartComponent from './chartComponent';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NewsArray from '../../components/newsArray';
import { Products } from '../../types/products'; // Import the 'Products' type
import { useState, useEffect } from 'react';
import { fetchProduct } from '../../lib/fetchProduct'; // Import the function from the separate file
import { Button } from '../../components/ui/button';
import { CardContent } from '../../components/ui/card';

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const [product, setProduct] = useState<Products | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      const fetchedProduct = await fetchProduct(id);
      setProduct(fetchedProduct);
    };

    loadProduct();
  }, [id]); // Don't forget to handle the loading and error states appropriately.

  if (!product) {
    return (
      <main className="p-4 md:p-10 mx-auto max-w-7xl space-y-6">
        Loading...
      </main>
    );
  }
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center justify-center ">
            <Image
              src={product.product_image}
              alt={product.product_name}
              width={100}
              height={500}
              className="rounded center"
            />
          </div>
          <CardContent className="space-y-4">
            <Title>{product.product_name}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <div className="flex space-x-1">
                <Text>Description:</Text>
                <p className="text-sm text-slate-500">{product.description}</p>
              </div>
            </Flex>
            <Button>
              <Link href={product.product_link}>Buy Now</Link>
            </Button>
          </CardContent>
        </Card>
        <Chart
          title="Retail/Production"
          description="Comparison between Retail sale price and Production cost"
          data={product.time_series}
          className="col-span-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <ChartComponent
          title="Components"
          description="All the components used in the product"
          data={product.components as Products[]} // Update the type of the 'data' prop
          className=""
        />
        <NewsArray
          name={product.product_name}
          data={product.components as Products[]} // Update the type of the 'data' prop
          className=""
        />
      </div>
    </main>
  );
}

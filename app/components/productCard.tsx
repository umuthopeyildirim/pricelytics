import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Title, Text } from '@tremor/react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard(products) {
  console.info(products);
  return (
    <div>
      <Link href="/product/1">
        <Card className="hover:bg-slate-200">
          <CardHeader>
            <Image
              src="https://media.wired.com/photos/652db3f0b44e9598aea19183/master/pass/Best-Pixel-Phones-Gear.jpg"
              alt="Product"
              width={200}
              height={200}
              className="rounded"
            />
          </CardHeader>
          <CardContent>
            <Title>Product Name</Title>
            <Text>Product description</Text>
            <Text className="text-xs">Price: $100</Text>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Title, Text } from '@tremor/react';
import Image from 'next/image';
import Link from 'next/link';
import { Products } from '../types/products';

export default function ProductCard(products: Products) {
  return (
    <div>
      <Link href="/product/1">
        <Card className="hover:bg-slate-200">
          <CardHeader>
            {/* Apply flexbox styles to center the image */}
            <div className="flex items-center justify-center max-h-40 overflow-hidden">
              <Image
                src={products.product_image}
                alt={products.product_name}
                width={160}
                height={160}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </CardHeader>
          <CardContent>
            <Title>{products.product_name}</Title>
            <Text>{products.description}</Text>
            <Text className="text-xs">Price: ${products.retail_cost}</Text>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

import { sql } from '@vercel/postgres';
import { Title, Text } from '@tremor/react';
import Search from './components/search';
import { Products } from './types/products';
import ProductCard from './components/productCard';

export default async function DashboardPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, product_image, product_link, product_name, description, retail_cost
    FROM products 
    WHERE product_name ILIKE ${'%' + search + '%'}
    LIMIT 10;
  `;
  const products = result.rows as Products[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Products</Title>
      <Text>A list of products retrieved from a Postgres database.</Text>
      <Search />
      <div className="grid grid-cols-4 mt-6 gap-4 ">
        {products.length === 0 ? (
          <Text className="text-muted-foreground">
            No products found for {search}
          </Text>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
    </main>
  );
}

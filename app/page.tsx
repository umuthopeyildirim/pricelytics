import { sql } from '@vercel/postgres';
import { Title, Text } from '@tremor/react';
import Search from './components/search';
import { Products } from './types/products';
import ProductCard from './components/productCard';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function DashboardPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const result = await sql`
    SELECT id, name, username, email 
    FROM users 
    WHERE name ILIKE ${'%' + search + '%'}
    LIMIT 10;
  `;
  const users = result.rows as User[];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Products</Title>
      <Text>A list of products retrieved from a Postgres database.</Text>
      <Search />
      <div className="flex mt-6">
        <ProductCard />
      </div>
    </main>
  );
}

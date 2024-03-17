'use server';

import { sql } from '@vercel/postgres';
import { Products } from '../types/products'; // Adjust the import path if needed

export async function fetchProduct(id: string): Promise<Products | null> {
  const result = await sql`
    SELECT id, product_image, product_link, product_name, description, retail_cost, components, time_series
    FROM products 
    WHERE id = ${parseInt(id, 10)};`;
  return result.rows[0] as Products | null;
}

import { fetchProduct } from '../../lib/fetchProduct';

export async function POST(request: Request) {
  const res = await request.json();
  const { id } = res;
  const product = await fetchProduct(id);
  return Response.json(product);
}

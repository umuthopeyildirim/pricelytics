import { fetchProduct } from '../../lib/fetchProduct';

export async function POST(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response('Product id is missing', { status: 400 });
  }

  const product = await fetchProduct(id);
  return new Response(JSON.stringify(product), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

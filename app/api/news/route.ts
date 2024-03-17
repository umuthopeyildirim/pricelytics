import { fetchNews } from '../../lib/fetchNews';

export async function POST(request: Request) {
  const res = await request.json();
  const { keywords } = res;
  const product = await fetchNews(keywords);
  return Response.json(product);
}

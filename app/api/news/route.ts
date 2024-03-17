import { fetchNews } from '../../lib/fetchNews';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const keywords = url.searchParams.get('keywords');

  if (!keywords) {
    return new Response('Keywords are missing', { status: 400 });
  }

  const news = await fetchNews([keywords]);
  return new Response(JSON.stringify(news), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

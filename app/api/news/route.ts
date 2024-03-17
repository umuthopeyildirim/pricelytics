export async function POST(request: Request) {
  const res = await request.json();
  let { keywords } = res;

  if (!keywords) {
    return new Response('Keywords are missing', { status: 400 });
  }

  // If keywords is a string, split it into an array
  if (typeof keywords === 'string') {
    keywords = keywords.split(',').map((keyword) => keyword.trim());
  }

  // fetch news from newsapi.org related to requested topic
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  // get keywords array and convert to string with AND between each word
  const topicString = keywords.join(' OR ');
  const url = `https://newsapi.org/v2/everything?q=${topicString}&pageSize=5&apiKey=${apiKey}`;
  const newsRes = await fetch(url);
  const data = await newsRes.json();

  return new Response(JSON.stringify(data.articles), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

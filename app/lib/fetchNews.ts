// fetch news from newsapi.org related to requested topic
export async function fetchNews(topic: Array<string>) {
  // use newsapi.org to fetch news
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  // get topic array and convert to string with AND between each word
  const topicString = topic.join(' OR ');
  const url = `https://newsapi.org/v2/everything?q=${topicString}&pageSize=10&apiKey=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.articles;
}

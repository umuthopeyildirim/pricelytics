'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card } from '../components/ui/card';
import { ScrollArea } from './ui/scroll-area';
import { fetchNews } from '../lib/fetchNews';
import { Products } from '../types/products';
import Image from 'next/image';
export default function NewsArray({
  className,
  data,
  name
}: {
  className: string;
  data: any[];
  name: string;
}) {
  console.log(data);
  const [news, setNews] = useState<any | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      // data is an object loop through it to get the component_name
      const components = data.map((item) => item.component_name);
      // add the name to the components array
      components.push(name);
      const fetchedNews = await fetchNews(components);
      setNews(fetchedNews);
    };

    loadNews();
  }, [data]);

  if (!news) {
    return (
      <main className="p-4 md:p-10 mx-auto max-w-7xl space-y-6">
        Loading...
      </main>
    );
  }
  return (
    <ScrollArea className={`${className} max-h-[500px] rounded-md border p-4`}>
      <div className="space-y-4">
        {news.map((article: any) => (
          <Card key={article.url} className="w-full rounded-xl overflow-hidden">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="aspect-card">
                <Image
                  alt={article.title}
                  className="object-cover aspect-none"
                  height={225}
                  src={article.urlToImage || '/placeholder.svg'}
                  width={400}
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-lg font-bold tracking-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {article.description}
                </p>
                <Link
                  className="self-start mt-4 text-sm font-semibold link inline-flex items-center"
                  href={article.url}
                >
                  Read more
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}

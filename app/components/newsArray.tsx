import Link from 'next/link';
import { Card } from '../components/ui/card';
import { ScrollArea } from './ui/scroll-area';

export default function NewsArray({ className }: { className: string }) {
  return (
    <ScrollArea className={`${className} max-h-[500px] rounded-md border p-4`}>
      <div className="space-y-4">
        <Card className="w-full rounded-xl overflow-hidden">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="aspect-card">
              <img
                alt="Feature 1"
                className="object-cover aspect-none"
                height={225}
                src="/placeholder.svg"
                width={400}
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <h3 className="text-lg font-bold tracking-tight">Feature 1</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Discover the power of Shadcns first feature.
              </p>
              <Link
                className="self-start mt-4 text-sm font-semibold link inline-flex items-center"
                href="#"
              >
                Explore
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </ScrollArea>
  );
}

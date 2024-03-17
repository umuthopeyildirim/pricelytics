import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';
import { ThemeProvider } from './components/themeProvider';

export const metadata = {
  title: 'Pricelytics - AI-Based Pricing for E-Commerce',
  description:
    'Automate your e-commerce product pricing with our AI-driven solution, Pricelytics. Optimize prices for maximum profit and competitiveness.',
  keywords: [
    'AI',
    'pricing',
    'e-commerce',
    'machine learning',
    'product pricing'
  ],
  openGraph: {
    title: 'Pricelytics - Automatic AI Pricing for E-Commerce Products',
    description:
      'Leverage AI to dynamically price your e-commerce products with Pricelytics, optimizing for market trends and maximizing profits.',
    url: 'https://pricelytics.umutyildirim.com',
    siteName: 'Pricelytics',
    images: [
      {
        url: 'https://pricelytics.umutyildirim.com/og-image.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Pricelytics Main Image'
      },
      {
        url: 'https://pricelytics.umutyildirim.com/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Pricelytics Alternative Image'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricelytics - Automatic AI Pricing for E-Commerce Products',
    description:
      'Leverage AI to dynamically price your e-commerce products with Pricelytics, optimizing for market trends and maximizing profits.',
    siteId: 'Pricelytics',
    creator: '@pricelytics',
    creatorId: 'Pricelytics',
    images: ['https://pricelytics.umutyildirim.com/og-image.png'] // Must be an absolute URL
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <Nav />
          </Suspense>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

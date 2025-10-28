import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Danverse – AI-Driven Cinematic Ad Director',
  description: 'Cinematic ads, living brand identity, content engines, MVP experiences, and brand copilot systems. Fast execution, strict brand discipline, measurable results.',
  keywords: ['cinematic ads', 'brand identity', 'content engine', 'MVP', 'brand copilot'],
  openGraph: {
    title: 'Danverse – AI-Driven Cinematic Ad Director',
    description: 'Cinematic ads, living brand identity, content engines, MVP experiences, and brand copilot systems.',
    url: 'https://www.danverse.ai',
    siteName: 'Danverse',
    images: [
      {
        url: 'https://www.danverse.ai/og/cover.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danverse – AI-Driven Cinematic Ad Director',
    description: 'Cinematic ads, living brand identity, content engines, MVP experiences, and brand copilot systems.',
    images: ['https://www.danverse.ai/og/cover.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F8F9FB" />
        <link rel="canonical" href="https://www.danverse.ai/" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  name: 'Danverse',
                  url: 'https://www.danverse.ai',
                  logo: 'https://www.danverse.ai/brand/danverse-mark.svg',
                  sameAs: [
                    'https://www.instagram.com/danverse.creative',
                    'https://www.instagram.com/muhammedd_adel',
                  ],
                },
                {
                  '@type': 'Person',
                  name: 'Mohamed Adel',
                  jobTitle: 'AI-Driven Cinematic Ad Director',
                  url: 'https://www.danverse.ai/#profile',
                },
                {
                  '@type': 'WebSite',
                  name: 'Danverse',
                  url: 'https://www.danverse.ai',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://www.danverse.ai/?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

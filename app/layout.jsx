import { Metadata } from 'next';
import './globals.css';

export const metadata = {
  title: 'Shruti Dodiya | Full Stack Developer',
  description:
    'Full Stack Developer with 1.5+ years of experience building scalable enterprise platforms. Specialized in Node.js, React, Laravel, and React Native.',
  keywords: [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Laravel Developer',
    'Mobile Developer',
    'React Native',
    'Web Developer',
  ],
  authors: [{ name: 'Shruti Dodiya' }],
  creator: 'Shruti Dodiya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shrutidodiya.com',
    site_name: 'Shruti Dodiya',
    title: 'Shruti Dodiya | Full Stack Developer',
    description:
      'Full Stack Developer with 1.5+ years of experience building scalable enterprise platforms.',
    images: [
      {
        url: 'https://shrutidodiya.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shruti Dodiya - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shruti Dodiya | Full Stack Developer',
    description:
      'Full Stack Developer with 1.5+ years of experience building scalable enterprise platforms.',
    creator: '@shrutidodiya',
    images: ['https://shrutidodiya.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Preload fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      </head>
      <body className="bg-slate-950 text-slate-50 antialiased">
        {/* Skip to main content link */}
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>

        <main id="main">{children}</main>
      </body>
    </html>
  );
}

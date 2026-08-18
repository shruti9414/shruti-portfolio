import { Metadata } from 'next';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://shrutidodiya.com'),
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shruti Dodiya | Full Stack Developer',
    description:
      'Full Stack Developer with 1.5+ years of experience building scalable enterprise platforms.',
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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Shruti Dodiya',
  jobTitle: 'Full Stack Developer',
  url: 'https://shrutidodiya.com',
  email: 'mailto:shrutidodiya9414@gmail.com',
  telephone: '+91-9558463190',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Som-Lalit Institute',
  },
  knowsAbout: [
    'PHP',
    'Laravel',
    'React.js',
    'Next.js',
    'Node.js',
    'React Native',
    'Mobile App Development',
    'API Integration',
    'AI Chatbot Integration',
  ],
  sameAs: [
    'https://linkedin.com/in/shruti-dodiya-585453a',
    'https://github.com/shruti9414',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Preload fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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

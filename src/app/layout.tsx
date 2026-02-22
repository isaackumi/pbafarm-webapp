import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/data/content'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pillbrookaquatics.com'),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: siteContent.meta.keywords,
  authors: [{ name: 'Pill Brook Aquatics' }],
  creator: 'Pill Brook Aquatics',
  publisher: 'Pill Brook Aquatics',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pillbrookaquatics.com',
    siteName: siteContent.meta.title,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteContent.meta.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#01599f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${sourceSans.className} antialiased`}>
        <div className="min-h-screen bg-white font-sans antialiased flex flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Confession',
  description:
    'The Daily Confession feature is not available for Pill Brook Aquatics. Explore our fresh tilapia products and services in Gyakiti, Ghana.',
  openGraph: {
    title: 'Daily Confession | Pill Brook Aquatics',
    description: 'Explore Pill Brook Aquatics fresh tilapia products and services.',
    url: 'https://pbafish.com/daily-confession',
  },
  alternates: {
    canonical: '/daily-confession',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function DailyConfessionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

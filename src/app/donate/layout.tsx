import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Us',
  description:
    'Pill Brook Aquatics does not accept donations. Support us by ordering our fresh tilapia or sharing our business with your community in Ghana.',
  openGraph: {
    title: 'Support Pill Brook Aquatics',
    description:
      'Support local aquaculture in Ghana. Order fresh tilapia or share our business with your community.',
    url: 'https://pbafish.com/donate',
  },
  alternates: {
    canonical: '/donate',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

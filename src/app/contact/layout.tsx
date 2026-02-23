import type { Metadata } from 'next'
import { siteContent } from '@/data/content'

const { contact } = siteContent

export const metadata: Metadata = {
  title: contact.title,
  description: contact.description,
  openGraph: {
    title: contact.title,
    description: contact.description,
    url: 'https://pbafish.com/contact',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

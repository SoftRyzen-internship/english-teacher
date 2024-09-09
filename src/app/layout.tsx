import type { Metadata } from 'next';
import { Comfortaa, Montserrat } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import { Header } from '@/layout/header/header';
import { Footer } from '@/layout/Footer/footer';

export const metadata: Metadata = {
  title: 'Motivation School',
  description: 'Англійська мова онлайн для дітей шкільного віку',
  metadataBase: process.env.NEXT_PUBLIC_METADATA_BASE
    ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE)
    : undefined,
  openGraph: {
    title: 'Motivation School',
    description: 'Англійська мова онлайн для дітей шкільного віку',
    type: 'website',
    url: process.env.NEXT_PUBLIC_METADATA_BASE,

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Motivation School Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motivation School',
    description: 'Англійська мова онлайн для дітей шкільного віку',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_CANONICAL,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});
const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-comfortaa',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(montserrat.variable, comfortaa.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

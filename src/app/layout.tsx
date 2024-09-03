import type { Metadata } from 'next';
import { Comfortaa, Montserrat } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Motivation School',
  description: '',
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
        {children}
      </body>
    </html>
  );
}

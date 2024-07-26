import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainNav from '../components/MainNav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ticket app',
  description: 'Next ticketing app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-col items-center border-b mb-5 py-3">
          <div className="max-w-6x1 w-full">
            <MainNav />
          </div>
        </nav>
        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}

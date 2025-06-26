import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ZenoToolBox - Free AI Tools & Online Utilities',
  description: 'Discover free online tools like word counter, QR code generator, and the best AI tools for writing, video, and more.',
  keywords: 'free online tools, AI tools, word counter, QR code generator',
  openGraph: {
    title: 'ZenoToolBox - Free AI Tools & Online Utilities',
    description: 'Free tools and AI utilities for students, marketers, and creators.',
    type: 'website',
    images: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <header className="bg-primary text-white p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center flex-wrap">
            <h1 className="text-2xl font-bold">ZenoToolBox</h1>
            <nav>
              <a href="/" className="mx-2 text-sm md:text-base">Home</a>
              <a href="/tools" className="mx-2 text-sm md:text-base">Tools</a>
              <a href="/ai-tools" className="mx-2 text-sm md:text-base">AI Tools</a>
              <a href="/blog" className="mx-2 text-sm md:text-base">Blog</a>
              <a href="/contact" className="mx-2 text-sm md:text-base">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2025 ZenoToolBox. All rights reserved.</p>
            <div className="mt-2">
              <a href="/contact" className="mx-2">Contact</a>
              <a href="/privacy" className="mx-2">Privacy Policy</a>
              <a href="/terms" className="mx-2">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
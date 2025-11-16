import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import './global.css';
import { Inter } from 'next/font/google';
import { AISearchTrigger } from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <AISearchTrigger />
          <DocsLayout {...baseOptions()} sidebar={{enabled: false}} tree={source.pageTree} githubUrl='https://github.com/ScrawnDotDev/Scrawn'>
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}

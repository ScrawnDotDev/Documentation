import { RootProvider } from "fumadocs-ui/provider/next";
import "@/app/globals.css";
import { AISearchTrigger } from "@/components/search";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.scrawn.dev"),
  title: {
    template: "%s | Scrawn",
    default: "Scrawn | Usage-based billing infrastructure for developers",
  },
  description:
    "Scrawn is the open-source usage-based billing engine for developers who need to charge for API calls, AI tokens, and compute. One SDK call tracks usage, evaluates pricing, and collects payment.",
  openGraph: {
    title: "Scrawn | Usage-based billing infrastructure for developers",
    description:
      "Open-source usage-based billing. Track API calls, AI tokens, compute - one SDK call evaluates pricing and collects payment.",
    url: "https://docs.scrawn.dev",
    siteName: "Scrawn Docs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrawn | Usage-based billing infrastructure for developers",
    description:
      "Open-source usage-based billing. Track API calls, AI tokens, compute - one SDK call evaluates pricing and collects payment.",
  },
  keywords: [
    "usage based billing",
    "open source billing",
    "scrawn billing",
    "AI token billing",
    "developer billing API",
    "usage metering",
    "pay per use infrastructure",
  ],
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Scrawn",
              url: "https://docs.scrawn.dev",
              logo: "https://docs.scrawn.dev/Scrawn_Logo.png",
              description:
                "Open-source usage-based billing infrastructure for developers.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Scrawn Docs",
              url: "https://docs.scrawn.dev",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://docs.scrawn.dev/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Analytics />
          <AISearchTrigger />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

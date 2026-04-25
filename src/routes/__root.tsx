import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GTIDS — Financial Inclusion & Livelihoods for Rural India" },
      {
        name: "description",
        content:
          "GTIDS drives last-mile financial inclusion and sustainable livelihoods across rural and tribal India. Operating across 14 states with 25,000+ villages. Banking access, DBT, microfinance, and financial literacy.",
      },
      { name: "keywords", content: "financial inclusion, rural India, microfinance, DBT, financial literacy, tribal development, livelihoods" },
      { name: "author", content: "Gram Tarang Inclusive Development Services Pvt. Ltd." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { httpEquiv: "x-ua-compatible", content: "IE=edge" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GTIDS" },
      { property: "og:title", content: "GTIDS — Financial Inclusion & Livelihoods for Rural India" },
      {
        property: "og:description",
        content: "Bridging underserved communities with the formal financial ecosystem. Inclusive finance and sustainable livelihoods across rural India.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GTIDS — Financial Inclusion for Rural India" },
      {
        name: "twitter:description",
        content: "A complete ecosystem for inclusive finance and livelihoods across 14 states.",
      },
      { name: "theme-color", content: "#1f2937" },
      { name: "msapplication-TileColor", content: "#1f2937" },
      { name: "language", content: "English" },
      { name: "revisit-after", content: "7 days" },
      { property: "og:locale", content: "en_IN" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://gtids.org" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "sitemap", href: "/sitemap.xml" },
      { rel: "manifest", href: "/manifest.json" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GTIDS - Gram Tarang Inclusive Development Services",
          "url": "https://gtids.org",
          "description": "GTIDS drives last-mile financial inclusion and sustainable livelihoods across rural and tribal India through a community-driven, technology-enabled ecosystem.",
          "foundingDate": "2011",
          "sameAs": [
            "https://www.facebook.com/gtids",
            "https://www.linkedin.com/company/gtids",
            "https://twitter.com/gtids"
          ],
          "areaServed": {
            "@type": "Place",
            "name": "Rural and Tribal India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "contact@gtids.org"
          }
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

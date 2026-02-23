import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from '../components/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-chotika-bangboon.vercel.app"),

  title: "Chotika Bangboon (โชติกา บางบุญ) | Portfolio",

  description:
    "Portfolio of Chotika Bangboon (โชติกา บางบุญ), Data Engineer specializing in data pipelines and analytics solutions.",

  keywords: [
    "Chotika Bangboon",
    "โชติกา บางบุญ",
    "Data Engineering",
    "Portfolio",
    "Python",
    "Machine Learning",
	"Data Analys",
	"Data Scientist",
	"UX/UI",
  ],

  openGraph: {
    title: "Chotika Bangboon (โชติกา บางบุญ) | Portfolio",
    description:
      "Portfolio of Chotika Bangboon (โชติกา บางบุญ), Data Engineer specializing in data pipelines.",
    type: "website",
    url: "https://portfolio-chotika-bangboon.vercel.app",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        {children}
        <ScrollToTop />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chotika Bangboon",
              alternateName: "โชติกา บางบุญ",
              url: "https://portfolio-chotika-bangboon.vercel.app",
              jobTitle: ["Data Engineer", "Data Scientist"]
            }),
          }}
        />
      </body>
    </html>
  );
}
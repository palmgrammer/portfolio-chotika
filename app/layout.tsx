import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from '../components/ScrollToTop';


export const metadata: Metadata = {
  title: "Chotika Bangboon | Data Engineering Portfolio",
  description: "Data Engineering portfolio showcasing experience in data pipelines, automation, and digital solutions. Passionate about the intersection of logic and creativity.",
  keywords: ["Data Engineering", "Data Science", "Portfolio", "Chotika Bangboon", "Python", "Machine Learning", "โชติกา บางบุญ","chotika bangboon"],
  authors: [{ name: "Chotika Bangboon" }],
  openGraph: {
    title: "Chotika Bangboon | Data Engineering Portfolio",
    description: "Portfolio of Chotika Bangboon (โชติกา บางบุญ), Data Engineer specializing in data pipelines, automation, and analytics solutions.",
    type: "website",
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
              url: "https://portfolio-chotika.vercel.app/",
              jobTitle: ["Data Engineer", "Data Scientist"]
            }),
          }}
        />
        
      </body>
    </html>
  );
}

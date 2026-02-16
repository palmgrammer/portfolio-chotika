import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from '../components/ScrollToTop';


export const metadata: Metadata = {
  title: "Chotika Bangboon | Data Engineering Portfolio",
  description: "Data Engineering portfolio showcasing experience in data pipelines, automation, and digital solutions. Passionate about the intersection of logic and creativity.",
  keywords: ["Data Engineering", "Data Science", "Portfolio", "Chotika Bangboon", "Python", "Machine Learning"],
  authors: [{ name: "Chotika Bangboon" }],
  openGraph: {
    title: "Chotika Bangboon | Data Engineering Portfolio",
    description: "Data Engineering portfolio showcasing experience in data pipelines, automation, and digital solutions.",
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
      </body>
    </html>
  );
}

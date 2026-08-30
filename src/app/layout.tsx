import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Houssam Eddine Djaidja | Software Engineer & Web Developer",
  description: "Portfolio of Houssam Eddine Djaidja — Software Engineer & Web Developer. CS student at ESI Algiers building modern web applications.",
  keywords: ["Houssam Eddine Djaidja", "Software Engineer", "Web Developer", "Next.js", "TypeScript", "ESI Algiers"],
  openGraph: {
    title: "Houssam Eddine Djaidja | Software Engineer & Web Developer",
    description: "Portfolio of Houssam Eddine Djaidja — Software Engineer & Web Developer",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

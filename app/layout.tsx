import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubtleCursor from "./components/SubtleCursor";
import { AudioProvider } from "./context/AudioContext"; // Adjust path if using @/context/AudioContext
export const metadata: Metadata = {
  title: "Armin Isaković | Frontend Engineer",
  description:
    "Portfolio of Armin Isaković, a Frontend Engineer with 3+ years of professional software engineering experience specializing in React, Next.js, TypeScript, modern CSS, accessibility, and web performance.",
  openGraph: {
    title: "Armin Isaković | Frontend Engineer",
    description:
      "Frontend Engineer with 3+ years of professional experience building responsive, accessible, and performant web applications.",
    url: "https://arminisakovic.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/syabro/neat-annotations/neat-annotations.css"
        />
      </head>
      <body className="bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 antialiased">
        <AudioProvider>
          <SubtleCursor />
          <Navbar />
          <main className="relative z-10 pt-24 min-h-screen">{children}</main>
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}

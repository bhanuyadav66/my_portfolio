import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Allam Bhanu Prakash | ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Allam Bhanu Prakash — CS (Data Science) student specialising in ML engineering, RAG systems, full-stack development, and AI pipelines. Based in Hyderabad, India.",
  openGraph: {
    title: "Allam Bhanu Prakash | ML Engineer & Full-Stack Developer",
    description:
      "Explore projects in LangChain RAG, Graph-CNN intrusion detection, Next.js marketplaces, and data analytics pipelines.",
    url: "https://my-portfolio-iota-six-38.vercel.app",
    siteName: "Allam Bhanu Prakash Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

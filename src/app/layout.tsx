import type { Metadata } from "next";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import "./reset.css";

const zillaSlab = Zilla_Slab({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banana Monkey's Shop",
  description:
    "The Banana Monkey's Shop, a place to buy good sport and styled clothes.",
  authors: {
    url: "https://www.linkedin.com/in/scalco/",
    name: "Felipe Maciel Scalco",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={zillaSlab.className}>{children}</body>
    </html>
  );
}

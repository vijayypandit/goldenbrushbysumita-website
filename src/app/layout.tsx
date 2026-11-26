import type { Metadata } from "next";
import {
  Playfair_Display,
  Plus_Jakarta_Sans,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoldenBrush by Sumita | Bridal & Party Makeup Artist in Delhi NCR",
  description:
    "Professional bridal makeup, party glam, engagement & mehendi looks, hair styling, and saree draping across Delhi NCR by Sumita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${greatVibes.variable}`}
    >
      <body className="font-sans antialiased bg-ivory text-espresso">
        {children}
      </body>
    </html>
  );
}

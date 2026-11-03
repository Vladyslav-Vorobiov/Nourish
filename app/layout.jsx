import localFont from "next/font/local";

import "./fonts/fallbacks.css";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const dmSans = localFont({
  src: "./fonts/dm-sans/latin-variable.woff2",
  variable: "--font-dm-sans",
  weight: "400 500",
  style: "normal",
  display: "swap",
  fallback: ["DM Sans Fallback"],
  adjustFontFallback: false,
});

const dmSerifDisplay = localFont({
  src: "./fonts/dm-serif-display/latin-regular.woff2",
  variable: "--font-dm-serif-display",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["DM Serif Display Fallback"],
  adjustFontFallback: false,
});

export const metadata = {
  title: {
    default: "Nourish — Modern Pantry Journal",
    template: "%s — Nourish",
  },
  description: "A modern journal for a thoughtful kitchen and pantry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nats = localFont({
  src: "./fonts/NATS-Regular.ttf",
  variable: "--font-nats",
  weight: "100 900",
});
const ndot = localFont({
  src: "./fonts/ndot-47-inspired-by-nothing.ttf",
  variable: "--font-ndot",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Top100Makers",
  description: "mulearn top100makes website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${nats.variable} ${ndot.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cute Boka",
  description:
    "Cuteboka is a music exchanging platform where users can effortlessly share, discover, and connect through music they love.",
  keywords: [
    "Cuteboka",
    "music sharing",
    "music exchange",
    "music platform",
    "share music",
    "discover music",
  ],
  authors: [{ name: "Neo Matrix" }],
  creator: "Cuteboka",
  openGraph: {
    title: "Cuteboka | Share & Discover Music",
    description:
      "Join the Cuteboka community to exchange your favorite tracks and discover new sounds every day.",
    siteName: "Cuteboka",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

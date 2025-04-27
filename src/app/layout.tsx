import type { Metadata } from "next";
import { Michroma } from "next/font/google";
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

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${michroma.className} antialiased`}> {children}</body>
    </html>
  );
}

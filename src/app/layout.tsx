import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Givbux",
  description:
    "Invest in the Future of Reward-Based Payments, Get in early on a company turning every transaction into income.",
  openGraph: {
    type: "website",
    url: "https://yourdomain.com/", //TODO:
    title: "Givbux",
    description:
      "Invest in the Future of Reward-Based Payments, Get in early on a company turning every transaction into income.",
    images: [
      {
        url: "https://givbux.com/wp-content/uploads/2021/04/lightGivbux-Logo-EPS-300x82.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Givbux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Givbux",
    description:
      "Invest in the Future of Reward-Based Payments, Get in early on a company turning every transaction into income.",
    images: [
      "https://givbux.com/wp-content/uploads/2021/04/lightGivbux-Logo-EPS-300x82.png",
    ], // Replace with your actual image URL
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <head></head>
      <body className={`${nunitoSans.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

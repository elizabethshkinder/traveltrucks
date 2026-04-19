import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "modern-normalize/modern-normalize.css";
import "./globals.css";

import QueryProvider from "../components/shared/QueryProvider";
import { Toaster } from "react-hot-toast";
import Header from "@/components/layout/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "Camper rental catalog for comfortable travel planning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </QueryProvider>
      </body>
    </html>
  );
}
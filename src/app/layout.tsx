import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
// import { PioneerProvider } from "@pioneer-sdk/pioneer-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pioneer Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem>
          {/* <PioneerProvider> */}
          {children}
          {/* </PioneerProvider> */}
        </ThemeProvider >
      </body>
    </html>
  );
}

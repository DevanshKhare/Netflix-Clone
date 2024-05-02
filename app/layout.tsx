import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devansh Netflix",
  description: "Designed by Devansh Khare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Wrapper>
          <body className={`${inter.className} bg-[#0f1014]`}>
            {children}
            </body>
      </Wrapper>
    </html>
  );
}

import "./globals.css";

import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stream Ixtiyor",
  description: "Stream Ixtiyor is a platform for Ixtiyor's content.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${space_grotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};
export default RootLayout;

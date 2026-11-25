import type { Metadata } from "next";


import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // Optional: useful for CSS variables & Tailwind
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      {/* Apply directly via className, or rely on the CSS variable */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Stack overflow",
  description: "Created by Srilalith",
};

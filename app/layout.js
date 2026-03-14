import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import DisableInspect from "@/components/layout/DisableInspect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amazon.com. Spend less, Smile more.",
  description: "Amazon.com. Spend less, Smile more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DisableInspect>{children}</DisableInspect>
      </body>
    </html>
  );
}

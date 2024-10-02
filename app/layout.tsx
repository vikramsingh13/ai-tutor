import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// Import the SessionWrapper component to wrap the entire application with the SessionProvider for managing sessions.
import SessionWrapper from "@/contexts/session-wrapper";
// Import the Navbar to add to the top of the application.
import Navbar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI tutor",
  description: "AI assisted accelerated learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen w-full bg-custom-bg-dark-2 text-white">
            <Navbar>
            {children}
            </Navbar>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}

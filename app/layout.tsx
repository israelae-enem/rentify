import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { ClerkProvider } from "@clerk/nextjs"

const inter= Inter({
  variable: "--font-sans",
  subsets: ["latin"],

});


export const metadata: Metadata = {
  title: "Rentify UAE",
  description: "A property management platform for landlords",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      

      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', inter.variable)}>
        <ClerkProvider appearance={{variables: { colorPrimary: '#302cfc'}}}>
        
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}

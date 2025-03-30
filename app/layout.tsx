import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
const jakartaSans = localFont({
  src: [
    {
      path: './fonts/PlusJakartaSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-Light.ttf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-jakarta-sans',
})

export const metadata: Metadata = {
  title: "Edugram",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} flex flex-col min-h-screen`} 
      >
        <Navbar/>
        <main className="flex-1 overflow-auto">{children}</main>
        
      </body>
    </html>
  );
}

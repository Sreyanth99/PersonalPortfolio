import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sreyanth Akella's Portfolio",
  description: "Simple and Sleek NextJS and React website to showcase my skills",
  icons:{
    icon:'/favicon.ico?',
    apple:'/apple-touch-icon.png',
    shortcut:'/apple-touch-icon.png'
  },
   
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
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
        </body>
    </html>
  );
}

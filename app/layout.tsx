import type { Metadata } from "next";
import "./globals.css";
import "@/styles/ui/scrollbar.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Welcome to my personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-activities">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


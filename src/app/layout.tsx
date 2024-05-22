import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayden Portfolio",
  description: "Website of Jayden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary border-[0.1px] border-white/50 m-4">
        {children}
      </body>
    </html>
  );
}

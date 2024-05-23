import type { Metadata } from "next";
import "../globals.css";
import {useTranslations} from 'next-intl'

export const metadata: Metadata = {
  title: "Jayden Portfolio",
  description: "Website of Jayden",
};

export interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

async function RootLayout({children, params: { locale }}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className="bg-primary border-[0.1px] border-white/50 m-4">
        {children}
      </body>
    </html>
  );
}


export default RootLayout

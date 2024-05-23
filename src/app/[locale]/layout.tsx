import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-primary border-[0.1px] border-white/50 m-4">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


export default RootLayout

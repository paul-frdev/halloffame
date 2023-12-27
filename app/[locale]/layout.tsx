import "../globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ToastProvider } from "@/providers/toastProvider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description: "ukrainian boxing hall of fame",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params?: {
    locale: string;
  };
}
export default async function RootLayout({ children, params }: RootLayoutProps) {
  let messages;
  let locale = params?.locale;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="font-SFPRegular bg-basic text-white transition-all duration-300 min-h-screen">
        <ToastProvider />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ReactLenis from "lenis/react";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Karya Engineering",
  description:
    "Karya Engineering is a leading provider of innovative engineering solutions, specializing in electrical and mechanical systems for commercial and industrial projects. With a commitment to excellence and sustainability, Karya delivers cutting-edge designs and reliable installations that meet the highest industry standards.",
  icons: {
    icon: "icons/fav-icon.svg",
  },
};

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <ReactLenis root>
            <Toaster
              position="top-right"
              containerStyle={{ marginTop: "68px" }}
              toastOptions={{
                style: {
                  background: "color-mix(in srgb, var(--surface), transparent 10%)",
                  color: "var(--on-surface)",
                  border: "1px solid color-mix(in srgb, var(--surface), transparent 80%)",
                  borderRadius: "12px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "12px",
                  paddingBlock: "12px",
                  gap: "8px",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            />
            <Navbar />
            {children}
            <Footer />
          </ReactLenis>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Configure self-hosted local font General Sans
const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal"
    },
    {
      path: "../../public/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-general-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Upbolt Studios | Premium Short-Form Video Systems",
    template: "%s | Upbolt Studios"
  },
  description: "Boutique content agency. We plan, shoot, edit, and post short-form video systems for clinics, dining, real estate, and fitness brands.",
  metadataBase: new URL("https://upboltstudios.com"),
  openGraph: {
    title: "Upbolt Studios | Premium Short-Form Video Systems",
    description: "Boutique content agency. We plan, shoot, edit, and post short-form video systems for clinics, dining, real estate, and fitness.",
    url: "https://upboltstudios.com",
    siteName: "Upbolt Studios",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={generalSans.variable}>
      <body className="bg-base text-text-primary min-h-screen flex flex-col justify-between antialiased selection:bg-accent selection:text-text-primary">
        <Nav />
        <main className="flex-grow flex flex-col justify-start">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

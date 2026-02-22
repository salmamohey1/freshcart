import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/store/Provider";
import AuthCheck from "@/components/auth/AuthCheck";
config.autoAddCss = false;
import favicon from "@/assets/images/mini-logo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FreshCart | Salma Mo",
    template: "%s | FreshCart",
  },
  description:
   "FreshCart is your go-to online grocery store for fresh food, household essentials, fast delivery, and premium quality at the best prices.",
  keywords: ["grocery", "ecommerce", "fresh food", "shopping", "delivery"],
  authors: [{ name: "FreshCart SM" }],
  icons: {
    icon: favicon.src,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <AuthCheck>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer />
          </AuthCheck>
        </ReduxProvider>
      </body>
    </html>
  );
}
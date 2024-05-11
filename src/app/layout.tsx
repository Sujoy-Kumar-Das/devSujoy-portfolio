import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Providers from "@/lib/Providers/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevSujoy",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          {" "}
          <AppRouterCacheProvider>
            <Navbar />
            <main className=" overflow-hidden">{children}</main>
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";
import ResponsiveNav from "@/components/widgets/Navbar/ResponsiveNav";
import Wrapper from "@/components/shared/Wrapper";
import Footer from "@/components/widgets/Footer/Footer";
import ScrollToTopButton from "@/components/widgets/ScrollToTopButton/ScrollToTopButton";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Real State Website | Nextjs",
  description: "Deal With All king of Apartment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${geistMono.variable} antialiased`}>
        <Wrapper>
        <div className="sticky top-0 left-0 right-0 bg-white z-50">
            <ResponsiveNav />
          </div>
          <div>{children}</div>
          <Footer/>
          <ScrollToTopButton/>
        </Wrapper>
      </body>
    </html>
  );
}

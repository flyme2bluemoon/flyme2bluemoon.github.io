import "@/app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Shen",
  description:
    "Matthew is a Computer Science and Biology student originally from Toronto and currently studying at McGill University in Montreal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 bg-gradient-to-b from-transparent to-gray-100 text-black dark:bg-gray-900 dark:to-gray-950 dark:text-white`}
      >
        <Script id="theme-flash" strategy="beforeInteractive">
          {`
            if (localStorage.getItem("theme") || window.matchMedia("(prefers-color-scheme: dark)").matches) {
              window.document.documentElement.classList.add("dark");
            }
          `}
        </Script>
        <Navbar />
        <div className="min-h-[80vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

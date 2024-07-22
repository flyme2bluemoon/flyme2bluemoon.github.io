import "@/app/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Radio_Canada, Noto_Serif, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";

const radioCanada = Radio_Canada({
  subsets: ["latin-ext"],
  variable: "--font-next-sans",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-next-serif",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-next-mono",
});

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
    <html
      lang="en"
      className={`${radioCanada.variable} ${notoSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body
        className={`bg-gray-50 bg-gradient-to-b from-transparent to-gray-100 font-sans text-black dark:bg-gray-900 dark:to-gray-950 dark:text-white`}
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

import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
// @ts-ignore
import favicon from "../images/favicon.ico";

const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactElement }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <title>{pageTitle} | flyme2bluemoon</title>
      <meta name="google-site-verification" content="qv7xCfbt8MhWrx_-4gE7-b9MwPs0qsiPhjMu46L1Y18" />
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <Navbar />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";

const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactElement }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Helmet>
        <title>{pageTitle} | flyme2bluemoon</title>
        <meta name="google-site-verification" content="qv7xCfbt8MhWrx_-4gE7-b9MwPs0qsiPhjMu46L1Y18" />
        <meta http-equiv="content-language" content="en-us" />
        <meta name="description" content="Matthew Shen's (flyme2bluemoon) personal static landing page and blog." />
      </Helmet>
      <Navbar />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
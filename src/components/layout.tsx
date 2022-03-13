import React, { useEffect } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import { getFCP, getFID, getTTFB } from "web-vitals";

const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactElement }) => {
  const sendToGoogleAnalytics = ({name, delta, id}: any) => {
    // @ts-ignore
    typeof window.gtag !== "undefined" && window.gtag('event', name, {
      event_category: 'Web Vitals',
      event_label: id,
      value: delta,
      non_interaction: true,
    });
  }

  useEffect(() => {
    getFCP(sendToGoogleAnalytics);
    getFID(sendToGoogleAnalytics);
    getTTFB(sendToGoogleAnalytics);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Helmet htmlAttributes={{ lang: "en" }}>
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
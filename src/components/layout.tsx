import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import { getFCP, getFID, getTTFB } from "web-vitals";
import { sendToGoogleAnalytics } from "../../utils/analytics";

const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactElement }) => {
  const [darkTheme, setDarkTheme] = useState("");

  const storageKey = "bluemoon-theme";
  const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
      return localStorage.getItem(storageKey) ?? "";
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    }
  }
  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    setDarkTheme(theme.value);
  }
  const toggleClickHandler = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    setPreference();
  }
  const theme = {
    value: getColorPreference()
  }

  useEffect(() => {
    setDarkTheme(theme.value);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({matches: isDark}) => {
      theme.value = isDark ? "dark" : "light";
      setPreference();
    });
  }, []);

  useEffect(() => {
    getFCP(sendToGoogleAnalytics);
    getFID(sendToGoogleAnalytics);
    getTTFB(sendToGoogleAnalytics);
  }, []);

  return (
    <div className={darkTheme}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <Helmet htmlAttributes={{ lang: "en" }}>
          <title>{pageTitle} | flyme2bluemoon</title>
          <meta name="google-site-verification" content="qv7xCfbt8MhWrx_-4gE7-b9MwPs0qsiPhjMu46L1Y18" />
          <meta http-equiv="content-language" content="en-us" />
          <meta name="description" content="Matthew Shen's (flyme2bluemoon) personal static landing page and blog." />
        </Helmet>
        <Navbar toggleHandler={toggleClickHandler} />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
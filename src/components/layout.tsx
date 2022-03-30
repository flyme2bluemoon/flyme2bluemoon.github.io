import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { Helmet } from "react-helmet";
import { getFCP, getFID, getTTFB } from "web-vitals";
import { sendToGoogleAnalytics } from "../../utils/analytics";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactElement }) => {
  const storageKey = "bluemoon-theme";
  const getColorPreference = () => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey) ?? "";
      } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
      }
    } else {
      return "";
    }
  }
  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    document.body.classList.add(theme.value);
    document.body.classList.remove(theme.value === "light" ? "dark" : "light");
  }
  const toggleClickHandler = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    setPreference();
  }
  const theme = {
    value: getColorPreference()
  }

  useEffect(() => {
    setPreference();

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

  const [topBtnStatus, setTopBtnStatus] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        setTopBtnStatus(true);
      } else {
        setTopBtnStatus(false);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{pageTitle} | flyme2bluemoon</title>
        <meta name="google-site-verification" content="qv7xCfbt8MhWrx_-4gE7-b9MwPs0qsiPhjMu46L1Y18" />
        <meta http-equiv="content-language" content="en-us" />
        <meta name="description" content="Matthew Shen's (flyme2bluemoon) personal static landing page and blog." />
        <meta name="theme-color" content="#f1f5f9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
      </Helmet>
      <Navbar toggleHandler={toggleClickHandler} />
      <main className="min-h-[80vh]">{children}</main>
      <Link to="" className={`block fixed bottom-2 right-2 sm:bottom-5 sm:right-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-full text-sm p-2.5 text-center ${topBtnStatus ? "[transition:visibility_0s_0s,_opacity_500ms] visible opacity-100" : "[transition:visibility_0s_500ms,_opacity_500ms] invisible opacity-0"}`} aria-label="back to top">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
      </Link>
      <Footer />
    </div>
  );
}

export default Layout;
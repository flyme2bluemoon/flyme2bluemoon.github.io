import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 Not Found">
      <div className="w-[1000px] mx-auto">
        <h1 className="text-3xl p-10"><span className="font-bold">404.</span> This is awkward!</h1>
        <p className="text-xl">Sorry, the page you requested could not be found. Double check that you have typed or pasted the correct URL. Otherwise, the page may have been moved or deleted.</p>
        <p className="text-xl pt-10"><Link to="/" className="underline">Follow the North Star Home</Link></p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;

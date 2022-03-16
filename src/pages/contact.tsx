import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <div className="w-[800px] mx-auto px-8">
        <h1 className="text-6xl font-bold py-3">Contact</h1>
        If you'd like to get in touch with me, here are some ways you can do so.
        <div>
          <h2 className="text-3xl font-medium py-2">Email</h2>
          If it's something longer or more important, the best way to react out is via email: <a href="mailto:matthew.zh.shen@gmail.com" className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">matthew.zh.shen@gmail.com</a>.
          <h2 className="text-3xl font-medium py-2">Social media</h2>
          For anything else, send me a DM on <a href="https://twitter.com/flyme2bluemoon" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Twitter (@flyme2bluemoon)</a> or <a href="https://instagram.com/flyme2bluemoon" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">Instagram (@flyme2bluemoon)</a>.
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

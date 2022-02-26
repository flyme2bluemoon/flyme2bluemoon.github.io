import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <div className="w-[800px] mx-auto px-8">
        <h1 className="text-6xl font-bold py-3">Contact</h1>
        <div>
          <h2 className="text-3xl font-medium py-2">Email</h2>
          <a href="mailto:matthew.zh.shen@gmail.com">matthew.zh.shen@gmail.com</a>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

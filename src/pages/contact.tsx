import React from "react";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <div className="w-[720px] mx-auto">
        <h1 className="text-6xl font-bold py-3">Contact</h1>
        <div>
          <h2 className="text-3xl font-medium py-2">Email</h2>
          <a href="mailto:matthew.zh.shen@gmail.com">matthew.zh.shen@gmail.com</a>
          <h2 className="text-3xl font-medium py-2">Phone</h2>
          <a href="tel:+16692520828">+1 (669) 252-0828</a>
          <h2 className="text-3xl font-medium py-2">Discord</h2>
          flyme2bluemoon#0583
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

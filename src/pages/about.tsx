import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <>
        <div className="pb-24 pt-48 text-center bg-blue-50 dark:bg-slate-800">
          <h1 className="text-5xl font-bold pb-10">&#x1F468;&#x200D;&#x1F393; About Me</h1>
          <div className="text-3xl max-w-6xl mx-auto">As of March 2022, I am currently a Grade 12 student from Canada and I have been pursuing an interest in Computer Science and the Humanities.</div>
          <hr className="w-48 border-2 mx-auto m-10 border-blue-400 dark:border-blue-800" />
        </div>
        <div className="mx-auto max-w-3xl prose dark:prose-invert pb-24">
          <div>
            <h2 className="text-3xl font-bold">What I'm Currently Working On</h2>
            <ol className="list-decimal">
              <li>I'm currently working towards the completion of my Ontario Secondary School Diploma and the IB Diploma.</li>
              <li>I have been practicing and competing in Competitive Programming competitions and Cybersecurity Capture the Flag events.</li>
              <li>My latest major coding project is this website which is built using Gatsby and hosted on Github Pages.</li>
              <ul>
                <li>On this website, I plan to blog about my interests such as technology, the humanities, and productivity/lifestyle.</li>
              </ul>
            </ol>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default About;

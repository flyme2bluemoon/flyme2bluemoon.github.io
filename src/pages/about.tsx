import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <>
        <div className="pb-24 pt-48 text-center bg-blue-50 dark:bg-slate-800">
          <h1 className="text-5xl font-bold pb-10">&#x1F468;&#x200D;&#x1F393; About Me</h1>
          <div className="text-3xl max-w-6xl mx-auto">I am an incoming student at McGill University in Montreal,&nbsp;Quebec,&nbsp;Canada pursuing a Bachelor of Science in Computer Science</div>
          <hr className="w-48 border-2 mx-auto m-10 border-blue-400 dark:border-blue-800" />
        </div>
        <div className="mx-auto max-w-3xl prose dark:prose-invert pb-24">
          <div>
            <h2 className="text-3xl font-bold">Education</h2>
            <ul className="list-disc">
              <li>
                <b>McGill University - Montreal, QC, Canada</b> <br />
                B.Sc. Computer Science <br />
                <span className="font-light">Sept. 2022 - June 2026</span>
              </li>
              <li>
                <b>Alexander Mackenzie High School - Richmond Hill, ON, Canada</b> <br />
                Ontario Secondary School Diploma &amp; International Baccalaureate Diploma <br />
                <span className="font-light">Sept. 2018 - June 2022</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold">What I'm Currently Working On</h2>
            <ol className="list-decimal">
              <li>I have been practicing and competing in Competitive Programming competitions and Cybersecurity Capture the Flag events.</li>
              <li>My latest major coding project is this website which is built using Gatsby and hosted on Github Pages.</li>
              <ul>
                <li>On this website, I plan to blog about my interests such as technology, the humanities, and productivity/lifestyle.</li>
              </ul>
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <ol className="list-decimal">
              <li>Front and backend Javascript/Typescript development with frameworks suchs as React, Next.js and Gatsby</li>
              <li>General-purpose programming languages including C, C++ and Python</li>
              <li>Databases including SQL databases such as MySQL and NoSql databases such as MongoDB</li>
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Experience</h2>
            <ul className="list-disc">
              <li>President of Coding Club at Alexander Mackenzie HS</li>
              <li>Vice-President of Math Club at Alexander Mackenzie HS</li>
              <li>Mathematics Peer Tutor at Alexander Mackenzie HS</li>
            </ul>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default About;

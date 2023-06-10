import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <>
        <div className="pb-24 pt-48 text-center bg-blue-50 dark:bg-slate-800">
          <h1 className="text-5xl font-bold pb-10">&#x1F468;&#x200D;&#x1F393; About Me</h1>
          <div className="text-3xl max-w-6xl mx-auto">I am a current student at McGill University in Montreal,&nbsp;Quebec,&nbsp;Canada pursuing a Bachelor of Science in Computer Science and Biology</div>
          <hr className="w-48 border-2 mx-auto m-10 border-blue-400 dark:border-blue-800" />
        </div>
        <div className="mx-auto max-w-3xl prose dark:prose-invert pb-24">
          <div>
            <h2 className="text-3xl font-bold">Education</h2>
            <ul className="list-disc">
              <li>
                <b>McGill University - Montreal, QC, Canada</b> <br />
                B.Sc. Computer Science and Biology <br />
                <span className="font-light">Sept 2022 - April 2026</span>
              </li>
              <li>
                <b>Alexander Mackenzie High School - Richmond Hill, ON, Canada</b> <br />
                Ontario Secondary School Diploma &amp; International Baccalaureate Diploma <br />
                <span className="font-light">Sept 2018 - June 2022</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Computer Science Courses</h2>
            <div className="font-semibold">
              <ul className="list-disc">
                <li>COMP 250 - Introduction to Computer Science<br /><span className="font-light">Java, Data Structures, and Algorithms</span></li>
                <li>COMP 206 - Introduction to Software Systems<br /><span className="font-light">Unix, Bash, and C</span></li>
              </ul>
            </div>
            <h2 className="text-3xl font-bold mb-2">Mathematics Courses</h2>
            <div className="font-semibold">
              <ul className="list-disc">
                <li>MATH 133 - Linear Algebra and Geometry</li>
                <li>MATH 140 - Calculus 1</li>
                <li>MATH 141 - Calculus 2</li>
                <li>MATH 240 - Discrete Structures</li>
              </ul>
            </div>
            <h2 className="text-3xl font-bold mb-2">Biology Courses</h2>
            <div className="font-semibold">
              <ul className="list-disc">
                <li>BIOL 111 - Organismal Biology</li>
                <li>BIOL 112 - Cell and Molecular Biology</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">What I'm Currently Working On</h2>
            <ol className="list-decimal">
              <li>I have been practicing and competing in Competitive Programming competitions and Cybersecurity Capture the Flag events.</li>
              <li>My latest major coding project is this website which is built using Gatsby and Tailwind CSS and hosted on Github Pages.</li>
              {/* <ul>
                <li>On this website, I plan to blog about my interests such as technology, the humanities, and productivity/lifestyle.</li>
              </ul> */}
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Technical Skills and Certificates</h2>
            <ol className="list-decimal">
              <li>General-purpose programming languages including C, C++, Java, and Python</li>
              <li>Front and backend Javascript/Typescript development with frameworks suchs as React, Next.js and Gatsby</li>
              <li>Familiarity with Unix and Linux systems and shell scripting</li>
              <li>Databases including SQL databases such as MySQL and NoSQL databases such as MongoDB</li>
              <li>Understanding of data structures and algorithms</li>
              <li><a href="https://certificates.cs50.io/1076cf75-9267-4bb9-8fc8-d2cbff4b1885.pdf" className="font-normal decoration-1 hover:decoration-2 text-inherit hover:text-blue-700 dark:hover:text-white" target="_blank" rel="noopener noreferrer">Harvard University CS50x Certificate</a></li>
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Experience</h2>
            <ul className="list-disc">
              <li>President of Coding Club at Alexander Mackenzie HS</li>
              <li>VP of Operations of Math Club at Alexander Mackenzie HS</li>
              <li>Mathematics Peer Tutor at Alexander Mackenzie HS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Languages</h2>
            <ul className="list-disc">
              <li>English – fluent proficiency</li>
              <li>Français (French) – intermediate proficiency</li>
              <li>中文 (Chinese) – fluent in spoken Cantonese and Mandarin</li>
            </ul>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default About;

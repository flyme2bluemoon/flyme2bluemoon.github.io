import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout pageTitle="About Me">
      <>
        <div className="pb-24 pt-48 text-center bg-blue-50 dark:bg-slate-800">
          <h1 className="text-5xl font-bold pb-10">&#x1F468;&#x200D;&#x1F393; About Me</h1>
          <div className="text-3xl max-w-6xl mx-auto">I am a current student at McGill University in Montreal,&nbsp;Quebec,&nbsp;Canada pursuing a Bachelor of Science in Computer Science</div>
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
            <h2 className="text-3xl font-bold mb-2">Math and Computer Science Courses</h2>
            <h3 className="text-2xl font-semibold">Fall 2022</h3>
            <div className="font-semibold">
              <ul className="list-disc">
                <li>COMP 250 - Introduction to Computer Science<br /><span className="font-light">Java, Data Structures, and Algorithms</span></li>
                <li>MATH 133 - Linear Algebra and Geometry</li>
                <li>MATH 140 - Calculus 1</li>
              </ul>
            </div>
            <h3 className="text-2xl font-semibold">Winter 2023</h3>
            <div className="font-semibold">
              <ul className="list-disc">
                <li>COMP 206 - Introduction to Software Systems<br /><span className="font-light">Unix, Bash, and C</span></li>
                <li>MATH 141 - Calculus 2</li>
                <li>MATH 240 - Discrete Structures</li>
              </ul>
            </div>
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
              <li>General-purpose programming languages including C, C++, Java, and Python</li>
              <li>Understanding of data structures and algorithms</li>
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

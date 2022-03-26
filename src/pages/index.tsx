import { OutboundLink } from "gatsby-plugin-google-gtag";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";

const Home = () => {
  const [greeting, setGreeting] = useState("");
  const [cursorVisibility, setCursorVisibiility] = useState(true);

  useEffect(() => {
    const myGreeting = "Hello, my name is";
    for (let i = 0; i <= myGreeting.length; i++) {
      setTimeout(() => {
        setGreeting(myGreeting.slice(0, i));
      }, i * 100);
    }
  }, []);

  return (
    <Layout pageTitle="Home">
      <div>
        <div className="h-[720px] flex justify-center align-center flex-col bg-[url('../images/topography-light.svg')] dark:bg-[url('../images/topography-dark.svg')]">
          <div className="mx-10 sm:mx-24 lg:mx-32 xl:mx-60">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold py-1">{greeting}&nbsp;</h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold py-1">Matthew Shen<span className="text-blue-700 dark:text-blue-600">.</span></h1>
          </div>
        </div>
        <div className="p-8 md:p-36">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-center font-bold text-4xl pb-8">About Matthew</h2>
            <p className="text-center text-gray-800 dark:text-gray-200 leading-relaxed">
              Matthew is a full-time student from Toronto, Ontario, Canada. He has experience competing in competitive programming competitions such as <OutboundLink className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" href="https://g.co/kickstart" target="_blank" rel="noopener noreferrer">Google Kickstart</OutboundLink>, <OutboundLink className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" href="https://fb.com/codingcompetitions/hacker-cup" target="_blank" rel="noopener noreferrer">Facebook Hacker Cup</OutboundLink>, <OutboundLink className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" target="_blank" rel="noopener noreferrer">UWaterloo Canadian Computing Competition</OutboundLink> and <OutboundLink className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" href="https://adventofcode.com/" target="_blank" rel="noopener noreferrer">Advent of Code</OutboundLink> using languages such as C++ and Python. He also has experience working on frontend and backend web development projects using technologies such as React (Next.js and Gatsby) in TypeScript, Firebase, Flask and Laravel. Furthermore, he enjoys participating in Cybersecurity Capture the Flag events.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

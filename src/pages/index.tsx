import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <div>
        <div className="h-[720px] flex justify-center align-center flex-col bg-[url('../images/topography-light.svg')] dark:bg-[url('../images/topography-dark.svg')]">
          <div className="mx-10 sm:mx-24 lg:mx-48">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">Hello, my name is</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">Matthew Shen<span className="text-blue-700 dark:text-blue-500">.</span></h1>
          </div>
        </div>
        <div className="p-8 md:p-36">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-center font-bold text-4xl pb-8">About Matthew</h2>
            <p className="text-center text-gray-800 dark:text-gray-200 leading-relaxed">
              Matthew is a full-time student from Toronto, Ontario, Canada. He has experience competing in competitive programming competitions such as <OutboundLink className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" href="https://g.co/kickstart" target="_blank" rel="noopener noreferrer">Google Kickstart</OutboundLink>, <OutboundLink className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" href="https://fb.com/codingcompetitions/hacker-cup" target="_blank" rel="noopener noreferrer">Facebook Hacker Cup</OutboundLink>, <OutboundLink className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" target="_blank" rel="noopener noreferrer">the UWaterloo Canadian Computing Competition</OutboundLink> and <OutboundLink className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300" href="https://adventofcode.com/" target="_blank" rel="noopener noreferrer">Advent of Code</OutboundLink> using languages such as C++ and Python. He also has experience working on frontend and backend web development projects using technologies such as React (Next.js and Gatsby) in TypeScript, Firebase, Flask and Laravel. Furthermore, he enjoys participating in Cybersecurity Capture the Flag events.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

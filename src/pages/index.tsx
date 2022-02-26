import React from "react";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <div>
        <div className="h-[720px] flex justify-center align-center flex-col topography">
          <h1 className="text-center text-8xl font-bold">Hello, I'm Matthew Shen 👋</h1>
        </div>
        <div className="p-36 bg-slate-100 dark:bg-gray-800">
          <div className="w-[720px] mx-auto">
            <h2 className="text-center font-bold text-4xl pb-8">About Matthew</h2>
            <p className="text-center text-gray-800 dark:text-gray-200 leading-relaxed">
              Matthew is a full-time student from Toronto, Ontario, Canada. He has experience competing in competitive programming competitions such as <a href="https://g.co/kickstart" target="_blank" rel="noopener noreferrer">Google Kickstart</a>, <a href="https://fb.com/codingcompetitions/hacker-cup" target="_blank" rel="noopener noreferrer">Facebook Hacker Cup</a>, <a href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" target="_blank" rel="noopener noreferrer">the UWaterloo Canadian Computing Competition</a> and <a href="https://adventofcode.com/" target="_blank" rel="noopener noreferrer">Advent of Code</a> using languages such as C++ and Python. He also has experience working on frontend and backend web development projects using technologies such as React (Next.js and Gatsby) in TypeScript, Firebase, Flask and Laravel. Furthermore, he enjoys participating in Cybersecurity Capture the Flag events.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
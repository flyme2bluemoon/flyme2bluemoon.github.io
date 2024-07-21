"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [greeting, setGreeting] = useState("");

  const myGreeting = "Hello, my name is";

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (let i = 0; i <= myGreeting.length; i++) {
        setTimeout(() => {
          setGreeting(myGreeting.slice(0, i));
        }, i * 100);
      }
    } else {
      setGreeting(myGreeting);
    }
  }, []);

  return (
    <div>
      <link
        rel="preload"
        fetchPriority="high"
        as="image"
        href="/images/topography-light.svg"
        type="image/svg+xml"
      ></link>
      <link
        rel="preload"
        fetchPriority="high"
        as="image"
        href="/images/topography-dark.svg"
        type="image/svg+xml"
      ></link>
      <div className="align-center flex h-[720px] flex-col justify-center bg-topography-light dark:bg-topography-dark">
        <div className="mx-10 sm:mx-24 lg:mx-32 xl:mx-60">
          <h1 className="py-1 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
            {greeting}&nbsp;
            <noscript>{myGreeting}</noscript>
          </h1>
          <h1 className="py-1 text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
            Matthew Shen
            <span className="text-blue-700 dark:text-blue-600">.</span>
          </h1>
        </div>
      </div>
      <div className="p-8 md:p-36">
        <div className="mx-auto max-w-[720px]">
          <h2 className="pb-8 text-center text-4xl font-bold">About Matthew</h2>
          <div className="space-y-4 text-center leading-relaxed text-gray-800 dark:text-gray-200">
            <div>
              Matthew is a Computer Science and Biology student originally from
              Toronto and currently studying at McGill University in Montréal.
              He has experience with full-stack development as well as deploying
              to both local and cloud servers. He has also worked on research of
              the use of AI and large language models as a tool to help people
              with accessibility needs. In his free time, he also enjoys
              Competitive Programming and Capture the Flag competitions. His
              other interests include aviation and photography.
            </div>
            <div>
              <Link
                href="/about/"
                className="font-bold text-blue-800 no-underline hover:underline dark:text-blue-300"
              >
                Click here to read more about Matthew
              </Link>
            </div>
            {/* Matthew is a Computer Science and Biology student originally from
            Toronto and currently studying in Montréal. He has experience
            competing in competitive programming competitions such as{" "}
            <Link
              className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
              href="https://g.co/kickstart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Kickstart
            </Link>
            ,{" "}
            <Link
              className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
              href="https://fb.com/codingcompetitions/hacker-cup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Hacker Cup
            </Link>
            ,{" "}
            <Link
              className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
              href="https://cemc.uwaterloo.ca/contests/ccc-cco.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              UWaterloo Canadian Computing Competition
            </Link>{" "}
            and{" "}
            <Link
              className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
              href="https://adventofcode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advent of Code
            </Link>{" "}
            using languages such as Java, C++ and Python. He also has experience
            working on frontend and backend web development projects using
            technologies such as Next.js, Firebase, Flask and Laravel.
            Furthermore, he enjoys participating in Cybersecurity Capture the
            Flag events. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

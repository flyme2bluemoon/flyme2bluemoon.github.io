import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matthew Shen - About",
  description:
    "A dedicated McGill University student pursuing a B.Sc. in Computer Science and Biology. Experienced in various programming languages and frameworks, with a strong understanding of data structures and algorithms. Actively participating in Competitive Programming competitions and Cybersecurity Capture the Flag events.",
};

const About = () => {
  return (
    <>
      <div className="bg-blue-50 pb-24 pt-48 text-center dark:bg-slate-800">
        <h1 className="pb-10 text-5xl font-bold">
          &#x1F468;&#x200D;&#x1F393; About Me
        </h1>
        <div className="mx-auto max-w-6xl px-3 text-xl sm:text-3xl">
          I am a current student at McGill University in Montréal, Quebec,
          Canada pursuing a Bachelor of Science in Computer Science and Biology
        </div>
        <hr className="m-10 mx-auto w-48 border-2 border-blue-400 dark:border-blue-800" />
      </div>
      <div className="prose mx-auto max-w-3xl px-3 pb-4 dark:prose-invert">
        <div>
          <h2 className="text-3xl font-bold">Education</h2>
          <ul className="list-disc">
            <li>
              <b>McGill University - Montréal, QC, Canada</b> <br />
              B.Sc. Honours Computer Science and Biology <br />
              <span className="font-light">Sept 2022 - April 2026</span>
            </li>
            <li>
              <b>Alexander Mackenzie High School - Richmond Hill, ON, Canada</b>{" "}
              <br />
              Ontario Secondary School Diploma &amp; International Baccalaureate
              Diploma <br />
              <span className="font-light">Sept 2018 - June 2022</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Experience</h2>
          <ul className="list-disc space-y-5 leading-normal">
            <li>
              <div className="font-semibold">
                Conversational User Interfaces Research Assistant
              </div>
              <div className="font-light">
                <a
                  href="https://sats.lab.yorku.ca/"
                  className="text-blue-800 no-underline hover:underline dark:text-blue-300"
                >
                  Social and Technological Systems Lab
                </a>
                , York University &ndash; Toronto, ON, Canada
              </div>
              <div className="my-1">
                Exploration and development of a Conversational User Interface
                for people living with dementia.
                <br />
                Deployed AI large language models with function/tool using a
                Next.js and Flask web application.
              </div>
              <div className="font-light">May 2024 - Present</div>
            </li>
            <li>
              <div className="font-semibold">COMP 250 TEAM Mentor</div>
              <div className="font-light">
                School of Computer Science, McGill University &ndash; Montréal,
                QC, Canada
              </div>
              <div className="my-1">
                Recipient of Tomlinson Engagement Award for Mentoring for COMP
                250 Introduction to Computer Science.
                <br />
                Led weekly tutorials to review Java, Object-Oriented
                Programming, Data Structures and Algorithms concepts and
                exercises.
                <br />
                Held weekly office hours to help students with their assignments
                and answer their questions about computer science concepts.
              </div>
              <div className="font-light">Sept 2023 - April 2024</div>
            </li>
            <li>
              <div className="font-semibold">Crew Member</div>
              <div className="font-light">
                McGill Summer Academy &ndash; Montréal, QC, Canada
              </div>
              <div className="my-1">
                Acted as a role model, supervised students aged 15-17 and led
                activities while ensuring their health, safety, and well-being.
              </div>
              <div className="font-light">July 2023</div>
            </li>
            {/* <li>
              <span className="font-semibold">
                President of Coding Club at Alexander Mackenzie HS
              </span>
              <br />
              <span className="font-light">Sept 2021 - June 2022</span>
            </li>
            <li>
              <span className="font-semibold">
                VP of Operations of Math Club at Alexander Mackenzie HS
              </span>
              <br />
              <span className="font-light">Sept 2021 - June 2022</span>
            </li> */}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold">
            Technical Skills and Certificates
          </h2>
          <ul className="list-disc">
            <li>
              <b>Languages:</b> C/C++, Java, Python, TypeScript/JavaScript, SQL,
              Shell Scripting
            </li>
            <li>
              <b>Frameworks and Tools:</b> Next.js, React, Flask, Azure, Pandas,
              NumPy, Matplotlib, MySQL, Git
            </li>
            <li>
              <b>Other skills and certificates:</b> Data structures and
              algorithms, Cybersecurity, Harvard CS50 certificate
            </li>
            {/* <li>
              General-purpose programming languages including C, C++, Java, and
              Python
            </li>
            <li>
              Front and backend Javascript/Typescript development with
              frameworks suchs as React, Next.js and Gatsby
            </li>
            <li>Familiarity with Unix and Linux systems and shell scripting</li>
            <li>
              Databases including SQL databases such as MySQL and NoSQL
              databases such as MongoDB
            </li>
            <li>Understanding of data structures and algorithms</li>
            <li>
              <Link
                href="https://certificates.cs50.io/1076cf75-9267-4bb9-8fc8-d2cbff4b1885.pdf"
                className="font-normal text-blue-800 no-underline hover:underline dark:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harvard University CS50x Certificate
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <div>
          <h2 className="text-3xl font-bold">
            What I&apos;m Currently Working On
          </h2>
          <ol className="list-decimal">
            <li>
              I have been practicing and competing in Competitive Programming
              competitions and Cybersecurity Capture the Flag events.
            </li>
            <li>
              My latest major coding project is this website which is built
              using Gatsby and Tailwind CSS and hosted on Github Pages.
            </li>
            <ul>
              <li>On this website, I plan to blog about my interests such as technology, the humanities, and productivity/lifestyle.</li>
            </ul>
          </ol>
        </div> */}
        <div>
          <h2 className="mb-2 text-3xl font-bold">Computer Science Courses</h2>
          <div className="font-semibold">
            <ul className="list-disc">
              <li>
                <span className="font-bold">
                  COMP 250 - Introduction to Computer Science
                </span>
                <br />
                <span className="font-light">
                  Java, Data Structures, and Algorithms
                </span>
              </li>
              <li>
                <span className="font-bold">
                  <Link
                    href="http://luc.devroye.org/252.html"
                    className="font-bold text-blue-800 no-underline hover:underline dark:text-blue-300"
                  >
                    COMP 252 - Honours Algorithms and Data Structures
                  </Link>
                </span>
                <br />
                <span className="font-light">
                  Design and analysis of data structures and algorithms. Proof
                  of correctness of algorithms and determining their
                  computational complexity.
                </span>
              </li>
              <li>
                <span className="font-bold">
                  COMP 206 - Introduction to Software Systems
                </span>
                <br />
                <span className="font-light">Unix, Bash, and C</span>
              </li>
              <li>
                <span className="font-bold">
                  COMP 273 - Introduction to Computer Systems
                </span>
                <br />
                <span className="font-light">
                  Number Representations, Circuits, and MIPS Assembly
                </span>
              </li>
            </ul>
          </div>
          <h2 className="mb-2 text-3xl font-bold">Mathematics Courses</h2>
          <div className="font-semibold">
            <ul className="list-disc">
              <li>
                <span className="px-1 font-bold">
                  MATH 133 - Linear Algebra and Geometry
                </span>
              </li>
              <li>
                <span className="px-1 font-bold">MATH 140 - Calculus 1</span>
              </li>
              <li>
                <span className="px-1 font-bold">MATH 141 - Calculus 2</span>
              </li>
              <li>
                <span className="px-1 font-bold">
                  MATH 240 - Discrete Structures
                </span>
              </li>
              <li>
                <span className="px-1 font-bold">MATH 222 - Calculus 3</span>
              </li>
              <li>
                <span className="px-1 font-bold">
                  MATH 223 - Linear Algebra
                </span>
              </li>
              <li>
                <span className="px-1 font-bold">MATH 323 - Probability</span>
              </li>
            </ul>
          </div>
          <h2 className="mb-2 text-3xl font-bold">
            Biology and Science Courses
          </h2>
          <div className="font-semibold">
            <ul className="list-disc">
              <li>
                <span className="px-1 font-bold">
                  BIOL 111 - Organismal Biology
                </span>
              </li>
              <li>
                <span className="px-1 font-bold">
                  BIOL 112 - Cell and Molecular Biology
                </span>
              </li>
              <li>
                <span className="px-1 font-bold">
                  CHEM 112 - Introductory Organic Chemistry
                </span>
              </li>
              <li>
                <span className="px-1 font-bold">
                  BIOL 219 - Introduction to Physical Molecular and Cell Biology
                </span>
              </li>
              <li>
                <span className="px-1 font-bold">
                  BIOL 202 - Basic Genetics
                </span>
              </li>
            </ul>
          </div>
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
  );
};

export default About;

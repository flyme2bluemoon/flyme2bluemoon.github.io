import { Metadata } from "next";

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
              Bachelor of Science, Honours Computer Science and Biology | GPA:
              3.64/4.00 <br />
              <span className="font-light">Aug 2022 -- Oct 2026</span>
            </li>
            <li>
              <b>Nanyang Technological University - Singapore</b> <br />
              Exchange Semester <br />
              <span className="font-light">Jan -- May 2026</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Experience</h2>
          <ul className="list-disc space-y-5 leading-normal">
            <li>
              <div className="font-semibold">Data Science and AI Intern</div>
              <div className="font-light">
                Chime Biologics &ndash; Wuhan, Hubei, China
              </div>
              <ul className="my-1 list-disc">
                <li>
                  Designed and developed an on-premise pipeline to convert Good
                  Manufacturing Practices (GMP) batch production records into
                  structured, queryable data for analytics, visualizations, and
                  AI agents.
                </li>
                <li>
                  Architected a workflow combining deterministic parsing and AI
                  to derive typed schemas from controlled Word templates, map
                  OCR-extracted values from scanned records into those schemas,
                  and persist the structured output in a relational data model.
                </li>
                <li>
                  Evaluated and integrated local vision and language models
                  including DeepSeek, MinerU, PaddleOCR-VL, and Qwen to improve
                  extraction accuracy and reliability for GMP batch records.
                </li>
              </ul>
              <div className="font-light">Aug 2026 -- Present</div>
            </li>
            <li>
              <div className="font-semibold">Research Assistant</div>
              <div className="font-light">
                Shared Reality Lab, Faculty of Engineering, McGill University
                &ndash; Montréal, QC, Canada
              </div>
              <ul className="my-1 list-disc">
                <li>
                  Developed a full-stack prototype using Python, TypeScript,
                  Next.js, and Bun that leveraged LLMs to automatically tag
                  natural language messages with Controller-Pilot Datalink
                  Communications (CPDLC) markup.
                </li>
                <li>
                  Designed human factors and HCI experiments and planned user
                  testing with controllers and pilots to evaluate usability,
                  performance, situational awareness, accuracy, and error
                  recovery.
                </li>
              </ul>
              <div className="font-light">May 2025 -- Dec 2025</div>
            </li>
            <li>
              <div className="font-semibold">COMP 273 Course Assistant</div>
              <div className="font-light">
                School of Computer Science, McGill University &ndash; Montréal,
                QC, Canada
              </div>
              <ul className="my-1 list-disc">
                <li>
                  Helped students understand digital circuits, assembly
                  programming, and computer hardware architecture.
                </li>
              </ul>
              <div className="font-light">Feb 2025 -- Apr 2025</div>
            </li>
            <li>
              <div className="font-semibold">Research Assistant</div>
              <div className="font-light">
                Social and Technological Systems Lab, AMPD, York University
                &ndash; Toronto, ON, Canada
              </div>
              <ul className="my-1 list-disc">
                <li>
                  Co-designed and developed CogniPrompt, applying human-AI
                  interaction principles to a conversational user interface
                  designed to assist people with dementia with daily tasks,
                  memory, and social companionship.
                </li>
                <li>
                  Integrated a locally hosted Llama 3.1 large language model
                  with function calling and retrieval-augmented generation.
                </li>
                <li>
                  Developed a full-stack web application using Next.js,
                  WebSockets, and Flask, deployed on Ubuntu Linux with a MySQL
                  database.
                </li>
              </ul>
              <div className="font-light">May 2024 -- Dec 2024</div>
            </li>
            <li>
              <div className="font-semibold">
                COMP 250 and COMP 251 TEAM Mentor
              </div>
              <div className="font-light">
                School of Computer Science, McGill University &ndash; Montréal,
                QC, Canada
              </div>
              <ul className="my-1 list-disc">
                <li>
                  Led weekly tutorials and office hours covering Java,
                  object-oriented programming, data structures, algorithms, and
                  algorithmic complexity for COMP 250 and COMP 251.
                </li>
              </ul>
              <div className="font-light">Sep 2023 -- Dec 2024</div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <ul className="list-disc">
            <li>
              <b>Languages:</b> Python, TypeScript/JavaScript, C/C++, Java, SQL,
              Shell, OCaml
            </li>
            <li>
              <b>Frameworks &amp; Libraries:</b> React, Next.js, Flask, Hono,
              Pandas, NumPy, Matplotlib, Tailwind CSS
            </li>
            <li>
              <b>Databases &amp; Storage:</b> MySQL, SQLite, Cloudflare D1,
              Cloudflare R2
            </li>
            <li>
              <b>Developer Tools:</b> Git, Docker, Linux, Vercel, Cloudflare
              Workers, GitHub Actions, Azure
            </li>
            <li>
              <b>AI/ML:</b> LLM APIs, Retrieval-Augmented Generation, Tool
              Calling, MCP, Local LLM Deployment
            </li>
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

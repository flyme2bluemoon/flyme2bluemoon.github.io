import React from 'react';

const About = () => {
  return (
    <div>
      <span id="about" className="block relative -top-10" />
      <h2 className="h2 text-center">About Me</h2>
      <div className="mx-auto w-3/4 p-6 border-2 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-100/90 dark:bg-slate-900/90 shadow-xl font-medium">
        Hi there!
        <br />
        <br />
        <ul className="list-disc px-4">
          <li>I'm a Grade 12 Ontario High School student pursuing the IB Diploma.</li>
          <li>I enjoy competing in competitive programming competitions such as <a target="_blank" rel="noopener noreferrer" className="link" href="https://g.co/kickstart">Google Kickstart</a>, <a target="_blank" rel="noopener noreferrer" className="link" href="https://fb.com/codingcompetitions/hacker-cup">Facebook Hacker Cup</a>, <a target="_blank" rel="noopener noreferrer" href="https://adventofcode.com" className="link">Advent of Code</a> and <a target="_blank" rel="noopener noreferrer" href="https://cemc.uwaterloo.ca/contests/ccc-cco.html" className="link">Waterloo Canadian Computer Competition</a>.</li>
          <br />
          <li>I am also interested in learning many new technologies.</li>
          <li>For competitive programming, I mainly use C++ for its speed and expressiveness.</li>
          <li>For server-side web development, I have enjoyed working on Flask (Python) for smaller projects and Laravel (PHP) for larger webapps.</li>
          <li>For client-side web development, I have enjoyed learning React with Typescript which includes my personal website that you are presumably currently reading.</li>
          <li>In an effort to practice software development and build a strong portfolio, I have published many of my projects on my <a target="_blank" rel="noopener noreferrer" href="https://github.com/flyme2bluemoon" className="link">Github</a> (totally not to boost my ego or anything).</li>
          <li>Lastly, I have also recently found an interest in Cybersecurity Capture the Flag events such as the <a target="_blank" rel="noopener noreferrer" href="https://g.co/ctf" className="link">Google CTF</a>.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
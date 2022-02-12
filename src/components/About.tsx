import React from 'react';

const About = () => {
  return (
    <div>
      <span id="about" className="block relative -top-10" />
      <h2 className="h2 text-center">About Me</h2>
      <div className="mx-auto w-3/4 p-4 border-2 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-100/90 dark:bg-slate-900/90 shadow-xl">
        Hello, world
      </div>
    </div>
  );
}

export default About;
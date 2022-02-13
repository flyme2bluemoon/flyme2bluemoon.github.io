import React from 'react';
import 'flowbite';
import './App.css';
import Social from './components/Social';
import Blog from './components/Blog';
import About from './components/About';
import CodeGallery from './components/CodeGallery';

const App = () => {
  return (
    <div className="App">
      <div className="mt-48 md:mt-0 md:h-screen flex justify-center align-center flex-col">
        <h1 className="h1 text-center relative -translate-y-24">Hello, I'm Matthew Shen 👋</h1>
      </div>
      <About />
      <Blog />
      <CodeGallery />
      <Social />
    </div>
  );
}

export default App;

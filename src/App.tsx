import React from 'react';
import 'flowbite';
import './App.css';
import Social from './components/Social';
import Blog from './components/Blog';

const App = () => {
  return (
    <div className="App">
      <div className="min-h-screen flex justify-center align-center flex-col">
        <h1 className="h1 text-center relative -translate-y-24">Hello, I'm Matthew Shen 👋</h1>
      </div>
      <Blog />
      <Social />
    </div>
  );
}

export default App;

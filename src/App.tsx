import React from 'react';
import 'flowbite';
import './App.css';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800 m-5" role="alert">
        <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
        <div>
          <span className="font-medium">Warning:</span>
          This page is still under development. <a href="https://github.com/flyme2bluemoon/flyme2bluemoon.github.io/issues" className="underline">Click here to submit any feedback!</a>
        </div>
      </div>
      <h1>Hello, I'm Matthew Shen 👋</h1>
      <Social />
      <Footer />
    </div>
  );
}

export default App;

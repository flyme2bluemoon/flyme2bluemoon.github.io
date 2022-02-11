import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog/:postSlug" element={<Post />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
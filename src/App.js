import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Program from './components/pages/Program';
import Post from './components/pages/Post';
import BlogPost from './components/pages/BlogPost';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/program' element={<Program />} />
        <Route path='/post/:slug' element={<BlogPost />} />
        <Route path='/post' element={<Post />} />
      </Routes>
      </Router> 
    </>
  );
}

export default App;

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
import SelectedProgram from './components/pages/SelectedProgram';

function App() {

  const { t } = useTranslation();

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/program' element={<Program />} />
        <Route path='/post/:slug' element={<SelectedProgram />} />
        <Route path='/post' element={<Post />} />
      </Routes>
      </Router> 
    </>
  );
}

export default App;

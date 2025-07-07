// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './home/Header';
import Footer from './home/Footer';
import About from './components/About';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Trainer from './components/Trainer';
import Contact from './components/Contact';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300">
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
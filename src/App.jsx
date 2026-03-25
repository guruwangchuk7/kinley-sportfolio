import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import Archive from './pages/Archive';
import Contact from './pages/Contact';
import Architecture from './pages/Architecture';
import Design from './pages/Design';
import Journal from './pages/Journal';
import Office from './pages/Office';
import About from './pages/About';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<ProjectDetail />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/design" element={<Design />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/office" element={<Office />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

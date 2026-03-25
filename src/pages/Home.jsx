import React from 'react';
import { motion } from 'framer-motion';
import mainPhoto from '../assets/mainphotodashboard/main.jpg';

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary-bg">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={mainPhoto} 
          alt="Architectural Project" 
          className="h-full w-full object-cover brightness-75 grayscale" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/40 to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <div className="absolute bottom-12 left-8 text-white z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] opacity-100 font-light"
        >
          Selected Works
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-5xl font-light mt-4 tracking-tight"
        >
          The Willow Heights
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-sm mt-2 opacity-100 tracking-widest"
        >
          Thimphu, Bhutan
        </motion.p>
      </div>

      {/* Diagonal Visual Balance (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-12 right-8 text-white z-10 text-right opacity-100"
      >
        <p className="text-[10px] uppercase tracking-[0.5em] font-light">
          Structure & Space
        </p>
      </motion.div>
    </div>
  );
};

export default Home;

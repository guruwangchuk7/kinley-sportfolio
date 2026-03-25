import React from 'react';
import { motion } from 'framer-motion';
import mainPhoto from '../assets/mainphotodashboard/main.png';

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
          className="h-full w-full object-cover object-top brightness-50 grayscale scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Hero Content */}
      <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-8 text-white z-10 pr-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[10px] sm:text-xs text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-100 font-light"
        >
          Selected Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light mt-4 tracking-tight leading-tight"
        >
          The Willow Heights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xs sm:text-sm text-white mt-2 opacity-100 tracking-[0.1em] sm:tracking-widest"
        >
          Thimphu, Bhutan
        </motion.p>
      </div>

      {/* Diagonal Visual Balance (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 sm:bottom-12 right-6 sm:right-8 text-white z-10 text-right opacity-100 hidden xs:block"
      >
        <p className="text-xs sm:text-sm text-white opacity-100 tracking-[0.1em] sm:tracking-widest">
          website by <a href="https://guruwangchuk.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">guru wangchuk</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Home;

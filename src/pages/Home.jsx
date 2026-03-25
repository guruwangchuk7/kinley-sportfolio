import React from 'react';
import { motion } from 'framer-motion';
import mainPhoto from '../assets/mainphotodashboard/plain-black-desktop-2560-x-1440-ugpl0479gu0vuwnl.jpg';

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary-bg selection:bg-white selection:text-black">
      {/* Background & Depth Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={mainPhoto}
          alt="Architectural Project"
          className="h-full w-full object-cover object-top brightness-[0.35] grayscale contrast-[1.1]"
        />
        
        {/* Subtle Grid Overlay - Technical drafting feel */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Global Lighting / Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </motion.div>

      {/* Floating Technical Accents (Visual Balance) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
        {/* GPS Coordinates & Scale - Positioned to fill the right-side negative space */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="absolute top-1/2 right-8 md:right-12 -translate-y-1/2 flex flex-col items-end gap-24"
        >
          {/* Vertical coordinate data */}
          <div className="[writing-mode:vertical-lr] text-[8px] md:text-[9px] tracking-[0.8em] font-light uppercase text-white">
            27.4728 N / 89.6393 E
          </div>
          
          {/* Scale indicator line */}
          <div className="h-32 w-[1px] bg-white/40 relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[7px] tracking-widest text-white/50">LEVEL: 01</span>
          </div>
        </motion.div>

        {/* Framing Corner Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute top-32 right-[20%] w-32 h-[1px] bg-white hidden lg:block"
        />
      </div>

      {/* Hero Content */}
      <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-8 text-white z-20 pr-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-[10px] sm:text-xs text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-100 font-light">
            STUDIO / IDENTITY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mt-4 tracking-tight leading-tight">
            CONCEPTUALIZING SPACE
          </h2>
          <p className="text-xs sm:text-sm text-white mt-2 opacity-100 tracking-[0.1em] sm:tracking-widest capitalize">
            RESEARCH / DESIGN / EXECUTION
          </p>
        </motion.div>
      </div>

      {/* Credits / Footer Contrast */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 sm:bottom-12 right-6 sm:right-8 text-white z-20 text-right opacity-100 hidden xs:block"
      >
        <p className="text-xs sm:text-sm text-white opacity-100 tracking-[0.1em] sm:tracking-widest">
          website by <a href="https://guruwangchuk.me/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">guru wangchuk</a>
        </p>
      </motion.div>
    </div>
  );
};

export default Home;

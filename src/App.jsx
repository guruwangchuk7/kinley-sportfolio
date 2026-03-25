import React, { useState } from 'react';
import { motion } from 'framer-motion';
import mainPhoto from './assets/mainphotodashboard/main.jpg';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-primary-bg">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-0 w-full flex justify-between p-8 z-30 text-white"
      >
        <div className="relative cursor-default">
          <h1 
            className="text-2xl tracking-[0.2em] font-light cursor-pointer hover:opacity-100 transition-opacity"
            onClick={() => setIsOpen(!isOpen)}
          >
            KINLEY WANGDI
          </h1>
          
          <motion.ul 
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              },
              hidden: {}
            }}
            className="absolute top-full left-0 mt-6 flex flex-col gap-4"
          >
            {['Architecture', 'Design', 'Journal', 'Office'].map((item) => (
              <motion.li 
                key={item}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -10 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-base tracking-widest font-light text-white cursor-pointer transition-opacity">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <ul className="flex gap-12 text-sm tracking-widest opacity-100">
          <li className="hover:opacity-100 cursor-pointer transition-opacity">WORKS</li>
          <li className="hover:opacity-100 cursor-pointer transition-opacity">ARCHIVE</li>
          <li className="hover:opacity-100 cursor-pointer transition-opacity">CONTACT</li>
        </ul>
      </motion.nav>

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

      {/* Content */}
      <div className="absolute bottom-12 left-8 text-white z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-xs uppercase tracking-[0.3em] opacity-100 font-light"
        >
          Selected Works
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="text-5xl font-light mt-4 tracking-tight"
        >
          The Willow Heights
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-sm mt-2 opacity-100 tracking-widest"
        >
          Thimphu, Bhutan
        </motion.p>
      </div>

      {/* Diagonal Visual Balance (Bottom Right) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-12 right-8 text-white z-10 text-right opacity-100"
      >
        <p className="text-[10px] uppercase tracking-[0.5em] font-light">
          Structure & Space
        </p>
      </motion.div>
    </main>
  );
}

export default App;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const textColor = isHomePage ? 'text-white' : 'text-black';
  const borderColor = isHomePage ? 'border-white' : 'border-black';

  const menuItems = [
    { label: 'Architecture', path: '/architecture' },
    { label: 'Journal', path: '/journal' },
    { label: 'About Me', path: '/about' }
  ];

  const topNavItems = [
    { name: 'WORKS', path: '/architecture' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <>
      {/* Backdrop for closing side menu when clicking outside */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm md:bg-transparent"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`fixed top-0 w-full flex justify-between items-start p-5 sm:p-6 md:p-8 lg:p-10 z-50 ${textColor}`}
      >
        <div className="relative cursor-default shrink-0">
          <div
            className="group flex flex-col items-start cursor-pointer select-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.15em] sm:tracking-[0.2em] font-light transition-opacity">
              <Link
                to="/"
                className={`${textColor} hover:opacity-100 transition-opacity whitespace-nowrap`}
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                KINLEY WANGDI
              </Link>
            </h1>
            
            {/* Mobile Menu indicator */}
            {!isOpen && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                className="text-[8px] tracking-[0.4em] font-light mt-1 pl-0.5 md:hidden uppercase"
              >
                Menu
              </motion.span>
            )}
          </div>

          <motion.ul
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={{
              visible: {
                display: "flex",
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              },
              hidden: {
                transitionEnd: { display: "none" }
              }
            }}
            className="absolute top-full left-0 mt-6 md:mt-8 flex flex-col gap-5 sm:gap-6 pointer-events-auto"
          >
            {menuItems.map((item) => (
              <motion.li
                key={item.label}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -10 }
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  to={item.path}
                  className={`text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-widest font-light ${textColor} cursor-pointer hover:opacity-60 transition-opacity whitespace-nowrap py-1`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Global Navigation - Hidden on architecture to match editorial focus */}
        {location.pathname !== '/architecture' && (
          <ul className="flex gap-4 sm:gap-6 md:gap-12 text-[10px] md:text-sm tracking-widest pt-1 sm:pt-1.5 md:pt-2 font-light">
            {topNavItems.map((item) => (
              <li key={item.name} className="hover:opacity-60 cursor-pointer transition-opacity whitespace-nowrap">
                <Link
                  to={item.path}
                  className={`${textColor} transition-all hover:opacity-60 py-2 ${location.pathname === item.path ? `border-b ${borderColor} pb-1` : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;

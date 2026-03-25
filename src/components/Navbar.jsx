import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 w-full flex justify-between items-start p-6 md:p-8 z-50 ${textColor}`}
      >
        <div className="relative cursor-default shrink-0">
          <h1
            className="text-lg sm:text-xl md:text-2xl tracking-[0.15em] sm:tracking-[0.2em] font-light cursor-pointer hover:opacity-100 transition-opacity"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link
              to="/"
              className={`${textColor} hover:opacity-100 transition-opacity`}
              onClick={(e) => {
                // If it's already home, just close the menu. 
                // Otherwise navigate and home will be rendered.
                setIsOpen(false);
              }}
            >
              KINLEY WANGDI
            </Link>
          </h1>

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
            className="absolute top-full left-0 mt-6 flex flex-col gap-4 pointer-events-auto"
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
                  className={`text-xs sm:text-sm md:text-base tracking-widest font-light ${textColor} cursor-pointer hover:opacity-60 transition-opacity whitespace-nowrap`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Only show top navigation if NOT on the architecture page to match requested ref image */}
        {location.pathname !== '/architecture' && (
          <ul className="flex gap-4 sm:gap-6 md:gap-12 text-[9px] sm:text-[10px] md:text-sm tracking-widest pt-1 sm:pt-1.5 md:pt-2">
            {topNavItems.map((item) => (
              <li key={item.name} className="hover:opacity-60 cursor-pointer transition-opacity whitespace-nowrap">
                <Link
                  to={item.path}
                  className={`${textColor} transition-all hover:opacity-60 ${location.pathname === item.path ? `border-b ${borderColor} pb-1` : ''}`}
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

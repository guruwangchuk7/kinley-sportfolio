import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-28 sm:pt-32 md:pt-40 px-6 sm:px-8 flex items-center justify-center selection:bg-black selection:text-white">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-2xl text-center"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tighter mb-8 sm:mb-12 text-[#1A1A1A]"
                >
                    Let's Connect
                </motion.h1>
                <div className="flex flex-col gap-6 sm:gap-8 text-lg sm:text-xl font-light tracking-[0.1em] sm:tracking-widest text-[#1A1A1A]/70">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="hover:text-black transition-colors cursor-pointer"
                    >
                        kinley@architects.bt
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="hover:text-black transition-colors cursor-pointer"
                    >
                        +975 1700 0000
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="mt-12 sm:mt-16 flex justify-center gap-8 sm:gap-12 text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[#1A1A1A]/40"
                    >
                        <a href="#" className="hover:text-black transition-opacity p-2">Instagram</a>
                        <a href="#" className="hover:text-black transition-opacity p-2">LinkedIn</a>
                        <a href="#" className="hover:text-black transition-opacity p-2">Twitter</a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;

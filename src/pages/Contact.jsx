import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-40 px-8 flex items-center justify-center">
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
                    className="text-7xl font-light tracking-tighter mb-12 text-[#1A1A1A]"
                >
                    Let's Connect
                </motion.h1>
                <div className="flex flex-col gap-8 text-xl font-light tracking-widest text-[#1A1A1A]/70">
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
                        className="mt-16 flex justify-center gap-12 text-[10px] tracking-[0.5em] uppercase text-[#1A1A1A]/40"
                    >
                        <a href="#" className="hover:text-black transition-opacity">Instagram</a>
                        <a href="#" className="hover:text-black transition-opacity">LinkedIn</a>
                        <a href="#" className="hover:text-black transition-opacity">Twitter</a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;

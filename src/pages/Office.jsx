import React from 'react';
import { motion } from 'framer-motion';

const Office = () => {
    return (
        <div className="min-h-screen w-full bg-primary-bg pt-40 px-8">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                <span className="text-xs uppercase tracking-[0.5em] text-soft-amber mb-4 block">Our Presence</span>
                <h1 className="text-6xl font-light tracking-tight mb-20 text-white">The Design Studio</h1>
                <p className="text-xl font-light tracking-widest text-white/70 leading-relaxed mb-12">
                   Located in the heart of Thimphu, our studio is more than just a place of work. It's a sanctuary for creativity, exploration, and architectural dialogue. 
                </p>
                <div className="flex flex-col gap-12 mt-24">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-white/5 h-96 flex flex-col justify-end p-12 border border-white/10"
                    >
                        <p className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-2">Thimphu Studio</p>
                        <h2 className="text-3xl font-light text-white">Norzin Lam, Level 4</h2>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Office;

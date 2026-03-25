import React from 'react';
import { motion } from 'framer-motion';

const Design = () => {
    return (
        <div className="min-h-screen w-full bg-primary-bg pt-40 px-8">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                <span className="text-xs uppercase tracking-[0.5em] text-soft-amber mb-4 block">Craftsmanship</span>
                <h1 className="text-6xl font-light tracking-tight mb-20 text-white">The Design Language</h1>
                <p className="text-xl font-light tracking-widest text-white/70 leading-relaxed mb-12">
                    Design is a thoughtful exploration of how we interact with objects and spaces. We aim to create a dialogue between the user and their environment through a lens of functionality and aesthetic coherence.
                </p>
                <div className="flex gap-20 text-sm tracking-[0.3em] uppercase text-white/40">
                    <p className="hover:text-white transition-opacity cursor-default">Product Design</p>
                    <p className="hover:text-white transition-opacity cursor-default">Interior Architecture</p>
                    <p className="hover:text-white transition-opacity cursor-default">Graphic Identity</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Design;

import React from 'react';
import { motion } from 'framer-motion';

const Archive = () => {
    return (
        <div className="min-h-screen w-full bg-primary-bg pt-40 px-8">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                <span className="text-xs uppercase tracking-[0.5em] text-soft-amber mb-4 block">Historical Record</span>
                <h1 className="text-6xl font-light tracking-tight mb-20 text-white">The Project Archive</h1>

                <div className="mt-24">
                    {[
                        { year: '2025', title: 'Mountain Sanctuary', status: 'In Construction' },
                        { year: '2024', title: 'The Sky Loft', status: 'Completed' },
                        { year: '2023', title: 'Riverbend House', status: 'Completed' },
                        { year: '2022', title: 'Terrace House', status: 'Completed' }
                    ].map((project, index) => (
                        <motion.div 
                            key={project.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="flex justify-between py-6 border-b border-white/5 hover:border-soft-amber transition-colors cursor-default"
                        >
                            <span className="text-sm text-white/40 tracking-[0.2em]">{project.year}</span>
                            <h2 className="text-xl font-light text-white uppercase tracking-tighter">{project.title}</h2>
                            <span className="text-[10px] tracking-[0.4em] uppercase text-white/50">{project.status}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Archive;

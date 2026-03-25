import React from 'react';
import { motion } from 'framer-motion';

const Journal = () => {
    return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-28 sm:pt-32 md:pt-40 px-6 sm:px-8 pb-32 md:pb-40 selection:bg-black selection:text-white">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#1A1A1A]/40 mb-3 sm:mb-4 block font-light">Reflections</span>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight mb-12 sm:mb-20 text-[#1A1A1A]">The Archival Journal</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                    {[
                        { date: '2026.03.15', title: 'The Silence of Materiality', category: 'Theory' },
                        { date: '2026.03.02', title: 'Light as a Structural Element', category: 'Design-Build' },
                        { date: '2026.02.14', title: 'Bhutanese Traditional Contexts', category: 'Preservation' }
                    ].map((entry, index) => (
                        <motion.div 
                            key={entry.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="p-8 sm:p-10 md:p-12 border border-[#1A1A1A]/10 hover:border-black transition-colors cursor-pointer group"
                        >
                            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#1A1A1A]/30 mb-4">{entry.date} — {entry.category}</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight group-hover:text-black transition-colors text-[#1A1A1A]">{entry.title}</h2>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Journal;

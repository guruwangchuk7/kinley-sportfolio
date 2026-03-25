import React from 'react';
import { motion } from 'framer-motion';

const Journal = () => {
    return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-40 px-8 pb-40">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#1A1A1A]/40 mb-4 block">Reflections</span>
                <h1 className="text-6xl font-light tracking-tight mb-20 text-[#1A1A1A]">The Archival Journal</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                            className="p-12 border border-[#1A1A1A]/10 hover:border-black transition-colors cursor-pointer group"
                        >
                            <p className="text-[10px] uppercase tracking-[0.5em] text-[#1A1A1A]/30 mb-4">{entry.date} — {entry.category}</p>
                            <h2 className="text-4xl font-light leading-tight group-hover:text-black transition-colors text-[#1A1A1A]">{entry.title}</h2>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Journal;

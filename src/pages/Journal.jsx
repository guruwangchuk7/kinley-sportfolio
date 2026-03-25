import React from 'react';
import { motion } from 'framer-motion';

const Journal = () => {
    return (
        <div className="min-h-screen w-full bg-primary-bg pt-40 px-8">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl"
            >
                <span className="text-xs uppercase tracking-[0.5em] text-soft-amber mb-4 block">Reflections</span>
                <h1 className="text-6xl font-light tracking-tight mb-20 text-white">The Archival Journal</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
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
                            className="p-12 border border-white/10 hover:border-soft-amber transition-colors cursor-pointer group"
                        >
                            <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-4">{entry.date} — {entry.category}</p>
                            <h2 className="text-4xl font-light leading-tight group-hover:text-soft-amber transition-colors text-white">{entry.title}</h2>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Journal;

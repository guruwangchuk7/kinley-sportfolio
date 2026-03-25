import React from 'react';
import { motion } from 'framer-motion';

const Journal = () => {
    const journalEntries = [
        { 
            date: '2026.03.15', 
            title: 'The Silence of Materiality', 
            category: 'Theory',
            excerpt: 'Exploring the quiet power of raw concrete and natural light in Himalayan contexts.' 
        },
        { 
            date: '2026.03.02', 
            title: 'Light as a Structural Element', 
            category: 'Design-Build',
            excerpt: 'Using daylight not just for illumination, but as a material that defines volume.' 
        },
        { 
            date: '2026.02.14', 
            title: 'Bhutanese Traditional Contexts', 
            category: 'Preservation',
            excerpt: 'A study on weaving ancient fabrication techniques with contemporary spatial logic.' 
        },
        { 
            date: '2026.01.20', 
            title: 'Sublime Minimalism', 
            category: 'Philosophy',
            excerpt: 'Pursuing architecture that evokes awe, reflection, and emotional connection.' 
        }
    ];

    return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-32 sm:pt-40 md:pt-48 pb-32 md:pb-40 px-6 sm:px-12 md:px-24 selection:bg-black selection:text-white">
            <div className="max-w-[1600px] mx-auto">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-16 md:mb-24 border-b border-[#1A1A1A]/10 pb-12"
                >
                    <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A]/40 mb-4 block font-medium">Archival</span>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tighter text-[#1A1A1A] leading-[0.95] mb-8">
                        The Journal
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg font-light tracking-widest text-[#1A1A1A]/60 max-w-sm lowercase">
                        reflections on space, light, and the himalayan landscape.
                    </p>
                </motion.div>

                {/* Journal List / Index */}
                <div className="space-y-0">
                    {journalEntries.map((entry, index) => (
                        <motion.div 
                            key={entry.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="group relative grid grid-cols-1 md:grid-cols-12 py-10 md:py-16 border-b border-[#1A1A1A]/10 last:border-0 items-baseline"
                        >
                            {/* Date Section */}
                            <div className="md:col-span-2 mb-4 md:mb-0">
                                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/30 font-medium whitespace-nowrap">
                                    {entry.date}
                                </span>
                            </div>

                            {/* Content Section */}
                            <div className="md:col-span-10 lg:col-span-7 pr-12">
                                <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 border border-[#1A1A1A]/20 text-[#1A1A1A]/50 mb-6 inline-block">
                                    {entry.category}
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.1] text-[#1A1A1A] group-hover:italic transition-all duration-500 cursor-pointer">
                                    {entry.title}
                                </h2>
                                <p className="mt-6 text-sm sm:text-base text-[#1A1A1A]/40 font-light max-w-xl leading-relaxed tracking-wide group-hover:text-[#1A1A1A]/70 transition-colors">
                                    {entry.excerpt}
                                </p>
                            </div>

                            {/* Decorative Interaction */}
                            <div className="hidden lg:flex md:col-span-3 items-center justify-end">
                                <div className="w-12 h-[1px] bg-[#1A1A1A]/20 transition-all group-hover:bg-black group-hover:w-20" />
                                <span className="text-[9px] tracking-[0.5em] uppercase text-[#1A1A1A]/20 ml-4 group-hover:text-black transition-colors">Read</span>
                            </div>

                            {/* Subtle Background Interaction on Hover */}
                            <div className="absolute inset-x-[-24px] inset-y-0 bg-[#000]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10 rounded-sm" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Journal;

import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myphoto/kinley (b&w).png';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-28 sm:pt-32 md:pt-48 pb-32 md:pb-40 px-6 md:px-12 selection:bg-black selection:text-white">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 md:gap-24 items-start">
                    
                    {/* Text Content */}
                    <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="lg:col-span-7 order-2 lg:order-1"
                    >
                        <motion.div variants={fadeIn} className="mb-10 md:mb-12">
                            <span className="text-[9px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#1A1A1A]/40 mb-4 sm:mb-6 block font-medium">The Architect</span>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tighter text-[#1A1A1A] leading-[0.95] sm:leading-[0.9] mb-6 md:mb-8">
                                Kinley <br /> Wangdi
                            </h1>
                            <div className="w-16 md:w-20 h-[1px] bg-[#1A1A1A]/20"></div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="space-y-6 md:space-y-8 max-w-2xl text-base sm:text-lg md:text-xl font-light tracking-wide text-[#1A1A1A]/70 leading-relaxed italic">
                            <p>
                                "Architecture should be silent, allowing the context and light to speak."
                            </p>
                        </motion.div>

                        <motion.div variants={fadeIn} className="mt-8 md:mt-12 space-y-4 md:space-y-6 max-w-2xl text-sm sm:text-base md:text-lg font-light tracking-[0.05em] sm:tracking-widest text-[#1A1A1A]/60 leading-relaxed">
                            <p>
                                Based in Bhutan, my practice is a continuous inquiry into the relationship between culture, climate, and the built environment. I specialize in weaving traditional Bhutanese fabrication techniques with contemporary spatial logic.
                            </p>
                            <p>
                                With a focus on sustainable Himalayan modernism, I create structures that feel both timeless and necessary—responding carefully to the site and its surrounding historical context.
                            </p>
                        </motion.div>

                        {/* Expertise / Focus Grid */}
                        <motion.div variants={fadeIn} className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 border-t border-[#1A1A1A]/10 pt-12 md:pt-16">
                            <div>
                                <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1A1A1A]/30 mb-4 sm:mb-6 font-semibold">Specialization</h3>
                                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm tracking-widest text-[#1A1A1A]/60 font-light">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/10"></span>
                                        BIM Modelling & Documentation
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/10"></span>
                                        Passive Climate Strategies
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/10"></span>
                                        Himalayan Vernacular Design
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/10"></span>
                                        Material Mass & mass timber
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1A1A1A]/30 mb-4 sm:mb-6 font-semibold">Philosophy</h3>
                                <p className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed text-[#1A1A1A]/60 font-light">
                                    Sublime Minimalism: Pursuing architecture that evokes awe, reflection, and a deep emotional connection to memory.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Section - Static as requested */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="relative">
                            <div className="aspect-[3/4] overflow-hidden bg-[#EFEFEF]">
                                <img 
                                    src={myPhoto} 
                                    alt="Kinley Wangdi" 
                                    className="w-full h-full object-cover grayscale brightness-95 contrast-[1.05]"
                                />
                            </div>
                            {/* Decorative Frame Element */}
                            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-32 h-24 sm:h-32 border-l border-b border-[#1A1A1A]/10 pointer-events-none"></div>
                        </div>
                        
                        <div className="mt-6 md:mt-8 flex justify-between items-center text-[8px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-[#1A1A1A]/30">
                            <span>Licensed Architect</span>
                            <span>Thimphu, BT</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;

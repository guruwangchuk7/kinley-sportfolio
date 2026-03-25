import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-40 text-center text-[#1A1A1A] flex flex-col items-center gap-8 px-8">
            <h1 className="text-4xl font-light tracking-tighter opacity-50">Project not found.</h1>
            <Link to="/architecture" className="text-[10px] uppercase tracking-[0.5em] text-[#1A1A1A]/40 border-b border-[#1A1A1A]/30 pb-2">Back to Architecture</Link>
        </div>
    );

    return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-28 sm:pt-32 md:pt-40 px-6 sm:px-8 pb-32 md:pb-40 selection:bg-black selection:text-white">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto"
            >
                <Link to="/architecture" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#1A1A1A]/40 hover:text-black transition-colors mb-12 sm:mb-16 md:mb-20 inline-block font-light">
                    ← Back to Architecture
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col"
                    >
                        <div className="mb-8 md:mb-12">
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#1A1A1A]/40 mb-3 sm:mb-4 block">{project.category}</span>
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-tighter mb-4 text-[#1A1A1A] leading-[1.1]">{project.name}</h1>
                            <p className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-[#1A1A1A]/40">{project.location} — {project.year}</p>
                        </div>

                        <div className="space-y-10 md:space-y-12">
                            <div>
                                <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1A1A1A]/30 mb-3 sm:mb-4 font-medium">Project Narrative</h4>
                                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[#1A1A1A]/70 tracking-wide font-sans">
                                    {project.narrative}
                                </p>
                            </div>

                            <div className="pt-8 md:pt-12 border-t border-[#1A1A1A]/5">
                                <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1A1A1A]/30 mb-3 sm:mb-4 font-medium">Role & Contribution</h4>
                                <p className="text-xs sm:text-sm tracking-widest text-[#1A1A1A]/60 font-light italic">
                                    {project.role}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="aspect-[4/5] bg-black/5 overflow-hidden group shadow-xl md:shadow-2xl"
                    >
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-full object-cover transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0"
                        />
                    </motion.div>
                </div>

                {/* Additional Images / Plans if available */}
                {(project.fullImage || project.masterPlanImage) && (
                    <div className="mt-24 sm:mt-32 md:mt-40 space-y-12 sm:space-y-16 md:space-y-20">
                        {project.fullImage && (
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full aspect-video md:aspect-[21/9] bg-black/5 overflow-hidden"
                            >
                                <img src={project.fullImage} alt={`${project.name} Full View`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            </motion.div>
                        )}
                        {project.masterPlanImage && (
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full aspect-video md:aspect-[21/9] bg-black/5 overflow-hidden"
                            >
                                <img src={project.masterPlanImage} alt={`${project.name} Master Plan`} className="w-full h-full object-cover grayscale opacity-80" />
                            </motion.div>
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ProjectDetail;

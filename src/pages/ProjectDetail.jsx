import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    if (!project) return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-40 px-8 text-center text-[#1A1A1A] flex flex-col items-center gap-8">
            <h1 className="text-3xl font-light tracking-tighter opacity-50">Project not found.</h1>
            <Link to="/architecture" className="text-[10px] uppercase tracking-[0.5em] text-[#1A1A1A]/40 border-b border-[#1A1A1A]/30 pb-2">Back to Architecture Index</Link>
        </div>
    );

    return (
        <div className="min-h-screen w-full bg-[#FAF9F6] pt-32 sm:pt-40 md:pt-48 pb-32 md:pb-40 px-5 sm:px-12 md:px-24 selection:bg-black selection:text-white">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-[1400px] mx-auto"
            >
                <Link to="/architecture" className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A]/30 hover:text-black transition-colors mb-16 md:mb-24 inline-block font-light">
                    ← index
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-6 flex flex-col"
                    >
                        <div className="mb-10 md:mb-16">
                            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A]/30 mb-4 block">{project.category}</span>
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-tighter mb-4 text-[#1A1A1A] leading-[1]">{project.name}</h1>
                            <p className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A]/40">{project.location} — {project.year}</p>
                        </div>

                        <div className="space-y-12 md:space-y-16">
                            <div>
                                <h4 className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A]/20 mb-6 font-medium">Narrative</h4>
                                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[#1A1A1A]/70 tracking-wide font-sans italic">
                                    {project.narrative}
                                </p>
                            </div>

                            <div className="pt-8 md:pt-16 border-t border-[#1A1A1A]/10">
                                <h4 className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A]/20 mb-6 font-medium">Archival Role</h4>
                                <p className="text-xs sm:text-sm tracking-[0.15em] text-[#1A1A1A]/50 font-light leading-relaxed max-w-sm">
                                    {project.role}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="lg:col-span-6 aspect-[4/5] bg-[#EFEFEF] overflow-hidden group shadow-sm"
                    >
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-full object-cover grayscale transition-all duration-[2000ms] ease-out group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </motion.div>
                </div>

                {/* Additional Images / Plans if available */}
                {(project.fullImage || project.masterPlanImage) && (
                    <div className="mt-24 sm:mt-40 space-y-16 md:space-y-24">
                        {project.fullImage && (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full aspect-[16/10] md:aspect-[21/9] bg-[#EFEFEF] overflow-hidden"
                            >
                                <img src={project.fullImage} alt={`${project.name} Perspective`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            </motion.div>
                        )}
                        {project.masterPlanImage && (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full aspect-[16/10] bg-[#EFEFEF] overflow-hidden"
                            >
                                <img src={project.masterPlanImage} alt={`${project.name} Technical Draught`} className="w-full h-full object-cover grayscale opacity-90 brightness-110" />
                            </motion.div>
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    );
};
export default ProjectDetail;

import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

const Architecture = () => {
  // Group projects by category
  const categories = [...new Set(projectsData.map(p => p.category))];

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] pt-12 md:pt-8 pb-32 md:pb-40 px-6 md:px-8 font-sans selection:bg-black selection:text-white relative">
      {/* Search Header - Positioned relative to brand */}
      <div className="absolute top-28 sm:top-24 md:top-28 left-6 md:left-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-[10px] sm:text-xs md:text-sm text-[#1A1A1A]/30 font-light cursor-text hover:text-black transition-colors uppercase tracking-[0.1em]">Search</p>
        </motion.div>
      </div>

      {/* Projects List with Category Grouping */}
      <div className="flex flex-col gap-16 md:gap-24 mt-20 sm:mt-0">
        {categories.map((category) => (
          <div key={category} className="flex flex-col gap-10 md:gap-16">
            {/* Category Title */}
            <div className="flex justify-end">
              <span className="text-[9px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1A1A1A]/20 border-b border-[#1A1A1A]/10 pb-1">{category}</span>
            </div>

            {projectsData.filter(p => p.category === category).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row md:justify-end items-start md:items-start gap-6 md:gap-16 w-full group"
              >
                {/* Project Info - Vertically aligned with image top */}
                <div className="text-left md:text-right order-2 md:order-1 md:mt-0 max-w-sm">
                  <h2 className="text-lg md:text-2xl font-normal text-[#1A1A1A] tracking-tight leading-relaxed mb-1 md:-mt-2">{project.name}</h2>
                  <div className="text-[9px] md:text-xs font-light text-[#1A1A1A]/40 uppercase tracking-[0.2em] leading-relaxed">
                    <p>{project.location}</p>
                    <p>{project.year}</p>
                  </div>
                </div>

                {/* Project Image - Top edge aligns with brand height */}
                <div className="w-full md:w-[320px] lg:w-[480px] aspect-[1.4/1] bg-[#EFEFEF] overflow-hidden order-1 md:order-2">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale brightness-95 contrast-105 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Architecture;

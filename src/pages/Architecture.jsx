import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const Architecture = () => {
  // Group projects by category
  const categories = [...new Set(projectsData.map(p => p.category))];

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] pt-32 sm:pt-40 pb-32 md:pb-40 px-5 sm:px-10 lg:px-20 font-sans selection:bg-black selection:text-white">
      {/* Search Header */}
      <div className="mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-3 group cursor-text"
        >
          <div className="w-8 h-[1px] bg-black/10 group-hover:w-12 transition-all"></div>
          <p className="text-[10px] sm:text-xs text-[#1A1A1A]/40 font-light uppercase tracking-[0.3em] group-hover:text-black transition-colors">Search Index</p>
        </motion.div>
      </div>

      {/* Projects List with Category Grouping */}
      <div className="flex flex-col gap-20 sm:gap-32">
        {categories.map((category) => (
          <div key={category} className="flex flex-col gap-12 sm:gap-20">
            {/* Category Title */}
            <div className="flex justify-start sm:justify-end">
              <span className="text-[9px] sm:text-xs uppercase tracking-[0.4em] text-[#1A1A1A]/20 border-b border-[#1A1A1A]/10 pb-2">{category}</span>
            </div>

            <div className="flex flex-col gap-16 sm:gap-24">
              {projectsData.filter(p => p.category === category).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col md:flex-row md:justify-end items-start gap-8 sm:gap-16 w-full group"
                >
                  {/* Project Info */}
                  <div className="text-left md:text-right order-2 md:order-1 max-w-sm">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#1A1A1A] tracking-tight leading-tight mb-2">
                      <Link to={`/works/${project.id}`}>{project.name}</Link>
                    </h2>
                    <div className="text-[9px] sm:text-xs font-light text-[#1A1A1A]/40 uppercase tracking-[0.2em] space-y-1">
                      <p>{project.location}</p>
                      <p>{project.year}</p>
                    </div>
                  </div>

                  {/* Project Image */}
                  <Link
                    to={`/works/${project.id}`}
                    className="w-full md:w-[320px] lg:w-[480px] aspect-[1.5/1] sm:aspect-[1.4/1] bg-[#EFEFEF] overflow-hidden order-1 md:order-2 shadow-sm"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover grayscale brightness-95 contrast-105 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Architecture;

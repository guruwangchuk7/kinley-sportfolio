import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/projects/1.jpg';
import project2 from '../assets/projects/2.jpg';
import project3 from '../assets/projects/3.jpg';
import project4 from '../assets/projects/4.jpg';
import project5 from '../assets/projects/5.jpg';

const Architecture = () => {
  const projects = [
    { name: 'Philippines House', location: 'Philippines', years: '2016 – 2024', image: project1 },
    { name: 'Young Space', location: 'London', years: '2020 – 2022', image: project2 },
    { name: 'Copenhagen House', location: 'Denmark', years: '2019 – 2023', image: project3 },
    { name: 'The Willow Heights', location: 'Thimphu, Bhutan', years: '2022 – 2026', image: project4 },
    { name: 'Sankara Retreat', location: 'Paro, Bhutan', years: '2023 – 2025', image: project5 },
  ];

  return (
    <div className="min-h-screen w-full bg-[#FAF9F6] pt-6 md:pt-8 pb-40 px-6 md:px-8 font-sans selection:bg-black selection:text-white relative">
      {/* Search Header - Positioned relative to brand */}
      <div className="absolute top-24 md:top-28 left-6 md:left-8">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xs md:text-sm text-[#1A1A1A]/30 font-light cursor-text hover:text-black transition-colors uppercase tracking-[0.1em]">Search</p>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-12 md:gap-16 mt-0">
        {projects.map((project, index) => (
          <motion.div 
            key={project.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className={`flex flex-col md:flex-row md:justify-end items-start md:items-start gap-6 md:gap-16 w-full group ${index === 0 ? 'mt-0' : ''}`}
          >
            {/* Project Info - Vertically aligned with image top */}
            <div className="text-left md:text-right order-2 md:order-1 md:mt-0">
              <h2 className="text-lg md:text-2xl font-normal text-[#1A1A1A] tracking-tight leading-loose mb-1 -mt-2">{project.name}</h2>
              <div className="text-[10px] md:text-xs font-light text-[#1A1A1A]/40 uppercase tracking-[0.2em] leading-relaxed">
                <p>{project.location}</p>
                <p>{project.years}</p>
              </div>
            </div>

            {/* Project Image - Top edge aligns with brand height */}
            <div className="w-full md:w-[320px] lg:w-[480px] aspect-[1.35/1] bg-[#EFEFEF] overflow-hidden order-1 md:order-2">
                <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Architecture;

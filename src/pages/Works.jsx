import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import project1 from '../assets/projects/1.jpg';
import project2 from '../assets/projects/2.jpg';
import project3 from '../assets/projects/3.jpg';
import project4 from '../assets/projects/4.jpg';
import project5 from '../assets/projects/5.jpg';
import project6 from '../assets/projects/6.jpg';

const Works = () => {
  const slugify = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

  const projects = [
    { name: 'The Willow Heights', category: 'Residential', location: 'Thimphu, Bhutan', image: project1 },
    { name: 'Sankara Retreat', category: 'Hospitality', location: 'Paro, Bhutan', image: project2 },
    { name: 'The Grid Office', category: 'Commercial', location: 'Punakha, Bhutan', image: project3 },
    { name: 'Mountain Sanctuary', category: 'Residential', location: 'Bumthang, Bhutan', image: project4 },
    { name: 'Urban Pavilion', category: 'Cultural', location: 'Thimphu, Bhutan', image: project5 },
    { name: 'Valley House', category: 'Residential', location: 'Wangdue, Bhutan', image: project6 },
  ];

  return (
    <div className="min-h-screen w-full bg-primary-bg pt-40 pb-20 px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <span className="text-xs uppercase tracking-[0.5em] text-soft-amber mb-4 block">Portfolio</span>
        <h1 className="text-8xl font-light tracking-tighter mb-32 text-white">Selected Works</h1>

        <div className="flex flex-col gap-40">
          {projects.map((project, index) => (
            <Link 
              key={project.name}
              to={`/works/${slugify(project.name)}`}
              className="group cursor-pointer block"
            >
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className={`overflow-hidden ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                      <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full aspect-[4/5] object-cover"
                      />
                  </div>
                  <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-end md:text-right' : ''}`}>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-soft-amber mb-6">{project.category}</p>
                    <h2 className="text-5xl font-light text-white mb-6 tracking-tight leading-none">{project.name}</h2>
                    <p className="text-sm tracking-widest text-white/50 mb-10 max-w-sm">
                      A refined exploration of space and light, integrating traditional Bhutanese motifs with contemporary minimalist forms.
                    </p>
                    <div className="text-[10px] uppercase tracking-[0.5em] text-white/40 border-b border-white/20 pb-2 inline-block">
                      Explore Project
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Works;

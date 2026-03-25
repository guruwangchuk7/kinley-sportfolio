import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import project1 from '../assets/projects/1.jpg';
import project2 from '../assets/projects/2.jpg';
import project3 from '../assets/projects/3.jpg';
import project4 from '../assets/projects/4.jpg';
import project5 from '../assets/projects/5.jpg';
import project6 from '../assets/projects/6.jpg';

const projectsData = {
    'the-willow-heights': { name: 'The Willow Heights', category: 'Residential', location: 'Thimphu, Bhutan', image: project1, description: 'A refined exploration of space and light, integrating traditional Bhutanese motifs with contemporary minimalist forms. This residence is designed to harmonize with the steep topography of the Thimphu valley, using local stone and cedar wood.' },
    'sankara-retreat': { name: 'Sankara Retreat', category: 'Hospitality', location: 'Paro, Bhutan', image: project2, description: 'A luxury wellness sanctuary that draws inspiration from the monastic architecture of Bhutan. The design prioritizes tranquility and panoramic views of the Paro valley.' },
    'the-grid-office': { name: 'The Grid Office', category: 'Commercial', location: 'Punakha, Bhutan', image: project3, description: 'A modern workspace that reinterprets the traditional grid system found in Bhutanese urban planning. Natural light and ventilation are centralized to create a sustainable work environment.' },
    'mountain-sanctuary': { name: 'Mountain Sanctuary', category: 'Residential', location: 'Bumthang, Bhutan', image: project4, description: 'A cluster of seasonal dwellings designed to withstand extreme mountain climates while maintaining a light ecological footprint.' },
    'urban-pavilion': { name: 'Urban Pavilion', category: 'Cultural', location: 'Thimphu, Bhutan', image: project5, description: 'A public space designed for community assembly and cultural exchange, featuring a large cantilevered roof structure.' },
    'valley-house': { name: 'Valley House', category: 'Residential', location: 'Wangdue, Bhutan', image: project6, description: 'An experimental living space that blurs the boundaries between indoor and outdoor environments.' }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData[id];

    if (!project) return <div className="pt-40 text-center text-white">Project not found.</div>;

    return (
        <div className="min-h-screen w-full bg-primary-bg pt-40 px-8 pb-40">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto"
            >
                <Link to="/works" className="text-[10px] uppercase tracking-[0.5em] text-white/40 hover:text-soft-amber transition-colors mb-20 inline-block">
                    ← Back to Works
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-soft-amber mb-4">{project.category}</p>
                        <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 text-white">{project.name}</h1>
                        <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-12">{project.location}</p>
                        <p className="text-xl font-light leading-relaxed text-white/70 tracking-widest">
                            {project.description}
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="aspect-[4/5] bg-white/5"
                    >
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </motion.div>
                </div>

                <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-20">
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-soft-amber mb-4">Phase</h4>
                        <p className="text-sm font-light text-white/50">Completion 2026</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-soft-amber mb-4">Materiality</h4>
                        <p className="text-sm font-light text-white/50">Stone, Wood, Glass</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.4em] text-soft-amber mb-4">Area</h4>
                        <p className="text-sm font-light text-white/50">4,500 sqft</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetail;

import myPhoto from '../assets/myphoto/kinley (b&w).png';

const About = () => {
    return (
        <div className="min-h-screen w-full bg-primary-bg pt-40 px-8 pb-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-xs uppercase tracking-[0.5em] text-soft-amber mb-4 block">The Architect</span>
                    <h1 className="text-7xl font-light tracking-tighter mb-12 text-white">Kinley Wangdi</h1>
                    <div className="space-y-6 text-lg font-light tracking-widest text-white/70 leading-relaxed">
                        <p>
                            Based in Bhutan, my practice is a continuous inquiry into the relationship between culture, climate, and the built environment. I believe architecture should be silent, allowing the context and light to speak.
                        </p>
                        <p>
                            With a focus on sustainable Himalayan modernism, I combine traditional fabrication techniques with contemporary spatial logic to create structures that feel both timeless and necessary.
                        </p>
                    </div>
                    
                    <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
                        <div>
                            <h3 className="text-[10px] uppercase tracking-[0.4em] text-soft-amber mb-4">Philosophy</h3>
                            <p className="text-sm font-light text-white/60">Sublime Minimalism</p>
                        </div>
                        <div>
                            <h3 className="text-[10px] uppercase tracking-[0.4em] text-soft-amber mb-4">Focus</h3>
                            <p className="text-sm font-light text-white/60">Himalayan Context</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative aspect-[3/4] bg-white/5 border border-white/10 overflow-hidden"
                >
                    <img 
                        src={myPhoto} 
                        alt="Kinley Wangdi" 
                        className="w-full h-full object-cover grayscale brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
};

export default About;

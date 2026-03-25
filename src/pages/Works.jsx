import { projectsData } from '../data/projectsData';

const Works = () => {
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
          {projectsData.map((project, index) => (
            <Link 
              key={project.id}
              to={`/works/${project.id}`}
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
                    <div className="flex flex-col gap-2 mb-6">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-soft-amber">{project.category}</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">{project.year}</p>
                    </div>
                    <h2 className="text-5xl font-light text-white mb-6 tracking-tight leading-none">{project.name}</h2>
                    <p className="text-xs md:text-sm tracking-widest text-white/50 mb-10 max-w-md line-clamp-3">
                      {project.narrative}
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

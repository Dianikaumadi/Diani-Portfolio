import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Layers, Box } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Selected Works</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-primary">
              Featured <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-400">Case Studies.</span>
            </h2>
          </div>
          <p className="text-secondary text-lg max-w-sm md:text-right">
            Solving real-world problems through clean code and user-centric design.
          </p>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                
                {/* Visual Side (Mockup) */}
                <div className={`lg:col-span-7 relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                   <div className="relative rounded-[2rem] overflow-hidden bg-surface border border-border group-hover:border-accent/50 transition-all duration-500 shadow-2xl shadow-black/20">
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                      
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                      />
                      
                      {/* Floating Badge */}
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="px-4 py-2 bg-background/90 backdrop-blur-md border border-border text-primary text-sm font-bold rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>
                   </div>

                   {/* Action Buttons */}
                   <div className="flex items-center gap-6 mt-8">
                      {!['golden-grain-mill', 'rideease', 'carepro', 'thinkboard-mern'].includes(project.id) && (
                        <a href={project.link || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/10">
                           <span>Live Demo</span>
                           <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a href={project.github || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                         <Github className="w-5 h-5" />
                         <span>View Code</span>
                      </a>
                   </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-5 flex flex-col justify-center h-full ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                   <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-accent font-display font-bold text-5xl opacity-50">0{index + 1}</span>
                        <div className="h-[2px] flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.isGroupProject && (
                          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
                            University Group Project
                          </span>
                        )}
                      </div>
                      <p className="text-secondary text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                   </div>

                   {/* Case Study Grid */}
                   <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="p-4 rounded-2xl bg-surface/50 border border-border">
                        <h4 className="text-primary font-bold mb-2 flex items-center gap-2"><Layers size={16} className="text-accent"/> The Problem</h4>
                        <p className="text-secondary text-xs leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-surface/50 border border-border">
                        <h4 className="text-primary font-bold mb-2 flex items-center gap-2"><Box size={16} className="text-accent"/> The Solution</h4>
                        <p className="text-secondary text-xs leading-relaxed">{project.outcome}</p>
                      </div>
                   </div>

                   {/* Tech Tags */}
                   <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-md bg-surfaceHighlight text-xs font-semibold text-secondary border border-border">
                          {t}
                        </span>
                      ))}
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
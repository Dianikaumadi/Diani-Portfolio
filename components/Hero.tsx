import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Download, Globe, Code2, Terminal } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  // Function to scroll to projects
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-12 pb-12 px-6">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]"
        >
          {/* Main Headline - Large Square */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2 relative group overflow-hidden rounded-[2.5rem] bg-surface/40 border border-border/50 p-8 lg:p-12 flex flex-col justify-between glass-panel bento-card"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-all duration-1000" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold uppercase tracking-wider">
                  <Terminal size={14} />
                  {PERSONAL_DETAILS.role}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-primary">
                Crafting <span className="text-accent">calm</span>, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-400">intelligent</span> systems.
              </h1>
              <p className="text-secondary text-lg max-w-xl leading-relaxed">
                {PERSONAL_DETAILS.tagline} {PERSONAL_DETAILS.subHeadline}.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-8 relative z-10">
              <button 
                onClick={scrollToProjects} 
                className="px-8 py-4 bg-primary text-background rounded-full font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href={PERSONAL_DETAILS.cvLink} 
                download="Diani-Wittahachchi-CV"
                className="px-8 py-4 bg-surface border border-border text-primary rounded-full font-bold flex items-center gap-2 hover:bg-surfaceHighlight transition-colors"
              >
                Download CV <Download className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Portrait / Avatar */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-3 lg:col-span-4 row-span-1 relative rounded-[2.5rem] overflow-hidden border border-border group shadow-2xl max-h-[400px]"
          >
            <img 
              src="/images/profile.png" 
              alt="Diani Wittahachchi" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white p-4">
              <p className="font-display text-3xl font-bold">Diani Wittahachchi</p>
              <div className="flex items-center gap-2 mt-1">
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                 <p className="text-white/80 text-sm font-medium">Beliatta, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Ticker */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-3 lg:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-surface/40 border border-border p-6 flex flex-col justify-center glass-panel bento-card"
          >
            <div className="flex items-center gap-3 mb-4 text-secondary">
               <div className="p-2 bg-accent/10 rounded-lg text-accent">
                 <Code2 className="w-5 h-5" />
               </div>
               <span className="text-xs font-bold uppercase tracking-wider">Tech Stack</span>
            </div>
            <div className="flex gap-6 overflow-hidden relative mask-linear py-2">
              <motion.div 
                className="flex gap-6 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {['Java', 'Spring Boot', 'React', 'TypeScript', 'Kotlin', 'MySQL', 'Firebase', 'Tailwind'].map((tech) => (
                      <span key={tech} className="text-lg font-display font-bold text-primary/80 hover:text-accent transition-colors">
                        {tech}
                      </span>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Availability */}
          <motion.div 
            variants={itemVariants}
            className="col-span-1 md:col-span-3 lg:col-span-2 relative rounded-[2.5rem] bg-gradient-to-br from-accent/5 to-teal-500/5 border border-border p-6 flex flex-col justify-between bento-card"
          >
             <div className="flex justify-between items-start">
               <div className="p-2 bg-surface rounded-xl shadow-sm text-accent">
                 <Globe className="w-5 h-5" />
               </div>
               <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                 <span className="text-xs font-bold text-green-600 dark:text-green-400">Online</span>
               </div>
             </div>
             <div>
               <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">Status</p>
               <p className="text-xl font-display font-bold text-primary">Open to Work</p>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
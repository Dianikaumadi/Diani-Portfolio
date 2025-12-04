import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';

const SocialWidget: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed bottom-12 right-8 z-[90] hidden md:flex flex-col items-center gap-4"
    >
       <div className="flex flex-col gap-3 p-2.5 rounded-2xl bg-surface/20 backdrop-blur-lg border border-white/10 shadow-2xl">
          
          <a 
            href={CONTACT_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group relative p-3 bg-surface border border-border rounded-xl text-secondary hover:text-primary hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-accent/20"
            aria-label="GitHub Profile"
          >
             <Github size={22} />
             {/* Tooltip */}
             <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
                <span className="px-3 py-1.5 bg-surface border border-border text-xs font-bold rounded-lg shadow-xl whitespace-nowrap text-primary">GitHub</span>
             </div>
          </a>

          <a 
            href={CONTACT_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group relative p-3 bg-surface border border-border rounded-xl text-secondary hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#0A66C2]/20"
            aria-label="LinkedIn Profile"
          >
             <Linkedin size={22} />
             {/* Tooltip */}
             <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
                <span className="px-3 py-1.5 bg-surface border border-border text-xs font-bold rounded-lg shadow-xl whitespace-nowrap text-primary">LinkedIn</span>
             </div>
          </a>

       </div>
       
       {/* Decorative vertical line connecting to bottom */}
       <div className="h-12 w-[1px] bg-gradient-to-b from-border to-transparent" />
    </motion.div>
  );
};

export default SocialWidget;
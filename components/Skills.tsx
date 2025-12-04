import React, { useRef, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">Technical <span className="text-accent">Arsenal.</span></h2>
            <p className="text-secondary max-w-xl text-lg">My weapon of choice is adaptability. However, these are the tools I've mastered.</p>
          </div>
        </div>

        {/* Spotlight Grid Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 group/grid"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-surface/50 border border-transparent overflow-hidden group glass-panel"
            >
              {/* Spotlight Effect Layer */}
              <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 200, 176, 0.15), transparent 40%)`
                }}
              />
              
              {/* Border Reveal Layer */}
              <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/grid:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 200, 176, 0.4), transparent 40%)`,
                  maskImage: 'linear-gradient(#fff, #fff)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '1px' // This simulates the border
                }}
              />

              {/* Visible Border (Base) */}
              <div className="absolute inset-0 border border-border rounded-[2rem] z-[1]" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform group-hover:bg-accent group-hover:text-white shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-6 font-display">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map(skill => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between mb-2 text-sm font-bold">
                        <span className="text-secondary group-hover:text-primary transition-colors">{skill.name}</span>
                        <span className="text-secondary/50 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-surfaceHighlight rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                          className="h-full bg-primary group-hover:bg-accent transition-colors"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { REPUTATION } from '../constants';
import { ReputationItem } from '../types';

interface ReputationCardProps {
  item: ReputationItem;
  index: number;
  isHero: boolean;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}

// --- 3D Holographic Card Component ---
const ReputationCard: React.FC<ReputationCardProps> = ({ item, index, isHero, hoveredIndex, setHoveredIndex }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Motion Values for Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Spring Animation
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate normalized position (-0.5 to 0.5)
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredIndex(null);
  };

  const handleMouseEnter = () => {
    setHoveredIndex(index);
  };

  // Dynamic Spotlight Gradient
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0, 200, 176, 0.15), transparent 80%)`;
  const borderHighlight = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(0, 200, 176, 0.5), transparent 80%)`;

  // Dimming logic
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`
         relative group rounded-[2rem] transition-all duration-500 perspective-1000
         ${isHero ? 'md:row-span-2 md:col-span-1 lg:col-span-1' : 'col-span-1'}
         ${isDimmed ? 'opacity-40 blur-[1px] scale-95' : 'opacity-100 blur-0 scale-100'}
      `}
    >
      <div className={`
         relative h-full w-full rounded-[2rem] bg-surface/40 backdrop-blur-xl border border-white/5 overflow-hidden
         shadow-lg transition-shadow duration-500
         ${!isDimmed ? 'shadow-accent/5' : ''}
      `}>
        
        {/* 1. Grid Pattern Reveal */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0" 
             style={{ 
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
             }} 
        />
        
        {/* 2. Mouse Spotlight Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{ background: spotlight }}
        />

        {/* 3. Border Glow */}
        <motion.div 
           className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{
             background: borderHighlight,
             maskImage: 'linear-gradient(#fff, #fff)',
             WebkitMaskComposite: 'xor',
             maskComposite: 'exclude',
             padding: '1.5px', // Border width
             borderRadius: '2rem'
           }}
        />
        
        {/* 4. Hero Pulse Animation */}
        {isHero && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[60px] rounded-full animate-pulse z-0" />
        )}

        {/* Content Layer (Lifted in 3D) */}
        <div className={`relative z-30 h-full flex flex-col ${isHero ? 'p-10 justify-between' : 'p-8 justify-between'} transform-style-3d`}>
          
          <div className="flex justify-between items-start mb-6">
            {/* Badge */}
            <span className={`
               inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-sm
               ${isHero 
                  ? 'bg-accent text-background border-accent shadow-[0_0_10px_rgba(0,200,176,0.4)]' 
                  : 'bg-surfaceHighlight/50 text-secondary border-white/10 group-hover:text-accent group-hover:border-accent/30 transition-colors'}
            `}>
               {item.badge}
            </span>

            {/* Parallax Floating Icon */}
            <motion.div 
              style={{ translateZ: 40 }}
              className={`
                 w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300
                 ${isHero
                    ? 'bg-background text-accent border-accent/20 shadow-xl'
                    : 'bg-surface/50 text-secondary border-white/5 group-hover:text-accent group-hover:bg-surface group-hover:border-accent/20'}
              `}
            >
               {item.icon}
            </motion.div>
          </div>

          <div style={{ transform: "translateZ(20px)" }}>
             <h3 className={`font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors ${isHero ? 'text-3xl' : 'text-xl'}`}>
               {item.title}
             </h3>
             <p className={`text-secondary font-medium leading-relaxed ${isHero ? 'text-lg' : 'text-sm'}`}>
               {item.description}
             </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

// --- Main Section Component ---
const Reputation: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-accent/5 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-20">
          <div className="max-w-2xl">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-3 mb-4"
             >
               <div className="h-[2px] w-12 bg-accent" />
               <span className="text-accent font-bold uppercase tracking-widest text-sm">Signature Traits</span>
             </motion.div>
             
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight"
             >
               What I'm <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-400">Known For.</span>
             </motion.h2>
             
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-secondary text-lg leading-relaxed"
             >
               Beyond the code, this is the reputation I've built. The recurring themes from people who have studied, collaborated, or worked with me.
             </motion.p>
          </div>
        </div>
        
        {/* Asymmetrical 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)] perspective-2000">
          {REPUTATION.map((item, idx) => (
            <ReputationCard 
              key={item.id} 
              item={item} 
              index={idx} 
              isHero={idx === 0} 
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reputation;
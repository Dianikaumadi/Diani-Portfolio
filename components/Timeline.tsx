import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { TIMELINE } from '../constants';
import { Experience } from '../types';
import { Briefcase, GraduationCap, Trophy, Rocket, Code2, Calendar } from 'lucide-react';

// --- 3D Tilt Card Component ---
interface TiltCardProps {
  children?: React.ReactNode;
  className?: string;
}

const TiltCard = ({ children, className }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(yPct * -10); // Rotate X based on Y position
    y.set(xPct * 10);  // Rotate Y based on X position
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Timeline Item Component ---
const TimelineItem = ({ item, index, isLast }: { item: Experience, index: number, isLast: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the massive year
  const yearY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;
  const isFuture = item.type === 'future';

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-center min-h-[450px] ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Massive Parallax Background Year - Increased Visibility */}
      <motion.div 
        style={{ y: yearY, opacity }}
        className={`absolute top-0 pointer-events-none z-0 select-none hidden md:block
          ${isEven ? 'left-0 text-left -translate-x-12' : 'right-0 text-right translate-x-12'}
        `}
      >
        <span 
          className="text-[14rem] leading-none font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-surfaceHighlight to-transparent opacity-10"
          style={{ WebkitTextStroke: '1px rgba(0, 200, 176, 0.1)' }}
        >
          {item.year}
        </span>
      </motion.div>

      {/* Spacer for Desktop Grid */}
      <div className="flex-1 w-full hidden md:block" />

      {/* Central Node (Emoji & Year) */}
      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20 flex flex-col items-center group">
         
         {/* The Marker Circle */}
         <motion.div 
           initial={{ scale: 0, rotate: -45 }}
           whileInView={{ scale: 1, rotate: 0 }}
           transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
           className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 relative bg-surface z-10
             ${isFuture 
                ? 'border-dashed border-accent shadow-[0_0_20px_rgba(0,200,176,0.2)] animate-pulse' 
                : 'border-accent shadow-[0_0_30px_rgba(0,200,176,0.2)] group-hover:scale-110'
             }
           `}
         >
            {/* Emoji */}
            <span className="text-3xl filter drop-shadow-md">{item.emoji}</span>
            
            {/* Inner Glow */}
            <div className={`absolute inset-0 rounded-2xl opacity-10 ${isFuture ? 'bg-accent' : 'bg-accent'}`} />
         </motion.div>

         {/* The Year Badge */}
         <div className="mt-4 px-4 py-1.5 rounded-full bg-surface border border-accent/40 text-accent font-bold font-display text-sm shadow-xl z-10 hidden md:block group-hover:scale-110 transition-transform">
            {item.year}
         </div>
      </div>

      {/* Content Card Side - Fixed Spacing Logic */}
      <div className="flex-1 w-full pl-24 md:pl-20 md:pr-20 relative z-10 py-12">
         <TiltCard className="group">
            <div className={`relative p-10 rounded-[2rem] border transition-all duration-500 backdrop-blur-xl
               ${isFuture 
                 ? 'bg-transparent border-dashed border-accent/30 hover:border-accent/60' 
                 : 'bg-surface/60 border-border hover:border-accent/50 hover:bg-surface/80 shadow-2xl'
               }
            `}>
               {/* Holographic Sheen Effect */}
               <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none transition-opacity duration-500" />

               {/* Connector Line (Desktop) */}
               <div className={`absolute top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-r from-accent/50 to-transparent hidden md:block
                  ${isEven ? '-right-20 rotate-180' : '-left-20'}
               `} />

               <div className="flex flex-col gap-6 relative transform group-hover:translate-z-10">
                  
                  {/* Header Row: Chapter & Mobile Year */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                     {/* Chapter Pill - Enhanced Visibility */}
                     <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border shadow-lg backdrop-blur-md
                        ${isFuture 
                           ? 'bg-accent/10 text-accent border-accent/30 shadow-[0_0_10px_rgba(0,200,176,0.15)]' 
                           : 'bg-surface/70 text-accent border-accent/20 shadow-[0_0_15px_rgba(0,200,176,0.1)]'
                        }
                     `}>
                       {item.chapter}
                     </span>
                     
                     {/* Mobile Year Badge */}
                     <span className="md:hidden text-accent font-display font-bold text-2xl opacity-90">{item.year}</span>
                  </div>

                  <div>
                     <h3 className="text-3xl font-display font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                       {item.title}
                     </h3>
                  </div>
                  
                  <p className="text-secondary leading-relaxed text-base font-medium">
                    {item.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                     {item.tags.map((tag: string) => (
                       <span key={tag} className="px-3 py-1.5 rounded-lg bg-background/50 border border-border text-xs font-bold text-secondary group-hover:border-accent/30 group-hover:text-primary transition-colors">
                         {tag}
                       </span>
                     ))}
                  </div>
               </div>
            </div>
         </TiltCard>
      </div>

    </div>
  );
};


const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-32 relative bg-background overflow-hidden" ref={containerRef}>
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[40vw] h-[40vw] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-32">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface/80 border border-border backdrop-blur-md text-accent text-sm font-bold uppercase tracking-widest mb-6 shadow-xl"
           >
             <Calendar size={14} />
             <span>The Evolution</span>
           </motion.div>
           <h2 className="text-5xl md:text-7xl font-display font-bold text-primary mb-6">
             Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-400">Timeline.</span>
           </h2>
           <p className="text-secondary text-lg max-w-2xl mx-auto">
             A visual history of pivotal moments, technical breakthroughs, and continuous growth.
           </p>
        </div>

        {/* Timeline Container */}
        <div className="relative group/timeline">
           
           {/* The Central Spine (Desktop) */}
           <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-surfaceHighlight/30 hidden md:block" />
           
           {/* The Laser Beam (Scroll Animated) */}
           <motion.div 
             style={{ height: beamHeight }}
             className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-accent to-accent shadow-[0_0_20px_#00C8B0] hidden md:block origin-top z-10"
           />

           {/* Mobile Spine */}
           <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-surfaceHighlight/50 md:hidden" />

           <div className="space-y-0">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="transition-opacity duration-500 group-hover/timeline:opacity-40 hover:!opacity-100"
                >
                  <TimelineItem 
                    item={item} 
                    index={index} 
                    isLast={index === TIMELINE.length - 1} 
                  />
                </motion.div>
              ))}
           </div>

           {/* Bottom "Next" Indicator */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-12 flex flex-col items-center gap-2 opacity-50">
              <div className="w-[1px] h-12 bg-gradient-to-b from-border to-transparent" />
              <span className="text-xs uppercase tracking-widest text-secondary">To Be Continued</span>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
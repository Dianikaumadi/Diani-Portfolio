import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Typography Art */}
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="relative"
        >
           <h2 className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight">
             Beyond <br/> 
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-500">Binary.</span>
           </h2>
           <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-accent to-transparent" />
           <p className="mt-8 text-xl text-primary font-medium italic font-serif">
             "I believe great software is where logic meets intuition."
           </p>
        </motion.div>

        {/* Right: Narrative */}
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="space-y-6"
        >
           <p className="text-secondary text-lg leading-relaxed">
             My journey started not just with code, but with a curiosity for how things work. From dissecting hardware to architecting cloud systems, I’ve always been driven by the desire to <span className="text-primary font-semibold">build things that last</span>.
           </p>
           <p className="text-secondary text-lg leading-relaxed">
             As a Software Engineering undergraduate, I don't just complete assignments; I treat every project as a product. Whether it's optimizing a Java backend for speed or refining a React component for accessibility, I push for excellence.
           </p>
           <div className="pt-6">
              <a href="#contact" className="inline-flex items-center gap-2 text-accent font-bold hover:underline underline-offset-4 decoration-2">
                Let's talk about my process <ArrowRight className="w-4 h-4" />
              </a>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
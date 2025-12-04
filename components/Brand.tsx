import React from 'react';
import { motion } from 'framer-motion';
import { VALUES } from '../constants';

const Brand: React.FC = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Large Monogram Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[30rem] font-display font-bold text-primary">DW</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-bold text-primary mb-4"
          >
            The Philosophy
          </motion.h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {VALUES.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-surface/50 border border-border glass-panel hover:bg-surface transition-colors duration-500"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-secondary leading-relaxed">{value.desc}</p>
              <div className="absolute -bottom-1 -right-1 w-12 h-12 border-r-2 border-b-2 border-accent/30 rounded-br-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
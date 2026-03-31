import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-12 border-y border-border bg-surface/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {stat.value}<span className="text-accent text-xl md:text-2xl">{stat.suffix}</span>
              </div>
              <p className="text-secondary text-xs md:text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
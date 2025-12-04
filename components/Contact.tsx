import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface/30 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-surface rounded-[3rem] p-8 md:p-16 border border-border shadow-2xl text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-accent to-transparent" />
           
           <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8">
            Ready to create <br/> something <span className="text-accent">extraordinary?</span>
           </h2>
           <p className="text-secondary text-xl mb-12 max-w-2xl mx-auto">
             I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
           </p>

           <a 
             href={`mailto:${CONTACT_INFO.email}`} 
             className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20"
           >
             <Mail className="w-5 h-5" />
             Say Hello
           </a>

           <div className="mt-16 pt-8 border-t border-border/50 grid md:grid-cols-3 gap-8">
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-surfaceHighlight rounded-full text-accent mb-2"><Mail size={20}/></div>
                <span className="text-primary font-bold">Email</span>
                <span className="text-secondary text-sm">{CONTACT_INFO.email}</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-surfaceHighlight rounded-full text-accent mb-2"><Phone size={20}/></div>
                <span className="text-primary font-bold">Phone</span>
                <span className="text-secondary text-sm">{CONTACT_INFO.phone}</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="p-3 bg-surfaceHighlight rounded-full text-accent mb-2"><MapPin size={20}/></div>
                <span className="text-primary font-bold">Location</span>
                <span className="text-secondary text-sm">{CONTACT_INFO.location}</span>
             </div>
           </div>
        </div>

        {/* REPLACED Text Links with Luxury Sentence */}
        <div className="mt-20 text-center relative">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent mx-auto mb-8"></div>
          <p className="font-display text-xl md:text-2xl text-primary/80 italic font-medium tracking-wide">
            "Engineering digital excellence, <br className="md:hidden"/> one interaction at a time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
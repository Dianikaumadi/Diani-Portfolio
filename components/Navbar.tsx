import React, { useState, useEffect } from 'react';
import { Home, User, Code2, Briefcase, Mail, Sun, Moon, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [time, setTime] = useState<string>('');

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Home', href: '#home' },
    { id: 'about', icon: <User size={20} />, label: 'About', href: '#about' },
    { id: 'skills', icon: <Code2 size={20} />, label: 'Skills', href: '#skills' },
    { id: 'projects', icon: <Briefcase size={20} />, label: 'Work', href: '#projects' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }

    // Live Time Logic (Sri Lanka Time)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Colombo', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    
    updateTime();
    const timerInterval = setInterval(updateTime, 60000); // Update every minute

    // Scroll Spy Logic
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', 
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      clearInterval(timerInterval);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Desktop Left Sidebar Dock */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4">
         <div className="bg-surface/80 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl p-3 flex flex-col gap-3 items-center">
            {/* Logo/Monogram */}
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, 'home')}
              className="w-10 h-10 flex items-center justify-center bg-primary text-background rounded-xl font-display font-bold text-lg mb-2 hover:scale-105 transition-transform shadow-lg shadow-accent/20 cursor-pointer"
            >
              DW
            </a>

            <div className="w-full h-[1px] bg-border/50 mb-1" />

            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="relative group p-3 rounded-xl hover:bg-surfaceHighlight transition-colors cursor-pointer"
              >
                 <span className={`transition-colors duration-300 relative z-10 flex items-center justify-center ${activeSection === item.id ? 'text-accent' : 'text-secondary group-hover:text-primary'}`}>
                   {item.icon}
                 </span>
                 
                 {/* Tooltip */}
                 <span className="absolute left-full ml-4 px-3 py-1 bg-surface border border-border text-primary text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl z-50">
                    {item.label}
                 </span>

                 {/* Active Indicator */}
                 {activeSection === item.id && (
                   <motion.div 
                     layoutId="activeNav"
                     className="absolute inset-0 border-2 border-accent/30 rounded-xl bg-accent/5"
                   />
                 )}
              </a>
            ))}

            <div className="w-full h-[1px] bg-border/50 mt-1" />

            {/* Live Time Widget (Unique Feature) */}
            <div className="group relative flex flex-col items-center justify-center p-2 cursor-default">
               <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-secondary group-hover:text-accent group-hover:border-accent transition-colors">
                  <Clock size={16} />
               </div>
               <span className="absolute left-full ml-4 px-3 py-2 bg-surface border border-border text-primary text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl z-50 flex flex-col items-start gap-1">
                  <span className="text-[10px] text-secondary uppercase tracking-widest">Sri Lanka</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                    {time}
                  </span>
               </span>
            </div>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-3 rounded-xl hover:bg-surfaceHighlight text-secondary hover:text-accent transition-colors"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
         </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-6 left-6 right-6 z-[100] md:hidden flex justify-center">
        <div className="bg-surface/90 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl px-6 py-4 flex items-center justify-between gap-6 w-full max-w-sm">
           {navItems.slice(0, 5).map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`relative flex flex-col items-center gap-1 transition-colors cursor-pointer ${activeSection === item.id ? 'text-accent' : 'text-secondary'}`}
              >
                 {item.icon}
                 {activeSection === item.id && (
                   <span className="absolute -bottom-2 w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_#00C8B0]" />
                 )}
              </a>
           ))}
           <button onClick={toggleTheme} className="text-secondary hover:text-primary">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
           </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
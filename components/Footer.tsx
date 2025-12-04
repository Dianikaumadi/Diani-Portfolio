import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border bg-background text-center relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="text-secondary text-sm font-medium">
          © {new Date().getFullYear()} Diani Wittahachchi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Code2 } from 'lucide-react';
import heroBg from '../../assets/images/hero-bg.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all grayscale-[0.3]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 text-secondary text-sm font-medium mb-8">
            <Smartphone size={16} />
            Mobile App Architect
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight px-4 flex flex-col items-center">
            <span>Building Seamless</span>
            <span className="gradient-text">Mobile Experiences.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            I'm <span className="text-white font-medium">Mohammed Ismail Basha</span>, a dedicated Flutter & Android Developer specializing in building high-performance, real-world production applications at scale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Decorative) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden lg:block bottom-1/4 left-10 p-4 glass rounded-2xl border-white/5"
      >
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <Code2 size={24} className="text-secondary" />
          <span>Flutter Specialist</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute hidden lg:block top-1/3 right-10 p-4 glass rounded-2xl border-white/5"
      >
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <Smartphone size={24} className="text-accent" />
          <span>Android Expert</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

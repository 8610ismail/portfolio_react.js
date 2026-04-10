import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    { 
      icon: <Award className="text-secondary" />, 
      title: "1+ Year Professional Experience", 
      desc: "Delivering real-world production mobile applications with focus on quality."
    },
    { 
      icon: <Rocket className="text-accent" />, 
      title: "National Invest Specialist", 
      desc: "Architected end-to-end development for a government-scale mobile application."
    },
    { 
      icon: <Briefcase className="text-secondary" />, 
      title: "Full-Cycle Developer", 
      desc: "Expert in debugging, API integration, and handling complex production releases."
    }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8">
              Crafting Apps That <br />
              <span className="text-secondary text-4xl md:text-5xl">Impact Lives.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl font-light">
              I am a results-driven professional with a year of hands-on experience in the mobile ecosystem. My journey has been defined by solving complex technical challenges and delivering robust applications that function flawlessly in production environments.
            </p>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl font-light">
              From crafting pixel-perfect UIs to optimizing backend communication and managing government-scale releases, I thrive in environments that demand excellence and attention to detail.
            </p>
            
            <div className="grid grid-cols-2 gap-4 items-start mb-12 lg:mb-0">
              <div className="p-4 md:p-6 glass rounded-2xl border-white/5 card-gradient">
                <div className="text-2xl md:text-3xl font-black text-white mb-1 underline decoration-secondary decoration-4 underline-offset-8">10+</div>
                <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-widest">Projects</div>
              </div>
              <div className="p-4 md:p-6 glass rounded-2xl border-white/5 card-gradient">
                <div className="text-2xl md:text-3xl font-black text-white mb-1 underline decoration-accent decoration-4 underline-offset-8">99%</div>
                <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-widest">Stability</div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 md:p-8 rounded-3xl glass border-white/5 hover:border-secondary/20 transition-all group flex items-start gap-4 md:gap-6"
              >
                <div className="p-3 md:p-4 rounded-2xl bg-slate-800 group-hover:bg-secondary/10 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-secondary transition-colors italic">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Curriculum / Education */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-6 p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Rocket size={100} className="text-secondary" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-6 uppercase italic tracking-tighter">Academic & Career Pulse</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="w-1 bg-secondary rounded-full" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">B.E. in Information Technology</h4>
                    <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wide uppercase">Anna University Graduate</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full" />
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base">Advanced Web Development Course</h4>
                    <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wide uppercase">Intensive Front-end & Mobile Certification</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

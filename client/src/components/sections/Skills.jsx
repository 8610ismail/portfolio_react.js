import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Terminal, Layout, Globe, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Mobile Architect",
      icon: <Smartphone className="text-secondary" size={24} />,
      skills: ["Flutter", "Dart", "Android Kotlin", "Native Bridge", "Riverpod", "Clean Architecture", "Push Notifications"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="text-secondary" size={24} />,
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap", "Sass", "Responsive Design"]
    },
    {
      title: "Backend & Systems",
      icon: <Server className="text-secondary" size={24} />,
      skills: [ "Firebase", "RESTful APIs", "SQL / MySQL", "WebSockets", "JSON Architecture"]
    },
    {
      title: "Professional Suite",
      icon: <Terminal className="text-secondary" size={24} />,
      skills: ["Git / GitHub", "Android Studio", "VS Code", "Postman", "CI/CD Pipeline", "DevOps Basics"]
    }
  ];

  return (
    <section id="skills" className="py-16 relative overflow-hidden bg-slate-900/40">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] -z-10 rounded-full" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 italic uppercase tracking-tighter"
            >
              Technical <span className="text-secondary">Arsenal.</span>
            </motion.h2>
            <p className="text-slate-500 max-w-xl uppercase tracking-[0.3em] text-[10px] font-black">Modern Stack for Performance-Driven Solutions.</p>
          </div>
          
          <div className="flex gap-4">
             <div className="p-4 rounded-full bg-slate-800/50 border border-white/5 animate-pulse">
                <Cpu size={32} className="text-secondary/50" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="p-8 glass rounded-[2.5rem] border-white/5 hover:border-secondary/20 transition-all card-gradient group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                {group.icon}
              </div>
              
              <div className="mb-8 p-4 rounded-2xl bg-slate-800/50 w-fit group-hover:bg-secondary/10 transition-colors">
                {group.icon}
              </div>
              
              <h3 className="text-lg font-black mb-6 italic uppercase tracking-tighter text-white/90">{group.title}</h3>
              
              <div className="flex flex-wrap gap-x-2 gap-y-3">
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-950/50 text-slate-500 border border-white/5 hover:border-secondary transition-all cursor-default hover:text-secondary group-hover:bg-slate-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

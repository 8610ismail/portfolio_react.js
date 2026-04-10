import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Smartphone, Layout } from 'lucide-react';

// Mobile Images
import nationalInvestImg from '../../assets/images/national invest.png';
import roboConnectImg from '../../assets/images/robo connect.png';
import roboMateImg from '../../assets/images/robomate.png';
import onojoImg from '../../assets/images/onojo-japanese.png';

// Web Images
import mobileHubImg from '../../assets/images/mobile-hub.png';
import bootstrapGalleryImg from '../../assets/images/bootstrap-gallery.png';
import registrationFormImg from '../../assets/images/registration-form.png';
import weatherAppImg from '../../assets/images/weather-app.png';
import skiGearImg from '../../assets/images/ski-gear.png';
import todoListImg from '../../assets/images/todo-list.png';

// New Web Images
import musicPlayerImg from '../../assets/images/music-player.png';
import colorPickerImg from '../../assets/images/color-picker.png';
import qrScannerImg from '../../assets/images/qr-scanner.png';
import gridTemplatesImg from '../../assets/images/grid-templates.png';
import appleCloneImg from '../../assets/images/apple-clone.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    // Mobile Projects
    {
      name: "National Invest",
      category: "mobile",
      stack: ["Flutter", "Dart", "Firebase"],
      desc: "Government-scale investment application with secure transactions and real-time data.",
      image: nationalInvestImg,
      role: "Lead Developer",
      link: "#"
    },
    {
      name: "Onojo",
      category: "mobile",
      stack: ["Flutter", "Clean Architecture"],
      desc: "Service provider platform for Japanese market with custom Japanese aesthetics.",
      image: onojoImg,
      role: "Lead Developer",
      link: "#"
    },
    {
      name: "Robo Mate+",
      category: "mobile",
      stack: ["Android", "Kotlin", "MVVM"],
      desc: "Educational companion app for students with interactive modules and LMS integration.",
      image: roboMateImg,
      role: "Android Developer",
      link: "#"
    },
    {
      name: "Robo Connect",
      category: "mobile",
      stack: ["Flutter", "WebSockets"],
      desc: "Real-time communication bridge for educational institutions and parents.",
      image: roboConnectImg,
      role: "Mobile Architect",
      link: "#"
    },
    // Web Projects
    {
      name: "Apple TV Clone",
      category: "web",
      stack: ["React", "Tailwind", "Framer"],
      desc: "High-fidelity clone of the Apple TV interface with smooth transitions and premium UI.",
      image: appleCloneImg,
      role: "Lead Developer",
      link: "https://ismailapple.netlify.app/"
    },
    {
      name: "Hemasree Music",
      category: "web",
      stack: ["HTML", "CSS", "JS"],
      desc: "Elegant music player with playlist management and custom audio controls.",
      image: musicPlayerImg,
      role: "Developer",
      link: "https://hemasreemusic.netlify.app/"
    },
    {
      name: "Mobile Hub",
      category: "web",
      stack: ["HTML", "CSS", "JS"],
      desc: "High-performance landing page for mobile accessories and services.",
      image: mobileHubImg,
      role: "Frontend Developer",
      link: "https://mobile-hub-ismail.netlify.app/"
    },
    {
      name: "Weather Insight",
      category: "web",
      stack: ["React", "API", "Tailwind"],
      desc: "Dynamic weather forecasting dashboard with animated weather states.",
      image: weatherAppImg,
      role: "Fullstack Developer",
      link: "https://ismailweather.netlify.app/"
    },
    {
      name: "Art Grid Templates",
      category: "web",
      stack: ["CSS Grid", "Flexbox"],
      desc: "Comprehensive collection of modern layouts using advanced CSS Grid techniques.",
      image: gridTemplatesImg,
      role: "UI Designer",
      link: "https://ismailgrid.netlify.app/"
    },
    {
      name: "Color Picker",
      category: "web",
      stack: ["JavaScript", "DOM"],
      desc: "Interactive tool for generating and managing color schemes with format export.",
      image: colorPickerImg,
      role: "Developer",
      link: "https://ismailcolorpicker.netlify.app/"
    },
    {
      name: "QR Insight",
      category: "web",
      stack: ["JS", "ZXing", "Canvas"],
      desc: "Fast and reliable QR code generator and scanner with clean interface.",
      image: qrScannerImg,
      role: "Developer",
      link: "https://ismailqrcode.netlify.app/"
    },
    {
      name: "Sky Gear",
      category: "web",
      stack: ["HTML", "Sass", "JS"],
      desc: "Premium e-commerce layout for specialized winter sports equipment.",
      image: skiGearImg,
      role: "UI Engineer",
      link: "https://ismail2.netlify.app/"
    },
    {
      name: "Bootstrap Gallery",
      category: "web",
      stack: ["Bootstrap 5", "AOS"],
      desc: "Modern responsive media gallery with creative hover effects and masonry layout.",
      image: bootstrapGalleryImg,
      role: "UI Developer",
      link: "https://ismailbootstrap.netlify.app/"
    },
    {
      name: "Secure Registry",
      category: "web",
      stack: ["JavaScript", "Validation"],
      desc: "Complex multi-step registration form with client-side validation and security logic.",
      image: registrationFormImg,
      role: "Frontend Developer",
      link: "https://ismailregform.netlify.app/"
    },
    {
      name: "Task Master",
      category: "web",
      stack: ["JavaScript", "LocalStorage"],
      desc: "Efficient task management tool with categories, persistence and priority handling.",
      image: todoListImg,
      role: "Developer",
      link: "https://ismail-to-do-list.netlify.app/"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filterOptions = [
    { id: 'all', label: 'All Projects', icon: <Layers size={14} /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={14} /> },
    { id: 'web', label: 'Web Projects', icon: <Layout size={14} /> },
  ];

  return (
    <section id="projects" className="py-16 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase italic underline decoration-secondary decoration-8/20 underline-offset-10">Project Showcase.</h2>
            <p className="text-slate-400 max-w-xl font-light mx-auto md:mx-0">Explore a complete gallery of my work, from government-scale Flutter apps to high-end React clones.</p>
          </div>
          
          <div className="flex flex-wrap bg-slate-800/50 p-1 rounded-2xl border border-white/5 self-start justify-center md:justify-start gap-1">
            {filterOptions.map(opt => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  filter === opt.id 
                    ? 'bg-secondary text-slate-950 shadow-lg shadow-secondary/20' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {opt.icon} {opt.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-3xl overflow-hidden border-white/5 group hover:border-secondary/30 transition-all card-gradient flex flex-col h-full shadow-2xl"
              >
                <div className="relative h-52 overflow-hidden bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-[10px] font-black uppercase text-secondary tracking-widest bg-secondary/10 px-3 py-1 rounded-full backdrop-blur-md border border-secondary/20">
                      {project.role}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">{tech}</span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-black mb-3 text-white italic group-hover:text-secondary transition-colors uppercase leading-none">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light line-clamp-2">
                    {project.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-black text-white hover:text-secondary transition-all flex items-center gap-2 group/link uppercase tracking-tighter"
                    >
                      Explore Project <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                    <div className="w-1 h-1 rounded-full bg-slate-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">Showing {filteredProjects.length} Selected Works</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

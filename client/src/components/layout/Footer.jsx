import { motion } from 'framer-motion';
import { Download, ChevronUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumeFile from '../../assets/pdf/MohammedIsmailBasha_Resume.pdf';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative bg-slate-950/80 backdrop-blur-3xl overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 relative z-10">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black mb-4 tracking-tighter italic">MI<span className="text-secondary">.</span>BASHA</div>
            <p className="text-slate-500 max-w-sm text-sm font-medium tracking-wide uppercase">Flutter & Android Architect focused on production-ready mobile excellence.</p>
          </div>

          <div className="flex flex-col gap-6 items-center md:items-end">
             <motion.a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-3 w-fit cursor-pointer"
              >
                View Resume <Download size={18} />
              </motion.a>
              <div className="flex gap-4">
                <a href="https://github.com/8610ismail" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all"><FaGithub size={20} className="text-slate-400" /></a>
                <a href="https://www.linkedin.com/in/ismail-basha-245b78283/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all"><FaLinkedin size={20} className="text-slate-400" /></a>
                <a href="mailto:bashaismail633@gmail.com" className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all"><Mail size={20} className="text-slate-400" /></a>
              </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">&copy; 2024-2025 Mohammed Ismail Basha</div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-slate-500 hover:text-secondary transition-all text-xs font-bold uppercase tracking-widest"
          >
            Back to Top
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-secondary/20 group-hover:translate-y-[-4px] transition-all">
              <ChevronUp size={16} />
            </div>
          </button>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full" />
    </footer>
  );
};

export default Footer;

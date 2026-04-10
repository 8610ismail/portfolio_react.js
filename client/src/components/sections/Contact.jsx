import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';
import resumeFile from '../../assets/pdf/MohammedIsmailBasha_Resume.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Use relative path for Vercel compatibility
      const response = await axios.post('/api/contact', formData);
      if (response.data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, name: "LinkedIn", href: "https://www.linkedin.com/in/ismail-basha-245b78283/" },
    { icon: <FaGithub size={20} />, name: "GitHub", href: "https://github.com/8610ismail" },
    { icon: <ExternalLink size={20} />, name: "Resume", href: resumeFile }
  ];

  return (
    <section id="contact" className="py-16 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight italic">Let's <span className="text-secondary">Connect.</span></h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-md">
              Whether you're looking for a lead developer for your next mobile project or just want to chat about Flutter, my inbox is always open.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-slate-800 glass border-white/5 group-hover:bg-secondary/10 transition-colors shrink-0">
                  <Mail className="text-secondary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</div>
                  <a href="mailto:bashaismail633@gmail.com" className="text-lg md:text-xl font-bold text-white hover:text-secondary transition-colors underline decoration-slate-700 underline-offset-4 decoration-2 break-words">bashaismail633@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-slate-800 glass border-white/5 group-hover:bg-secondary/10 transition-colors shrink-0">
                  <Phone className="text-secondary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Me</div>
                  <a href="tel:+918610927422" className="text-lg md:text-xl font-bold text-white hover:text-secondary transition-colors underline decoration-slate-700 underline-offset-4 decoration-2">+91 86109 27422</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-slate-800 glass border-white/5 group-hover:bg-secondary/10 transition-colors shrink-0">
                  <MapPin className="text-secondary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Based In</div>
                  <div className="text-xl font-bold text-white italic underline decoration-slate-700 underline-offset-4 decoration-2">India</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-4 bg-slate-800 glass border-white/5 rounded-2xl text-slate-400 hover:text-secondary hover:bg-secondary/10 transition-all shadow-xl shadow-black/20"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 glass rounded-[2.5rem] border-white/5 card-gradient relative overflow-hidden shadow-2xl"
          >
            {/* Form */}
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@example.com"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all font-medium"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-1">Your Message</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="What's on your mind?"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-all resize-none font-medium"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all shadow-xl
                  ${status === 'loading' ? 'bg-slate-700 cursor-not-allowed' : 'bg-secondary hover:bg-secondary/90 text-slate-950 shadow-secondary/20'}
                `}
              >
                {status === 'loading' ? 'Sending...' : (
                  <>Send Message <Send size={20} /></>
                )}
              </motion.button>
              
              {/* Status Notifications */}
              <div className="mt-6 min-h-[40px]">
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                    <CheckCircle size={20} /> Message sent successfully!
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-rose-400 font-bold bg-rose-500/10 p-4 rounded-xl border border-rose-500/20">
                    <AlertCircle size={20} /> Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

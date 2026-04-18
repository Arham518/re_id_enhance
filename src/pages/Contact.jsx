import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ShieldCheck, ArrowUpRight, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out. Our biometric systems team will contact you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-40 pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-brand-500 text-[10px] font-bold mb-6 tracking-widest uppercase">
            <Globe className="w-4 h-4" /> Global Presence
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Channels.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Inquire about enterprise licensing, technical integrations, or collaborative research opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 border border-border/50">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold mb-1 text-xl tracking-tight">Email Support</h4>
                  <p className="text-muted-foreground font-medium text-lg">mr.arham710@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 border border-border/50">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold mb-1 text-xl tracking-tight">Direct Line</h4>
                  <p className="text-muted-foreground font-medium text-lg">+92 310 3323518</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 border border-border/50">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold mb-1 text-xl tracking-tight">Location</h4>
                  <p className="text-muted-foreground font-medium text-lg">Mithi, Sindh, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary text-primary-foreground premium-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex items-center gap-6">
                <ShieldCheck className="w-10 h-10 text-brand-400" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1 opacity-60">Systems Protocol</p>
                  <p className="text-sm font-bold leading-tight">All communications are processed via 256-bit AES encrypted secure streams.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 md:p-14 rounded-[3.5rem] premium-shadow border"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/30 border border-border/50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-500 focus:bg-background transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary/30 border border-border/50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-500 focus:bg-background transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Inquiry Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-secondary/30 border border-border/50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-brand-500 focus:bg-background transition-all font-medium resize-none"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all premium-shadow group"
              >
                Send Secure Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


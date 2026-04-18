import { Link } from 'react-router-dom';
import { Fingerprint, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        {/* Brand */}
        <div className="md:col-span-1 space-y-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary dark:bg-primary-foreground rounded-xl flex items-center justify-center">
              <Fingerprint className="text-primary-foreground dark:text-primary w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter">NEURAL<span className="text-brand-500">SCAN</span></span>
          </Link>
          <p className="text-muted-foreground font-medium leading-relaxed">
            Pioneering the next generation of biometric forensic reconstruction through proprietary AI deep-learning models and hybrid neural architectures.
          </p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Intelligence</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-muted-foreground font-bold hover:text-foreground transition-colors flex items-center justify-between group">
                  {item}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Access</h4>
          <ul className="space-y-6">
            <li className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase text-muted-foreground/50">Direct Support</span>
              <span className="font-bold text-sm tracking-tight text-foreground">mr.arham710@gmail.com</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase text-muted-foreground/50">Forensic Lab</span>
              <span className="font-bold text-sm tracking-tight text-foreground">Mithi, Sindh, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-500 mb-8">Briefing</h4>
          <p className="text-sm font-medium text-muted-foreground mb-6 leading-relaxed">Join 5,000+ researchers receiving our quarterly biometric research updates.</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Official Email"
              className="w-full bg-secondary/50 border border-border/50 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-medium"
            />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-black hover:opacity-90 transition-all premium-shadow">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t flex flex-col md:row justify-between items-center gap-6">
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Shield</a>
          <a href="#" className="hover:text-foreground transition-colors">Forensic Standards</a>
          <a href="#" className="hover:text-foreground transition-colors">API Docs</a>
        </div>
        <p className="text-[10px] font-bold text-muted-foreground/40 tracking-widest uppercase">
          © {currentYear} NEURALSCAN AI. BIOMETRIC INTEL SYSTEMS.
        </p>
      </div>
    </footer>
  );
}


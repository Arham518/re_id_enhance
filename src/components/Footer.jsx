import { Link } from 'react-router-dom';
import { Fingerprint, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        {/* Brand */}
        <div className="md:col-span-1 space-y-8">
          <Link to="/" className="flex flex-col gap-3">
            <div className="relative w-32 h-12 flex items-center justify-start transition-all duration-500 hover:scale-105">
              <img src="/finger_logo.png" alt="Logo" className="w-full h-full object-contain mix-blend-multiply" />
            </div>
            <span className="text-sm font-black tracking-tighter leading-tight text-foreground opacity-90">RE Touch ID – Aged & Labour Fingerprint Enhancement Software</span>
          </Link>
          <p className="text-muted-foreground font-medium leading-relaxed">
             Advancing biometric identification by automatically enhancing aged, cut, and labour-damaged fingerprints. A software-based approach ensuring inclusive and reliable identity verification for all.
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
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-8">Intelligence</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Scanner', 'Team & Research'].map((item) => (
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
              <span className="text-[10px] font-black uppercase text-muted-foreground/50">Location</span>
              <span className="font-bold text-sm tracking-tight text-foreground">NED University of Engineering & Technology (TIEST), Karachi, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-8">Briefing</h4>
          <p className="text-sm font-medium text-muted-foreground mb-6 leading-relaxed">For Update</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Official Email"
              className="w-full bg-secondary/10 border border-border/50 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium"
            />
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-black hover:opacity-90 transition-all premium-shadow">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-4 border-t flex flex-col md:row justify-between items-center gap-4">
        {/* <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">

        </div> */}
        <p className="text-[10px] font-bold text-muted-foreground/40 tracking-widest uppercase">
          © {currentYear} RE Touch ID. BIOMETRIC INTEL SYSTEMS.
        </p>
      </div>
    </footer>
  );
}


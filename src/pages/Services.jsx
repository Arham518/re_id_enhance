import { motion } from 'motion/react';
import { Target, Cpu, HardDrive, ShieldAlert, Fingerprint, Search, Zap, Layers } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Services() {
  const services = [
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Ridge Reconstruction",
      description: "Recovering lost ridge detail from latent, smeared, or aged fingerprint samples using generative neural networks."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Minutiae Analysis",
      description: "Automated extraction and classification of bifurcation and ridge endings for high-confidence identification."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Cross-Scan Fusion",
      description: "Synthesizing data from multiple sensory inputs to create a consolidated, high-fidelity digital biometric record."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Optimization",
      description: "Deployment of quantized models for edge-device verification without compromising restoration precision."
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Secure Vaulting",
      description: "End-to-end encrypted storage protocols for sensitive biometric datasets with zero-knowledge architecture."
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Forensic Integrity",
      description: "Ensuring every enhancement is court-admissible through strict temporal and structural logging of AI operations."
    }
  ];

  return (
    <div className="pt-40 pb-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-brand-500 text-[10px] font-bold mb-6 tracking-widest uppercase">
            <Zap className="w-4 h-4" /> Capabilities
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Forensic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Excellence.</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Our specialized AI suite is engineered to solve the most difficult challenges in modern biometric identification and record restoration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[3rem] bg-secondary/30 border border-transparent hover:border-brand-500/50 hover:bg-background hover:premium-shadow transition-all group"
            >
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tighter">{service.title}</h3>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


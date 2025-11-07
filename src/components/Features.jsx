import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Battery, Gauge, Wifi, Lock, Cpu } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Performance Tuned',
    desc: 'Kernel-level tweaks, reduced background services, and smart schedulers for snappy response times.',
  },
  {
    icon: Battery,
    title: 'Battery Optimized',
    desc: 'Aggressive doze, refined power profiles, and deep app standby for all‑day endurance.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Hardened SELinux, permission guards, and telemetry blockers keep your data yours.',
  },
  {
    icon: Wifi,
    title: 'Seamless Connectivity',
    desc: 'Improved Wi‑Fi roaming, better modem configs, and rock‑solid Bluetooth stability.',
  },
  {
    icon: Cpu,
    title: 'Clean and Lightweight',
    desc: 'Bloat-free system with essential tools only. Optional modules for power users.',
  },
  {
    icon: Lock,
    title: 'Secure by Design',
    desc: 'Monthly patches and verified boot integrity to protect your device.',
  },
];

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Why Choose These ROMs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
        >
          A balanced blend of speed, battery life, and security — designed for a futuristic, fluid experience.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={item}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300 ring-1 ring-cyan-400/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

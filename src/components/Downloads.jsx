import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Info } from 'lucide-react';

const roms = [
  {
    device: 'Pixel 7 Pro (cheetah)',
    version: 'NovaDroid 2.1',
    android: 'Android 14',
    date: '2025-09-10',
    notes: 'Passes SafetyNet, CTS. Encrypted by default. GApps included.',
    url: '#',
  },
  {
    device: 'OnePlus 8T (kebab)',
    version: 'NovaDroid 2.1',
    android: 'Android 14',
    date: '2025-08-20',
    notes: 'Firmware 13.1 required. Includes OOS Camera. Clean flash recommended.',
    url: '#',
  },
  {
    device: 'Poco F3 (alioth)',
    version: 'NovaDroid 2.0',
    android: 'Android 13',
    date: '2025-06-30',
    notes: 'Vanilla + optional MicroG. Safety patches up to June 2025.',
    url: '#',
  },
];

const Downloads = () => {
  return (
    <section id="downloads" className="relative py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          ROM Downloads
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
        >
          Flash at your own risk. Always verify checksums and follow the installation guide for your device.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6">
          {roms.map((rom) => (
            <motion.div
              key={rom.device}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-fuchsia-500/10 p-3 text-fuchsia-300 ring-1 ring-fuchsia-400/20">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{rom.device}</h3>
                    <p className="text-sm text-white/70">
                      {rom.version} • {rom.android} • {rom.date}
                    </p>
                  </div>
                </div>
                <a
                  href={rom.url}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:shadow-lg"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
              </div>
              {rom.notes && (
                <p className="mt-4 inline-flex items-start gap-2 text-sm text-white/70">
                  <Info className="mt-0.5 h-4 w-4 flex-none" /> {rom.notes}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;

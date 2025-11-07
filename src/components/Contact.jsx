import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      // For now, just simulate success. Replace with backend endpoint if needed.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Message sent! I will get back to you soon.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-xl text-center text-white/70"
        >
          Questions, feedback, or device requests? Send a message below.
        </motion.p>

        <form onSubmit={onSubmit} className="mt-10 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none backdrop-blur focus:border-emerald-400/50"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none backdrop-blur focus:border-emerald-400/50"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/50 outline-none backdrop-blur focus:border-emerald-400/50"
              placeholder="Write your message..."
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow transition hover:shadow-lg"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            <p className="text-sm text-white/70">{status}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, BookOpen, Facebook, Send } from "lucide-react";
import { FadeInUp, SlideIn, TextReveal, ScaleIn } from "@/components/animations";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1800)" }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/30" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
          <TextReveal>
            <h1 className="font-playfair text-5xl md:text-7xl font-black italic text-foreground">Contact Us<br />Anytime</h1>
          </TextReveal>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Info Cards */}
          <div className="space-y-6">
            <FadeInUp>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-8">Let's Connect</h2>
            </FadeInUp>
            {[
              { icon: <Mail size={24} />, title: "Email", detail: "hello@crimelinehollywood.com" },
              { icon: <Globe size={24} />, title: "Website", detail: "www.crimelinehollywood.com" },
              { icon: <BookOpen size={24} />, title: "Publisher", detail: "Available through all major retailers" },
            ].map((card, i) => (
              <ScaleIn key={i} delay={i * 0.15}>
                <motion.div
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-lg border border-gold/10"
                  whileHover={{ y: -4, x: 4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-bold text-foreground">{card.title}</h3>
                    <p className="font-lato text-sm text-muted-foreground">{card.detail}</p>
                  </div>
                </motion.div>
              </ScaleIn>
            ))}

            <FadeInUp delay={0.4}>
              <div className="flex gap-4 mt-8">
                <motion.a
                  href="#"
                  className="w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 rounded-full border-2 border-gold/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.828.94z" />
                  </svg>
                </motion.a>
              </div>
            </FadeInUp>
          </div>

          {/* Contact Form */}
          <SlideIn direction="right">
            <form onSubmit={handleSubmit} className="bg-card rounded-xl shadow-xl p-8 border border-gold/10">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="gold-label text-[10px] block mb-1">First Name</label>
                  <input required className="w-full px-4 py-3 rounded-lg bg-cream border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm" />
                </div>
                <div>
                  <label className="gold-label text-[10px] block mb-1">Last Name</label>
                  <input required className="w-full px-4 py-3 rounded-lg bg-cream border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm" />
                </div>
              </div>

              <div className="mb-4">
                <label className="gold-label text-[10px] block mb-1">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-lg bg-cream border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm" />
              </div>

              <div className="mb-4">
                <label className="gold-label text-[10px] block mb-1">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg bg-cream border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm">
                  <option>General Inquiry</option>
                  <option>Interview Request</option>
                  <option>Book Review</option>
                  <option>Speaking Engagement</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="gold-label text-[10px] block mb-1">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-lg bg-cream border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm resize-none" />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2"
                whileTap={{ scale: 0.97 }}
                disabled={sending}
              >
                {sent ? (
                  <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    ✓ Message Sent!
                  </motion.span>
                ) : sending ? (
                  <motion.div animate={{ x: [0, 100], y: [0, -30, 0], opacity: [1, 0] }} transition={{ duration: 1 }}>
                    <Send size={18} />
                  </motion.div>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </motion.button>
            </form>
          </SlideIn>
        </div>
      </section>
    </main>
  );
};

export default Contact;

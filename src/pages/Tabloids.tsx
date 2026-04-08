import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInUp, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const headlines = [
  { headline: "SPARKLYNN JAMES — MISSING!", sub: "Feds Baffled as Hollywood Heiress Vanishes", body: "In a shocking turn of events that has sent ripples through Hollywood's elite circles, socialite Sparklynn James has disappeared without a trace..." },
  { headline: "CODED MESSAGE FOUND!", sub: "Police Scramble to Decode Mysterious Ransom Note", body: "A cryptic ransom note, apparently written in astrological symbols, was discovered at the scene. Experts from the FBI's cryptanalysis division have been called in..." },
  { headline: "ASTROLOGER UNDER SUSPICION", sub: "Hollywood's Favorite Fortune-Teller Questioned by Authorities", body: "The glamorous astrologer known only as 'Dash' has been brought in for questioning in connection with the disappearance. Sources say she may hold the key..." },
  { headline: "CORPORATE SCANDAL EXPOSED!", sub: "Fortune 500 Executive's Dark Connections Revealed", body: "Leaked documents reveal a web of offshore accounts and shell companies linking several prominent executives to a shadowy international syndicate..." },
  { headline: "DRAMATIC CHASE ON MULHOLLAND!", sub: "High-Speed Pursuit Ends in Mysterious Circumstances", body: "Witnesses report a dramatic late-night chase along the winding roads of Mulholland Drive, ending when one vehicle seemingly vanished into thin air..." },
];

const Tabloids = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-card">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)`,
        }} />
        {/* Color bleed */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/10 to-transparent" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 text-center">
          <TextReveal>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-black italic text-foreground mb-4">
              A Tale Told By<br />the Tabloids
            </h1>
          </TextReveal>
          <p className="font-cormorant text-xl italic text-muted-foreground">
            The story as Hollywood's gossip pages saw it
          </p>
        </div>
      </section>

      {/* BREAKING NEWS TICKER */}
      <section className="bg-primary py-2 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <span className="text-primary-foreground font-bold text-sm font-lato tracking-wider">
            ★ BREAKING NEWS ★ SPARKLYNN JAMES MISSING — FEDS BAFFLED ★ CODED RANSOM MESSAGE DISCOVERED ★ ASTROLOGER QUESTIONED ★ CORPORATE SCANDAL ROCKS HOLLYWOOD ★ BREAKING NEWS ★
          </span>
        </motion.div>
      </section>

      {/* TABLOID LAYOUT */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-12">
            <span className="gold-label block mb-3">Extra! Extra!</span>
            <h2 className="font-playfair text-4xl font-bold text-foreground">The Hollywood Gazette</h2>
            <div className="w-full max-w-2xl mx-auto h-[2px] bg-foreground mt-4 mb-2" />
            <div className="w-full max-w-2xl mx-auto h-[1px] bg-foreground" />
          </FadeInUp>

          {/* Newspaper columns */}
          <div className="max-w-4xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-6">
            {headlines.map((item, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="break-inside-avoid bg-card p-6 border border-border rounded-lg hover:shadow-lg transition-all">
                  <h3 className="font-playfair text-xl font-black text-primary mb-1">{item.headline}</h3>
                  <p className="font-cormorant text-sm italic text-secondary mb-3">{item.sub}</p>
                  <p className="font-lato text-xs text-foreground/60 leading-relaxed">{item.body}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* HEADLINE CAROUSEL */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeInUp className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-3">Front Page Headlines</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </FadeInUp>

          <div className="relative flex justify-center items-center min-h-[300px]">
            {headlines.map((item, i) => (
              <motion.div
                key={i}
                className="absolute w-full max-w-md bg-card rounded-xl shadow-xl p-8 border-2 border-foreground/10 cursor-pointer"
                onClick={() => setActiveCard(i)}
                animate={{
                  scale: activeCard === i ? 1 : 0.9,
                  zIndex: activeCard === i ? 10 : 5 - Math.abs(activeCard - i),
                  rotateZ: activeCard === i ? 0 : (i - activeCard) * 3,
                  y: activeCard === i ? 0 : 10,
                  opacity: Math.abs(activeCard - i) > 2 ? 0 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <span className="gold-label text-[10px] block mb-2">Hollywood Gazette</span>
                <h3 className="font-playfair text-2xl font-black text-primary mb-2">{item.headline}</h3>
                <p className="font-cormorant italic text-muted-foreground">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {headlines.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeCard === i ? "bg-primary scale-125" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tabloids;

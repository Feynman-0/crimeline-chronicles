import { motion } from "framer-motion";
import { FadeInUp, SlideIn, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { MapPin } from "lucide-react";

const timelineEvents = [
  { title: "The Studio Lot Betrayal", text: "Under the blazing California sun, Dash received the phone call that would change everything. The voice on the line was unmistakable — but the message was impossible to believe." },
  { title: "The Midnight Drive", text: "With headlights cutting through the fog on Mulholland Drive, Dash raced against time. The coded message pointed to coordinates that didn't exist on any map — until now." },
  { title: "The Hotel Rendezvous", text: "The Chateau Marmont had seen its share of secrets, but none quite like this. In a darkened suite, Dash met the one person who could unravel the conspiracy — or seal her fate." },
  { title: "The Final Confrontation", text: "The Hollywood sign loomed above like a silent witness as Dash faced her pursuer. The stars had predicted this moment, but nothing could have prepared her for the truth." },
  { title: "The Great Escape", text: "With sirens echoing through Laurel Canyon, Dash executed her most daring move yet. Hollywood's most glamorous gumshoe was about to become its most wanted fugitive." },
];

const mapLocations = [
  { name: "Hollywood Sign", x: 50, y: 15 },
  { name: "Chateau Marmont", x: 25, y: 40 },
  { name: "Mulholland Drive", x: 70, y: 25 },
  { name: "Sunset Boulevard", x: 35, y: 60 },
  { name: "Venice Beach", x: 15, y: 80 },
  { name: "Downtown LA", x: 75, y: 70 },
];

const DashsEscape = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1800)" }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/30" />
        {/* Motion lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-primary/40 to-transparent"
              style={{ top: `${20 + i * 8}%`, left: 0, width: "60%" }}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "100%", opacity: [0, 0.6, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.3 }}
            />
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
          <TextReveal>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-black italic text-foreground">
              Dash's Escape<br />from Hollywood
            </h1>
          </TextReveal>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="font-cormorant text-xl italic text-muted-foreground mt-4">
            A thrilling chase through the City of Angels
          </motion.p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <FadeInUp className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-3">The Chase Unfolds</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </FadeInUp>
          
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/30 -translate-x-1/2 hidden md:block" />
            
            {timelineEvents.map((event, i) => (
              <SlideIn key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.15}>
                <div className={`flex items-start gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="gold-label block mb-2">Chapter {i + 1}</span>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{event.title}</h3>
                    <p className="font-lato text-foreground/70 leading-relaxed text-sm">{event.text}</p>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-primary rounded-full flex-shrink-0 mt-2 ring-4 ring-cream" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* MAP TEASER */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <FadeInUp className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-3">Hollywood Map</h2>
            <p className="font-lato text-muted-foreground">Key locations from Dash's harrowing escape</p>
          </FadeInUp>
          <FadeInUp>
            <div className="relative bg-card rounded-xl shadow-lg p-8 aspect-video border border-gold/20">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
                {/* Decorative roads */}
                <path d="M 10,50 Q 30,30 50,50 T 90,50" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.3" />
                <path d="M 20,20 Q 50,40 80,20" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.3" />
                <path d="M 30,80 Q 50,60 70,80" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.3" />
              </svg>
              {mapLocations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  className="absolute group cursor-pointer"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.3 }}
                >
                  <MapPin size={20} className="text-primary" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-primary-foreground text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {loc.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
};

export default DashsEscape;

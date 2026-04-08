import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crosshair, FileText, Crown, Star } from "lucide-react";
import { FadeInUp, SlideIn, TextReveal, CardTilt, StaggerContainer, StaggerItem } from "@/components/animations";
import bookCover from "@/assets/book-cover.avif";

const retailers = ["Amazon", "Barnes & Noble", "AbeBooks", "Walmart", "ThriftBooks", "Books-A-Million", "Skylark", "Shake & Co"];

const CrimelineHollywood = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1800)" }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/30" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
          <TextReveal>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black italic text-foreground mb-4">
              CRIMELINE<br />HOLLYWOOD
            </h1>
          </TextReveal>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="font-cormorant text-2xl italic text-secondary">
            By Thomas Collins
          </motion.p>
          {/* Film strip decoration */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-16 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 1 }}
          >
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="flex-1 border-x border-foreground/30 mx-0.5" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* BOOK DETAIL */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-5 gap-16 items-start">
          <SlideIn direction="left" className="lg:col-span-2 flex justify-center">
            <CardTilt>
              <div className="relative">
                <motion.img
                  src={bookCover}
                  alt="Crimeline Hollywood"
                  className="w-72 md:w-80 rounded-lg shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
                <span className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-full">
                  Now Available
                </span>
              </div>
            </CardTilt>
          </SlideIn>
          <SlideIn direction="right" className="lg:col-span-3">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">The Full Story</h2>
            <p className="font-lato text-foreground/70 leading-relaxed mb-4">
              In the gilded world of Hollywood, astrologer Dash Crimeliness navigates a treacherous landscape of glamour and danger. When a Fortune 500 executive's daughter goes missing, Dash is drawn into a web of corporate intrigue, coded ransom messages, and a conspiracy that reaches the highest echelons of power.
            </p>
            <p className="font-lato text-foreground/70 leading-relaxed mb-4">
              With her unique gift for reading the stars and an unerring instinct for trouble, she must decode the mystery before the killers close in. From the sun-drenched hills of Los Angeles to the shadowy corridors of corporate boardrooms, Crimeline Hollywood takes readers on an unforgettable journey through deception, danger, and the dark side of fame.
            </p>
            <p className="font-lato text-foreground/70 leading-relaxed mb-8">
              A coded ransom message points them straight into a web of corporate evil. The clock is ticking. Hollywood's most glamorous gumshoe must solve the puzzle — or become the next victim.
            </p>
            
            <span className="gold-label block mb-4">Available At</span>
            <div className="flex flex-wrap gap-3 mb-8">
              {retailers.map((name) => (
                <span key={name} className="px-4 py-2 bg-card rounded-lg shadow-sm border border-border text-sm font-lato text-foreground/70 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                  {name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["Crime", "Mystery", "Hollywood", "Astrology"].map((genre) => (
                <span key={genre} className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full">{genre}</span>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* STORY TENSION */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-3">Three Forces of Danger</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </FadeInUp>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Crosshair size={32} />, title: "The Hitman", desc: "A professional killer stalks the shadows of Hollywood Boulevard, leaving a trail of fear." },
              { icon: <FileText size={32} />, title: "The Kidnapping", desc: "A coded ransom note arrives — and the clock begins to tick on a young woman's life." },
              { icon: <Crown size={32} />, title: "The Corporate Cabal", desc: "Behind the glittering facades, a conspiracy of power brokers pulls every string." },
            ].map((card, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="bg-card rounded-xl p-8 shadow-lg border-t-4 border-primary hover:shadow-2xl transition-all"
                  whileHover={{ y: -8, rotateZ: 0.5 }}
                >
                  <div className="text-primary mb-4">{card.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="font-lato text-sm text-muted-foreground">{card.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1800)" }}
        />
        <div className="absolute inset-0 bg-cream/80 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <FadeInUp>
            <span className="text-6xl text-gold font-playfair">"</span>
            <p className="font-playfair text-2xl md:text-4xl italic text-primary leading-relaxed">
              A coded ransom message points them straight into a web of corporate evil.
            </p>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-8" />
          </FadeInUp>
        </div>
      </section>
    </main>
  );
};

export default CrimelineHollywood;

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FadeInUp, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const pressQuotes = [
  { quote: "A masterful debut that weaves astrology, corporate intrigue, and Hollywood glamour into an unputdownable thriller.", pub: "The Literary Review", stars: 5 },
  { quote: "Thomas Collins has created a detective for the ages in Dash Crimeliness. Smart, stylish, and utterly compelling.", pub: "Mystery Monthly", stars: 5 },
  { quote: "The best crime fiction debut I've read in years. Collins knows Hollywood — and he knows how to keep you turning pages.", pub: "The Book Critic", stars: 5 },
  { quote: "Cinematic, suspenseful, and wickedly smart. Crimeline Hollywood deserves to be a major motion picture.", pub: "Hollywood Reporter", stars: 4 },
  { quote: "A deliciously complex mystery with a protagonist who's equal parts Philip Marlowe and Mystic Meg.", pub: "The Guardian Books", stars: 4 },
  { quote: "Collins' insider knowledge of corporate America lends an authenticity that elevates this far above typical genre fare.", pub: "The New York Review", stars: 5 },
  { quote: "Sexy, dangerous, and absolutely gripping. Clear your schedule — you won't be able to put it down.", pub: "Vanity Fair", stars: 5 },
  { quote: "A fresh and thrilling voice in crime fiction. We need more Dash Crimeliness immediately.", pub: "Publishers Weekly", stars: 4 },
];

const Press = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519167758481-83f29c8a4d9a?w=1800)" }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/30" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
          <TextReveal>
            <h1 className="font-playfair text-5xl md:text-7xl font-black italic text-foreground">Press</h1>
          </TextReveal>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="font-cormorant text-xl italic text-muted-foreground mt-4">
            What critics and readers are saying
          </motion.p>
        </div>
      </section>

      {/* PRESS GRID */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {pressQuotes.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="break-inside-avoid bg-card rounded-xl p-8 shadow-lg border border-gold/10 hover:shadow-2xl transition-all"
                  whileHover={{ y: -4 }}
                >
                  <span className="text-5xl text-gold/30 font-playfair leading-none">"</span>
                  <p className="font-cormorant text-lg italic text-foreground/80 leading-relaxed mb-4 -mt-4">
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: item.stars }).map((_, j) => (
                      <Star key={j} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="gold-label text-[10px]">{item.pub}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* MEDIA KIT CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <FadeInUp>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">Press Inquiries Welcome</h2>
            <p className="font-lato text-muted-foreground mb-8">
              For press kits, interview requests, review copies, and media inquiries, please get in touch. We're happy to accommodate journalists, book bloggers, and literary publications.
            </p>
            <a href="mailto:press@crimelinehollywood.com" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg">
              press@crimelinehollywood.com
            </a>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
};

export default Press;

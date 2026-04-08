import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Star, ArrowRight } from "lucide-react";
import { FadeInUp, SlideIn, TextReveal, Typewriter, CardTilt, CountUp, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations";
import bookCover from "@/assets/book-cover.avif";

const retailers = ["Amazon", "Barnes & Noble", "AbeBooks", "Walmart", "ThriftBooks", "Books-A-Million", "Skylark", "Shake & Co"];

const characters = [
  { name: "Dash", sign: "Aquarius", symbol: "♒", desc: "The glamorous gumshoe with a talent for reading the stars." },
  { name: "Rebecca", sign: "Taurus", symbol: "♉", desc: "A steadfast ally whose loyalty will be tested." },
  { name: "Harmon", sign: "Capricorn", symbol: "♑", desc: "The calculating power broker with dark ambitions." },
  { name: "T. Wayne", sign: "Libra", symbol: "♎", desc: "A charming socialite balancing justice and desire." },
  { name: "Dr. V", sign: "Leo", symbol: "♌", desc: "The enigmatic doctor with a flair for the dramatic." },
  { name: "Ruthann", sign: "Cancer", symbol: "♋", desc: "A protective soul harboring dangerous secrets." },
];

const insiderPages = [
  { name: "The Astrology of Characters", path: "/the-astrology-of-hollywood-crimeliness-central-characters", icon: "✦" },
  { name: "Dash's Escape from Hollywood", path: "/dashs-escape-from-hollywood", icon: "✦" },
  { name: "Book Ingredients", path: "/book-ingredients", icon: "✦" },
  { name: "A Tale Told By the Tabloids", path: "/a-tale-told-by-the-tabloids", icon: "✦" },
];

const Index = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1800)" }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 to-cream/30" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center pt-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="gold-label inline-block mb-4"
            >
              A Crime Fiction Novel
            </motion.span>
            
            <TextReveal>
              <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black italic text-foreground leading-[0.95] mb-6">
                CRIMELINE<br />HOLLYWOOD
              </h1>
            </TextReveal>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-cormorant text-xl md:text-2xl italic text-foreground/70 mb-4"
            >
              By Thomas Collins
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="h-8 mb-8"
            >
              <Typewriter
                texts={[
                  "Hollywood's Most Dangerous Astrologer.",
                  "The Glamorous Gumshoe.",
                  "A Web of Corporate Evil.",
                ]}
                className="font-cormorant text-lg md:text-xl text-primary"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/crimeline-hollywood" className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                Buy the Book
              </Link>
              <Link to="/free-chapter" className="px-8 py-3 border-2 border-gold text-foreground font-bold rounded-full hover:bg-gold/10 transition-all">
                Read Free Chapter
              </Link>
            </motion.div>
          </div>

          {/* Floating Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <CardTilt>
              <motion.img
                src={bookCover}
                alt="Crimeline Hollywood by Thomas Collins"
                className="w-80 rounded-lg shadow-2xl animate-float-y"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
            </CardTilt>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs font-lato tracking-widest uppercase">Scroll to Discover</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* SYNOPSIS */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <SlideIn direction="left">
            <div className="flex gap-6">
              <div className="w-1 bg-primary rounded-full flex-shrink-0" />
              <blockquote className="font-playfair text-2xl md:text-3xl italic text-foreground/80 leading-relaxed">
                "Whoever thought an astrologer's life could be so dangerous?"
              </blockquote>
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div>
              <p className="font-lato text-foreground/70 leading-relaxed mb-6">
                In the gilded world of Hollywood, astrologer Dash Crimeliness navigates a treacherous landscape of glamour and danger. When a Fortune 500 executive's daughter goes missing, Dash is drawn into a web of corporate intrigue, coded ransom messages, and a conspiracy that reaches the highest echelons of power. With her unique gift for reading the stars and an unerring instinct for trouble, she must decode the mystery before the killers close in.
              </p>
              <p className="font-lato text-foreground/70 leading-relaxed mb-6">
                A thrilling ride through the dark underbelly of Tinseltown, where nothing — and no one — is what they seem.
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-cormorant text-sm italic text-muted-foreground">"A gripping Hollywood thriller" — Advance Reader Review</p>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* BUY THE BOOK */}
      <section className="py-20 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-12">
          <FadeInUp>
            <span className="gold-label block mb-3">Available At</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">Get Your Copy Today</h2>
          </FadeInUp>
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...retailers, ...retailers].map((name, i) => (
            <div key={i} className="mx-4 min-w-[180px] bg-card rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex items-center justify-center">
              <span className="font-playfair text-lg font-bold text-foreground/80">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MEET THE AUTHOR */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left" className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
                alt="Thomas Collins"
                className="w-full h-full object-cover sepia"
              />
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <span className="gold-label block mb-2">Mystery Author</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">Thomas Collins</h2>
            <p className="font-lato text-foreground/70 leading-relaxed mb-6">
              Thomas Collins brings a unique insider perspective to crime fiction. With a background in the Fortune 500 corporate world and a deep fascination with Hollywood's hidden machinations, Collins crafts stories that blur the line between glittering celebrity and dark intrigue. Crimeline Hollywood is his debut novel — a book years in the making, drawing on real-world experience and a vivid imagination.
            </p>
            <div className="flex gap-8 mb-8">
              {[
                { num: 1, label: "Novel", suffix: "" },
                { num: 500, label: "Fortune Background", suffix: "" },
                { num: 1, label: "Hollywood Insider", suffix: "" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-playfair text-3xl font-bold text-primary">
                    <CountUp target={stat.num} />
                  </div>
                  <span className="text-xs font-lato text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link to="/the-astrology-of-hollywood-crimeliness-central-characters" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              Explore the Insider's Story <ArrowRight size={16} />
            </Link>
          </SlideIn>
        </div>
      </section>

      {/* CHARACTERS TEASER */}
      <section className="py-24 bg-charcoal/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={Math.random() * 2 + 0.5}
                fill="#C9A84C"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ repeat: Infinity, duration: Math.random() * 3 + 2, delay: Math.random() * 2 }}
              />
            ))}
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3">Meet the Characters</h2>
            <div className="w-24 h-[2px] bg-gold mx-auto" />
          </FadeInUp>
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {characters.map((char, i) => (
              <ScaleIn key={char.name} delay={i * 0.1}>
                <motion.div
                  className="min-w-[260px] bg-card rounded-xl p-6 shadow-lg snap-center border border-gold/10 hover:shadow-2xl transition-all cursor-pointer"
                  whileHover={{ y: -8, rotateZ: 1 }}
                >
                  <div className="text-5xl text-center mb-4 text-gold">{char.symbol}</div>
                  <h3 className="font-playfair text-xl font-bold text-center text-foreground mb-1">{char.name}</h3>
                  <span className="block text-center gold-label text-[10px] mb-3">{char.sign}</span>
                  <p className="font-lato text-sm text-muted-foreground text-center">{char.desc}</p>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
          <FadeInUp className="text-center mt-8">
            <Link to="/the-astrology-of-hollywood-crimeliness-central-characters" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              See All Characters <ArrowRight size={16} />
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* INSIDER'S STORY PROMO */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <span className="gold-label block mb-3">Behind The Book</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">The Insider's Story</h2>
            <div className="space-y-4">
              {insiderPages.map((page, i) => (
                <motion.div key={page.path} whileHover={{ x: 8 }}>
                  <Link
                    to={page.path}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all group"
                  >
                    <span className="text-gold text-lg">{page.icon}</span>
                    <span className="font-lato font-medium text-foreground group-hover:text-primary transition-colors flex-1">{page.name}</span>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </FadeInUp>
          <ScaleIn className="flex justify-center">
            <div className="relative">
              <span className="font-playfair text-[180px] font-black text-primary/10 leading-none">4</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cormorant text-xl italic text-foreground/60 text-center">Chapters of<br />Insider Content</span>
              </div>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* PRESS STRIP */}
      <section className="py-8 bg-gold/20 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex">
              {[
                '"A gripping Hollywood thriller"',
                '"Thomas Collins is a revelation"',
                '"The best crime debut of the year"',
                '"Astrology meets noir — brilliant"',
                '"Unputdownable from page one"',
              ].map((quote, i) => (
                <span key={i} className="mx-12 font-playfair text-lg italic text-foreground/60">{quote} ★</span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1800)" }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <FadeInUp>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="font-lato text-muted-foreground mb-10">
              Have questions about the book? Interested in press inquiries or speaking engagements? We'd love to hear from you.
            </p>
            <form className="grid grid-cols-2 gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <input className="col-span-1 px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm" placeholder="First Name" />
              <input className="col-span-1 px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm" placeholder="Last Name" />
              <input className="col-span-2 px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm" placeholder="Email" type="email" />
              <textarea className="col-span-2 px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none font-lato text-sm resize-none" rows={4} placeholder="Message" />
              <div className="col-span-2 text-center">
                <button className="px-10 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
};

export default Index;

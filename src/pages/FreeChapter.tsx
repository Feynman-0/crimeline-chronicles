import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { FadeInUp, TextReveal } from "@/components/animations";

const FreeChapter = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main>
      {/* Reading progress */}
      <motion.div
        className="fixed top-20 left-0 right-0 h-[2px] bg-primary z-40 origin-left"
        style={{ scaleX }}
      />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-cream">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.3) 0%, transparent 70%)",
          }} />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-5xl mb-4">📖</motion.div>
          <TextReveal>
            <h1 className="font-playfair text-4xl md:text-6xl font-black italic text-foreground mb-4">
              Read a Free Chapter
            </h1>
          </TextReveal>
          <p className="font-cormorant text-xl italic text-muted-foreground">
            A taste of the thriller that awaits
          </p>
        </div>
      </section>

      {/* CHAPTER READER */}
      <section className="py-16 bg-cream">
        <div className="max-w-[680px] mx-auto px-6">
          <FadeInUp>
            <span className="gold-label block text-center mb-8">Chapter One</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-12">The Stars Don't Lie</h2>

            <div className="font-cormorant text-lg leading-relaxed text-foreground/80 space-y-6">
              <p className="drop-cap">
                The telephone rang at precisely 3:47 AM — the hour of Neptune, as Dash would have noted — shattering the silence of her Laurel Canyon bungalow. She knew before she answered that it would change everything. That was the thing about being an astrologer in Hollywood: you always knew, and no one ever believed you.
              </p>
              <p>
                "Dash Crimeliness?" The voice was male, expensive, and terrified. A combination she'd encountered only in Fortune 500 boardrooms and Beverly Hills divorce proceedings. "I was told you could help. That you... see things."
              </p>
              <p>
                She reached for the crystal tumbler of water on her nightstand — never bourbon, despite what the tabloids claimed — and took a measured sip. "I read charts, Mr.—?"
              </p>
              <p>
                "Blackwell. Harmon Blackwell." A pause heavy with the weight of a name that appeared regularly in the Wall Street Journal and occasionally in federal court filings. "My daughter is missing. The police are useless. The FBI is..." Another pause. "Compromised."
              </p>
              <p>
                Dash swung her legs over the side of the bed and padded to the window. Below, the lights of Los Angeles glittered like a fallen constellation — beautiful, chaotic, and full of dark matter. "When did she disappear?"
              </p>
              <p>
                "Three days ago. From the lot at Pinnacle Studios. She was meeting someone — we don't know who. Her security detail found her car but not her. And then this arrived." A photograph appeared on her phone: a sheet of cream-colored stationery covered in symbols. Not letters. Not numbers. Zodiac signs.
              </p>
              <p>
                Dash's blood ran cold. She recognized the cipher immediately — it was based on a system she herself had published in her second book, "Stellar Codes: The Hidden Language of the Zodiac." Someone had weaponized her work.
              </p>
              <p>
                "I'll be at your office in forty minutes," she said, already reaching for the vintage Halston jumpsuit that served as her working uniform. In Hollywood, you always dressed for the role — even at four in the morning. Especially at four in the morning.
              </p>
              <p>
                She caught her reflection in the hallway mirror as she grabbed her keys. Dark hair swept back, eyes sharp enough to read a birth chart at fifty paces, the kind of bone structure that photographers loved and suspects feared. Hollywood's most dangerous astrologer was about to become its most glamorous gumshoe.
              </p>
              <p>
                The stars, she thought as she started the engine of her vintage Mercedes, don't lie. But in this town, everyone else does.
              </p>
            </div>

            {/* Page turn flourish */}
            <motion.div
              className="flex justify-center my-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-gold" />
                <span className="text-2xl text-gold">✦</span>
                <div className="w-16 h-[1px] bg-gold" />
              </div>
            </motion.div>

            <div className="text-center">
              <p className="font-cormorant text-lg italic text-muted-foreground mb-6">
                Want to know what happens next?
              </p>
              <Link
                to="/crimeline-hollywood"
                className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg text-lg"
              >
                Buy the Full Book →
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
};

export default FreeChapter;

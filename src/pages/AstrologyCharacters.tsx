import { motion } from "framer-motion";
import { FadeInUp, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const characters = [
  { name: "Dash Crimeliness", sign: "Aquarius", symbol: "♒", desc: "The glamorous gumshoe and Hollywood's most sought-after astrologer. Brilliant, fearless, and dangerously perceptive, Dash uses her celestial gifts to navigate a world where the stars hold deadly secrets. An Aquarius through and through — independent, visionary, and always three steps ahead.", constellation: "M 20,30 L 35,15 L 50,25 L 65,10 L 80,20 L 70,40 L 55,35 L 40,45 Z" },
  { name: "Rebecca Hartwell", sign: "Taurus", symbol: "♉", desc: "Dash's steadfast ally and confidante. Grounded, loyal, and fiercely protective, Rebecca provides the stability Dash needs when the world spins out of control. But even a Taurus has her breaking point — and this case will push her to it.", constellation: "M 25,20 L 40,10 L 55,20 L 70,15 L 60,35 L 45,40 L 30,35 Z" },
  { name: "Harmon Blackwell", sign: "Capricorn", symbol: "♑", desc: "The calculating power broker whose ambitions stretch far beyond Hollywood. With a Capricorn's relentless drive and ruthless pragmatism, Harmon will stop at nothing to protect his empire — even if it means silencing anyone who gets in his way.", constellation: "M 20,40 L 35,20 L 50,30 L 65,10 L 80,25 L 70,45 L 40,50 Z" },
  { name: "T. Wayne Sterling", sign: "Libra", symbol: "♎", desc: "The charming socialite who moves effortlessly between Hollywood's A-list parties and its darkest back rooms. A Libra who constantly balances justice against desire, Wayne's true allegiance remains a mystery — even to himself.", constellation: "M 30,15 L 45,25 L 60,10 L 75,30 L 60,40 L 45,35 L 30,45 Z" },
  { name: "Dr. V", sign: "Leo", symbol: "♌", desc: "The enigmatic doctor with a flair for the dramatic and secrets that could topple dynasties. A Leo who commands every room she enters, Dr. V's charisma masks a calculating mind and a past she'd kill to keep buried.", constellation: "M 25,25 L 40,10 L 55,20 L 70,5 L 80,30 L 65,40 L 50,35 L 35,45 Z" },
  { name: "Ruthann Gallagher", sign: "Cancer", symbol: "♋", desc: "A protective soul whose nurturing exterior belies dangerous secrets. Like her Cancer sign, Ruthann guards her inner world fiercely — but when the people she loves are threatened, she becomes the most formidable player in the game.", constellation: "M 20,30 L 35,10 L 50,20 L 65,15 L 75,35 L 60,45 L 40,40 Z" },
];

const AstrologyCharacters = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-charcoal/5">
        <div className="absolute inset-0 overflow-hidden">
          <svg width="100%" height="100%" className="opacity-20">
            {Array.from({ length: 80 }).map((_, i) => (
              <motion.circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={Math.random() * 2 + 0.5}
                fill="#C9A84C"
                animate={{ opacity: [0.1, 0.8, 0.1] }}
                transition={{ repeat: Infinity, duration: Math.random() * 3 + 2, delay: Math.random() * 2 }}
              />
            ))}
          </svg>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl text-gold mb-6"
          >
            ✦
          </motion.div>
          <TextReveal>
            <h1 className="font-playfair text-4xl md:text-6xl font-black italic text-foreground mb-4">
              The Astrology of Characters
            </h1>
          </TextReveal>
          <p className="font-cormorant text-xl italic text-muted-foreground">
            Hollywood Crimeline's Central Characters — Written in the Stars
          </p>
        </div>
      </section>

      {/* CHARACTERS GRID */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {characters.map((char, i) => (
              <StaggerItem key={char.name}>
                <motion.div
                  className="bg-card rounded-xl p-8 shadow-lg border border-gold/10 hover:shadow-2xl transition-all relative overflow-hidden group"
                  whileHover={{ y: -4, rotateZ: 0.3 }}
                >
                  {/* SVG constellation */}
                  <svg className="w-full h-24 mb-6" viewBox="0 0 100 50">
                    <motion.path
                      d={char.constellation}
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="0.8"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                    />
                    {char.constellation.match(/\d+,\d+/g)?.map((point, j) => {
                      const [cx, cy] = point.split(",");
                      return (
                        <motion.circle
                          key={j}
                          cx={cx}
                          cy={cy}
                          r="2"
                          fill="#C9A84C"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + j * 0.15 }}
                        />
                      );
                    })}
                  </svg>

                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">{char.name}</h3>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs gold-label mb-4">
                    <span className="text-lg">{char.symbol}</span> {char.sign}
                  </span>
                  <p className="font-lato text-foreground/70 leading-relaxed text-sm">{char.desc}</p>

                  {/* Watermark zodiac */}
                  <span className="absolute bottom-4 right-4 text-8xl text-foreground/5 font-playfair group-hover:text-gold/10 transition-colors">
                    {char.symbol}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
};

export default AstrologyCharacters;

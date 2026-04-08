import { motion } from "framer-motion";
import { FadeInUp, TextReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const ingredients = [
  "1 Part Hollywood Glamour",
  "2 Parts Corporate Intrigue",
  "A Dash of Astrology (literally)",
  "A Kidnapping Most Foul",
  "One Glamorous Gumshoe",
  "Stir in a Coded Ransom Message",
  "A Handful of Red Herrings",
  "One Enigmatic Fortune-Teller",
  "A Pinch of Zodiac Mysticism",
  "Simmer in Sunset Boulevard Heat",
  "Garnish with Hollywood Sign Views",
  "Serve Cold — Like Revenge",
];

const BookIngredients = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-cream">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(201,168,76,0.15) 30px, rgba(201,168,76,0.15) 31px)",
          }} />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl mb-6"
          >
            📜
          </motion.div>
          <TextReveal>
            <h1 className="font-playfair text-4xl md:text-6xl font-black italic text-foreground mb-4">
              Book Ingredients
            </h1>
          </TextReveal>
          <p className="font-cormorant text-xl italic text-muted-foreground">
            The secret recipe behind Crimeline Hollywood
          </p>
        </div>
      </section>

      {/* INGREDIENTS LIST */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <FadeInUp className="text-center mb-16">
            <span className="gold-label block mb-3">Recipe for a Thriller</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">The Perfect Crime Fiction</h2>
          </FadeInUp>

          <StaggerContainer className="space-y-0" staggerDelay={0.15}>
            {ingredients.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="flex items-center gap-4 py-4 border-b border-gold/15 group hover:bg-gold/5 px-4 rounded-lg transition-all"
                  whileHover={{ x: 8 }}
                >
                  <span className="text-gold font-playfair text-lg font-bold w-8">{i + 1}.</span>
                  <span className="font-cormorant text-xl text-foreground group-hover:text-primary transition-colors">{item}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* RECIPE CARD */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <FadeInUp>
            <motion.div
              className="bg-card max-w-lg rounded-xl shadow-2xl p-10 border-2 border-gold/30 relative overflow-hidden"
              whileHover={{ rotateZ: 0.5, scale: 1.02 }}
            >
              {/* Ornate corners */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold/50" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold/50" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold/50" />

              <div className="text-center">
                <span className="gold-label text-[10px] block mb-2">Thomas Collins Presents</span>
                <h3 className="font-playfair text-3xl font-black italic text-primary mb-2">Crimeline Hollywood</h3>
                <div className="w-16 h-[1px] bg-gold mx-auto mb-4" />
                <p className="font-cormorant text-lg italic text-foreground/60 mb-6">
                  "A recipe for the perfect Hollywood mystery"
                </p>
                <div className="text-left space-y-2 mb-6">
                  <p className="font-lato text-sm text-foreground/70"><span className="text-gold font-bold">Prep Time:</span> Years of insider experience</p>
                  <p className="font-lato text-sm text-foreground/70"><span className="text-gold font-bold">Cook Time:</span> One breathless read</p>
                  <p className="font-lato text-sm text-foreground/70"><span className="text-gold font-bold">Serves:</span> Mystery lovers everywhere</p>
                  <p className="font-lato text-sm text-foreground/70"><span className="text-gold font-bold">Difficulty:</span> Impossible to put down</p>
                </div>
                <div className="w-full h-[1px] bg-gold/30 mb-4" />
                <p className="font-cormorant text-sm italic text-muted-foreground">
                  Best enjoyed with a glass of champagne and the Hollywood hills in view.
                </p>
              </div>
            </motion.div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
};

export default BookIngredients;

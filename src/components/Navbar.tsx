import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const insiderPages = [
  { name: "The Astrology of Characters", path: "/the-astrology-of-hollywood-crimeliness-central-characters" },
  { name: "Dash's Escape from Hollywood", path: "/dashs-escape-from-hollywood" },
  { name: "Book Ingredients", path: "/book-ingredients" },
  { name: "A Tale Told By the Tabloids", path: "/a-tale-told-by-the-tabloids" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Crimeline Hollywood", path: "/crimeline-hollywood" },
  { name: "Insider's Story", path: null, children: insiderPages },
  { name: "Free Chapter", path: "/free-chapter" },
  { name: "Press", path: "/press" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-cream/95 backdrop-blur-md border-b border-gold/30 shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start leading-none">
            <span className="font-playfair text-2xl font-black tracking-wide text-foreground">CRIMELINE</span>
            <span className="gold-label text-[10px] tracking-[0.4em]">HOLLYWOOD</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-lato font-medium text-foreground hover:text-primary transition-colors relative group">
                    {link.name}
                    <ChevronDown size={14} />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-cream rounded-lg border border-gold/20 shadow-xl p-4 space-y-1"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm font-lato text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path!}
                  className="text-sm font-lato font-medium text-foreground hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              )
            )}
            <Link
              to="/free-chapter"
              className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-full border border-gold/40 hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Read a Free Chapter
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-foreground z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-cream flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) =>
              link.children ? (
                <div key={link.name} className="flex flex-col items-center gap-3">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="font-playfair text-2xl text-foreground gold-label !text-base"
                  >
                    {link.name}
                  </motion.span>
                  {link.children.map((child, j) => (
                    <motion.div
                      key={child.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (i + j * 0.5) * 0.1 }}
                    >
                      <Link to={child.path} className="font-lato text-lg text-foreground/70 hover:text-primary transition-colors">
                        {child.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={link.path!} className="font-playfair text-3xl text-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              )
            )}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <Link
                to="/free-chapter"
                className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full border border-gold/40"
              >
                Read a Free Chapter
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

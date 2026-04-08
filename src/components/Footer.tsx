import { Link } from "react-router-dom";
import { Facebook, Star } from "lucide-react";
import { FadeInUp } from "./animations";

const Footer = () => {
  return (
    <footer className="bg-cream border-t border-gold/30 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo + Tagline */}
            <div>
              <Link to="/" className="inline-block">
                <span className="font-playfair text-2xl font-black text-foreground block">CRIMELINE</span>
                <span className="gold-label text-[10px] tracking-[0.4em]">HOLLYWOOD</span>
              </Link>
              <p className="mt-4 font-cormorant text-lg text-muted-foreground italic">
                Hollywood's Most Dangerous Astrologer. A crime fiction novel by Thomas Collins.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="gold-label mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "Crimeline Hollywood", path: "/crimeline-hollywood" },
                  { name: "Free Chapter", path: "/free-chapter" },
                  { name: "Press", path: "/press" },
                  { name: "Contact", path: "/contact" },
                ].map((link) => (
                  <Link key={link.path} to={link.path} className="block text-sm font-lato text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="gold-label mb-4">Follow</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:rotate-12">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all hover:rotate-12">
                  <Star size={18} />
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-lato">
                Stay connected for updates on Thomas Collins' latest works.
              </p>
            </div>
          </div>
        </FadeInUp>

        <div className="border-t border-gold/20 pt-6 text-center">
          <p className="text-xs text-muted-foreground font-lato">
            © 2026 Author Thomas Collins. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

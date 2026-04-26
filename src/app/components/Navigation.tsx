import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Campaigns", path: "/campaigns" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Process", path: "/process" },
    { label: "About", path: "/about" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <motion.img
              src="/images/logo.png"
              alt="The Drop Haus"
              className="w-10 h-10 md:w-12 md:h-12"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="text-xl md:text-2xl font-black uppercase tracking-tight hidden sm:block group-hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white">THE</span>
              <span className="text-[#DBEC62]">DROP</span>
              <span className="text-white">HAUS</span>
            </motion.div>
          </Link>

          {/* Menu Center */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase tracking-wider font-bold transition-colors ${
                  location.pathname === item.path
                    ? "text-[#DBEC62]"
                    : "text-white/70 hover:text-[#DBEC62]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Right */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-[#DBEC62] text-black px-6 py-3 rounded-full text-xs md:text-sm uppercase tracking-widest font-bold hover:shadow-[0_0_30px_rgba(219,236,98,0.5)] transition-shadow"
            >
              Start Your Drop
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

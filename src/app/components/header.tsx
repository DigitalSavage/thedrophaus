import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/work", label: "Work" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-black/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#DBEC62] rounded-full"></div>
            <div className="text-xl uppercase tracking-tight font-black text-black">
              THE DROP HAUS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`uppercase tracking-wide text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-black font-bold"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-black text-white px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-black/80 transition-colors"
            >
              Let's Drop
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`uppercase tracking-wide text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-black font-bold"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-black text-white px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-black/80 transition-colors text-center"
            >
              Let's Drop
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
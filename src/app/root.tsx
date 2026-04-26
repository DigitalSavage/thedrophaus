import { Outlet } from "react-router";
import { Navigation } from "./components/Navigation";
import { Link } from "react-router";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export function Root() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Outlet />
      
      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/logo.png" alt="The Drop Haus" className="w-12 h-12" />
                <div className="text-xl font-black uppercase">
                  <span className="text-white">THE</span>
                  <span className="text-[#DBEC62]">DROP</span>
                  <span className="text-white">HAUS</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Where brands become drops.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Navigate</h4>
              <nav className="space-y-3">
                {[
                  { label: "Home", path: "/" },
                  { label: "Campaigns", path: "/campaigns" },
                  { label: "Services", path: "/services" },
                  { label: "Industries", path: "/industries" },
                  { label: "Process", path: "/process" },
                  { label: "About", path: "/about" },
                  { label: "Contact", path: "/contact" }
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-white/60 hover:text-[#DBEC62] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Stay Connected</h4>
              <div className="flex gap-4 mb-6">
                <a
                  href="#"
                  className="text-white/60 hover:text-[#DBEC62] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#DBEC62] transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#DBEC62] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-[#DBEC62] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-3">Join the Drop List</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm flex-1 focus:outline-none focus:border-[#DBEC62] transition-colors"
                  />
                  <button className="bg-[#DBEC62] text-black px-6 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(219,236,98,0.5)] transition-shadow">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/40 text-sm">
              © 2025 The Drop Haus™. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
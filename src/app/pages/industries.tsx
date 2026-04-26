import { motion } from "motion/react";
import { Users, Sparkles, Zap, TrendingUp, Rocket, Megaphone, Target, Music } from "lucide-react";

export function Industries() {
  const industries = [
    {
      icon: Users,
      label: "Influencers & Creators",
      description: "Turn your personal brand into a merchandise empire with drops that sell out in hours."
    },
    {
      icon: Sparkles,
      label: "Universities",
      description: "Campus-wide campaigns that transform school spirit into viral moments and sold-out merch."
    },
    {
      icon: Music,
      label: "Music Artists & DJs",
      description: "Tour merch and album drops designed like streetwear collections that fans line up for."
    },
    {
      icon: TrendingUp,
      label: "Sports Teams",
      description: "Limited-edition team gear that creates buzz and generates revenue beyond the field."
    },
    {
      icon: Rocket,
      label: "Tech Startups",
      description: "Launch swag that makes your brand unforgettable at events, conferences, and beyond."
    },
    {
      icon: Megaphone,
      label: "Festivals & Events",
      description: "Event merch that becomes collectibles, extending your brand long after the festival ends."
    },
    {
      icon: Sparkles,
      label: "Nightlife & Venues",
      description: "Exclusive venue merch that turns club-goers into brand ambassadors."
    },
    {
      icon: Target,
      label: "Corporate Brands",
      description: "Promo campaigns reimagined as cultural drops that employees and customers actually want."
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Who We Work With
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6">
            Client Industries
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We engineer hype for brands across every vertical.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#0A0A0A] border border-white/10 p-8 rounded-xl text-center group hover:border-[#DBEC62]/50 transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-12 h-12 text-[#DBEC62] mx-auto mb-6 group-hover:drop-shadow-[0_0_15px_rgba(219,236,98,0.8)]" />
                </motion.div>
                <h3 className="text-xl font-black uppercase text-white mb-4">{industry.label}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-white/60 mb-8">Ready to launch your industry-leading drop?</p>
          <motion.a
            href="/contact"
            className="inline-flex bg-[#DBEC62] text-black px-12 py-6 rounded-full text-lg uppercase tracking-wider items-center gap-3 font-black shadow-[0_0_50px_rgba(219,236,98,0.4)] hover:shadow-[0_0_80px_rgba(219,236,98,0.6)] transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Drop
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

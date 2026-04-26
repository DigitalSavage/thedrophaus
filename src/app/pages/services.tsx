import { motion } from "motion/react";
import { Zap, Users, Rocket, Megaphone, Package, Star, Calendar, Award } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const mainServices = [
    {
      icon: Package,
      title: "Limited-Edition Drops",
      tagline: "Make scarcity work for you",
      description: "We design exclusive promotional merchandise that feels premium, not generic. Every product is crafted to create demand through limited availability and strategic releases.",
      features: [
        "Custom product design",
        "Quality sourcing & production",
        "Packaging & branding",
        "Limited quantity strategy",
      ],
    },
    {
      icon: Users,
      title: "Influencer Collaborations",
      tagline: "Leverage cultural influence",
      description: "Partner with the right creators to amplify your brand. We connect you with influencers who align with your vision and help launch merch campaigns that go viral.",
      features: [
        "Influencer matching & outreach",
        "Co-branded merchandise",
        "Campaign strategy",
        "Performance tracking",
      ],
    },
    {
      icon: Rocket,
      title: "University Campaigns",
      tagline: "Campus culture, elevated",
      description: "Transform university merch from boring bookstore basics to must-have drops. We help student organizations, athletic programs, and campus brands create hype.",
      features: [
        "Student org collaborations",
        "Athletic program drops",
        "Greek life collections",
        "Campus event launches",
      ],
    },
    {
      icon: Megaphone,
      title: "Viral Marketing Strategy",
      tagline: "Engineer social buzz",
      description: "We don't just make products—we create moments. Strategic social media campaigns, countdown launches, and community engagement that turn drops into movements.",
      features: [
        "Social media campaigns",
        "Launch countdown strategy",
        "Community building",
        "Content creation",
      ],
    },
    {
      icon: Calendar,
      title: "Launch Events & Pop-Ups",
      tagline: "Create IRL moments",
      description: "Physical experiences that amplify digital hype. From exclusive VIP launches to large-scale pop-ups, we design events that become cultural moments.",
      features: [
        "Pop-up shop design",
        "VIP launch experiences",
        "Event production",
        "Brand activations",
      ],
    },
    {
      icon: Star,
      title: "PR Drop Kits",
      tagline: "Impress the influencers",
      description: "Curated PR packages designed to generate buzz before your official launch. Premium presentation that gets creators excited to share your drop.",
      features: [
        "Custom packaging design",
        "Strategic gifting lists",
        "Unboxing experience",
        "Follow-up campaigns",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Strategy",
      description: "We analyze your brand, audience, and goals to develop a drop strategy that creates maximum impact and demand.",
    },
    {
      number: "02",
      title: "Design",
      description: "Our team designs products and experiences that feel exclusive, culturally relevant, and impossible to ignore.",
    },
    {
      number: "03",
      title: "Build Hype",
      description: "Strategic teasers, influencer seeding, and community engagement build anticipation before launch day.",
    },
    {
      number: "04",
      title: "Drop",
      description: "Coordinated launch across all channels with real-time monitoring and optimization to maximize sellout velocity.",
    },
    {
      number: "05",
      title: "Amplify",
      description: "Post-launch content, user-generated content campaigns, and community activation that extends the moment.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1568557412756-7d219873dd11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHJ1bm5lciUyMG1vdGlvbiUyMGJsdXJ8ZW58MXx8fHwxNzcyNzcxMjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Motion"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DBEC62]/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-8xl uppercase font-black mb-8">
              <span className="text-white">DROP</span>{" "}
              <span className="text-[#DBEC62]" style={{
                textShadow: '0 0 40px rgba(219, 236, 98, 0.5)',
              }}>CULTURE</span>{" "}
              <span className="text-white">FOR BRANDS</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Full-service drop campaigns that transform promotional merchandise into cultural moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl uppercase font-black mb-6 text-white">
              WHAT WE DO
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every service is designed to create scarcity, excitement, and social buzz.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#DBEC62]/20 p-10 hover:border-[#DBEC62]/60 transition-all group relative overflow-hidden cursor-default"
              >
                {/* Glassmorphic Glow */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-[#DBEC62]/5 rounded-full blur-[60px]"
                  whileHover={{
                    scale: 2,
                    backgroundColor: "rgba(219, 236, 98, 0.15)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DBEC62]/5 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-16 h-16 text-[#DBEC62] mb-6 relative z-10" style={{
                    filter: 'drop-shadow(0 0 10px rgba(219, 236, 98, 0.5))',
                  }} />
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-black uppercase mb-2 text-white relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-[#DBEC62] uppercase tracking-wide mb-6 relative z-10">
                  {service.tagline}
                </p>
                <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                  {service.description}
                </p>
                <div className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0.7, x: 0 }}
                      whileHover={{ opacity: 1, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-[#DBEC62] rounded-full"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-gray-400">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl uppercase font-black mb-6 text-white">
              THE DROP PROCESS
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to sellout, we engineer every step to maximize hype and demand.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center border-l-4 border-[#DBEC62] pl-8 py-6 hover:bg-[#DBEC62]/5 transition-all"
              >
                <div className="text-6xl md:text-8xl font-black text-[#DBEC62]/20 min-w-[120px]">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black uppercase mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642506539297-6021bf65badc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0cyUyMGVuZXJneSUyMG1vdGlvbnxlbnwxfHx8fDE3NzI3NjY0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Athletic energy"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-black uppercase text-white mb-2">
                    ATHLETIC ENERGY
                  </h3>
                  <p className="text-gray-300">
                    Sports teams & athletic programs that need championship-level drops
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden group"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649176061603-6ac565d41eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBtZXJjaGFuZGlzZSUyMGFwcGFyZWx8ZW58MXx8fHwxNzcyNzY2NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Exclusive merchandise"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-black uppercase text-white mb-2">
                    STREETWEAR CULTURE
                  </h3>
                  <p className="text-gray-300">
                    Limited editions that sell out in minutes, not months
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl uppercase font-black mb-6 text-white">
              WHO WE WORK WITH
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Brands and creators that thrive on attention and cultural influence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Social Media Influencers",
              "Universities & Colleges",
              "Nightlife Brands",
              "Music Artists & DJs",
              "Sports Teams",
              "Tech Startups",
              "Fashion Brands",
              "Festivals & Events",
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-[#DBEC62]/30 p-6 text-center hover:bg-[#DBEC62]/5 hover:border-[#DBEC62] transition-all"
              >
                <p className="text-white uppercase tracking-wide">
                  {client}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { motion } from "motion/react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Work() {
  const caseStudies = [
    {
      title: "SOUNDWAVE FESTIVAL",
      category: "Music Festival Drop",
      image: "https://images.unsplash.com/photo-1723449985776-c34189e26f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXIlMjBjb25jZXJ0fGVufDF8fHx8MTc3Mjc2NjQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: {
        sold: "5,000 units",
        time: "2 hours",
        impressions: "8.2M",
      },
      description: "Limited-edition festival merch that sold out before doors opened. Strategic influencer seeding created FOMO that crashed the site.",
      tags: ["Influencer Campaign", "Event Merchandise", "Social Strategy"],
    },
    {
      title: "CAMPUS KINGS",
      category: "University Collection",
      image: "https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzcyNzIxMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: {
        sold: "10,000 units",
        time: "48 hours",
        impressions: "3.5M",
      },
      description: "Transformed generic college merch into premium streetwear drops. Greek life collaboration turned bookstore basics into must-haves.",
      tags: ["University Campaign", "Limited Edition", "Student Collab"],
    },
    {
      title: "NEON NIGHTS",
      category: "Nightlife Brand",
      image: "https://images.unsplash.com/photo-1741099915777-0011cf9fd4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3AtdXAlMjBldmVudCUyMGNyb3dkfGVufDF8fHx8MTc3Mjc2NjQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: {
        sold: "3,000 units",
        time: "90 minutes",
        impressions: "4.8M",
      },
      description: "Pop-up shop activation with VIP early access. Created lines around the block and organic social content that went viral.",
      tags: ["Pop-up Event", "VIP Launch", "Viral Marketing"],
    },
    {
      title: "CREATOR COLLECTIVE",
      category: "Influencer Collaboration",
      image: "https://images.unsplash.com/photo-1635650804494-41f0ecefec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzcyNzY2NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: {
        sold: "7,500 units",
        time: "6 hours",
        impressions: "12.3M",
      },
      description: "Multi-influencer drop featuring exclusive designs from top creators. Pre-launch PR kits generated massive anticipation.",
      tags: ["Influencer Merch", "PR Campaign", "Social Buzz"],
    },
    {
      title: "DIVISION CHAMPIONS",
      category: "Athletic Program",
      image: "https://images.unsplash.com/photo-1642506539297-6021bf65badc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNwb3J0cyUyMGVuZXJneSUyMG1vdGlvbnxlbnwxfHx8fDE3NzI3NjY0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: {
        sold: "8,500 units",
        time: "24 hours",
        impressions: "6.1M",
      },
      description: "Championship celebration drop that turned team pride into cultural statement. Athletic performance meets streetwear aesthetics.",
      tags: ["Sports Merchandise", "Championship Drop", "Team Culture"],
    },
    {
      title: "HYPE STREETWEAR",
      category: "Fashion Brand Launch",
      image: "https://images.unsplash.com/photo-1649176061603-6ac565d41eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjBtZXJjaGFuZGlzZSUyMGFwcGFyZWx8ZW58MXx8fHwxNzcyNzY2NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: {
        sold: "4,200 units",
        time: "3 hours",
        impressions: "9.7M",
      },
      description: "Brand launch campaign with countdown strategy and exclusive access tiers. Created waitlist of 15,000+ before drop day.",
      tags: ["Brand Launch", "Countdown Campaign", "Exclusive Access"],
    },
  ];

  const testimonials = [
    {
      quote: "They turned our basic university merch into something people actually want to wear. Sold out in 2 days.",
      author: "Sarah Chen",
      role: "Student Body President, State University",
    },
    {
      quote: "The Drop Haus understands culture. Our influencer collab generated more buzz than our entire year of marketing.",
      author: "Marcus Williams",
      role: "CMO, NightLife Brand",
    },
    {
      quote: "From strategy to sellout, they engineered every detail. Best marketing investment we've ever made.",
      author: "Jordan Taylor",
      role: "Festival Director, SoundWave",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641138294059-8bbb8f809a54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwY291cnQlMjBzcG9ydHN8ZW58MXx8fHwxNzcyNzA3MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Sports"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#DBEC62]/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-8xl uppercase font-black mb-8">
              <span className="text-[#DBEC62]" style={{
                textShadow: '0 0 40px rgba(57, 255, 20, 0.5)',
              }}>PROVEN</span>{" "}
              <span className="text-white">DROPS.</span>{" "}
              <span className="text-white">REAL</span>{" "}
              <span className="text-[#DBEC62]" style={{
                textShadow: '0 0 40px rgba(57, 255, 20, 0.5)',
              }}>RESULTS.</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              From influencers to universities, festivals to fashion brands—these are the moments we've created.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl uppercase font-black mb-6 text-white">
              CASE STUDIES
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real brands. Real results. Real hype.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden cursor-pointer"
              >
                {/* Image with 3D Effect */}
                <motion.div 
                  className="relative h-[500px] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  <motion.div 
                    className="absolute inset-0 bg-[#DBEC62]/0 group-hover:bg-[#DBEC62]/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glassmorphic Content */}
                  <motion.div 
                    className="absolute inset-0 p-8 flex flex-col justify-end"
                    initial={{ y: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <motion.span 
                        className="inline-block text-[#DBEC62] uppercase tracking-wider text-sm mb-3 backdrop-blur-sm bg-black/30 px-4 py-2 border border-[#DBEC62]/30"
                        whileHover={{ scale: 1.05, borderColor: "rgba(57, 255, 20, 0.6)" }}
                      >
                        {study.category}
                      </motion.span>
                    </div>
                    <motion.h3 
                      className="text-3xl md:text-4xl font-black uppercase mb-4 text-white"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        textShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {study.title}
                    </motion.h3>

                    {/* Stats with Micro-interactions */}
                    <div className="grid grid-cols-3 gap-4 mb-6 backdrop-blur-md bg-black/40 p-4 border border-white/10">
                      <motion.div 
                        whileHover={{ scale: 1.1, y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-black text-[#DBEC62]" style={{
                          textShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
                        }}>
                          {study.stats.sold}
                        </div>
                        <div className="text-gray-400 text-xs uppercase">Sold</div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-black text-[#DBEC62]" style={{
                          textShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
                        }}>
                          {study.stats.time}
                        </div>
                        <div className="text-gray-400 text-xs uppercase">Time</div>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-black text-[#DBEC62]" style={{
                          textShadow: '0 0 10px rgba(57, 255, 20, 0.3)',
                        }}>
                          {study.stats.impressions}
                        </div>
                        <div className="text-gray-400 text-xs uppercase">Reach</div>
                      </motion.div>
                    </div>

                    <motion.p 
                      className="text-gray-300 mb-4 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {study.description}
                    </motion.p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          className="text-xs uppercase tracking-wider border border-[#DBEC62]/30 text-[#DBEC62] px-3 py-1 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.05, 
                            backgroundColor: "rgba(57, 255, 20, 0.1)",
                            borderColor: "rgba(57, 255, 20, 0.6)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Border Glow on Hover */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-[#DBEC62]/0 pointer-events-none"
                    whileHover={{ 
                      borderColor: "rgba(57, 255, 20, 0.5)",
                      boxShadow: "0 0 30px rgba(57, 255, 20, 0.2), inset 0 0 30px rgba(57, 255, 20, 0.05)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#DBEC62]/10 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl uppercase font-black mb-6 text-white">
              THE NUMBERS DON'T LIE
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our drops consistently sell out faster and generate more buzz than traditional promotional campaigns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "98%", label: "Average Sellout Rate", sublabel: "Most drops sell out in under 24 hours" },
              { value: "15M+", label: "Social Impressions", sublabel: "Generated across all campaigns" },
              { value: "500+", label: "Successful Drops", sublabel: "Launched for brands & creators" },
              { value: "4.2x", label: "ROI Average", sublabel: "Compared to traditional merch" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-2 border-[#DBEC62]/20 p-8 hover:border-[#DBEC62]/50 transition-all text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-[#DBEC62] mb-3">
                  {stat.value}
                </div>
                <div className="text-white uppercase tracking-wide mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl uppercase font-black mb-6 text-white">
              WHAT CLIENTS SAY
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 border-[#DBEC62] pl-6 py-4"
              >
                <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-white uppercase tracking-wide mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-20 h-20 text-[#DBEC62] mx-auto mb-8" />
              <h2 className="text-5xl md:text-7xl uppercase font-black mb-8 text-white">
                READY FOR YOUR SELLOUT?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Let's create a drop that becomes the moment everyone's talking about.
              </p>
              <Link
                to="/contact"
                className="inline-flex bg-[#DBEC62] text-black px-12 py-5 text-xl uppercase tracking-wide hover:bg-[#c5d656] transition-all hover:scale-105 items-center gap-2 group"
              >
                Start Your Drop
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
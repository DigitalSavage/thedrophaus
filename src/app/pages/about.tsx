import { motion } from "motion/react";
import { Quote } from "lucide-react";

const imgLogo = "/images/logo.png";

export function About() {
  const testimonials = [
    {
      quote: "The Drop Haus turned our merch into a cultural moment. We sold out in 6 hours and generated 200K impressions.",
      author: "Alex Chen",
      role: "Influencer & Creator",
      industry: "Social Media"
    },
    {
      quote: "This isn't a merch vendor—it's a hype machine. Our university campaign broke every engagement record we had.",
      author: "Sarah Williams",
      role: "Marketing Director",
      industry: "University"
    },
    {
      quote: "They understand drop culture better than anyone. Our festival merch sold out before the event even started.",
      author: "Marcus Rodriguez",
      role: "Festival Founder",
      industry: "Events"
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
          <motion.img
            src={imgLogo}
            alt="The Drop Haus"
            className="w-20 h-20 mx-auto mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            About Us
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6">
            Where Brands<br />Become Drops
          </h1>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-bold">The Drop Haus</span> was born from a simple observation: most brand merchandise is forgettable.
            </p>
            <p>
              Generic pens. Cheap t-shirts. Promo products no one wants. Marketing budgets disappearing into items that create zero attention.
            </p>
            <p className="text-white font-bold">
              We decided to do something different.
            </p>
            <p>
              We studied streetwear culture. Supreme. Off-White. Limited releases. Hype drops. Cultural moments. We realized the same strategies that sell out sneakers in seconds could revolutionize promotional marketing.
            </p>
            <p>
              <span className="text-[#DBEC62] font-bold">The Drop Haus</span> is a campaign studio that engineers scarcity, urgency, and cultural attention for brands. We don't sell merch—we launch drops.
            </p>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto mb-32"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-8 text-center">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#DBEC62]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-[#DBEC62] font-black text-2xl">01</span>
              </div>
              <h3 className="text-white font-black uppercase text-lg mb-2">Scarcity Creates Value</h3>
              <p className="text-white/60 text-sm">Limited editions sell out. Unlimited inventory sits.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#DBEC62]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-[#DBEC62] font-black text-2xl">02</span>
              </div>
              <h3 className="text-white font-black uppercase text-lg mb-2">Hype is Engineered</h3>
              <p className="text-white/60 text-sm">Attention isn't random—it's designed and executed.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#DBEC62]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-[#DBEC62] font-black text-2xl">03</span>
              </div>
              <h3 className="text-white font-black uppercase text-lg mb-2">Culture Moves Fast</h3>
              <p className="text-white/60 text-sm">We stay ahead of trends and leverage cultural moments.</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-white/60">Hear from brands who turned merch into cultural moments.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                className="bg-[#0A0A0A] border border-white/10 p-8 rounded-2xl hover:border-[#DBEC62]/50 transition-all"
              >
                <Quote className="w-10 h-10 text-[#DBEC62] mb-6" />
                <p className="text-white/80 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                  <p className="text-[#DBEC62] text-xs uppercase tracking-wider mt-1">{testimonial.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="text-center mt-20"
        >
          <p className="text-white/60 mb-8 text-lg">Ready to work with us?</p>
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

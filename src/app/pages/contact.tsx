import { motion } from "motion/react";
import { Mail, MessageSquare, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { IntakeModal } from "../components/IntakeModal";

export function Contact() {
  const [isIntakeModalOpen, setIsIntakeModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    audience: "",
    dropType: "",
    timeline: "",
    budget: "",
    message: "",
  });

  // Auto-open intake modal when component mounts
  useEffect(() => {
    setIsIntakeModalOpen(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert("Thanks for reaching out! We'll be in touch within 24 hours to start creating your drop.");
    setFormData({
      name: "",
      email: "",
      brand: "",
      audience: "",
      dropType: "",
      timeline: "",
      budget: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dropTypes = [
    "Limited-Edition Merchandise",
    "Influencer Collaboration",
    "University Campaign",
    "Brand Launch",
    "Event Merchandise",
    "Pop-up Shop",
    "PR Campaign",
    "Not Sure Yet",
  ];

  const timelines = [
    "ASAP (1-2 months)",
    "Planning Ahead (3-6 months)",
    "Long-term (6+ months)",
    "Just Exploring",
  ];

  const budgets = [
    "$10k - $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k+",
    "Not Sure Yet",
  ];

  return (
    <>
      {/* Intake Modal */}
      <IntakeModal isOpen={isIntakeModalOpen} onClose={() => setIsIntakeModalOpen(false)} />

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DBEC62]/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-20 h-20 text-[#DBEC62] mx-auto mb-8" style={{
                filter: 'drop-shadow(0 0 20px rgba(57, 255, 20, 0.6))',
              }} />
            </motion.div>
            <h1 className="text-6xl md:text-8xl uppercase font-black mb-8">
              <span className="text-white">LET'S CREATE</span>{" "}
              <span className="text-[#DBEC62]" style={{
                textShadow: '0 0 40px rgba(57, 255, 20, 0.5)',
              }}>THE HYPE</span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Ready to transform your brand into a cultural moment? Let's talk drops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#DBEC62]/30 p-8 md:p-12"
            >
              <div className="mb-10">
                <h2 className="text-4xl font-black uppercase mb-4 text-white">
                  START YOUR DROP
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours with a custom strategy for your drop campaign.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-white uppercase tracking-wide mb-2">
                      Your Name *
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-[#DBEC62]/30 px-4 py-3 text-white focus:border-[#DBEC62] focus:outline-none transition-colors"
                      placeholder="Enter your name"
                      whileFocus={{ scale: 1.02, borderColor: "rgba(57, 255, 20, 0.8)" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-white uppercase tracking-wide mb-2">
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-[#DBEC62]/30 px-4 py-3 text-white focus:border-[#DBEC62] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.02, borderColor: "rgba(57, 255, 20, 0.8)" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </div>

                {/* Brand & Audience */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-white uppercase tracking-wide mb-2">
                      Brand/Organization *
                    </label>
                    <motion.input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-[#DBEC62]/30 px-4 py-3 text-white focus:border-[#DBEC62] focus:outline-none transition-colors"
                      placeholder="Your brand name"
                      whileFocus={{ scale: 1.02, borderColor: "rgba(57, 255, 20, 0.8)" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-white uppercase tracking-wide mb-2">
                      Target Audience *
                    </label>
                    <motion.input
                      type="text"
                      name="audience"
                      value={formData.audience}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-[#DBEC62]/30 px-4 py-3 text-white focus:border-[#DBEC62] focus:outline-none transition-colors"
                      placeholder="e.g., College students, Gen Z"
                      whileFocus={{ scale: 1.02, borderColor: "rgba(57, 255, 20, 0.8)" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </div>

                {/* Drop Type */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-white uppercase tracking-wide mb-2">
                    Type of Drop *
                  </label>
                  <motion.select
                    name="dropType"
                    value={formData.dropType}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border-2 border-[#DBEC62]/30 px-4 py-3 text-white focus:border-[#DBEC62] focus:outline-none transition-colors"
                    whileFocus={{ scale: 1.02, borderColor: "rgba(57, 255, 20, 0.8)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <option value="">Select a drop type</option>
                    {dropTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>

                {/* Timeline & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-white uppercase tracking-wide mb-2">
                      Timeline *
                    </label>
                    <motion.select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-[#DBEC62]/30 px-4 py-3 text-white focus:border-[#DBEC62] focus:outline-none transition-colors"
                      whileFocus={{ scale: 1.02, borderColor: "rgba(57, 255, 20, 0.8)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </motion.select>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-white uppercase tracking-wide mb-2">
                      Budget Range *
                    </label>
                    <motion.select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border-2 border-[#DBEC62]/30 px-4 py-3 text-white focus:border-[#DBEC62] focus:outline-none transition-colors"
                      whileFocus={{ scale: 1.02, borderColor: "rgba(57, 255, 20, 0.8)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <option value="">Select budget</option>
                      {budgets.map((budget, index) => (
                        <option key={index} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </motion.select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <label className="block text-white uppercase tracking-wide mb-2">
                    Tell Us About Your Vision *
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black border-2 border-[#DBEC62]/30 px-4 py-3 text-white focus:border-[#DBEC62] focus:outline-none transition-colors resize-none"
                    placeholder="What's your drop idea? What kind of hype do you want to create? Any specific goals or challenges?"
                    whileFocus={{ scale: 1.02, borderColor: "rgba(57, 255, 20, 0.8)" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-[#DBEC62] text-black px-8 py-4 text-xl uppercase tracking-wide hover:bg-[#c5d656] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(57, 255, 20, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Send Inquiry</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#DBEC62] pl-8"
            >
              <Mail className="w-12 h-12 text-[#DBEC62] mb-6" />
              <h3 className="text-3xl font-black uppercase mb-4 text-white">
                DIRECT CONTACT
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Prefer to reach out directly? Send us an email and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:hello@thedrophaus.com"
                className="text-[#DBEC62] hover:text-[#c5d656] transition-colors text-lg"
              >
                hello@thedrophaus.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#DBEC62] pl-8"
            >
              <MessageSquare className="w-12 h-12 text-[#DBEC62] mb-6" />
              <h3 className="text-3xl font-black uppercase mb-4 text-white">
                WHAT HAPPENS NEXT?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#DBEC62] rounded-full mt-2 flex-shrink-0"></div>
                  <span>We review your inquiry within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#DBEC62] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Schedule a strategy call to discuss your vision</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#DBEC62] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Receive a custom drop strategy and proposal</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#DBEC62] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Launch your drop and create the moment</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DBEC62]/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="text-4xl md:text-6xl lg:text-7xl font-black uppercase">
              <span className="text-[#DBEC62]">"MAKE</span>{" "}
              <span className="text-white">THE</span>{" "}
              <span className="text-[#DBEC62]">MOMENT."</span>
            </p>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
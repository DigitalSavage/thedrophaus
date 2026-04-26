import { motion } from "motion/react";
import { Sparkles, Palette, TrendingUp, Zap } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "01",
      title: "CONCEPT",
      subtitle: "Find the Cultural Hook",
      icon: Sparkles,
      description: "We start by understanding your brand, audience, and cultural moment. What makes your drop unmissable? We identify the narrative that will drive attention and create urgency.",
      deliverables: ["Market research & audience analysis", "Campaign concept development", "Cultural positioning strategy"]
    },
    {
      number: "02",
      title: "DESIGN",
      subtitle: "Create the Collection",
      icon: Palette,
      description: "Our design team creates limited-edition merchandise that feels like streetwear, not swag. Every detail is intentional—from product selection to graphics to packaging.",
      deliverables: ["Product selection & sourcing", "Graphic design & branding", "Packaging & presentation design"]
    },
    {
      number: "03",
      title: "HYPE",
      subtitle: "Build Anticipation",
      icon: TrendingUp,
      description: "Hype isn't random—it's engineered. We create a pre-launch campaign using influencer seeding, social content, PR kits, and countdown reveals to maximize attention before the drop.",
      deliverables: ["Influencer & creator seeding", "Social media content strategy", "PR kits & teaser campaigns"]
    },
    {
      number: "04",
      title: "DROP",
      subtitle: "Launch and Sell Out",
      icon: Zap,
      description: "Drop day is a cultural event. We coordinate live launches, event activations, real-time social content, and limited-quantity releases designed to sell out fast and create FOMO.",
      deliverables: ["Launch event coordination", "Limited-quantity release strategy", "Real-time social & email campaigns"]
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
            The Process
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6">
            The Drop System
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Four phases that turn brands into cultural moments.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#DBEC62]/50 transition-all">
                  {/* Number Badge */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#DBEC62] rounded-full flex items-center justify-center">
                    <span className="text-black font-black text-2xl">{step.number}</span>
                  </div>

                  <div className="grid md:grid-cols-[200px_1fr] gap-8">
                    {/* Left: Icon & Title */}
                    <div>
                      <Icon className="w-16 h-16 text-[#DBEC62] mb-4" />
                      <h2 className="text-4xl font-black uppercase text-white mb-2">{step.title}</h2>
                      <p className="text-[#DBEC62] font-bold uppercase text-sm tracking-wider">{step.subtitle}</p>
                    </div>

                    {/* Right: Description & Deliverables */}
                    <div>
                      <p className="text-white/70 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-3">Deliverables:</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-[#DBEC62] rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-white/60">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="h-16 w-[2px] bg-gradient-to-b from-[#DBEC62] to-transparent mx-auto my-4"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-white/60 mb-8 text-lg">Ready to engineer your drop?</p>
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

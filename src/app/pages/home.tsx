import { Link } from "react-router";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Target,
  Palette,
  Megaphone,
  Rocket,
  Quote,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
// Removed Figma-specific animation components for deployment compatibility
import { LoadingSequence } from "../components/LoadingSequence";
import { IntakeModal } from "../components/IntakeModal";

// Placeholder images - replace with your actual assets
const imgLogo = "/images/logo.png";
const imgHeroImg = "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&q=80";
const imgSticker21 = "/images/sticker.png";
const imgImage = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"; // University campus
const imgImage1 = "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80";
const imgImage2 = "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80";
const imgImage3 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80";
const imgImage4 = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80";
const imgImage5 = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80";
const imgImage6 = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80";
const imgImage7 = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80";
import svgPaths from "../../imports/svg-flqffgcjji";

export function Home() {
  const [showLoading, setShowLoading] = useState(true);
  const [isIntakeModalOpen, setIsIntakeModalOpen] =
    useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );

  return (
    <>
      {/* Pre-Hero Loading Sequence */}
      {showLoading && (
        <LoadingSequence
          onComplete={() => setShowLoading(false)}
        />
      )}

      {/* Intake Modal */}
      <IntakeModal
        isOpen={isIntakeModalOpen}
        onClose={() => setIsIntakeModalOpen(false)}
      />

      <div className="min-h-screen bg-black">
        {/* Hero Section - Full Screen Black */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20"
        >
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          </div>

          {/* Floating Sticker */}
          <div className="absolute top-20 right-12 z-10 hidden lg:block">
            <motion.img
              src={imgSticker21}
              alt="Sticker"
              className="w-20 h-20 opacity-30"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                rotate: 360
              }}
              transition={{
                opacity: { duration: 3, repeat: Infinity },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-6xl mx-auto"
            >
              {/* Animated Headline */}
              <div className="mb-8">
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span
                    className="block mb-2 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    THIS ISN'T
                  </motion.span>
                  <motion.span
                    className="block mb-2 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    MERCH.
                  </motion.span>
                </motion.h1>

                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.9]"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #DBEC62",
                    textStroke: "2px #DBEC62",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  IT'S A DROP.
                </motion.h1>
              </div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                We design hype-driven merchandise campaigns that
                turn brands into cultural moments.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setIsIntakeModalOpen(true)}
                    className="bg-[#DBEC62] text-black px-10 py-5 rounded-full text-sm md:text-base uppercase tracking-wider font-bold inline-flex items-center gap-3 shadow-[0_0_40px_rgba(219,236,98,0.3)] hover:shadow-[0_0_60px_rgba(219,236,98,0.5)] transition-shadow"
                  >
                    Start a Drop
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/work"
                    className="bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-full text-sm md:text-base uppercase tracking-wider font-bold inline-flex items-center gap-3 hover:border-[#DBEC62] hover:text-[#DBEC62] transition-colors"
                  >
                    View Campaigns
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ opacity }}
          >
            <div className="w-[2px] h-20 bg-gradient-to-b from-[#DBEC62]/60 to-transparent"></div>
          </motion.div>
        </section>

        {/* Problem Section */}
        <section className="py-32 md:py-40 bg-[#0A0A0A] relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <motion.p
                  className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  The Problem
                </motion.p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-10 text-white leading-tight">
                  Most brand merch
                  <br />
                  is invisible.
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                  <p>
                    Cheap pens.
                    <br />
                    Generic t-shirts.
                    <br />
                    Promo products no one wants.
                  </p>
                  <p className="text-white/80">
                    Marketing budgets disappear into items that
                    never create attention.
                  </p>
                  <p className="text-white font-bold">
                    Brands deserve something better.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution Section - Service Pillars */}
        <section className="py-32 md:py-40 bg-black relative">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The Solution
              </motion.p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white">
                We engineer hype.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Drop Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-[#0A0A0A] border border-white/10 p-10 rounded-2xl group hover:border-[#DBEC62]/50 transition-all"
              >
                <div className="w-16 h-16 bg-[#DBEC62]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#DBEC62]/20 transition-colors">
                  <Target className="w-8 h-8 text-[#DBEC62]" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white mb-4">
                  Drop Strategy
                </h3>
                <p className="text-white/60 leading-relaxed">
                  We design marketing campaigns around
                  limited-edition merchandise launches.
                </p>
              </motion.div>

              {/* Merch Design */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-[#0A0A0A] border border-white/10 p-10 rounded-2xl group hover:border-[#DBEC62]/50 transition-all"
              >
                <div className="w-16 h-16 bg-[#DBEC62]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#DBEC62]/20 transition-colors">
                  <Palette className="w-8 h-8 text-[#DBEC62]" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white mb-4">
                  Merch Design
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Premium products built like streetwear
                  collections.
                </p>
              </motion.div>

              {/* Launch Campaigns */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="bg-[#0A0A0A] border border-white/10 p-10 rounded-2xl group hover:border-[#DBEC62]/50 transition-all"
              >
                <div className="w-16 h-16 bg-[#DBEC62]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#DBEC62]/20 transition-colors">
                  <Rocket className="w-8 h-8 text-[#DBEC62]" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white mb-4">
                  Launch Campaigns
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Influencer collaborations, social hype, PR
                  kits, and live drop events.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Drop System - 4 Steps */}
        <section className="py-32 md:py-40 bg-[#0A0A0A] relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The Process
              </motion.p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white">
                The Drop System
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                {
                  number: "01",
                  title: "CONCEPT",
                  desc: "Find the cultural hook.",
                  icon: Sparkles,
                },
                {
                  number: "02",
                  title: "DESIGN",
                  desc: "Create the collection.",
                  icon: Palette,
                },
                {
                  number: "03",
                  title: "HYPE",
                  desc: "Build anticipation.",
                  icon: TrendingUp,
                },
                {
                  number: "04",
                  title: "DROP",
                  desc: "Launch and sell out.",
                  icon: Zap,
                },
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="relative bg-black border border-[#DBEC62]/20 p-8 rounded-2xl group hover:border-[#DBEC62] transition-all"
                  >
                    <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-[#DBEC62]/10 transition-colors">
                      {step.number}
                    </div>
                    <Icon className="w-10 h-10 text-[#DBEC62] mb-6" />
                    <h3 className="text-2xl font-black uppercase text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Campaigns with Real Images */}
        <section className="py-32 md:py-40 bg-black relative">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Case Studies
              </motion.p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6">
                Featured Campaigns
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Real drops. Real results. Real hype.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Campaign 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-[#0A0A0A]">
                  <img
                    src={imgImage}
                    alt="Campaign"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black uppercase text-white group-hover:text-[#DBEC62] transition-colors">
                    University Drop Campaign
                  </h3>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-[#DBEC62] font-bold">
                        120K
                      </p>
                      <p className="text-white/60">
                        Impressions
                      </p>
                    </div>
                    <div>
                      <p className="text-[#DBEC62] font-bold">
                        18 Hours
                      </p>
                      <p className="text-white/60">Sellout</p>
                    </div>
                    <div>
                      <p className="text-[#DBEC62] font-bold">
                        10K
                      </p>
                      <p className="text-white/60">
                        Units Sold
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Campaign 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-[#0A0A0A]">
                  <img
                    src={imgImage1}
                    alt="Campaign"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black uppercase text-white group-hover:text-[#DBEC62] transition-colors">
                    Influencer Collaboration
                  </h3>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-[#DBEC62] font-bold">
                        250K
                      </p>
                      <p className="text-white/60">
                        Impressions
                      </p>
                    </div>
                    <div>
                      <p className="text-[#DBEC62] font-bold">
                        12 Hours
                      </p>
                      <p className="text-white/60">Sellout</p>
                    </div>
                    <div>
                      <p className="text-[#DBEC62] font-bold">
                        15K
                      </p>
                      <p className="text-white/60">
                        Units Sold
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/work"
                  className="inline-flex items-center gap-3 text-[#DBEC62] text-lg font-bold uppercase tracking-wider hover:gap-5 transition-all"
                >
                  View All Campaigns
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cultural Influence Section - Parallax */}
        <section className="py-32 md:py-40 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-3 gap-4 h-full">
              <motion.div
                className="space-y-4"
                initial={{ y: 0 }}
                whileInView={{ y: -50 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                viewport={{ once: false }}
              >
                <img
                  src={imgImage}
                  alt="Event"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src={imgImage3}
                  alt="Campaign"
                  className="w-full h-56 object-cover rounded-lg"
                />
              </motion.div>
              <motion.div
                className="space-y-4 mt-20"
                initial={{ y: 0 }}
                whileInView={{ y: 50 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                viewport={{ once: false }}
              >
                <img
                  src={imgImage1}
                  alt="Influencer"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src={imgImage4}
                  alt="Drop"
                  className="w-full h-44 object-cover rounded-lg"
                />
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ y: 0 }}
                whileInView={{ y: -30 }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                viewport={{ once: false }}
              >
                <img
                  src={imgImage5}
                  alt="Festival"
                  className="w-full h-52 object-cover rounded-lg"
                />
                <img
                  src={imgImage7}
                  alt="Campus"
                  className="w-full h-36 object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase text-white mb-8">
                Culture Moves Fast.
                <br />
                <span className="text-[#DBEC62]">
                  We Move First.
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                From nightlife to campuses, festivals to
                influencer moments—we're where the culture is.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Client Industries */}
        <section className="py-32 md:py-40 bg-[#0A0A0A] relative">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Who We Work With
              </motion.p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white">
                Client Industries
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { label: "Creators", icon: Users },
                { label: "Universities", icon: Sparkles },
                { label: "Music Artists", icon: Zap },
                { label: "Sports Teams", icon: TrendingUp },
                { label: "Tech Startups", icon: Rocket },
                { label: "Festivals", icon: Megaphone },
                { label: "Nightlife", icon: Sparkles },
                { label: "Corporate", icon: Target },
              ].map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-black border border-white/10 p-8 rounded-xl text-center group hover:border-[#DBEC62]/50 transition-all cursor-default"
                  >
                    <Icon className="w-10 h-10 text-[#DBEC62] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-white font-bold uppercase text-sm tracking-wider">
                      {industry.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results Section - Big Numbers */}
        <section className="py-32 md:py-40 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(219,236,98,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(219,236,98,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6">
                Attention is currency.
              </h2>
              <p className="text-xl text-white/60">
                We manufacture it.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  number: "120M+",
                  label: "Social Impressions",
                },
                { number: "40+", label: "Brand Campaigns" },
                { number: "$5M+", label: "Revenue Generated" },
                { number: "98%", label: "Sellout Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="text-center"
                >
                  <motion.p
                    className="text-5xl md:text-6xl lg:text-7xl font-black text-[#DBEC62] mb-4"
                    whileInView={{ scale: [0.8, 1.05, 1] }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-white/60 uppercase tracking-wider text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-32 md:py-40 bg-[#0A0A0A] relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Social Proof
              </motion.p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white">
                What Clients Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote:
                    "The Drop Haus turned our merch into a cultural moment. We sold out in 6 hours.",
                  author: "Alex Chen",
                  role: "Influencer & Creator",
                  metric: "250K Impressions",
                },
                {
                  quote:
                    "This isn't a merch vendor—it's a hype machine. Our campaign broke every record.",
                  author: "Sarah Williams",
                  role: "Marketing Director",
                  metric: "10K Units Sold",
                },
                {
                  quote:
                    "They understand drop culture. Our festival merch sold out before the event started.",
                  author: "Marcus Rodriguez",
                  role: "Festival Founder",
                  metric: "12 Hour Sellout",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="bg-black border border-white/10 p-8 rounded-2xl hover:border-[#DBEC62]/50 transition-all"
                >
                  <Quote className="w-10 h-10 text-[#DBEC62] mb-6" />
                  <p className="text-white/80 leading-relaxed mb-6 text-lg italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-white font-bold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-white/60 text-sm mb-2">
                      {testimonial.role}
                    </p>
                    <p className="text-[#DBEC62] text-xs uppercase tracking-wider font-bold">
                      {testimonial.metric}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Drops Grid */}
        <section className="py-32 md:py-40 bg-black">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.p
                className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Portfolio
              </motion.p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white">
                Latest Drops
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {[
                imgImage2,
                imgImage3,
                imgImage4,
                imgImage5,
                imgImage6,
                imgImage7,
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer bg-black"
                >
                  <img
                    src={img}
                    alt={`Drop ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-bold uppercase flex items-center gap-2">
                      View Drop{" "}
                      <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-40 md:py-52 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(219,236,98,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(219,236,98,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.p
                  className="text-sm uppercase tracking-[0.3em] text-[#DBEC62] mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Ready to Launch?
                </motion.p>

                <h2 className="text-5xl md:text-6xl lg:text-8xl uppercase font-black mb-12 text-white leading-tight">
                  READY TO DROP?
                </h2>

                <p className="text-xl md:text-2xl text-white/70 mb-16 leading-relaxed max-w-3xl mx-auto">
                  Let's build something people won't miss.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => setIsIntakeModalOpen(true)}
                      className="inline-flex bg-[#DBEC62] text-black px-12 py-6 rounded-full text-base md:text-lg uppercase tracking-wider items-center gap-3 font-black shadow-[0_0_50px_rgba(219,236,98,0.4)] hover:shadow-[0_0_80px_rgba(219,236,98,0.6)] transition-shadow"
                    >
                      <span>Start Your Drop</span>
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="inline-flex bg-transparent border-2 border-white/30 text-white px-12 py-6 rounded-full text-base md:text-lg uppercase tracking-wider items-center gap-3 font-black hover:border-[#DBEC62] hover:text-[#DBEC62] transition-colors"
                    >
                      <span>Book Strategy Session</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { IntakeModal } from "../components/IntakeModal";
// Placeholder images - replace with your actual campaign images
const imgImage = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"; // University campus - updated
const imgImage1 = "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80";
const imgImage2 = "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80";
const imgImage3 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80";
const imgImage4 = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80";
const imgImage5 = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80";
const imgImage6 = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80";
const imgImage7 = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80";

export function Campaigns() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const campaigns = [
    { img: imgImage, title: "University Drop Campaign", impressions: "120K", sellout: "18 Hours", units: "10K" },
    { img: imgImage1, title: "Influencer Collaboration", impressions: "250K", sellout: "12 Hours", units: "15K" },
    { img: imgImage2, title: "Music Festival Launch", impressions: "180K", sellout: "24 Hours", units: "8K" },
    { img: imgImage3, title: "Corporate Brand Campaign", impressions: "90K", sellout: "36 Hours", units: "12K" },
    { img: imgImage4, title: "Sports Team Drop", impressions: "200K", sellout: "6 Hours", units: "20K" },
    { img: imgImage5, title: "Startup Launch Event", impressions: "150K", sellout: "48 Hours", units: "5K" },
    { img: imgImage6, title: "Nightlife Venue Merch", impressions: "80K", sellout: "72 Hours", units: "3K" },
    { img: imgImage7, title: "Artist Tour Collection", impressions: "300K", sellout: "8 Hours", units: "25K" },
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
            Portfolio
          </motion.p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6">
            Campaign Showcase
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Real drops. Real results. Real hype.
          </p>
        </motion.div>

        {/* Campaign Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedCampaign(campaign.title);
                setIsModalOpen(true);
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-[#0A0A0A]">
                <img
                  src={campaign.img}
                  alt={campaign.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Hover Overlay with Stats */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-[#DBEC62]/30">
                    <p className="text-white font-bold uppercase text-sm mb-4 text-center">View Campaign</p>
                    <ArrowRight className="w-6 h-6 text-[#DBEC62] mx-auto" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-black uppercase text-white group-hover:text-[#DBEC62] transition-colors">
                  {campaign.title}
                </h3>
                <div className="flex gap-6 text-sm">
                  <div>
                    <p className="text-[#DBEC62] font-bold">{campaign.impressions}</p>
                    <p className="text-white/60">Impressions</p>
                  </div>
                  <div>
                    <p className="text-[#DBEC62] font-bold">{campaign.sellout}</p>
                    <p className="text-white/60">Sellout</p>
                  </div>
                  <div>
                    <p className="text-[#DBEC62] font-bold">{campaign.units}</p>
                    <p className="text-white/60">Units Sold</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      <IntakeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledMessage={selectedCampaign ? `I'm interested in a campaign similar to "${selectedCampaign}". ` : ""}
      />
    </div>
  );
}

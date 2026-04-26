import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ArrowRight, ArrowLeft, Check, AlertCircle } from "lucide-react";

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMessage?: string;
}

export function IntakeModal({ isOpen, onClose, prefilledMessage }: IntakeModalProps) {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    website: "",
    industry: "",
    campaignType: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    social: "",
    depositTier: "",
  });

  const totalSteps = 7;

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateURL = (url: string): boolean => {
    if (!url) return true; // Optional field
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      return true;
    } catch {
      return false;
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (stepNumber) {
      case 1:
        if (!formData.brandName.trim()) {
          newErrors.brandName = "Brand name is required";
        }
        if (formData.website && !validateURL(formData.website)) {
          newErrors.website = "Please enter a valid website URL";
        }
        break;
      case 2:
        if (!formData.industry) {
          newErrors.industry = "Please select an industry";
        }
        break;
      case 3:
        if (!formData.campaignType) {
          newErrors.campaignType = "Please select a campaign type";
        }
        break;
      case 4:
        if (!formData.budget) {
          newErrors.budget = "Please select a budget range";
        }
        break;
      case 5:
        if (!formData.timeline) {
          newErrors.timeline = "Please select a timeline";
        }
        break;
      case 6:
        if (!formData.name.trim()) {
          newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        break;
      case 7:
        if (!formData.depositTier) {
          newErrors.depositTier = "Please select a strategy tier";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (validateStep(step) && step < totalSteps) {
      setStep(step + 1);
      setErrors({});
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(7)) return;

    setIsProcessingPayment(true);

    try {
      // STRIPE PAYMENT INTEGRATION
      // In production, replace this with actual Stripe checkout

      // Example Stripe integration:
      // const response = await fetch('/api/create-checkout-session', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     depositTier: formData.depositTier,
      //     email: formData.email,
      //     customerData: formData,
      //   }),
      // });
      // const { sessionId } = await response.json();
      // const stripe = await loadStripe('your_publishable_key');
      // await stripe.redirectToCheckout({ sessionId });

      // For demo purposes, simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Save lead data to your CRM/database
      console.log('Lead submitted:', formData);

      // TODO: Send data to your backend/CRM (HubSpot, etc.)
      // await fetch('/api/submit-lead', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });

      // Show success screen
      setStep(totalSteps + 1);
      setIsProcessingPayment(false);
    } catch (error) {
      console.error('Payment error:', error);
      setErrors({ payment: 'Payment failed. Please try again.' });
      setIsProcessingPayment(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0A0A0A] border border-white/20 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#0A0A0A] border-b border-white/10 p-6 z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-black uppercase text-white">
                    {step <= totalSteps ? "Start Your Drop" : "Drop Confirmed"}
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Progress Bar */}
                {step <= totalSteps && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>Step {step} of {totalSteps}</span>
                      <span>{Math.round((step / totalSteps) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#DBEC62] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Brand Info */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Brand Information</h3>
                        <p className="text-white/60">Tell us about your brand.</p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Brand Name *"
                            value={formData.brandName}
                            onChange={(e) => {
                              updateField("brandName", e.target.value);
                              if (errors.brandName) setErrors({ ...errors, brandName: "" });
                            }}
                            className={`w-full bg-black border rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#DBEC62] transition-colors ${
                              errors.brandName ? "border-red-500" : "border-white/20"
                            }`}
                          />
                          {errors.brandName && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.brandName}
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Website (optional) - e.g., example.com"
                            value={formData.website}
                            onChange={(e) => {
                              updateField("website", e.target.value);
                              if (errors.website) setErrors({ ...errors, website: "" });
                            }}
                            className={`w-full bg-black border rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#DBEC62] transition-colors ${
                              errors.website ? "border-red-500" : "border-white/20"
                            }`}
                          />
                          {errors.website && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.website}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Industry */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Select Your Industry</h3>
                        <p className="text-white/60">What space do you operate in?</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {["Influencer", "University", "Music", "Sports", "Festival", "Startup", "Corporate", "Other"].map((industry) => (
                          <button
                            key={industry}
                            onClick={() => updateField("industry", industry)}
                            className={`p-4 rounded-lg border-2 transition-all ${
                              formData.industry === industry
                                ? "border-[#DBEC62] bg-[#DBEC62]/10 text-white"
                                : "border-white/20 text-white/60 hover:border-white/40"
                            }`}
                          >
                            <span className="font-bold uppercase text-sm">{industry}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Campaign Type */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Campaign Type</h3>
                        <p className="text-white/60">What kind of drop are you planning?</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          { value: "influencer", label: "Influencer Collaboration", desc: "Creator-led drops with social seeding" },
                          { value: "university", label: "University Campaign", desc: "Campus-wide merch and events" },
                          { value: "corporate", label: "Corporate Drop", desc: "Brand activation & employee campaigns" },
                          { value: "event", label: "Event Launch", desc: "Festival, tour, or pop-up merch" },
                        ].map((type) => (
                          <button
                            key={type.value}
                            onClick={() => updateField("campaignType", type.value)}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                              formData.campaignType === type.value
                                ? "border-[#DBEC62] bg-[#DBEC62]/10"
                                : "border-white/20 hover:border-white/40"
                            }`}
                          >
                            <div className="font-bold text-white mb-1">{type.label}</div>
                            <div className="text-sm text-white/60">{type.desc}</div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Budget */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Estimated Budget</h3>
                        <p className="text-white/60">Select your campaign budget range.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {["$10k-$25k", "$25k-$50k", "$50k-$100k", "$100k+"].map((budget) => (
                          <button
                            key={budget}
                            onClick={() => updateField("budget", budget)}
                            className={`p-6 rounded-lg border-2 transition-all ${
                              formData.budget === budget
                                ? "border-[#DBEC62] bg-[#DBEC62]/10 text-white"
                                : "border-white/20 text-white/60 hover:border-white/40"
                            }`}
                          >
                            <span className="font-black text-xl">{budget}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Timeline */}
                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Launch Timeline</h3>
                        <p className="text-white/60">When do you want to drop?</p>
                      </div>
                      <div className="space-y-3">
                        {["ASAP (1-2 weeks)", "1-2 months", "3-6 months", "6+ months"].map((timeline) => (
                          <button
                            key={timeline}
                            onClick={() => updateField("timeline", timeline)}
                            className={`w-full p-4 rounded-lg border-2 transition-all ${
                              formData.timeline === timeline
                                ? "border-[#DBEC62] bg-[#DBEC62]/10 text-white"
                                : "border-white/20 text-white/60 hover:border-white/40"
                            }`}
                          >
                            <span className="font-bold uppercase">{timeline}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 6: Contact Info */}
                  {step === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
                        <p className="text-white/60">How can we reach you?</p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Full Name *"
                            value={formData.name}
                            onChange={(e) => {
                              updateField("name", e.target.value);
                              if (errors.name) setErrors({ ...errors, name: "" });
                            }}
                            className={`w-full bg-black border rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#DBEC62] transition-colors ${
                              errors.name ? "border-red-500" : "border-white/20"
                            }`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={(e) => {
                              updateField("email", e.target.value);
                              if (errors.email) setErrors({ ...errors, email: "" });
                            }}
                            className={`w-full bg-black border rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#DBEC62] transition-colors ${
                              errors.email ? "border-red-500" : "border-white/20"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <input
                          type="tel"
                          placeholder="Phone (optional)"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#DBEC62] transition-colors"
                        />
                        <input
                          type="text"
                          placeholder="Instagram / TikTok Handle (optional)"
                          value={formData.social}
                          onChange={(e) => updateField("social", e.target.value)}
                          className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-[#DBEC62] transition-colors"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 7: Deposit Payment */}
                  {step === 7 && (
                    <motion.div
                      key="step7"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Select Strategy Tier</h3>
                        <p className="text-white/60">Choose your strategy session deposit.</p>
                      </div>
                      <div className="space-y-4">
                        {[
                          { value: "500", label: "Standard Strategy", price: "$500", features: ["1-hour strategy call", "Campaign concept brief", "Budget planning"] },
                          { value: "1000", label: "Priority Strategy", price: "$1,000", features: ["2-hour deep-dive session", "Full campaign roadmap", "Priority timeline", "Market research"] },
                          { value: "2000", label: "VIP Launch Strategy", price: "$2,000", features: ["Full-day workshop", "Complete campaign blueprint", "Influencer strategy", "Launch timeline", "Priority support"] },
                        ].map((tier) => (
                          <button
                            key={tier.value}
                            onClick={() => updateField("depositTier", tier.value)}
                            className={`w-full text-left p-6 rounded-lg border-2 transition-all ${
                              formData.depositTier === tier.value
                                ? "border-[#DBEC62] bg-[#DBEC62]/10"
                                : "border-white/20 hover:border-white/40"
                            }`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <div className="font-black text-white text-lg">{tier.label}</div>
                                <div className="text-[#DBEC62] font-bold text-2xl mt-1">{tier.price}</div>
                              </div>
                              {formData.depositTier === tier.value && (
                                <div className="w-6 h-6 bg-[#DBEC62] rounded-full flex items-center justify-center">
                                  <Check className="w-4 h-4 text-black" />
                                </div>
                              )}
                            </div>
                            <ul className="space-y-1">
                              {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-white/60">
                                  <span className="w-1 h-1 bg-[#DBEC62] rounded-full"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-white/40 text-center">Deposit applies toward full campaign cost</p>
                      {errors.depositTier && (
                        <p className="text-red-500 text-sm text-center flex items-center justify-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.depositTier}
                        </p>
                      )}
                      {errors.payment && (
                        <p className="text-red-500 text-sm text-center flex items-center justify-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.payment}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {/* Confirmation Screen */}
                  {step === totalSteps + 1 && (
                    <motion.div
                      key="confirmation"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-20 h-20 bg-[#DBEC62] rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <Check className="w-10 h-10 text-black" />
                      </motion.div>
                      <h3 className="text-3xl font-black uppercase text-white mb-4">Your Drop Starts Now</h3>
                      <p className="text-white/60 mb-8 max-w-md mx-auto">
                        We've received your information and will reach out within 24 hours to schedule your strategy session.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            // Replace with your Calendly or booking link
                            window.open('https://calendly.com/your-link', '_blank');
                          }}
                          className="bg-[#DBEC62] text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(219,236,98,0.5)] transition-shadow"
                        >
                          Schedule Strategy Call
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            // Replace with your guide PDF or case study link
                            window.open('/case-studies', '_blank');
                          }}
                          className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:border-[#DBEC62] transition-colors"
                        >
                          View Case Studies
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer Navigation */}
              {step <= totalSteps && (
                <div className="sticky bottom-0 bg-[#0A0A0A] border-t border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    {step > 1 ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={prevStep}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                      >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                      </motion.button>
                    ) : (
                      <div />
                    )}

                    {step < totalSteps ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextStep}
                        className="flex items-center gap-2 bg-[#DBEC62] text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider"
                      >
                        Next
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: !isProcessingPayment ? 1.05 : 1 }}
                        whileTap={{ scale: !isProcessingPayment ? 0.95 : 1 }}
                        onClick={handleSubmit}
                        disabled={!formData.depositTier || isProcessingPayment}
                        className="flex items-center gap-2 bg-[#DBEC62] text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessingPayment ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Processing...
                          </>
                        ) : (
                          <>
                            Confirm & Pay ${formData.depositTier}
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

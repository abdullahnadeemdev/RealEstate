import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../../components/shared/PageHeader";
import SectionHeader from "../../components/shared/SectionHeader";
import FeatureItem from "../../components/shared/FeatureItem";

// ── Data ─────────────────────────────────────────────────
const serviceCards = [
  {
    id: 1,
    icon: "🏠",
    title: "Residential New Builds",
    description:
      "We deliver high-quality, energy-efficient new homes built to modern standards, tailored precisely to your needs and vision.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
    features: ["Custom floor plans", "NHBC registered builds", "Energy-efficient design"],
  },
  {
    id: 2,
    icon: "🏢",
    title: "Commercial Fit Out",
    description:
      "We transform commercial spaces into functional, modern environments that reflect your brand and maximise productivity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    features: ["Office fit-outs", "Retail & hospitality", "Industrial spaces"],
  },
  {
    id: 3,
    icon: "📋",
    title: "Project Management",
    description:
      "We oversee every stage of your project with precision—keeping it on time, within budget, and to the highest standard.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    features: ["End-to-end oversight", "Cost control", "Risk management"],
  },
  {
    id: 4,
    icon: "🔨",
    title: "Renovations & Refurbs",
    description:
      "From minor upgrades to full property transformations, our renovation services breathe new life into your spaces.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    features: ["Full property refurbs", "Kitchen & bathroom", "Period property specialists"],
  },
  {
    id: 5,
    icon: "🏗️",
    title: "Extensions",
    description:
      "Whether you're adding space for a growing family or enhancing property value, we create seamless, well-crafted extensions.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
    features: ["Rear & side extensions", "Loft conversions", "Orangeries & garden rooms"],
  },
  {
    id: 6,
    icon: "🔧",
    title: "Maintenance",
    description:
      "Our reliable maintenance team ensures your property remains safe, operational, and looking its best all year round.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    features: ["Planned maintenance", "Emergency call-outs", "PAT testing & compliance"],
  },
];

const featureItems = [
  "NHBC registered construction company",
  "Fully insured and qualified tradespeople on every project",
  "Dedicated project manager assigned to each build",
  "Transparent pricing with no hidden costs",
  "10-year structural warranty on new builds",
  "Strict HSE health and safety compliance",
  "Sustainable materials and green build options",
  "Free initial consultation and detailed quotation",
];

const faqs = [
  {
    q: "How long does a typical new build take?",
    a: "A standard residential new build typically takes 6–12 months from groundworks to completion, depending on specification and size. We provide a detailed programme before work starts.",
  },
  {
    q: "Are you fully insured?",
    a: "Yes. All Mian & Sons projects are covered by comprehensive public liability insurance (£5M) and employer's liability insurance. Copies available on request.",
  },
  {
    q: "Do you handle planning applications?",
    a: "We can assist with planning applications and work closely with local architects and planning consultants to navigate the process seamlessly.",
  },
  {
    q: "What is your project management process?",
    a: "Every project has a dedicated Project Manager who serves as your single point of contact. We use a staged programme with weekly updates and milestone sign-offs.",
  },
  {
    q: "How do you handle unexpected costs on site?",
    a: "We maintain a transparent change-order process. Any variations are agreed in writing before work proceeds, ensuring no surprises on your final invoice.",
  },
];

// ── Component ─────────────────────────────────────────────
const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* 1 — Header */}
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction solutions built around your requirements"
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop"
      />

      {/* 2 — Why Choose Us / Features */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-14 items-center">
          <div className="flex-1">
            <SectionHeader
              eyebrow="Why Mian & Sons"
              title="The Complete Construction Package"
              subtitle="We bring together expert trades, cutting-edge project management, and a client-first ethos to deliver buildings that stand the test of time."
            />
            <ul className="space-y-3">
              {featureItems.map((f, i) => (
                <FeatureItem key={f} delay={i * 0.06}>
                  {f}
                </FeatureItem>
              ))}
            </ul>
          </div>
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-main/10 rounded-2xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=500&fit=crop"
              alt="Construction quality"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 3 — Service Cards */}
      <section className="bg-greyBg py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="What We Do"
            title="Our Core Services"
            subtitle="From a full new build to a planned maintenance contract — we cover it all."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-main/90 rounded-xl flex items-center justify-center text-xl shadow">
                    {card.icon}
                  </div>
                </div>
                {/* Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-prim mb-2">{card.title}</h3>
                  <p className="text-greyLight text-sm leading-relaxed mb-4">{card.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-greyLight">
                        <span className="w-4 h-4 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/#contact"
                    className="inline-block w-full text-center bg-main hover:bg-secondary text-textLight text-sm font-semibold py-2.5 rounded-lg transition-colors duration-300"
                  >
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — FAQ */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to our most common questions."
          center
        />
        <div className="space-y-4 mt-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-greyBg transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-text-prim text-sm pr-4">{faq.q}</span>
                <motion.svg
                  className="w-5 h-5 text-secondary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-greyLight text-sm leading-relaxed bg-white">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5 — CTA */}
      <section className="bg-main text-textLight py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
            Free Consultation
          </p>
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-textLight/70 max-w-md mx-auto mb-8 text-sm">
            Contact us today and let's discuss how we can bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-textLight text-main font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-textLight/40 text-textLight hover:border-textLight font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 text-sm"
            >
              View Our Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

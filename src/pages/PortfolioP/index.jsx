import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../../components/shared/PageHeader";
import SectionHeader from "../../components/shared/SectionHeader";

// ── Project Data ──────────────────────────────────────────
export const projects = [
  {
    id: "riverside-house",
    category: "Residential",
    title: "Riverside Family Home",
    location: "Derby, UK",
    year: "2024",
    size: "250 m²",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    thumb: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
    description:
      "A stunning modern family home on the banks of the Derwent, featuring open-plan living, underfloor heating, and triple-glazed floor-to-ceiling windows.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "oak-manor",
    category: "Residential",
    title: "Oak Manor Luxury Residence",
    location: "Nottingham, UK",
    year: "2023",
    size: "420 m²",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    thumb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    description:
      "A grand five-bedroom residence with a cinema room, heated pool, and landscaped gardens. Completed 2 weeks ahead of schedule.",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "derby-tech-hub",
    category: "Commercial",
    title: "Derby Tech Hub",
    location: "Derby City Centre",
    year: "2024",
    size: "1,200 m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    description:
      "A complete commercial fit-out for a technology campus, including open-plan offices, collaboration hubs, and a ground-floor café.",
    gallery: [
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "meadow-close",
    category: "Residential",
    title: "Meadow Close Development",
    location: "Burton-on-Trent, UK",
    year: "2023",
    size: "8 Units",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    thumb: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop",
    description:
      "An 8-home residential development with a mix of 3 and 4-bedroom detached houses. NHBC registered and rated EPC-B.",
    gallery: [
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1635070033998-64b60c7c8099?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581574919402-5b9d2003a1b5?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "eastgate-retail",
    category: "Commercial",
    title: "Eastgate Retail Fit-Out",
    location: "Leicester, UK",
    year: "2022",
    size: "600 m²",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
    thumb: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop",
    description:
      "A full retail fit-out for a national fashion brand across two floors, delivered in just 10 weeks during trading hours.",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "charnwood-extension",
    category: "Residential",
    title: "Charnwood Rear Extension",
    location: "Loughborough, UK",
    year: "2024",
    size: "80 m²",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop",
    thumb: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=400&h=300&fit=crop",
    description:
      "A wraparound rear extension adding a kitchen-diner and home office, finished with a green sedum roof and bi-fold doors.",
    gallery: [
      "https://images.unsplash.com/photo-1556909114-44e3e9a8eba0?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=500&fit=crop",
    ],
  },
];

const testimonials = [
  {
    quote: "Mian & Sons exceeded every expectation. Our new home is stunning and was delivered on time and on budget.",
    name: "David & Helen Thompson",
    project: "Riverside Family Home",
    rating: 5,
  },
  {
    quote: "The team transformed our office space beyond recognition. Professional, efficient, and friendly throughout.",
    name: "Sarah Mitchell",
    project: "Derby Tech Hub",
    rating: 5,
  },
  {
    quote: "From planning to handover, the communication was excellent. We'd recommend Mian & Sons to anyone.",
    name: "James Patel",
    project: "Charnwood Rear Extension",
    rating: 5,
  },
];

// ── Component ─────────────────────────────────────────────
const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Commercial"];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* 1 — Header */}
      <PageHeader
        title="Our Portfolio"
        subtitle="A selection of our finest completed projects"
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=900&fit=crop"
      />

      {/* 2 — Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <SectionHeader
            eyebrow="Project Gallery"
            title="Featured Work"
          />
          <div className="flex gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-main text-textLight shadow-md scale-105"
                    : "bg-greyBg text-greyLight hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Masonry Gallery */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid mb-6"
              >
                <Link to={`/portfolio/${project.id}`} className="block group">
                  <div className="relative overflow-hidden rounded-2xl shadow-md card-hover">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-56" : "h-64"
                      }`}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBg/90 via-darkBg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                      <span className="text-secondary text-xs font-semibold uppercase tracking-widest mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-textLight font-bold text-lg">{project.title}</h3>
                      <p className="text-textLight/70 text-xs mt-0.5">
                        {project.location} • {project.year}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-secondary text-xs font-semibold">
                        View Project
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>

                    {/* Category pill always visible */}
                    <span className="absolute top-4 left-4 bg-main/85 text-textLight text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4 — Testimonials */}
      <section className="bg-greyBg py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            eyebrow="Client Stories"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from the people we've built for."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-white p-7 rounded-2xl shadow-md flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
                <p className="text-greyLight text-sm leading-relaxed italic flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="font-bold text-text-prim text-sm">{t.name}</p>
                  <p className="text-secondary text-xs">{t.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
          <h2 className="text-4xl font-bold mb-3">Your Project Could Be Next</h2>
          <p className="text-textLight/70 text-sm max-w-md mx-auto mb-8">
            Contact us today to discuss your project and get a free, no-obligation quote.
          </p>
          <Link
            to="/#contact"
            className="bg-textLight text-main font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm inline-block"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;

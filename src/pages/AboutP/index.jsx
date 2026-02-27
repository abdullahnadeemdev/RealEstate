import { motion } from "framer-motion";
import SectionHeader from "../../components/shared/SectionHeader";
import PageHeader from "../../components/shared/PageHeader";
import FeatureItem from "../../components/shared/FeatureItem";
import { homeOutside, homeInterior, projectMange } from "../../assets/images";
import { Link } from "react-router-dom";

// ── Data ────────────────────────────────────────────────
const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "200+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
];

const team = [
  {
    name: "Ahmed Mian",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "40+ years of construction expertise, building the company from the ground up.",
  },
  {
    name: "Omar Mian",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Oversees all site operations and ensures every project meets our quality standards.",
  },
  {
    name: "Sara Mian",
    role: "Project Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Expert in project planning, client relations, and delivering on time.",
  },
  {
    name: "James Carter",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Award-winning architect with a passion for sustainable, modern design.",
  },
];

const awards = [
  { year: "2023", title: "Best Residential Builder", org: "UK Construction Awards" },
  { year: "2022", title: "Excellence in Commercial Build", org: "East Midlands Business Awards" },
  { year: "2020", title: "Top 50 Construction Firms", org: "Construction Today Magazine" },
  { year: "2019", title: "Client Satisfaction Gold Award", org: "HomeBuilder Federation" },
];

const features = [
  "Expert craftsmanship on every project",
  "Fully insured and qualified tradespeople",
  "Transparent, competitive pricing",
  "On-time delivery guarantee",
  "10-year structural warranty",
  "Dedicated project manager assigned",
];

// ── Component ────────────────────────────────────────────
const About = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: "easeOut" },
  });

  return (
    <div>
      {/* 1 — Header */}
      <PageHeader
        title="About Us"
        subtitle="Building trust, delivering excellence since 1983"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop"
      />

      {/* 2 — Identity / Who Are We */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row gap-14 items-center">
          {/* Text */}
          <div className="flex-1">
            <SectionHeader
              eyebrow="Who Are We"
              title="Your Local Construction Specialists"
              subtitle="Mian & Sons Construction has been at the heart of residential and commercial building across the East Midlands for over four decades. We combine traditional craftsmanship with modern techniques to deliver exceptional results."
            />
            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <FeatureItem key={f} delay={i * 0.07}>
                  {f}
                </FeatureItem>
              ))}
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-main hover:bg-secondary text-textLight font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm shadow-md"
            >
              Explore Our Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <motion.div
            className="flex-1 relative"
            {...fadeUp(0.2)}
          >
            <div className="absolute -top-4 -right-4 w-full h-full bg-secondary/15 rounded-2xl -z-10" />
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&h=500&fit=crop"
              alt="Construction team at work"
              className="w-full h-80 md:h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 3 — Stats Bar */}
      <section className="bg-main text-textLight py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-5xl font-extrabold text-textLight">{stat.value}</p>
                <p className="mt-2 text-secondary text-sm font-semibold tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Team Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <SectionHeader
          eyebrow="Our Team"
          title="Meet The People Behind Every Build"
          subtitle="A passionate team of construction professionals with decades of combined experience."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl card-hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-text-prim text-lg">{member.name}</h3>
                <p className="text-secondary text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-greyLight text-xs leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5 — Story / Values */}
      <section className="bg-greyBg py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-14 items-center">
            <motion.div className="flex-1" {...fadeUp()}>
              <img
                src={homeInterior}
                alt="Premium interior"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
            <div className="flex-1">
              <SectionHeader
                eyebrow="Our Philosophy"
                title="Built on Trust, Delivered with Pride"
                subtitle="From the first consultation to the final handover, we maintain open communication, rigorous quality control, and a relentless focus on exceeding client expectations."
              />
              <div className="grid grid-cols-2 gap-6 mt-6">
                {[
                  { icon: "🏗️", label: "Quality First" },
                  { icon: "🤝", label: "Client Focused" },
                  { icon: "⏱️", label: "Always On Time" },
                  { icon: "🌿", label: "Sustainable Builds" },
                ].map((v, i) => (
                  <motion.div
                    key={v.label}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                    {...fadeUp(i * 0.1)}
                  >
                    <span className="text-2xl">{v.icon}</span>
                    <span className="font-semibold text-text-prim text-sm">{v.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Awards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <SectionHeader
          eyebrow="Recognition"
          title="Awards & Achievements"
          subtitle="Our commitment to quality has been recognised across the industry."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              className="flex gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <p className="text-xs text-secondary font-semibold uppercase tracking-widest mb-0.5">
                  {award.year}
                </p>
                <p className="font-bold text-text-prim">{award.title}</p>
                <p className="text-greyLight text-sm">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7 — CTA */}
      <section className="bg-darkBg text-textLight py-20 text-center px-6">
        <motion.div {...fadeUp()}>
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-3">
            Ready to Build?
          </p>
          <h2 className="text-4xl font-bold mb-4">Let's Start Your Project</h2>
          <p className="text-textLight/60 max-w-md mx-auto mb-8 text-sm">
            Contact us today for a free consultation and quote.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-secondary hover:bg-main text-textLight font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get a Free Quote
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

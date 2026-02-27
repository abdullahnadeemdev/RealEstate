import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../PortfolioP";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // If project not found redirect to portfolio
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-text-prim">Project not found</h2>
        <Link to="/portfolio" className="text-secondary underline font-semibold">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Appointment:", { project: project.title, ...form });
    setSubmitted(true);
    setForm({ name: "", email: "", message: "", service: "" });
  };

  // Other projects for related section
  const related = projects.filter((p) => p.id !== id).slice(0, 3);

  return (
    <div>
      {/* 1 — Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkBg/95 via-darkBg/50 to-darkBg/20" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 md:px-12 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-textLight/60 text-xs mb-4">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link>
              <span>/</span>
              <span className="text-secondary">{project.title}</span>
            </div>
            <span className="inline-block bg-secondary/80 backdrop-blur-sm text-textLight text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-textLight leading-tight">
              {project.title}
            </h1>
            <p className="text-textLight/70 mt-2 text-sm">
              {project.location} · {project.year} · {project.size}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2 — Body */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* Main content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold uppercase tracking-widest text-xs mb-3">
              Project Overview
            </p>
            <h2 className="text-3xl font-bold text-text-prim mb-5">
              About This Project
            </h2>
            <p className="text-greyLight leading-relaxed text-base mb-6">
              {project.description}
            </p>
            <p className="text-greyLight leading-relaxed text-base mb-8">
              Our team worked closely with the client from initial design consultation through to final handover, ensuring every detail met the agreed specification. The project was delivered on time and within budget, meeting our stringent quality standards at every stage.
            </p>

            {/* Project meta cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Category", value: project.category },
                { label: "Location", value: project.location },
                { label: "Year", value: project.year },
                { label: "Size", value: project.size },
              ].map((meta) => (
                <div
                  key={meta.label}
                  className="bg-greyBg rounded-xl p-4 text-center"
                >
                  <p className="text-xs text-greyLight uppercase tracking-widest mb-1">
                    {meta.label}
                  </p>
                  <p className="font-bold text-text-prim text-sm">{meta.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar quote */}
          <motion.div
            className="lg:w-72 flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-main rounded-2xl p-7 text-textLight sticky top-24">
              <p className="text-secondary text-xs font-semibold uppercase tracking-widest mb-3">
                Interested in a similar project?
              </p>
              <p className="text-textLight/80 text-sm leading-relaxed mb-5">
                We'd love to discuss how we can create something similar for you. Get in touch for a free consultation.
              </p>
              <div className="space-y-3 text-sm text-textLight/70">
                <p className="flex gap-2">📞 <span>0300-8432834</span></p>
                <p className="flex gap-2">✉ <span>info@miansons.co.uk</span></p>
              </div>
              <a
                href="#cta-form"
                className="mt-5 block text-center bg-secondary hover:bg-accent text-textLight font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 — Gallery */}
      <section className="bg-greyBg py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-secondary font-semibold uppercase tracking-widest text-xs mb-4 text-center">
            Project Gallery
          </p>
          <h2 className="text-3xl font-bold text-text-prim text-center mb-10">
            Images from the Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-2xl shadow-md card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — CTA / Appointment Form */}
      <section id="cta-form" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left — info */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold uppercase tracking-widest text-xs mb-3">
              Start Your Project
            </p>
            <h2 className="text-4xl font-bold text-text-prim mb-4">
              Book a Free Consultation
            </h2>
            <p className="text-greyLight leading-relaxed text-base mb-6">
              Inspired by this project? Let's discuss how we can create something exceptional for you. Fill in the form and we'll be in touch within 24 hours.
            </p>
            <div className="space-y-4 text-sm">
              {[
                { emoji: "🏗️", text: "Free site visit and assessment" },
                { emoji: "📋", text: "Detailed specification and quote" },
                { emoji: "🤝", text: "No obligation — just great advice" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-greyLight">
                  <span className="text-xl">{item.emoji}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <span className="text-5xl">🎉</span>
                <h3 className="text-2xl font-bold text-text-prim mt-4 mb-2">
                  Thank You!
                </h3>
                <p className="text-greyLight text-sm">
                  We've received your enquiry and will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-secondary underline text-sm font-semibold"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-greyLight mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="John Smith"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text-prim focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-greyLight mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="john@example.com"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text-prim focus:outline-none focus:ring-2 focus:ring-secondary/40 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-greyLight mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-greyLight focus:outline-none focus:ring-2 focus:ring-secondary/40 transition bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option>New Builds</option>
                    <option>Commercial Fit Out</option>
                    <option>Project Management</option>
                    <option>Renovations</option>
                    <option>Extensions</option>
                    <option>Maintenance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-greyLight mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-text-prim focus:outline-none focus:ring-2 focus:ring-secondary/40 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-main hover:bg-secondary text-textLight font-semibold py-3.5 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-md text-sm"
                >
                  Book Free Consultation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* 5 — Related Projects */}
      <section className="bg-greyBg py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-bold text-text-prim mb-8 text-center">
            More Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to={`/portfolio/${p.id}`} className="block group">
                  <div className="relative overflow-hidden rounded-2xl shadow-md card-hover">
                    <img
                      src={p.thumb}
                      alt={p.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBg/80 to-transparent flex flex-col justify-end p-4">
                      <p className="text-textLight font-bold text-sm">{p.title}</p>
                      <p className="text-textLight/60 text-xs">{p.location}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-block bg-main hover:bg-secondary text-textLight font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm shadow-md"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

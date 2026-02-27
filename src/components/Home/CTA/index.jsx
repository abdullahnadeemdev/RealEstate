import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-darkBg text-textLight py-24 px-6 text-center">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
          Let's Talk
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch Today</h2>
        <p className="text-textLight/60 text-base mb-8">
          We are here to assist you with all your construction needs — from a small
          extension to a full commercial development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/portfolio"
            className="bg-secondary hover:bg-main text-textLight font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm"
          >
            View Our Work
          </Link>
          <a
            href="tel:03008432834"
            className="border-2 border-textLight/30 hover:border-secondary text-textLight hover:text-secondary font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 text-sm"
          >
            Call 0300-8432834
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;

import { motion } from "framer-motion";

const SectionHeader = ({ eyebrow, title, subtitle, center = false }) => {
  return (
    <motion.div
      className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow && (
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
          — {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-prim leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-greyLight text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

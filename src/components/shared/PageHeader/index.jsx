import { motion } from "framer-motion";

const PageHeader = ({ title, subtitle, image, height = "50vh" }) => {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-darkBg/80 via-darkBg/60 to-darkBg/80" />

      {/* Content */}
      <motion.div
        className="relative z-20 text-center text-textLight px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
          Mian & Sons Construction
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-textLight/80 text-base md:text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default PageHeader;

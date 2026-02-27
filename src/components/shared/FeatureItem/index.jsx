import { motion } from "framer-motion";

const FeatureItem = ({ children, delay = 0 }) => {
  return (
    <motion.li
      className="flex items-start gap-3 text-greyLight"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
        <svg
          className="w-3 h-3 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-sm md:text-base">{children}</span>
    </motion.li>
  );
};

export default FeatureItem;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { homeInterior } from "../../../assets/images";

const Hero = () => {
  return (
    <div className="relative w-full h-[95vh] bg-darkBg overflow-hidden">
      <img
        src={homeInterior}
        alt="Mian & Sons Construction"
        className="absolute inset-0 h-full w-full object-cover z-0 opacity-60"
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-r from-darkBg/90 via-darkBg/50 to-transparent" />

      <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center px-6 md:px-12">
        <motion.div
          className="max-w-xl text-textLight"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            — House Pioneers Since 1983
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Building Homes,{" "}
            <span className="text-secondary">Shaping Communities</span>
          </motion.h1>

          <motion.p
            className="text-textLight/75 text-base md:text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Delivering premium residential and commercial construction across the
            East Midlands with 40+ years of proven expertise.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link
              to="/services"
              className="bg-secondary hover:bg-accent text-textLight font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm text-center"
            >
              Our Services
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-textLight/50 hover:border-secondary text-textLight hover:text-secondary font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 text-sm text-center"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* trust badges */}
          <motion.div
            className="flex gap-6 mt-10 text-textLight/50 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <span className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-textLight">40+</span>
              <span>Yrs Experience</span>
            </span>
            <span className="w-px bg-textLight/20 self-stretch" />
            <span className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-textLight">500+</span>
              <span>Projects Done</span>
            </span>
            <span className="w-px bg-textLight/20 self-stretch" />
            <span className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-textLight">98%</span>
              <span>Satisfaction</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

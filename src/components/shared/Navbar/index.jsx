import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../../../assets/images";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "glass-nav-scroll shadow-lg" : "glass-nav"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="w-14 h-14 flex-shrink-0 rounded-full bg-white/10 p-1 ring-1 ring-secondary/40 group-hover:ring-secondary transition-all duration-300">
              <img src={Logo} alt="Mian & Sons Logo" className="w-full h-full object-contain" />
            </span>
            <div className="leading-tight">
              <p className="text-textLight font-bold text-xl leading-none tracking-tight">Mian & Sons</p>
              <p className="text-secondary text-xs tracking-widest uppercase">Construction</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 pb-1 group ${
                    isActive(item.path)
                      ? "text-secondary"
                      : "text-textLight/80 hover:text-textLight"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                      isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/portfolio"
              className="bg-secondary hover:bg-main text-textLight text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
            >
              View Our Work
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-0.5 bg-textLight origin-center"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-textLight"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-textLight origin-center"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-nav-scroll border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`block py-3 text-sm font-semibold border-b border-white/10 ${
                      isActive(item.path) ? "text-secondary" : "text-textLight/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-3">
                <Link
                  to="/portfolio"
                  className="block w-full text-center bg-secondary text-textLight text-sm font-semibold px-5 py-3 rounded-lg"
                >
                  View Our Work
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

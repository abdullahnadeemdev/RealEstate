import { Link } from "react-router-dom";
import { Logo } from "../../../assets/images";
import { motion } from "framer-motion";

const quickLinks = ["Home", "About Us", "Services", "Portfolio", "Contact"];
const quickLinkPaths = ["/", "/about", "/services", "/portfolio", "/#contact"];

const serviceLinks = [
  "New Builds",
  "Commercial Fit Out",
  "Project Management",
  "Renovations",
  "Extensions",
  "Maintenance",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkBg text-textLight">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10">
                <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
              </span>
              <div className="leading-tight">
                <p className="font-bold text-lg leading-none">Mian & Sons</p>
                <p className="text-secondary text-xs tracking-wide">Construction</p>
              </div>
            </Link>
            <p className="text-textLight/60 text-sm leading-relaxed">
              Delivering quality residential and commercial construction services
              with a commitment to excellence since 1983.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-textLight font-bold text-base mb-5 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={link}>
                  <Link
                    to={quickLinkPaths[i]}
                    className="text-textLight/60 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-textLight font-bold text-base mb-5 uppercase tracking-widest text-xs">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-textLight/60 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-textLight font-bold text-base mb-5 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-textLight/60">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Builder's Lane, Derby, UK DE1 3AB</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0300-8432834</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@miansons.co.uk</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-textLight/40 uppercase tracking-widest mb-2">Stay Updated</p>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Newsletter signup submitted");
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/15 text-textLight text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                />
                <button
                  type="submit"
                  className="bg-secondary hover:bg-main text-textLight text-xs px-3 py-2 rounded-lg transition-colors"
                >
                  Go
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textLight/40">
          <p>© {currentYear} Mian & Sons Construction. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

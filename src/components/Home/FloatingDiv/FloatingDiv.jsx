import { useState } from "react";
import { motion } from "framer-motion";

const FloatingDiv = () => {
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    console.log("Book an Appointment:", appointmentForm);
    setAppointmentForm({ name: "", email: "", phone: "", service: "" });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email Info:", emailForm);
    setEmailForm({ name: "", email: "", phone: "" });
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-text-prim focus:outline-none focus:ring-2 focus:ring-secondary/40 transition";

  return (
    <motion.div
      className="relative z-10 mx-4 md:mx-auto max-w-5xl -mt-16 rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Left — Book Appointment */}
      <div className="bg-darkBg p-8 text-textLight flex flex-col">
        <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-1">
          Get Started
        </p>
        <h3 className="text-2xl font-bold mb-2">Book an Appointment</h3>
        <p className="text-textLight/60 text-sm mb-6">
          Reach out to discuss how we can turn your vision into reality.
        </p>
        <form onSubmit={handleAppointmentSubmit} className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Full Name"
            value={appointmentForm.name}
            onChange={(e) =>
              setAppointmentForm((p) => ({ ...p, name: e.target.value }))
            }
            className="bg-white/10 border border-white/15 text-textLight placeholder-textLight/40 text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-secondary"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={appointmentForm.email}
            onChange={(e) =>
              setAppointmentForm((p) => ({ ...p, email: e.target.value }))
            }
            className="bg-white/10 border border-white/15 text-textLight placeholder-textLight/40 text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-secondary"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={appointmentForm.phone}
            onChange={(e) =>
              setAppointmentForm((p) => ({ ...p, phone: e.target.value }))
            }
            className="bg-white/10 border border-white/15 text-textLight placeholder-textLight/40 text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-secondary"
          />
          <select
            value={appointmentForm.service}
            onChange={(e) =>
              setAppointmentForm((p) => ({ ...p, service: e.target.value }))
            }
            className="bg-white/10 border border-white/15 text-textLight/70 text-sm rounded-lg px-3 py-2.5 focus:outline-none focus:border-secondary"
          >
            <option value="">Select Service</option>
            <option>New Builds</option>
            <option>Commercial Fit Out</option>
            <option>Project Management</option>
            <option>Renovations</option>
            <option>Extensions</option>
            <option>Maintenance</option>
          </select>
          <button
            type="submit"
            className="mt-auto bg-secondary hover:bg-main text-textLight font-semibold py-3 rounded-lg transition-colors duration-300 text-sm"
          >
            Book Appointment
          </button>
        </form>
        <div className="mt-5 pt-5 border-t border-white/10 text-textLight/50 text-xs flex gap-6">
          <span>📞 0300-8432834</span>
          <span>✉ info@miansons.co.uk</span>
        </div>
      </div>

      {/* Right — Email Info */}
      <div className="bg-white p-8 flex flex-col">
        <p className="text-secondary font-semibold text-xs uppercase tracking-widest mb-1">
          Quick Enquiry
        </p>
        <h3 className="text-2xl font-bold text-text-prim mb-2">Email Info</h3>
        <p className="text-greyLight text-sm mb-6">
          Share your details and we'll get back to you within 24 hours.
        </p>
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 flex-1">
          <div>
            <label className="block text-xs font-semibold text-greyLight mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Smith"
              value={emailForm.name}
              onChange={(e) =>
                setEmailForm((p) => ({ ...p, name: e.target.value }))
              }
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-greyLight mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={emailForm.email}
              onChange={(e) =>
                setEmailForm((p) => ({ ...p, email: e.target.value }))
              }
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-greyLight mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+44 1234 567890"
              value={emailForm.phone}
              onChange={(e) =>
                setEmailForm((p) => ({ ...p, phone: e.target.value }))
              }
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="mt-auto bg-main hover:bg-secondary text-textLight font-semibold py-3 rounded-lg transition-colors duration-300 text-sm"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default FloatingDiv;

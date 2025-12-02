import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://formsubmit.co/info@excelcreativenetwork.com",
 {
        method: "POST",
        body: formData,
      });

      setShowSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full text-gray-800">
      {/* Hero */}
      <section className="relative w-full h-[45vh] bg-black text-white flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contactHero.jpg')" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-6xl font-bold"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
        >
          We’d Love to Hear From You
        </motion.h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Whether you’re looking to discuss a project, request a quote, or just
          ask a question—our team is ready to assist you.
        </p>

        {/* Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <Phone className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+234 806 015 3312</p>
              </div>
            </div>

            <div className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <Mail className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-gray-600">info@excelcreativenetwork.com</p>
              </div>
            </div>

            <div className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <MapPin className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Office Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  P27 Osolo Way, Off International Airport Road,  
                  <br />
                  Ajao Estate, Lagos, Nigeria.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            {/* Formsubmit hidden settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Form Message" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 gap-6 mb-6">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black/40 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black/40 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black/40 outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">How can we help?</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-black/40 outline-none"
                ></textarea>
              </div>
            </div>

            {/* CAPTCHA (Cloudflare Turnstile recommended) */}
            {/* <div className="mb-5">
              <div className="cf-turnstile" data-sitekey="YOUR_SITE_KEY"></div>
            </div> */}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex cursor-pointer items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition w-fit disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-999">
          <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-sm text-center">
            <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We’ll get back to you shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

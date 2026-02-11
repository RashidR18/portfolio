import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { contactAPI } from "../api/config";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await contactAPI.sendMessage(formData);

      if (response.data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Error sending message. Please try again.";
      setError(errorMessage);
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: MdEmail,
      title: "Email",
      value: "rashidali18november@gmail.com",
      link: "mailto:rashidali18november@gmail.com",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/rashid-ali",
      link: "https://www.linkedin.com/in/rashid-ali-a3b30728b/",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/RashidR18",
      link: "https://github.com/RashidR18",
    },
  ];

  return (
    <section id="contact" className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
    }`}>
      {/* Background elements */}
      <div className={`absolute top-40 left-20 w-96 h-96 rounded-full blur-3xl ${
        isDark ? "bg-blue-500/5" : "bg-blue-300/5"
      }`}></div>
      <div className={`absolute bottom-40 right-20 w-96 h-96 rounded-full blur-3xl ${
        isDark ? "bg-purple-500/5" : "bg-purple-300/5"
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border ${
                  isDark
                    ? "bg-green-500/20 border-green-500/50 text-green-400"
                    : "bg-green-100 border-green-300 text-green-700"
                }`}
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border ${
                  isDark
                    ? "bg-red-500/20 border-red-500/50 text-red-400"
                    : "bg-red-100 border-red-300 text-red-700"
                }`}
              >
                ✗ {error}
              </motion.div>
            )}

            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Your Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors disabled:opacity-50 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                    : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-blue-500"
                }`}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors disabled:opacity-50 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                    : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-blue-500"
                }`}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Subject
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={loading}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors disabled:opacity-50 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                    : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-blue-500"
                }`}
                placeholder="Project discussion"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={loading}
                rows="5"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors disabled:opacity-50 resize-none ${
                  isDark
                    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500"
                    : "bg-white border-gray-300 text-black placeholder-gray-400 focus:border-blue-500"
                }`}
                placeholder="Tell me about your project..."
              ></motion.textarea>
            </div>

            <motion.button
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className={`block p-6 rounded-lg border transition-colors duration-300 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:border-blue-500/50"
                    : "bg-white border-gray-300 hover:border-blue-500/50"
                }`}
              >
                <div className="text-4xl mb-3"><method.icon className="text-4xl" /></div>
                <h4 className="font-bold mb-1">{method.title}</h4>
                <p className={`transition-colors hover:text-blue-400 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {method.value}
                </p>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className={`pt-6 border-t ${isDark ? "border-gray-700" : "border-gray-300"}`}>
              <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Follow me on social media</p>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, link: "https://github.com/RashidR18" },
                  { icon: FaLinkedin, link: "https://www.linkedin.com/in/rashid-ali-a3b30728b/" },
                  { icon: MdEmail, link: "mailto:rashidali18november@gmail.com" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-3xl p-3 rounded-lg transition-colors ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    <social.icon className="text-2xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

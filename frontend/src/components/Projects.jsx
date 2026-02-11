import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: "Pizza Point",
      description: "Full-stack pizza ordering platform with real-time order tracking, payment integration, and interactive menu management system.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://pizza-point.onrender.com",
      image: "🍕",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      title: "HospiCare - Patient Portal",
      description: "Comprehensive hospital appointment management system allowing patients to book appointments, view medical history, and manage health records.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      link: "https://hospicarefrontend.vercel.app/",
      image: "🏥",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 3,
      title: "HospiCare - Admin Dashboard",
      description: "Advanced admin dashboard for managing appointments, doctor schedules, patient data, and hospital operations with analytics.",
      tech: ["React", "Express", "MongoDB", "Chart.js"],
      link: "https://hospicaredashboard.vercel.app/",
      image: "📊",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      isDark ? "bg-black text-white" : "bg-white text-black"
    }`}>
      {/* Background elements */}
      <div className={`absolute top-20 -left-40 w-80 h-80 rounded-full blur-3xl ${
        isDark ? "bg-blue-500/10" : "bg-blue-300/10"
      }`}></div>
      <div className={`absolute bottom-20 -right-40 w-80 h-80 rounded-full blur-3xl ${
        isDark ? "bg-purple-500/10" : "bg-purple-300/10"
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
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Showcasing my best work and technical expertise across various domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative rounded-lg overflow-hidden border transition-all duration-300 ${
                isDark
                  ? "bg-gray-900 border-gray-800 hover:border-blue-500/50"
                  : "bg-gray-50 border-gray-300 hover:border-blue-500/50"
              }`}
            >
              {/* Project Card Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Icon */}
                <div className={`text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {project.image}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                        isDark
                          ? "bg-gray-800 text-gray-300 border-gray-700 group-hover:border-blue-500/50"
                          : "bg-gray-200 text-gray-700 border-gray-300 group-hover:border-blue-500/50"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg font-semibold text-white text-center hover:shadow-lg transition-all duration-300`}
                >
                  View Project →
                </motion.a>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${project.color} transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block px-8 py-3 border-2 border-blue-500 rounded-lg font-semibold transition-colors duration-300 ${
              isDark
                ? "text-blue-400 hover:bg-blue-500/10"
                : "text-blue-600 hover:bg-blue-50"
            }`}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { isDark } = useTheme();

  const skills = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
    { category: "Database", items: ["MongoDB", "Mongoose", "Data Modeling", "Optimization"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className={`py-20 relative overflow-hidden transition-colors duration-300 ${
      isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Fresher and pursuing MCA with passion for building scalable, user-centric web solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className={`leading-relaxed text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              I'm a Fresher pursuing my Master's in Computer Applications (MCA) with expertise in Full Stack Web Development. Currently focused on building end-to-end web applications using the MERN stack. I have hands-on experience in designing and implementing real-world projects that solve practical problems.
            </p>
            <p className={`leading-relaxed text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              During my MCA program, I developed multiple projects including a Pizza Ordering System with real-time order tracking, and a Hospital Appointment Management System with patient management and doctor scheduling. These projects strengthened my understanding of database design, API development, and user interface design.
            </p>
            <p className={`leading-relaxed text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              I'm eager to leverage my technical skills and project experience to contribute to innovative solutions. I'm passionate about clean code, responsive design, and creating applications that provide excellent user experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-white transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/168PyQ0KQvIOLYQEIP9MyGD5iAcdw02GI/view"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 border border-blue-500 rounded-lg font-semibold transition-colors ${
                  isDark
                    ? "text-blue-400 hover:bg-blue-500/10"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`p-6 rounded-lg border transition-colors duration-300 ${
                  isDark
                    ? "bg-gray-800 border-gray-700 hover:border-blue-500/50"
                    : "bg-white border-gray-300 hover:border-blue-500/50"
                }`}
              >
                <h3 className="text-lg font-bold text-blue-400 mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Experience & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "Fresher", title: "MCA Student", desc: "Currently pursuing Master's in Computer Applications with focus on MERN Stack" },
              { year: "2+ Projects", title: "Real-World Applications", desc: "Pizza Ordering System & Hospital Appointment Management with production-ready features" },
              { year: "100% Committed", title: "Growth Oriented", desc: "Passionate learner focused on mastering full-stack development and best practices" },
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-lg border transition-colors duration-300 text-center ${
                  isDark
                    ? "bg-black border-gray-800 hover:border-blue-500/50"
                    : "bg-white border-gray-300 hover:border-blue-500/50"
                }`}
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{exp.year}</div>
                <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

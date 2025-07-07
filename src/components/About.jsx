// src/pages/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaUserShield, FaMedal, FaCheckCircle, FaTrophy, FaGraduationCap } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { colors } = useTheme();

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 relative transition-colors duration-300"
             style={{ backgroundColor: colors.primary, color: colors.textPrimary }}>
      {/* Grunge Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/grunge-overlay.png')] bg-repeat opacity-10 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center"
          style={{ color: colors.accent }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Eagle Star Shooting Academy
        </motion.h1>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <motion.img
            src="/Logo1.jpg"
            alt="Academy View"
            className="w-full h-auto rounded-3xl shadow-2xl border-4"
            style={{ borderColor: colors.accent }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
              Established with a passion for excellence, <span className="font-semibold" style={{ color: colors.accent }}>Eagle Star Shooting Academy</span> is a premier institution dedicated to promoting the sport of shooting across India. We offer comprehensive training programs that focus on technical precision, mental discipline, and physical endurance — empowering shooters to rise beyond limits.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: colors.textSecondary }}>
              Whether you're a beginner or an aspiring national champion, our state-of-the-art facilities and national-level coaches ensure you receive elite guidance every step of the way.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
              At Eagle Star, we go beyond training — we build confidence, instill discipline, and sharpen focus.
            </p>
          </motion.div>
        </div>

        {/* Vision / Mission / Core Values */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: <FaBullseye size={80} className="mx-auto" style={{ color: colors.accent }} />,
              title: "Our Vision",
              text: "To become India's leading shooting academy, fostering talent from grassroots to global champions."
            },
            {
              icon: <FaUserShield size={80} className="mx-auto" style={{ color: colors.accent }} />,
              title: "Our Mission",
              text: "To build discipline, resilience, and precision through world-class training and mentorship."
            },
            {
              icon: <FaMedal size={80} className="mx-auto" style={{ color: colors.accent }} />,
              title: "Core Values",
              text: "Excellence, integrity, respect, and safety are the foundation of everything we do at Eagle Star."
            },
          ].map((card, index) => (
            <motion.div 
              key={index} 
              className="rounded-2xl p-6 border transition-all duration-300"
              style={{ 
                backgroundColor: colors.card,
                borderColor: colors.border
              }}
              whileHover={{ y: -5 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.accent;
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div className="mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.accent }}>
                {card.title}
              </h3>
              <p style={{ color: colors.textSecondary }}>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10" style={{ color: colors.accent }}>
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaTrophy className="text-3xl" style={{ color: colors.accent }} />, title: "Olympic Participation", desc: "Esha Singh - Paris 2024" },
              { icon: <FaMedal className="text-3xl" style={{ color: colors.accent }} />, title: "National Champions", desc: "50+ National Level Winners" },
              { icon: <FaGraduationCap className="text-3xl" style={{ color: colors.accent }} />, title: "Students Trained", desc: "500+ Successful Shooters" },
              { icon: <FaCheckCircle className="text-3xl" style={{ color: colors.accent }} />, title: "Years of Excellence", desc: "25+ Years Experience" }
            ].map((achievement, idx) => (
              <div key={idx} 
                   className="rounded-xl p-6 text-center border transition-colors"
                   style={{ 
                     backgroundColor: colors.card,
                     borderColor: colors.border
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.borderColor = colors.accent;
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.borderColor = colors.border;
                   }}>
                <div className="mb-3">{achievement.icon}</div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: colors.accent }}>
                  {achievement.title}
                </h4>
                <p className="text-sm" style={{ color: colors.textSecondary }}>
                  {achievement.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10" style={{ color: colors.accent }}>
            Why Choose Eagle Star Shooting Academy?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "🏅 Experienced and NIS Certified Coaches",
              "🎯 World-Class Shooting Range and Equipment",
              "📈 Individual Progress Tracking and Mental Conditioning",
              "🧠 Focused Psychological and Physical Fitness Training",
              "🏆 Participation in State and National Events",
              "🤝 Mentorship from Shooting Legends",
              "🔒 Advanced Safety Measures and Protocols",
              "💡 Modern Digital Target Systems",
              "🎓 Scholarship Opportunities for Deserving Students"
            ].map((point, idx) => (
              <motion.div 
                key={idx} 
                className="rounded-2xl p-6 border transition-all duration-300"
                style={{ 
                  backgroundColor: colors.card,
                  borderColor: colors.border,
                  color: colors.textSecondary
                }}
                whileHover={{ y: -3 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <p className="text-center">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10" style={{ color: colors.accent }}>
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: "Digital Target Systems", text: "Electronic scoring systems for instant feedback and precise analysis." },
              { title: "Certified Coaching", text: "Nationally certified coaches with proven track records and experience." },
              { title: "Scholarship Opportunities", text: "Financial support and funding assistance for deserving shooters." },
              { title: "Advanced Safety Measures", text: "Strict safety protocols and modern equipment ensure secure training environment." },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="rounded-2xl p-6 border transition-all duration-300"
                style={{ 
                  backgroundColor: colors.card,
                  borderColor: colors.border
                }}
                whileHover={{ y: -5 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <h4 className="text-lg font-semibold mb-3" style={{ color: colors.accent }}>
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beyond the Range */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10" style={{ color: colors.accent }}>
            Beyond the Range
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {[
              { title: "National-Level Collaborations", text: "Partnered with top federations for maximum exposure and opportunities." },
              { title: "Women Empowerment Programs", text: "Special training modules and scholarships dedicated to empowering girls." },
              { title: "Fitness & Wellness Support", text: "Comprehensive fitness and mental strength coaching for holistic development." },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="rounded-2xl p-6 border transition-all duration-300"
                style={{ 
                  backgroundColor: colors.card,
                  borderColor: colors.border
                }}
                whileHover={{ y: -5 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <h4 className="text-lg font-semibold mb-3" style={{ color: colors.accent }}>
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career in Shooting */}
        <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10" style={{ color: colors.accent }}>
            Shooting as a Career
          </h2>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            <div className="text-base sm:text-lg leading-relaxed space-y-4">
              <p className="text-center font-semibold mb-6" style={{ color: colors.accent }}>
                Shooting is more than a sport — it's a focused career that builds discipline, resilience, and national pride.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: colors.accent }}>
                    Career Opportunities:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm" style={{ color: colors.textSecondary }}>
                    <li>Representation at national/international events</li>
                    <li>Selection into Armed Forces via sports quota</li>
                    <li>Government jobs & rewards for medal winners</li>
                    <li>Admission into top colleges through sports quota</li>
                    <li>Future roles in coaching and mentoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: colors.accent }}>
                    Benefits:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm" style={{ color: colors.textSecondary }}>
                    <li>Financial rewards and sponsorships</li>
                    <li>International exposure and travel</li>
                    <li>Personal discipline and mental strength</li>
                    <li>Leadership and teamwork skills</li>
                    <li>Lifelong career in sports administration</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6 font-medium" style={{ color: colors.accent }}>
                At Eagle Star, we guide every shooter toward a strong and sustainable career path.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div className="text-center mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8" style={{ color: colors.accent }}>
            Our Philosophy
          </h2>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: colors.card, borderColor: `${colors.accent}4d` }}>
            <div className="text-lg space-y-4">
              <p className="font-semibold text-xl" style={{ color: colors.accent }}>
                "You don't just shoot — you sharpen your spirit."
              </p>
              <p className="font-semibold text-xl" style={{ color: colors.accent }}>
                "At Eagle Star, we don't just aim — we achieve."
              </p>
              <p className="font-semibold text-xl" style={{ color: colors.accent }}>
                "Focus. Fire. Fly to Victory."
              </p>
              <p className="font-semibold text-xl" style={{ color: colors.accent }}>
                "From First Shot to Podium Stand — We're With You."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center rounded-2xl p-8"
          style={{ 
            background: `linear-gradient(to right, ${colors.accent}, ${colors.accentHover})`,
            color: colors.buttonPrimaryText
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-lg mb-6">Join Eagle Star Shooting Academy and transform your passion into excellence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" 
               className="px-8 py-3 rounded-full font-semibold transition"
               style={{ 
                 backgroundColor: colors.buttonPrimaryText, 
                 color: colors.accent 
               }}>
              Contact Us Today
            </a>
            <a href="/gallery" 
               className="border-2 px-8 py-3 rounded-full font-semibold transition"
               style={{ 
                 borderColor: colors.buttonPrimaryText, 
                 color: colors.buttonPrimaryText 
               }}
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = colors.buttonPrimaryText;
                 e.target.style.color = colors.accent;
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'transparent';
                 e.target.style.color = colors.buttonPrimaryText;
               }}>
              View Our Gallery
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
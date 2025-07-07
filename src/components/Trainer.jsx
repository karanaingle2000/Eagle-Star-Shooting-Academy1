// src/pages/TrainerPage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const trainers = [
  {
    name: 'Mr. Sundar Ghate ',
    title: 'Chief Coach',
    image: '/Director.jpeg',
    bio: 'With 20+ years of experience, Mr.Sundar has trained number of national-level shooters with excellence in air rifle and pistol shooting.',
    quote: 'Discipline, focus, and passion — the formula for champions.'
  },
  {
    name: 'Mr. Akshay Kamble',
    title: 'National Player & NIS certified coach',
    image: '/kamble.jpeg',
    bio: 'Combining physical endurance training with mental resilience, Akshay builds champions from within.',
    quote: 'Train your body, free your mind.'
  },
  {
    name: 'Ms. Tejaswini Kadam',
    title: 'National Player & NIS certified coach',
    image: '/kadam.jpeg',
    bio: 'Tejaswini Kadam is a national-level shooter from Maharashtra and a distinguished University medalist. She earned her credentials as a certified shooting coach from NIS.',
    quote: 'Safety first, success always.'
  },
];

const Trainer = () => {
  const [zoomImage, setZoomImage] = useState(null);
  const { colors } = useTheme();

  return (
    <div className="py-20 px-4 sm:px-6 min-h-screen relative transition-colors duration-300"
         style={{ 
           background: `linear-gradient(to bottom, ${colors.primary}, ${colors.secondary}, ${colors.primary})`,
           color: colors.textPrimary
         }}>
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 tracking-widest uppercase"
        style={{ color: colors.accent }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Expert Trainers
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {trainers.map((trainer, index) => (
          <motion.div
            key={index}
            className="rounded-3xl overflow-hidden shadow-lg border transform transition-transform duration-500"
            style={{ 
              backgroundColor: colors.card,
              borderColor: colors.accent,
              boxShadow: `0 10px 25px ${colors.accent}30`
            }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03) translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 15px 35px ${colors.accent}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = `0 10px 25px ${colors.accent}30`;
            }}
          >
            <div className="w-full h-96 relative cursor-pointer group" onClick={() => setZoomImage(trainer.image)}>
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover rounded-t-3xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5 flex flex-col justify-between min-h-[250px]">
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: colors.accent }}>
                  {trainer.name}
                </h3>
                <p className="text-sm italic mb-3" style={{ color: colors.textSecondary }}>
                  {trainer.title}
                </p>
              </div>
              <p className="text-sm leading-snug mb-3" style={{ color: colors.textSecondary }}>
                {trainer.bio}
              </p>
              <div className="text-sm italic flex items-start gap-2" style={{ color: colors.textMuted }}>
                <FaQuoteLeft style={{ color: colors.accent }} className="mt-1" />
                <span>{trainer.quote}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed Trainer"
            className="max-w-4xl max-h-[90vh] object-contain border-4 rounded-2xl shadow-2xl animate-fadeIn"
            style={{ borderColor: colors.accent }}
          />
        </div>
      )}
    </div>
  );
};

export default Trainer;
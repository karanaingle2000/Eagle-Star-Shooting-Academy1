// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUsers, FaImages, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { colors } = useTheme();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/about', icon: FaInfoCircle, label: 'About' },
    { path: '/trainer', icon: FaUsers, label: 'Trainers' },
    { path: '/gallery', icon: FaImages, label: 'Gallery' },
    { path: '/contact', icon: FaEnvelope, label: 'Contact' }
  ];

  return (
    <header 
      className={`shadow-lg sticky top-0 z-50 border-b-2 transition-all duration-300`}
      style={{
        backgroundColor: scrolled ? `${colors.secondary}f0` : colors.secondary,
        borderBottomColor: colors.borderAccent,
        color: colors.textPrimary,
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src="/Logo1.jpg" 
            alt="Eagle Star Logo"
            className="h-12 w-12 rounded-full border-2 group-hover:scale-110 transition-transform duration-300"
            style={{ borderColor: colors.accent }}
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-wider uppercase leading-tight"
                style={{ color: colors.textPrimary }}>
              Eagle Star 
            </h1>
            <span className="text-sm font-semibold" style={{ color: colors.accent }}>
              Shooting Academy
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold tracking-wide">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link 
              key={path}
              to={path} 
              className={`flex items-center gap-2 transition duration-200 relative group ${
                location.pathname === path ? '' : ''
              }`}
              style={{
                color: location.pathname === path ? colors.accent : colors.textPrimary
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== path) {
                  e.target.style.color = colors.accent;
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== path) {
                  e.target.style.color = colors.textPrimary;
                }
              }}
            >
              <Icon className="text-lg" /> 
              {label}
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  location.pathname === path ? 'w-full' : 'w-0'
                }`}
                style={{ backgroundColor: colors.accent }}
              ></span>
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <ThemeToggle className="ml-4" />
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
            style={{ color: colors.accent }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div 
          className="md:hidden border-t px-6 py-4 space-y-4 text-lg font-medium"
          style={{
            backgroundColor: colors.tertiary,
            borderTopColor: colors.border,
            color: colors.textPrimary
          }}
        >
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link 
              key={path}
              to={path} 
              onClick={toggleMenu} 
              className={`flex items-center gap-3 transition-colors duration-200 py-2 ${
                location.pathname === path ? '' : ''
              }`}
              style={{
                color: location.pathname === path ? colors.accent : colors.textPrimary
              }}
            >
              <Icon className="text-lg" /> 
              {label}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <div className="pt-4" style={{ borderTopColor: colors.border, borderTopWidth: '1px' }}>
            <a 
              href="tel:+918149222003"
              className="flex items-center gap-3 px-4 py-2 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: colors.accent,
                color: colors.buttonPrimaryText
              }}
            >
              <FaEnvelope />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
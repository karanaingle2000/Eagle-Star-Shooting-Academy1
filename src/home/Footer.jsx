import React from 'react';
import {
  FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt,
  FaPhoneAlt, FaEnvelope, FaWhatsapp
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { colors } = useTheme();

  return (
    <footer className="py-10 px-6 mt-12 transition-colors duration-300"
            style={{ backgroundColor: colors.secondary, color: colors.textPrimary }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Academy Info */}
        <div>
          <h2 className="text-xl font-bold mb-3" style={{ color: colors.accent }}>
            Eagle Star Shooting Academy
          </h2>
          <p style={{ color: colors.textSecondary }}>
            Where focus meets precision. Join us to master the art of rifle shooting in a professional and disciplined environment.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold" style={{ color: colors.accent }}>
            Contact Us
          </h3>
          <p className="flex items-start gap-2" style={{ color: colors.textSecondary }}>
            <FaMapMarkerAlt className="text-2xl shrink-0 mt-1" />
            <a
              href="https://www.google.com/maps/place/s4s+technologies/@19.8819787,75.3812552,240m/data=!3m1!1e3!4m6!3m5!1s0x3bdba300124505c1:0xc6075f4dbd1f7b42!8m2!3d19.8823601!4d75.3819897!16s%2Fg%2F11wk2_smd1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              onMouseEnter={(e) => e.target.style.color = colors.accent}
              onMouseLeave={(e) => e.target.style.color = colors.textSecondary}
            >
              Plot NO 23/24 N S Plaza E Sector MIDC Industrial Area Chikalthana, Chhatrapati Sambhaji Nagar 431210, Maharashtra, India
            </a>
          </p>
          <div className="flex items-center gap-2" style={{ color: colors.textSecondary }}>
            <FaPhoneAlt className="text-2xl" />
            <div className="flex flex-col">
              <a href="tel:+918149222003" 
                 className="hover:underline transition-colors"
                 onMouseEnter={(e) => e.target.style.color = colors.accent}
                 onMouseLeave={(e) => e.target.style.color = colors.textSecondary}>
                +91 8149222003
              </a>
              <a href="tel:+919823222202" 
                 className="hover:underline transition-colors"
                 onMouseEnter={(e) => e.target.style.color = colors.accent}
                 onMouseLeave={(e) => e.target.style.color = colors.textSecondary}>
                +91 9823222202
              </a>
            </div>
          </div>
          <p className="flex items-center gap-2" style={{ color: colors.textSecondary }}>
            <FaEnvelope className="text-2xl" />
            <a href="mailto:eaglessacademy@gmail.com" 
               className="hover:underline transition-colors"
               onMouseEnter={(e) => e.target.style.color = colors.accent}
               onMouseLeave={(e) => e.target.style.color = colors.textSecondary}>
              eaglessacademy@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: colors.accent }}>
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: colors.textSecondary }}>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/gallery", label: "Gallery" },
              { href: "/trainer", label: "Trainers" },
              { href: "/contact", label: "Contact" }
            ].map((link, index) => (
              <li key={index}>
                <a href={link.href} 
                   className="hover:underline transition-colors"
                   onMouseEnter={(e) => e.target.style.color = colors.accent}
                   onMouseLeave={(e) => e.target.style.color = colors.textSecondary}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: colors.accent }}>
            Follow Us
          </h3>
          <div className="flex space-x-6">
            {[
              { href: "#", icon: FaFacebookF },
              { href: "https://www.instagram.com/eagle_star_shooting_academy?igsh=OXFoc294cGlhNjN3&utm_source=qr", icon: FaInstagram },
              { href: "https://wa.me/919823222202", icon: FaWhatsapp }
            ].map((social, index) => (
              <a key={index}
                 href={social.href} 
                 className="transition transform hover:scale-125 duration-300 text-3xl"
                 style={{ color: colors.textSecondary }}
                 onMouseEnter={(e) => e.target.style.color = colors.accent}
                 onMouseLeave={(e) => e.target.style.color = colors.textSecondary}>
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm" style={{ color: colors.textMuted }}>
        &copy; {new Date().getFullYear()} Eagle Star Shooting Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
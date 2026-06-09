import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section container section">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand-name">
            <span className="text-gradient">Nicole James</span>
          </div>
          <p className="footer-desc">
            Building digital experiences that are beautiful, functional, and user-centered.
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} Nicole James L. Maloloy-on. All rights reserved.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Backend Development</a></li>
            <li><a href="#">Responsive Design</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Connect</h4>
          <ul>
            <li>
              <Mail size={16} />
              <a href="mailto:nicole@example.com">nicole.james@email.com</a>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+63123456789">+63 912 345 6789</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>Manila, Philippines</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Designed & Built with <Heart size={14} color="#ef4444" fill="#ef4444" /></p>
      </div>
    </footer>
  );
};

export default Footer;

import { Download } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-brand">
        <span className="brand-name text-gradient">Nicole James</span>
        <span className="brand-title">Developer · Designer</span>
      </div>
      
      <ul className="navbar-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="/cv.pdf" className="btn btn-secondary download-btn">
        <Download size={18} /> Download CV
      </a>
    </nav>
  );
};

export default Navbar;

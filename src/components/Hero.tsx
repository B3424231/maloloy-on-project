import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import heroImg from '../assets/portfolio/Nicole James L. Maloloy-on.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section container section animate-fade-in">
      <div className="hero-content">
        <div className="availability-badge">
          <span className="dot"></span> Available for opportunities
        </div>
        
        <h1 className="hero-title">
          Transforming visions into digital <span className="text-gradient">realities.</span>
        </h1>
        
        <p className="hero-subtitle">
          I'm a creative full-stack developer dedicated to building innovative, robust, and visually stunning web applications.
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch <Mail size={18} />
          </a>
        </div>
        
        <div className="hero-social">
          <a href="#" aria-label="GitHub"><FaGithub size={24} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
          <a href="#" aria-label="Website"><FaGlobe size={24} /></a>
          <a href="#" aria-label="Email"><Mail size={24} /></a>
        </div>
      </div>
      
      <div className="hero-image-wrapper">
        <div className="hero-glow"></div>
        <img src={heroImg} alt="Nicole James L. Maloloy-on" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;

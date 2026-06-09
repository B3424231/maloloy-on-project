import { useState } from 'react';
import { Code2, Layers, Server, PenTool, ArrowRight, X } from 'lucide-react';
import './AboutSkills.css';

const AboutSkills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="about" className="about-skills-section container section">
      <div className="about-skills-grid">
        <div className="about-content glass p-8">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a Computer Science student and aspiring full-stack developer with a strong eye for design and user experience. I enjoy building web applications that are not only functional but delightful to use.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="learn-more-link">
            Learn more about me <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="skills-content">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card glass">
              <div className="skill-icon">
                <Code2 size={24} />
              </div>
              <h3>Web Development</h3>
              <p>HTML, CSS, JS, React</p>
            </div>
            
            <div className="skill-card glass">
              <div className="skill-icon">
                <Layers size={24} />
              </div>
              <h3>UI/UX Design</h3>
              <p>Figma, Adobe XD</p>
            </div>
            
            <div className="skill-card glass">
              <div className="skill-icon">
                <Server size={24} />
              </div>
              <h3>Backend</h3>
              <p>Node.js, Express</p>
            </div>
            
            <div className="skill-card glass">
              <div className="skill-icon">
                <PenTool size={24} />
              </div>
              <h3>Tools</h3>
              <p>Git, MongoDB</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <h2 className="section-title" style={{ marginTop: 0 }}>More About Me</h2>
            <div className="modal-body">
              <p>
                I am Nicole James Maloloy-on and I am a BSIT 3D student in Davao del Norte State College.
              </p>
              <p>
                Beyond my coursework, I am deeply passionate about web development and exploring modern frontend frameworks. I enjoy tackling complex logic and creating seamless, interactive user interfaces that look great on any device. 
              </p>
              <p>
                When I'm not coding, I'm constantly learning new design trends and keeping up with the latest industry standards to ensure my projects are both functional and aesthetically pleasing.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSkills;

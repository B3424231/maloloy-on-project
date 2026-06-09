import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import proj1 from '../assets/project/07_real_time_chat_application.png';
import proj2 from '../assets/project/08_ecommerce_product_page.png';
import proj3 from '../assets/project/09_ai_powered_resume_screener.png';
import proj4 from '../assets/project/10_video_conferencing_app.png';
import proj5 from '../assets/project/11_social_media_dashboard.png';
import proj6 from '../assets/project/12_job_portal_with_analytics.png';
import './Projects.css';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Real-Time Chat Application',
    description: 'A seamless real-time chat application with instant messaging and user presence.',
    image: proj1,
    tags: ['React', 'Node.js', 'Socket.io']
  },
  {
    id: 2,
    title: 'ShopEase E-Commerce',
    description: 'Full-stack e-commerce platform with product management and secure checkout.',
    image: proj2,
    tags: ['Next.js', 'Tailwind CSS', 'Stripe']
  },
  {
    id: 3,
    title: 'AI Resume Screener',
    description: 'AI-powered application to screen and match resumes with job descriptions.',
    image: proj3,
    tags: ['Python', 'React', 'OpenAI']
  },
  {
    id: 4,
    title: 'Video Conferencing App',
    description: 'High-quality video conferencing solution for remote teams.',
    image: proj4,
    tags: ['WebRTC', 'React', 'Node.js']
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Comprehensive dashboard for managing multiple social media accounts.',
    image: proj5,
    tags: ['Vue.js', 'Express', 'MongoDB']
  },
  {
    id: 6,
    title: 'Job Portal Analytics',
    description: 'Advanced job portal with analytics for recruiters and job seekers.',
    image: proj6,
    tags: ['React', 'PostgreSQL', 'Chart.js']
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects-section container section">
      <div className="projects-header">
        <h2 className="section-title">Featured Projects</h2>
        <a href="#" className="view-all-link">
          View all projects <ArrowRight size={16} />
        </a>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card glass cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            <div className="project-modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <h2 className="section-title" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              {selectedProject.title}
            </h2>
            <div className="modal-body">
              <p>{selectedProject.description}</p>
              <div className="project-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <p style={{ marginTop: '1rem' }}>
                <strong>Project Details:</strong> This project highlights my ability to build robust applications using modern technologies. It features a responsive design, clean code architecture, and a focus on user experience.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

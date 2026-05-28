import { useEffect, useState } from 'react';
import './App.css';
import AIIntro from './components/AIIntro';


const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

const skillSections = [
  {
    title: 'Programming Languages',
    items: ['C', 'Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'MySQL'],
  },
  {
    title: 'AI / ML',
    items: ['TensorFlow', 'Scikit-Learn', 'NLP', 'Computer Vision'],
  },
];

const projects = [
  {
    title: 'AI-Powered Software Defect Identification System',
    description: 'Predictive analytics for software quality using intelligent defect detection.',
    tags: ['Python', 'ML', 'Flask', 'Data Analysis'],
    github: 'https://github.com/rakshitha/ai-defect-system',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    live: 'https://example.com/ai-defect-system',
  },
  {
    title: 'Lostify - AI-Enhanced Lost & Found Platform',
    description: 'AI-powered solution for efficiently managing lost and found items with intelligent matching and notification systems.',
    tags: ['React', 'tailwind css', 'javascript', 'HTML'],
    github: 'https://github.com/rakshitha/ecommerce-website',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    live: 'https://example.com/ecommerce-website',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Futuristic portfolio built for recruiter-ready presentation and impact.',
    tags: ['React', 'Glassmorphism', 'Animations'],
    github: 'https://github.com/rakshitha/portfolio',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    live: 'https://example.com/portfolio',
  },
];

const certificates = [
  { provider: 'IANT', title: 'C# course offline' },
  { provider: 'SkillBuild', title: 'Communication Skills' },
  { provider: 'Infosys', title: 'Explore Machine learning using python' },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className={`App ${theme}`}>
      {isLoading && (
        <div className="preloader">
          <div className="loader-ring" />
          <p>Launching Rakshitha’s AI portfolio...</p>
        </div>
      )}

      <div className="background-glow" />
      <div className="floating-orbs" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">R</span>
          <div>
            <p>Rakshitha M</p>
            <span>AI & Software Portfolio</span>
          </div>
        </div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <main className="page-content">
        <section className="hero-section" id="hero">
          <div className="hero-copy">
            <div className="eyebadge">Information Science Engineering Student</div>
            <h1>Hi, I’m Rakshitha M</h1>
            <p>
              Futuristic software engineer-in-training blending AI, web technologies and polished product design.
              Ready to deliver recruiter-grade applications and AI-enabled innovation.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#resume">
                Download Resume
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="social-row">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
              <a href="mailto:rakshitha@example.com" aria-label="Email">Email</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
            </div>
          </div>

          <div className="hero-panel">
            <AIIntro />
          </div>
        </section>

        <section className="info-section" id="about">
          <div className="section-head">
            
            <h2>About Rakshitha</h2>
            <p>A premium profile built for top internships, startups and technology teams.</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>College</h3>
              <p>Rao Bahadur Y. Mahabaleswarappa Engineering College(VTU), Bellary</p>
            </div>
            <div className="info-card">
              <h3>Branch</h3>
              <p>Information Science Engineering</p>
            </div>
            <div className="info-card">
              <h3>Interests</h3>
              <p> Web Development, DSA</p>
            </div>
            <div className="info-card">
              <h3>Goal</h3>
              <p>Become a skilled software engineer with strong AI & Web development.</p>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-head">
            
            <h2>Skills</h2>
            <p>Core strengths, modern toolset and AI-ready development capabilities.</p>
          </div>
          <div className="skill-grid">
            {skillSections.map((section) => (
              <div className="skill-card" key={section.title}>
                <h3>{section.title}</h3>
                <div className="skill-list">
                  {section.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-head">
            
            <h2>Projects</h2>
            <p>Selected work that highlights AI, full-stack and futuristic interface capabilities.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-preview">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="preview-label">Preview</div>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} aria-label="GitHub" target="_blank" rel="noreferrer">GitHub</a>
                    <a href={project.live} aria-label="Live preview" target="_blank" rel="noreferrer">Live</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="certificates-section" id="certificates">
          <div className="section-head">
            
            <h2>Certificates</h2>
            <p>Verified credentials from leading learning platforms.</p>
          </div>
          <div className="certificate-carousel">
            {certificates.map((certificate) => (
              <div className="certificate-card" key={certificate.provider}>
                <span>{certificate.provider}</span>
                <h3>{certificate.title}</h3>
                <p>Professional certification in advanced technical skills and AI.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" id="resume">
          <div className="resume-panel">
            <div>
              <span>Resume</span>
              <h2>Download the premium resume for Rakshitha</h2>
              <p>Instant access to the portfolio-ready resume designed for internship and placement recruiters.</p>
            </div>
            <a className="button button-primary button-large" href="#contact">
              Download Resume
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-head">
            
            <h2>Contact</h2>
            <p>Reach out for internships, projects, or recruiter conversations.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info-panel">
              <p>Connect with Rakshitha through professional channels and messaging.</p>
              <div className="contact-card">
                <strong>Email</strong>
                <span>rakshitha@example.com</span>
              </div>
              <div className="contact-card">
                <strong>Phone</strong>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-card">
                <strong>LinkedIn</strong>
                <span>linkedin.com/in/rakshitha</span>
              </div>
              <div className="contact-card">
                <strong>GitHub</strong>
                <span>github.com/rakshitha</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Your email" />
              </label>
              <label>
                Message
                <textarea rows="5" placeholder="Tell me about your opportunity" />
              </label>
              <button type="submit" className="button button-secondary button-full">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer-bar">
        <p>Designed for top recruiters and startups | Rakshitha M</p>
      </footer>
    </div>
  );
}

export default App;

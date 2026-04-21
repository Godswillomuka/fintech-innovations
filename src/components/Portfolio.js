import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Industrial Fleet Branding",
      category: "PRINT",
      images: [
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
        "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
        "https://images.unsplash.com/photo-1581091870622-1e7f8b6c5f44",
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      ],
      captions: [
        "Fleet exterior branding system",
        "Close-up material application",
        "High-durability print finish",
        "Industrial scale mockup",
        "Final deployment result"
      ]
    },
    {
      id: 2,
      title: "Minimal Logo Systems",
      category: "LOGO",
      images: [
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
        "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead",
        "https://images.unsplash.com/photo-1618005198899-1a2b3c4d5e6f",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d",
        "https://images.unsplash.com/photo-1626785774625-ddc7c82a233e"
      ],
      captions: [
        "Primary logo construction",
        "Monogram variations",
        "Grid alignment system",
        "Brand mark exploration",
        "Final logo suite"
      ]
    },
    {
      id: 3,
      title: "TechCorp Identity System",
      category: "BRANDING",
      images: [
        "https://images.unsplash.com/photo-1635405074683-96d6921a2a68",
        "https://images.unsplash.com/photo-1558655146-d09347e92766",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1547658719-da2b51169166",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      ],
      captions: [
        "Brand identity direction",
        "UI system integration",
        "Typography system",
        "Digital interface design",
        "Final brand ecosystem"
      ]
    },
    {
      id: 4,
      title: "SaaS Dashboard UI",
      category: "WEB",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
        "https://images.unsplash.com/photo-1558655146-d09347e92766",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        "https://images.unsplash.com/photo-1545235617-9465d2a55698"
      ],
      captions: [
        "Dashboard analytics view",
        "User flow structure",
        "Component system design",
        "Data visualization layout",
        "Final SaaS product UI"
      ]
    }
  ];

  const filteredProjects =
    filter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">

        {/* HEADER */}
        <div className="portfolio-header">
          <div>
            <h4 className="label">OUR WORK</h4>
            <h2 className="section-title-alt">
              FEATURED <span className="green-text">PROJECTS</span>
            </h2>
          </div>

          <div className="portfolio-filters">
            {['ALL', 'LOGO', 'BRANDING', 'PRINT', 'WEB'].map((cat) => (
              <button
                key={cat}
                className={filter === cat ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="portfolio-item"
              style={{
                backgroundImage: `linear-gradient(rgba(10,17,40,0.2), rgba(10,17,40,0.85)), url(${project.images[0]})`
              }}
            >
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <span className="proj-cat">{project.category}</span>
                  <h3>{project.title}</h3>

                  <div
                    className="view-project"
                    onClick={() => setSelectedProject(project)}
                  >
                    VIEW CASE STUDY →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>

              <h2>{selectedProject.title}</h2>
              <p className="modal-cat">{selectedProject.category}</p>

              <div className="gallery-grid">
                {selectedProject.images.map((img, i) => (
                  <figure key={i} className="gallery-item">
                    <img src={img} alt="" />
                    <figcaption>
                      {selectedProject.captions[i]}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
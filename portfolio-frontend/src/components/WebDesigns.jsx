// src/components/WebDesigns.js
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WebDesigns.css';

gsap.registerPlugin(ScrollTrigger);

const WebDesigns = () => {
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    // Get the backend URL from the environment variable
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    // Fetch data from your deployed backend
    fetch(`${apiUrl}/api/projects`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data); // Set the projects state with data from the backend
      })
      .catch(error => {
        console.error("Failed to fetch projects:", error);
      });

    // You can add the GSAP animation logic here later, after the data is loading correctly.
  }, []);

  return (
    <div className="web-designs-section" ref={sectionRef}>
      <h2>Explore My Website Designs</h2>
      <p className="subtitle">Web UI/UX Design</p>
      <div className="project-grid">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
  );
};

export default WebDesigns;
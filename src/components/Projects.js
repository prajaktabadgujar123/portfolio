import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    margin: 0 0 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #666;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A full-featured e-commerce platform with shopping cart and payment integration.",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      code: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "Firebase", "Material-UI"],
      demo: "#",
      code: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application with real-time data and 5-day forecast.",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "OpenWeather API", "Chart.js"],
      demo: "#",
      code: "#",
    },
  ];

  return (
    <ProjectsSection>
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage image={project.image} />
            <ProjectContent>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <TechStack>
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
                <Link
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </Link>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;

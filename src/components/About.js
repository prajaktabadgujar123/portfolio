import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled(motion.div)`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  h3 {
    margin: 0;
    color: #333;
  }

  p {
    margin: 0.5rem 0 0;
    color: #666;
  }
`;

function About() {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
    { name: "UI/UX", level: "Intermediate" },
  ];

  return (
    <AboutSection>
      <SectionTitle>About Me</SectionTitle>
      <ContentWrapper>
        <AboutText>
          <p>
            I am a passionate web developer with a strong focus on creating
            beautiful and functional user experiences. With several years of
            experience in front-end development, I specialize in building
            responsive and interactive web applications using modern
            technologies.
          </p>
          <p>
            My journey in web development started with a curiosity about how
            websites work, and it has grown into a deep passion for creating
            digital experiences that make a difference.
          </p>
        </AboutText>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </SkillCard>
          ))}
        </SkillsGrid>
      </ContentWrapper>
    </AboutSection>
  );
}

export default About;

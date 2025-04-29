import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import Artwork1 from "../assets/Artwork/art1.jpg";
import Artwork2 from "../assets/Artwork/art2.jpg";
import Artwork3 from "../assets/Artwork/art3.jpg";
import Artwork4 from "../assets/Artwork/art4.jpg";
import Artwork5 from "../assets/Artwork/art5.jpg";

const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Star = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ${twinkle} ${(props) => props.duration}s infinite;
  animation-delay: ${(props) => props.delay}s;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
`;

const StarBackground = () => {
  const stars = Array.from({ length: 150 }).map((_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 3,
    delay: Math.random() * 3,
  }));

  return (
    <>
      {stars.map((star, i) => (
        <Star
          key={i}
          left={star.left}
          top={star.top}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </>
  );
};

const AboutSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  z-index: ${(props) => props.index};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  height: auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

const ArtworkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ArtworkCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    gap: 0.6rem;
  }
`;

const ArtworkImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.3s ease;
  background: white;
  padding: 0.5rem;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`;

const ArtworkTitle = styled.h3`
  color: #333;
  font-size: 1rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Adjust scroll animation values for mobile
  const isMobile = window.innerWidth <= 768;
  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, isMobile ? -50 : -100]
  );
  const card2Y = useTransform(
    scrollYProgress,
    [0.2, 0.5],
    [0, isMobile ? -50 : -100]
  );
  const card3Y = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    [0, isMobile ? -50 : -100]
  );

  return (
    <AboutSection ref={sectionRef}>
      <StarBackground />
      <Card
        style={{ y: card1Y }}
        index={3}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Hello, I'm Prajakta</Title>
        <Description>
          I'm passionate about creating beautiful and user-friendly frontend
          experiences. With a keen eye for design and a love for clean code, I
          strive to build interfaces that are both visually appealing and highly
          functional.
        </Description>
      </Card>

      <Card
        style={{ y: card2Y }}
        index={2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Subtitle>Beyond Coding</Subtitle>
        <Description>
          Outside of work, I enjoy challenging myself with chess and solving
          LeetCode problems to sharpen my problem-solving skills. I'm always
          eager to meet new people and learn from their experiences. In my free
          time, I express my creativity through painting, finding it to be a
          perfect balance to my technical work.
        </Description>
      </Card>

      <Card
        style={{ y: card3Y }}
        index={1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Subtitle>My Artwork</Subtitle>
        <ArtworkGrid>
          <ArtworkCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ArtworkImage src={Artwork1} alt="Artwork 1" />
          </ArtworkCard>
          <ArtworkCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ArtworkImage src={Artwork2} alt="Artwork 2" />
          </ArtworkCard>
          <ArtworkCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ArtworkImage src={Artwork3} alt="Artwork 3" />
          </ArtworkCard>
          <ArtworkCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ArtworkImage src={Artwork4} alt="Artwork 4" />
          </ArtworkCard>
          <ArtworkCard whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <ArtworkImage src={Artwork5} alt="Artwork 5" />
          </ArtworkCard>
        </ArtworkGrid>
      </Card>
    </AboutSection>
  );
}

export default About;

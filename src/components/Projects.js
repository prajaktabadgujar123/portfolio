import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import QkartHome from "../assets/Qkart/QkartHome.png";
import QkartProduct from "../assets/Qkart/QkartProduct.png";
import QkartSignUp from "../assets/Qkart/QkartSignUp.png";
import QkartSignIn from "../assets/Qkart/QkartSignIn.png";
import QkartLoggedIn from "../assets/Qkart/QkartLoggedIn.png";
import QkartAddToCart from "../assets/Qkart/QkartAddToCart.png";
import QkartAddress from "../assets/Qkart/QkartAddress.png";
import QkartOrder from "../assets/Qkart/QkartOrder.png";
import QkartSearch from "../assets/Qkart/QkartSearch.png";
import XflixHome from "../assets/Xflix/XflixHome.png";
import XflixVideo from "../assets/Xflix/XflixVideo.png";
import XflixMoreVideos from "../assets/Xflix/XflixMoreVideos.png";
import XflixUpload from "../assets/Xflix/XflixUpload.png";
import NewsHome from "../assets/News/NewsHome.png";
import NewsAcc from "../assets/News/NewsAcc.png";
import NewsCovid from "../assets/News/NewsCovid.png";
import NewsTech from "../assets/News/NewsTech.png";
import DashboardHome from "../assets/Dashboard/DashboardHome.png";
import DashboardDate from "../assets/Dashboard/DashboardDate.png";
import DashboardGraph from "../assets/Dashboard/DashboardGraph.png";
import ProductHome from "../assets/Product/ProductHome.png";
import ProductPick from "../assets/Product/ProductPick.png";
import ProductVariants from "../assets/Product/ProductVariants.png";
import ProductDrag from "../assets/Product/ProductDrag.png";
import ProductDiscount from "../assets/Product/ProductDiscount.png";
import NodeHome from "../assets/Nodes/NodeHome.png";
import NodeZoom from "../assets/Nodes/NodeZoom.png";
import NodeAttach from "../assets/Nodes/NodeAttach.png";
import NodeColor from "../assets/Nodes/NodeColor.png";
import NodeFont from "../assets/Nodes/NodeFont.png";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 3rem;
  color: white;
`;

const ProjectContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
  min-height: 80vh;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    margin-bottom: 2rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Carousel = styled.div`
  position: relative;
  width: 700px;
  height: 550px;
  perspective: 1000px;
  transform-style: preserve-3d;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    height: 400px;
    perspective: 800px;
  }

  @media (max-width: 480px) {
    width: 95%;
    height: 300px;
    perspective: 600px;
  }
`;

const CardContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 30deg))
    scaleY(calc(1 + var(--abs-offset) * -0.2))
    translateZ(calc(var(--abs-offset) * -15rem))
    translateX(calc(var(--direction) * -3rem));
  filter: blur(calc(var(--abs-offset) * 0.5rem));
  transition: all 0.3s ease-out;
  pointer-events: ${(props) => (props.active ? "auto" : "none")};
  opacity: ${(props) => (Math.abs(props.offset) >= 2 ? "0" : "1")};
  display: ${(props) => (Math.abs(props.offset) > 2 ? "none" : "block")};

  @media (max-width: 768px) {
    transform: rotateY(calc(var(--offset) * 25deg))
      scaleY(calc(1 + var(--abs-offset) * -0.15))
      translateZ(calc(var(--abs-offset) * -10rem))
      translateX(calc(var(--direction) * -2rem));
  }

  @media (max-width: 480px) {
    transform: rotateY(calc(var(--offset) * 20deg))
      scaleY(calc(1 + var(--abs-offset) * -0.1))
      translateZ(calc(var(--abs-offset) * -8rem))
      translateX(calc(var(--direction) * -1.5rem));
  }
`;

const ImageCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const NavButton = styled.button`
  color: #509c87;
  font-size: 2.5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
  transform: translateY(-50%);

  &.left {
    left: -3rem;
  }

  &.right {
    right: -3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;

    &.left {
      left: -1.5rem;
    }

    &.right {
      right: -1.5rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;

    &.left {
      left: -1rem;
    }

    &.right {
      right: -1rem;
    }
  }
`;

const ImageControls = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 3;
`;

const ImageDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "#509c87" : "rgba(80, 156, 135, 0.5)"};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const FlipCard = styled(motion.div)`
  flex: 1;
  perspective: 1000px;
  background: transparent;
  height: 550px;
  min-height: 300px;
  cursor: pointer;
  width: 500px;
  min-width: 300px;
  margin-left: 4rem;

  @media (max-width: 768px) {
    height: 600px;
    width: 100%;
    min-width: 100%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    height: 650px;
    width: 100%;
    min-width: 100%;
    margin-left: 0;
  }
`;

const FlipCardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 300px;
  text-align: left;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${(props) =>
    props.isFlipped &&
    `
    transform: rotateY(180deg);
  `}
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 300px;
  backface-visibility: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const CardFront = styled(CardSide)`
  transform: rotateY(0deg);
`;

const CardBack = styled(CardSide)`
  transform: rotateY(180deg);
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const ProjectDescription = styled.p`
  color: #f0f0f0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const TechTag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const Links = styled.a`
  color: #509c87;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const FlipIndicator = styled.div`
  font-size: 0.8rem;
  color: #888;
  text-align: right;
  margin-top: 1rem;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-top: 0.8rem;
  }
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  color: #f0f0f0;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 0.7rem;
  }

  &::before {
    content: "•";
    color: #509c87;
    font-size: 1.2rem;
    line-height: 1;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const ProjectLink = styled(motion.button)`
  margin: 2rem auto;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: white;
    color: black;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

function Projects() {
  const [flippedCards, setFlippedCards] = useState({});
  const [activeImages, setActiveImages] = useState({});

  const toggleCard = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleImageChange = (projectIndex, imageIndex) => {
    setActiveImages((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }));
  };

  const handleNextImage = (projectIndex) => {
    const currentImage = activeImages[projectIndex] || 0;
    const nextImage = (currentImage + 1) % projects[projectIndex].images.length;
    handleImageChange(projectIndex, nextImage);
  };

  const handlePrevImage = (projectIndex) => {
    const currentImage = activeImages[projectIndex] || 0;
    const prevImage =
      (currentImage - 1 + projects[projectIndex].images.length) %
      projects[projectIndex].images.length;
    handleImageChange(projectIndex, prevImage);
  };

  const projects = [
    {
      title: "E-commerce Website",
      description:
        "QKart is an e-commerce application offering a variety of products for customers to choose from. Implemented the core logic for authentication, shopping cart and checkout. Improved UI by adding responsive design elements for uniform experience across different devices. Utilized REST APIs to dynamically load and render data served by the backend server",
      images: [
        QkartHome,
        QkartProduct,
        QkartSignUp,
        QkartSignIn,
        QkartLoggedIn,
        QkartAddToCart,
        QkartAddress,
        QkartOrder,
        QkartSearch,
      ],
      tech: [
        "React",
        "React Hooks",
        "Forms",
        "Error Handling",
        "REST APIs",
        "Debouncing",
        "Json",
        "Event Handling",
        "Local Storage",
        "React Router",
      ],
      demo: "https://qkart-app.vercel.app/",
      code: "#",
      details: [
        "Implemented user registration with input validations and informative error messages using backend APIs",
        "Set up login flow and routing using React Router, including storing user info in localStorage to persist sessions across revisits",
        "Fetched and displayed product data dynamically using REST APIs and useEffect for faster page load times",
        "Added search functionality with a debounced input field to improve user experience and reduce unnecessary API calls",
        "Built and integrated a shopping cart that updates dynamically with authenticated API calls and supports responsive design for desktop and mobile views",
        "Created a checkout flow with the ability to add and select delivery addresses, utilizing conditional rendering for different page designs",
        "Deployed the QKart website to Netlify and configured it properly to handle SPA (Single Page Application) routing",
        "Enhanced the user interface across the application with responsive design elements for a consistent experience on different devices",
      ],
    },
    {
      title: "Video Streaming Website",
      description:
        "XFlix is a video sharing platform which hosts videos for the world to watch. It also features uploading new videos by using external video links (eg: Youtube) and playing these videos. Built XFlix frontend using React.js from scratch. Used Postman collection to understand API requirements. Mocked backend server using Postman Mock Server for API response",
      images: [XflixHome, XflixVideo, XflixMoreVideos, XflixUpload],
      tech: [
        "React",
        "ES6",
        "Forms",
        "Controlled Components",
        "Event Handling",
        "Responsive Design",
        "Deployment",
        "Netlify",
        "Figma",
        "Postman",
        "Material-UI",
      ],
      demo: "https://xflix-videostreaming.netlify.app/",
      code: "#",
      details: [
        "Built the complete XFlix frontend from scratch using React.js, based on Figma designs and Postman API documentation",
        "Implemented Landing Page, Video Page, and Video Upload Modal, with video upload via external links and seamless playback",
        "Used Postman Mock Server for mocking backend responses and validating frontend functionality end-to-end",
        "Deployed the application to Netlify, ensuring a responsive, user-friendly experience across devices",
      ],
    },
    {
      title: "Live News Feed Webpage",
      description:
        "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard. Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch. Used Accordions and Image Carousel to improve UI. Fetched news content from flipboard's RSS feed using REST API",
      images: [NewsHome, NewsAcc, NewsCovid, NewsTech],
      tech: [
        "HTML",
        "CSS",
        "Figma",
        "Bootstrap",
        "Bootstrap Accordion",
        "Bootstrap Carousel",
        "JavaScript",
        "DOM Manipulation",
        "JSON",
        "Netlify",
        "Deployment",
      ],
      demo: "https://live-news-feed.netlify.app/",
      code: "#",
      details: [
        "Built the XBoard news feed website from scratch using HTML, CSS, Bootstrap, and JavaScript, following Figma design guidelines",
        "Fetched and integrated live news content from Flipboard's RSS feed using a REST API",
        "Enhanced UI with Accordions and Image Carousels, ensuring a responsive design for desktop and mobile",
        "Deployed the dynamic website to Netlify, making it accessible online",
      ],
    },
    {
      title: "Developer Activity Dashboard",
      description:
        "A comprehensive analytics dashboard that visualizes developer activities including Git commits, pull requests, merges, and incidents. Features interactive charts and graphs for detailed analysis of team performance and project progress. Built with modern React practices and data visualization libraries.",
      images: [DashboardHome, DashboardDate, DashboardGraph],
      tech: [
        "React",
        "Redux",
        "ApexCharts",
        "Data Visualization",
        "Bar Charts",
        "Line Graphs",
        "Pie Charts",
        "Progress Bars",
      ],
      demo: "https://dashboard-iota-three-35.vercel.app/",
      code: "#",
      details: [
        "Developed an interactive dashboard to track and visualize developer activities using React and ApexCharts",
        "Implemented real-time data visualization with bar charts for commit frequency and line graphs for PR trends",
        "Created pie charts to display team contribution distribution and progress bars for project completion metrics",
        "Utilized Redux for efficient state management and data flow across the application",
        "Added interactive tooltips and filters for detailed analysis of developer performance metrics",
      ],
    },
    {
      title: "Product Picker",
      description:
        "An interactive product management interface with drag-and-drop functionality, variant support, and dynamic search capabilities. Features include product selection, variant management, discount application, and real-time search with debouncing. Built with React and Material-UI for a seamless user experience.",
      images: [
        ProductHome,
        ProductPick,
        ProductVariants,
        ProductDrag,
        ProductDiscount,
      ],
      tech: [
        "React",
        "Material-UI",
        "Redux Toolkit",
        "dnd-kit",
        "Debouncing",
        "Infinite Scroll",
        "REST APIs",
        "State Management",
        "Drag and Drop",
        "Dynamic Search",
      ],
      demo: "https://product-xi-lime.vercel.app/",
      code: "#",
      details: [
        "Implemented drag-and-drop functionality for products and variants using dnd-kit, with a limit of four products display",
        "Developed variant management system with toggle functionality to show/hide variants and option to remove them",
        "Created discount system supporting both flat and percentage-based discounts with intuitive UI controls",
        "Built dynamic search bar with debouncing to optimize API calls and prevent excessive server requests",
        "Implemented infinite scroll pagination, initially loading 10 products with dynamic loading of subsequent pages",
        "Designed product selection interface with edit functionality to replace existing products with new selections",
        "Utilized Redux Toolkit for efficient state management and API call handling",
        "Added product deletion functionality with confirmation to maintain data integrity",
        "Integrated Material-UI components and icons for a consistent and modern user interface",
      ],
    },
    {
      title: "Data Visualization",
      description:
        "An interactive database schema visualization tool built with React Flow, enabling users to visualize and manipulate database relationships. Features include dynamic node arrangement, zoom controls, and customizable node properties. Provides an intuitive interface for understanding complex database structures.",
      images: [NodeHome, NodeZoom, NodeAttach, NodeColor, NodeFont],
      tech: [
        "React",
        "React Flow",
        "Custom Styling",
        "Interactive UI",
        "Data Modeling",
        "Schema Visualization",
      ],
      demo: "https://react-flow-sooty.vercel.app/",
      code: "#",
      details: [
        "Built interactive database schema visualization using React Flow for dynamic node representation",
        "Implemented drag-and-drop nodes with zoom/pan controls for complex schema navigation",
        "Added customizable node properties including size and color selection",
        "Created intuitive interface for exploring database relationships and structures",
      ],
    },
  ];

  return (
    <ProjectsSection>
      <SectionTitle>My Projects</SectionTitle>
      {projects.map((project, index) => (
        <ProjectContainer key={project.title}>
          <Carousel>
            <NavButton
              className="left"
              onClick={() => handlePrevImage(index)}
              style={{
                display: (activeImages[index] || 0) > 0 ? "flex" : "none",
              }}
            >
              ←
            </NavButton>
            {project.images.map((image, imgIndex) => (
              <CardContainer
                key={imgIndex}
                active={imgIndex === (activeImages[index] || 0)}
                offset={(activeImages[index] || 0) - imgIndex}
                direction={Math.sign((activeImages[index] || 0) - imgIndex)}
                absOffset={Math.abs((activeImages[index] || 0) - imgIndex) / 3}
                style={{
                  "--offset": ((activeImages[index] || 0) - imgIndex) / 3,
                  "--direction": Math.sign(
                    (activeImages[index] || 0) - imgIndex
                  ),
                  "--abs-offset":
                    Math.abs((activeImages[index] || 0) - imgIndex) / 3,
                }}
              >
                <ImageCard>
                  <ProjectImage src={image} alt={project.title} />
                </ImageCard>
              </CardContainer>
            ))}
            <NavButton
              className="right"
              onClick={() => handleNextImage(index)}
              style={{
                display:
                  (activeImages[index] || 0) < project.images.length - 1
                    ? "flex"
                    : "none",
              }}
            >
              →
            </NavButton>
            <ImageControls>
              {project.images.map((_, imgIndex) => (
                <ImageDot
                  key={imgIndex}
                  active={imgIndex === (activeImages[index] || 0)}
                  onClick={() => handleImageChange(index, imgIndex)}
                />
              ))}
            </ImageControls>
          </Carousel>
          <FlipCard
            onClick={() => toggleCard(index)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FlipCardInner isFlipped={flippedCards[index]}>
              <CardFront>
                <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.tech.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </div>
                <div>
                  <ProjectLinks>
                    <Links
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Links>
                    <Links
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </Links>
                  </ProjectLinks>
                  <FlipIndicator>Flip for more details ↗</FlipIndicator>
                </div>
              </CardFront>
              <CardBack>
                <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <DetailList>
                    {project.details.map((detail, i) => (
                      <DetailItem key={i}>{detail}</DetailItem>
                    ))}
                  </DetailList>
                </div>
              </CardBack>
            </FlipCardInner>
          </FlipCard>
        </ProjectContainer>
      ))}
      <ProjectLink
        as={Link}
        to="/blogs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Blogs
        <KeyboardArrowDown style={{ transform: "rotate(-90deg)" }} />
      </ProjectLink>
    </ProjectsSection>
  );
}

export default Projects;

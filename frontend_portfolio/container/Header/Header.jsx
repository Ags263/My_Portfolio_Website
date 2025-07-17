import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect, useRef } from "react";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { client } from "../../client";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

const headerSkillVariants = {
  visible: {
    rotate: [-120, 0],
    y: -10,
    x: 10,
    transition: {
      rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeOut",
      },
      x: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 5,
        ease: "easeOut",
      },
    },
  },
  hover: {
    boxShadow: "0 0 20px rgba(0,0,0,0.2)",
  },
};

const techInfo = [
  { img: images.java, alt: "Java", tooltip: "0.6 years experience" },
  { img: images.react, alt: "React", tooltip: "Used in 3 projects" },
  { img: images.spring, alt: "Spring" ,tooltip: "Still Learning"},
];

const taglines = [
  'Turning ideas into code.',
  'Building the future, one project at a time.',
  'Crafting beautiful web experiences.',
  'Solving problems with technology.',
  'Let\'s build something amazing together!',
      'React Programmer',
      'Creative Coder',
      'Problem Solver',
      'Passionate Programmer',
      'Continuous Learner',
      'Data-Driven Developer',
      'Full Stack Developer',
      'Web Developer',
      'Software Engineer',
      'Frontend Developer',
      'Backend Developer',
];

const Header = () => {
  const [text] = useTypewriter({
   
   
});
  const [typewriterText] = useTypewriter({
    words: taglines,
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1800,
  });
  const [showTimeline, setShowTimeline] = useState(false);
  const profileImgRef = useRef(null);
  const [resumeUrl, setResumeUrl] = useState("");
  // Remove darkMode state and useEffect
  // Remove darkmode-toggle button

  useEffect(() => {
    // Optional: Add a floating animation to the SVG background if needed
    // Fetch resume from Sanity
    const fetchResume = async () => {
      try {
        const query = `*[_type == "resume" && isActive == true][0]{ "url": resumeFile.asset->url }`;
        const result = await client.fetch(query);
        if (result?.url) {
          setResumeUrl(result.url);
        }
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };
    fetchResume();
  }, []);

  return (
    <header className="app__header app__flex" aria-label="Hero section">
      {/* Animated SVG Blobs Background */}
      <div className="hero-animated-bg">
        <svg className="hero-bg-svg" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#6dd5ed" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          <circle cx="1200" cy="80" r="90" fill="#2193b0" fillOpacity="0.08">
            <animate attributeName="cy" values="80;120;80" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="220" r="60" fill="#6dd5ed" fillOpacity="0.10">
            <animate attributeName="cy" values="220;180;220" dur="7s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      {/* Floating Resume Button (only if resumeUrl) */}
      {resumeUrl && (
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-resume-btn"
          aria-label="Download Resume"
        >
          <span role="img" aria-label="resume">📄</span> Resume
        </a>
      )}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="app__header-info"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        tabIndex={0}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <a href="https://portfolio-sanity-backend.netlify.app/" style={{ textDecoration: 'none' }} aria-label="Go to home">
              <span>👋</span>
            </a>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <motion.p className="head-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}> Ashish </motion.p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">{typewriterText}</p>
            <Cursor cursorStyle="|" />
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.7, delayChildren: 0.7 }}
        className="app__header-img"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.img
          ref={profileImgRef}
          src={images.profile}
          alt="profile_bg"
          whileHover={{ scale: 1.07, boxShadow: "0 0 32px 0 #6dd5ed, 0 0 0 8px #fff3" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="profile-img-animated"
          tabIndex={0}
          aria-label="Profile image"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {techInfo.map((tech, index) => (
          <motion.div
            variants={headerSkillVariants}
            whileInView="visible"
            whileHover="hover"
            drag
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            dragElastic={0.1}
            className="circle-cmp app__flex tech-icon-tooltip"
            key={`circle-${index}`}
            tabIndex={0}
            aria-label={tech.alt + ' skill icon'}
          >
            <img src={tech.img} alt={tech.alt} />
            <span className="tech-tooltip">{tech.tooltip}</span>
          </motion.div>
        ))}
      </motion.div>
      
    </header>
  );
};

export default AppWrap(Header, "home");
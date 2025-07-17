import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import { images } from '../../constants';
import "./Work.scss";

const techIconMap = {
  ReactJS: images.react,
  Java: images.java,
  SpringBoot: images.spring,
  "Web Projects": images.html,
  "Android Development": images.flutter,
  "Python":images.image,
  "AI/ML":images.ml,
  "MYSQL": images.mysql,
  "Full Stack" :images.fullstack,
 
  
};

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWorks, setFilterWorks] = useState([]);
  const [works, setWorks] = useState([]);
  const [touched, setTouched] = useState(null);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ opacity: 0, scale: 0.5, y: -100 });
    setTimeout(() => {
      setAnimateCard({ opacity: 1, scale: 1, y: 0 });
      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text" style={{marginBottom: '1.5rem', fontWeight: 900, fontSize: '2.5rem', letterSpacing: '1px'}}>
        My creative <span style={{background: 'linear-gradient(90deg, #313bac 60%, #00c57d 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Portfolio</span>
      </h2>
      <div className="app__work-filter">
        {["All", "ReactJS", "Java", "SpringBoot", "Web Projects", "Android Development", "Python","MYSQL","Full Stack","AI/ML","Mini Projects"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleFilter(item)}
              className={`app__work-filter-item${activeFilter === item ? " item-active" : ""}`}
            >
              {techIconMap[item] && <img src={techIconMap[item]} alt={item} className="work-tech-badge" style={{width: 22, height: 22, marginRight: 8}} />}
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        onClick={() => setTouched(null)}
      >
        {filterWorks.map((work, index) => (
          <motion.div
            className="app__work-item"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="app__work-img">
              <img src={urlFor(work.imgUrl)} alt={work.title} />
            </div>
            <div className="app__work-content">
              <div className="work-title-row">
                <h4 className='bold-text'>{work.title}</h4>
                {work.year && <span className="work-year-badge">{work.year}</span>}
              </div>
              <p className='p-text work-description-fixed'>{work.description}</p>
              {/* Render all technologies as pill badges */}
              <div style={{width: '100%', marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.3rem'}}>
                {Array.isArray(work.techstack) && work.techstack.length > 0 && work.techstack.map((tech, i) => (
                  <span key={i} className="app__work-tag">{tech}</span>
                ))}
              </div>
              {/* Render all tags as pill badges */}
              
              <div className="work-btn-row">
                {work.projectLink && work.projectLink.toLowerCase() !== "na" && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer" className="work-btn live-btn">Live Demo</a>
                )}
                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer" className="work-btn code-btn">Source Code</a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
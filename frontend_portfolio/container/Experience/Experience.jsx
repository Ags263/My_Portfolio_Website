import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import './Experience.scss';
import { FaMapMarkerAlt, FaRegCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { AppWrap } from '../../wrapper';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "experiences"] | order(startDate asc){
      company,
      position,
      location,
      logo,
      startDate,
      endDate,
      description,
      companyUrl,
      technologies
    }`;
    client.fetch(query)
      .then((data) => {
        if (data) {
          setExperiences(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching experiences:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="app__experience-loading">
        <div className="loading-spinner"></div>
        <p>Loading experiences...</p>
      </div>
    );
  }

  return (
    <section className="race-timeline-section">
      <h2 className="race-timeline-title"> Experience</h2>
      <div className="race-timeline-vertical-wrapper">
        <div className="race-timeline-vertical-list">
          {experiences.map((exp, idx) => (
            <motion.div
              className="race-timeline-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="race-timeline-role">{exp.position}</div>
              <div className="race-timeline-company-row">
                {exp.companyUrl ? (
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="race-timeline-company-link">
                    {exp.company} <FaExternalLinkAlt style={{fontSize: '0.85em', marginLeft: 4}} />
                  </a>
                ) : (
                  <span className="race-timeline-company">{exp.company}</span>
                )}
              </div>
              <div className="race-timeline-meta-row">
                {exp.location && <span className="race-timeline-location"><FaMapMarkerAlt style={{marginRight: 4}} />{exp.location}</span>}
                <span className="race-timeline-duration"><FaRegCalendarAlt style={{marginRight: 4}} />
                  {exp.startDate ? new Date(exp.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) : ''}
                  {exp.endDate ? ` - ${new Date(exp.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}` : ' - Present'}
                </span>
              </div>
              <div className="race-timeline-description">
                {exp.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppWrap(Experience, 'experience', ''); 
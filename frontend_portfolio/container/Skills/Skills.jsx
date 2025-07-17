import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client.js';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <motion.h2
        className="head-text"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Skills
      </motion.h2>

      <motion.h4
        className='head-text1'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        The following skills reflect my investment of time and energy to develop proficiency and expertise.
      </motion.h4>

      <div className="app__skills-container">
        <motion.div
          className="app__skills-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.13 } },
            hidden: {},
          }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } },
              }}
              className="app__skills-item app__flex"
              key={skill.name}
              whileHover={{ scale: 1.08, rotate: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="app__flex"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatType: 'loop', delay: idx * 0.07 }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </motion.div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);

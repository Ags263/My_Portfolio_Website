import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <a href="."><img src={images.logo} alt="logo" /></a>
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'work', 'skills','experience', 'education','contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              
              {item === 'experience' ? (
                <a href='#experience' rel="noreferrer">{item}</a>
              ) : (
                <a href={`#${item}`} rel="noreferrer">{item}</a>
              )}
            </li>
          ))}
          

          <li className="app__flex p-text">
            <div />
            <a href='https://github.com/Ags263' target={'_blank'} rel="noreferrer">Github Profile</a>
          </li>
        </ul>


        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home','about', 'work', 'skills','experience' ,'education', 'contact'].map((item) => (
                  <li key={item}>
                    {item === 'experience' ? (
                      <a onClick={() => setToggle(false)} href='#experience' rel="noreferrer">{item}</a>
                    ) : (
                      <a onClick={() => setToggle(false)} href={`#${item}`} rel="noreferrer">{item}</a>
                    )}
                  </li>
                ))}
              </ul>

              

              
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
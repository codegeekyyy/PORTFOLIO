import React from 'react';
import './pro.css';
import theme_pattern from '../../assets/theme_pattern.png';
import Projects_data from '../../assets/Projects_data';
import arrow_icon from '../../assets/arrow_icon.png';

const Pro = () => {
  return (
    <div id='project'className="Projects">
      <div className="project-title">
        <h1>MY PROJECTS</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="projects-container">
        {Projects_data.map((project, index) => (
          <div
            key={index}
            className="projects-format"
            style={{
              backgroundImage: `url(${project.p_image})`,
              backgroundSize: project.orientation === 'portrait' ? 'contain' : 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="project-content">
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>{project.p_desc}</p>
              <div className="projects-readmore">
              <p>Read more...</p>
              <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pro;

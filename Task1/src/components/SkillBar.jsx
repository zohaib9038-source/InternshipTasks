import React from 'react';
import './skill.css';

const SkillBar = ({ title, percentage }) => {
  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-title">{title}</span>
        <span className="skill-percentage">{percentage}</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: percentage }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
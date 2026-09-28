import React from 'react';
import SkillBar from './SkillBar';
import './skill.css';

const SkillComp = () => {
  return (
    <div className="solar-section">
      {/* Left Side: Image & Floating Badge */}
      <div className="image-side">
        <img 
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
          alt="Engineer with laptop" 
          loading="lazy"
          className="main-engineer-img"
        />
        <div className="floating-badge">
          <div className="badge-circle" style={{ fontWeight: 'bold', color: '#00c853' }}>92%</div>
          <div className="badge-text">Successful<br />Projects</div>
        </div>
      </div>

      {/* Right Side: Content & Progress Bars */}
      <div className="content-side">
        <p className="about-tag">— ABOUT SERVICE</p>
        <h1 className="main-heading">
          Solar Energy Offers<br />
          <span>Reliable Solutions</span>
        </h1>
        
        <p className="description">
          Do you want to live in a place full of comfort and convenience, where electricity is produced by itself and you also save on it? With us it can come true faster than you think.
        </p>
        <p className="description">
          Our offer includes three basic solutions that will bring financial and comfort benefits to your home.
        </p>

        {/* Reusable SkillBar Components with Props */}
        <SkillBar title="Solar Panels" percentage="96%" />
        <SkillBar title="Energy Storage" percentage="68%" />
        <SkillBar title="Heat Pump" percentage="82%" />

        {/* Buttons */}
        <div className="action-buttons">
          <button className="contact-btn">CONTACT US NOW</button>
          <button className="watch-video">
            <span className="play-icon">▶</span> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillComp;
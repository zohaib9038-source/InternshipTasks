import React from 'react';
import './servicecard.css';
import '.././index.css';

const ServiceCard = ({ img, heading, para, linkText }) => {
  return (
    <div className="service-card">
      <div className="service-img-container">
        <img src={img}  loading="lazy" alt={heading} className="service-img" />
      </div>
      <div className="service-content">
        <h3 className="service-heading">{heading}</h3>
        <p className="service-para">{para}</p>
        <a href="#readmore" className="service-link">{linkText}</a>
      </div>
    </div>
  );
};

export default ServiceCard;
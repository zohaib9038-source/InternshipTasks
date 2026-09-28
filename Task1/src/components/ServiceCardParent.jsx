import React from 'react';
import ServiceCard from './ServiceCard';
import './servicecard.css';
import imgf2 from "../assets/imgf.webp"
import imgf1 from "../assets/imgf2.webp"
import imgf3 from "../assets/imgf3.webp"

const ServiceCardParent = () => {
  const servicesData = [
    {
      img:imgf2,
      heading: "Solar Panels Install",
      para: "Suspen disse ut ex porttit consequat erat pellen donce tesque justo.",
      linkText: "Read More"
    },
    {
      img: imgf1,
      heading: "Wind Farms",
      para: "Nullam congue sit amet turpis eu maximus. Integer pellentesque.",
      linkText: "Read More"
    },
    {
      img: imgf3,
      para: "Aliquam interdum molestie lectus, semper congue neque imperdiet.",
      linkText: "Read More"
    }
  ];

  return (
    <div className="services-section">
      
      {/* Top Green Banner */}
      <div className="top-banner">
        <div className="banner-left">
          <h2>Produce Electricity and Stop Overpaying</h2>
        </div>
        <div className="banner-right">
          <div className="banner-item">
            <span className="banner-icon">☀️</span>
            <div>
              <h4>Solar Panels</h4>
              <p>Suspen disse ut ex porttit consequat erat pellen tesque donce justo.</p>
            </div>
          </div>
          <div className="banner-item">
            <span className="banner-icon">🌿</span>
            <div>
              <h4>Life without Smog</h4>
              <p>Aliquam hendrerit porta dui mollis hendrerit ornare odio et auctor.</p>
            </div>
          </div>
        </div>
      </div>

   
      <p className="section-subtitle">WHY CHOOSE US?</p>
      <h2 className="section-title">Our Most Popular Services</h2>
      <p className="section-desc">
        Do you want to live in a place full of comfort and convenience, where electricity is produced by itself and you also save on it? With us it can come true faster than you think.
      </p>

   
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            img={service.img}
            heading={service.heading}
            para={service.para}
            linkText={service.linkText}
          />
        ))}
      </div>

    </div>
  );
};

export default ServiceCardParent;
import React from 'react';
import ServiceCard from './ServiceCard';
import './servicecard.css';

const ServiceCardParent = () => {
  const servicesData = [
    {
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=500&q=80",
      heading: "Solar Panels Install",
      para: "Suspen disse ut ex porttit consequat erat pellen donce tesque justo.",
      linkText: "Read More"
    },
    {
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&q=80",
      heading: "Wind Farms",
      para: "Nullam congue sit amet turpis eu maximus. Integer pellentesque.",
      linkText: "Read More"
    },
    {
      img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=500&q=80",
      heading: "EV Chargers",
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

      {/* Section Title Header */}
      <p className="section-subtitle">WHY CHOOSE US?</p>
      <h2 className="section-title">Our Most Popular Services</h2>
      <p className="section-desc">
        Do you want to live in a place full of comfort and convenience, where electricity is produced by itself and you also save on it? With us it can come true faster than you think.
      </p>

      {/* Cards Grid using Props */}
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
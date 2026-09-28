import React from 'react';
import AdvantageCard from './AdvantageCard';
import './advantages.css';


import leaf from '../assets/leaf.png';
 import target from '../assets/target.webp';
 import arrow from '../assets/arrow.webp';
// import energyIcon from './assets/energy.png';

const AdvantageParent = () => {
  const advantagesData = [
    {
      img: leaf,
      heading: "Introducing The Concept",
      para: "Suspendisse ut ex porttitor consequat erat pellentesque justo."
    },
    {
      img: target,
      heading: "Renewable Energy",
      para: "Curabitur dui leo, mattis id dignissim pellentesque, condimentum nec."
    },
    {
      img: arrow,
      heading: "Cleansed Soil of Toxins",
      para: "Proin molestie magna vitae felis sagittis, ut vulputate felis laoreet auctor."
    },
    {
      img: arrow,
      heading: "Extra Energy for Home",
      para: "Sed vel lacus tristique, ullamcorper tortor ut, pellentesque arcu."
    }
  ];

  return (
    <div className="advantages-section">
      <h5 className="section-subtitle">WHY CHOOSE US?</h5>
      <h2 className="section-title">Advantages of Our Company</h2>
      
      <div className="cards-grid">
        {advantagesData.map((item, index) => (
          <AdvantageCard 
            key={index}
            img={item.img}
            heading={item.heading}
            para={item.para}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvantageParent;
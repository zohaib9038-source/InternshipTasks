import React from 'react';


const AdvantageCard = ({ img, heading, para }) => {
  return (
    <div className="advantage-card">
      <div className="icon-container">
        <img src={img} loading="lazy" alt={heading} className="card-icon" />
      </div>
      <div className="cardItem">
         <h3 className="card-heading">{heading}</h3>
      <p className="card-para">{para}</p>
      </div>
     
    </div>
  );
};

export default AdvantageCard;
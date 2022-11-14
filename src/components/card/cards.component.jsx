import React, { useEffect, useRef } from "react";
import "./cards.style.css";

const Card = ({ hero,observer }) => {

  
  let card = useRef(null);
  useEffect(  _ => {
      observer.observe(card.current);
    
  },[])

  return (
    <div className="card-container" id={`${hero.id}`} ref={card}>
      <div className="img-container">
        <span className="slid"></span>
        <img src={hero.images.md} alt={hero.name} />
      </div>
      <div className="info-container">
          <div>
            <h2 className="names">{hero.name}</h2>
          </div>
          <div className="power-container">
          <div>
              <h3>Strength</h3>
              <h4>{hero.powerstats.strength}</h4>
            </div>
            <div>
              <h3>Height</h3>
              <h4>{hero.appearance.height[0]}</h4>
            </div>
            <div>
              <h3>Weight</h3>
              <h4>{hero.appearance.weight[1]}</h4>
            </div>
          </div>
          <div className="power-container">
            <div>
              <h3>Power</h3>
              <h4>{hero.powerstats.power}</h4>
            </div>
            <div>
              <h3>Speed</h3>
              <h4>{hero.powerstats.speed}</h4>
            </div>
          </div>
          <div className="occu-container">
            <span>{hero.work.occupation !== "-" ? hero.work.occupation.slice(0,20) + "....." : "-"}</span>
          </div>
      </div>
    </div>
  );
};

export default Card;

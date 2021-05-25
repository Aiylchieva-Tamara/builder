import React from "react"
import classes from "./AquariumFish.module.css";

import labeoBackground from "../../../images/labeoTailand.png";
import coliasisBackground from "../../../images/coliasis.png";
import angelBackground from "../../../images/angel.png";
import blueBackground from "../../../images/blue.png";
import yelowBackground from "../../../images/yelow.png";
import clownBackground from "../../../images/clown.png";

const AquariumFish = ({ type, fixed }) => {
  const types = {
    labeo: { backgroundImage: `url(${labeoBackground})`, width: "48px", height: "45px"},
    coliasis: { backgroundImage: `url(${coliasisBackground})`, width: "48px", height: "43px" },
    angel: { backgroundImage: `url(${angelBackground})`, width: "48px", height: "46px" },
    blue: {  backgroundImage: `url(${blueBackground})`, width: "50px", height: "40px", transform:"scaleX(-1)"},
    yelow: { backgroundImage: `url(${yelowBackground})`, width: "48px", height: "40px" },
    clown: { backgroundImage: `url(${clownBackground})`, width: "45px", height: "38px" },

  };

  function getPosition(fishWidth) {
    const aquariumDiametr = 345;
    const aquariumRadius = aquariumDiametr / 2;
    const fishRadius = parseInt(fishWidth) / 6;

    const top = Math.round(Math.random() * aquariumDiametr);
    const left = Math.round(Math.random() * aquariumDiametr);

    const distance = Math.sqrt(
    Math.pow(top - aquariumRadius, 2) + Math.pow(left - aquariumRadius, 1)
    ) + fishRadius;

    return distance < aquariumRadius
      ? {
        top: top - fishRadius,
        left: left - fishRadius
      }
      : getPosition(fishWidth);
  }

  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
    // Get random rotation for this ingredient.
    types[type].transform = `rotate(${Math.round(Math.random() * 30 )}deg)`;
    
  }

  return (
    <div className={classes.AquariumFish} style={types[type]}></div>
  );
}

export default React.memo(AquariumFish);

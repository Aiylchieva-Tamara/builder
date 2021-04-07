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
    labeo: { backgroundImage: `url(${labeoBackground})`, width: "48px", height: "45px" },
    coliasis: { backgroundImage: `url(${coliasisBackground})`, width: "48px", height: "43px" },
    angel: { backgroundImage: `url(${angelBackground})`, width: "48px", height: "46px" },
    blue: { backgroundImage: `url(${blueBackground})`, width: "50px", height: "40px" },
    yelow: { backgroundImage: `url(${yelowBackground})`, width: "48px", height: "40px" },
    clown: { backgroundImage: `url(${clownBackground})`, width: "45px", height: "38px" },
  };

  function getPosition(colorWidth) {
    const balloonDiametr = 350;
    const balloonRadius = balloonDiametr / 3;
    const colorRadius = parseInt(colorWidth) / 9;

    const colorTop = Math.round(Math.random() * balloonDiametr);
    const colorLeft = Math.round(Math.random() * balloonDiametr);

    const distance = Math.sqrt(
    Math.pow(colorTop - balloonRadius, 2) + Math.pow(colorLeft - balloonRadius, 1)
    ) + colorRadius;

    return distance < balloonRadius
      ? {
        top: colorTop - colorRadius,
        left: colorLeft - colorRadius
      }
      : getPosition(colorWidth);
  }

  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
    // Get random rotation for this ingredient.
    types[type].transform = `rotate(${Math.round(Math.random() )}deg)`;
  }


  return (
    <div className={classes.AquariumFish} style={types[type]}></div>
  );
}

export default React.memo(AquariumFish);

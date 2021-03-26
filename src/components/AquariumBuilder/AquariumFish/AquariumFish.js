import classes from "./AquariumFish.module.css";

import labeoBackground from "../../../images/labeoTailand.png";
import coliasisBackground from "../../../images/coliasis.png";
import angelBackground from "../../../images/angel.png";
import blueBackground from "../../../images/blue.png";
import yelowBackground from "../../../images/yelow.png";
import clownBackground from "../../../images/clown.png";

const AquariumFish = ({ type }) => {
  const types = {
    labeo: { backgroundImage: `url(${labeoBackground})`, width: "95px", height: "80px" },
    coliasis: { backgroundImage: `url(${coliasisBackground})`, width: "48px", height: "43px" },
    angel: { backgroundImage: `url(${angelBackground})`, width: "48px", height: "46px" },
    blue: { backgroundImage: `url(${blueBackground})`, width: "50px", height: "40px" },
    yelow: { backgroundImage: `url(${yelowBackground})`, width: "50px", height: "40px" },
    clown: { backgroundImage: `url(${clownBackground})`, width: "45px", height: "38px" },
  };

  types[type].top = Math.round(Math.random() * 380);
  types[type].left = Math.round(Math.random() * 380);

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  const position = getPosition(types[type].width);
  types[type].top = position.top + "px";
  types[type].left = position.left + "px";
  // Get random rotation for this ingredient.
  // types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.AquariumFish} style={types[type]}></div>
  );
}

export default AquariumFish;
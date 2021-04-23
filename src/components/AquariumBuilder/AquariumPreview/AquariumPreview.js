import AquariumFish from "../AquariumFish/AquariumFish";

import classes from "./AquariumPreview.module.css";
import fishBackground from "../../../images/aquariumocean.jpg";

const AquariumPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<AquariumFish key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.AquariumPreview}>
      <div className={classes.aquarium}
       style={{ backgroundImage: `url(${fishBackground})`}}>
        <div
          className={classes.ingredients}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default AquariumPreview;
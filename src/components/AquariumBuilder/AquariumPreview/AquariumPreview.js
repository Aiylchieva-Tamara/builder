import AquariumFish from "../AquariumFish/AquariumFish";

import classes from "./AquariumPreview.module.css";
import fishBackground from "../../../images/aquariumocean.jpg";

const AquariumPreview = ({ fishes, price }) => {
  const result = [];
  for (const fish in fishes) {
    for (let i = 0; i < fishes[fish]; i++) {
      result.push(<AquariumFish key={fish + i} type={fish} />)
    }
  }

  return (
    <div className={classes.AquariumPreview}>
      <div className={classes.aquarium}
       style={{ backgroundImage: `url(${fishBackground})`}}>
        <div
          className={classes.fishes}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default AquariumPreview;
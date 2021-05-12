import AquariumFish from "../AquariumFish/AquariumFish";

import classes from "./AquariumPreview.module.css";
import fishBackground from "../../../images/aquariumocean.jpg";

const AquariumPreview = ({ fishs, price }) => {
  const result = [];
  for (const fish in fishs) {
    for (let i = 0; i < fishs[fish]; i++) {
      result.push(<AquariumFish key={fish + i} type={fish} />)
    }
  }

  return (
    <div className={classes.AquariumPreview}>
      <div className={classes.aquarium}
       style={{ backgroundImage: `url(${fishBackground})`}}>
        <div
          className={classes.fishs}>
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default AquariumPreview;
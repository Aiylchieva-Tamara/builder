import AquariumFish from "../AquariumFish/AquariumFish";
import classes from "./AquariumPreview.module.css";
import fishBackground from "../../../images/aquariumocean.jpg";

const AquariumPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<AquariumFish type={ingredient} />)
    }
  }

  return (
    <div className={classes.AquariumPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${fishBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default AquariumPreview;
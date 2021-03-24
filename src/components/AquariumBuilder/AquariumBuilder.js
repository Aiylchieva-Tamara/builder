import classes from "./AquariumBuilder.module.css";
import AquariumPreview from "./AquariumPreview/AquariumPreview";
import AquariumControls from "./AquariumControls/AquariumControls";

const AquariumBuilder = () => {
  const ingredients = {
    tomato: 10,
    salami: 10,
    greenOlive: 10,
    blackOlive: 10,
    redPepper: 10,
    yellowPepper: 25,
  };

  return (
    <div className={classes.AquariumBuilder}>
      <AquariumPreview ingredients={ingredients} />
      <AquariumControls />
    </div>
  );
}

export default AquariumBuilder;
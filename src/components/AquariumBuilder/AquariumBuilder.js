import classes from "./AquariumBuilder.module.css";
import AquariumPreview from "./AquariumPreview/AquariumPreview";
import AquariumControls from "./AquariumControls/AquariumControls";
import { useState } from "react";

const AquariumBuilder = () => {
  const [ingredients, setIngredients] = useState({
    coliasis: 1,
    labeo:1,
    blue: 9,
    angel: 1,
    yelow: 1,
    clown: 1,
  });

  function addIngredient(type) {
    const newIngredient = { ...ingredients};
    newIngredient[type]++;
    setIngredients(newIngredient);
  }

  function removeIngredient(type) {
    const newIngredient = { ...ingredients};
    newIngredient[type]--;
    setIngredients(newIngredient);
  }

  return (
    <div className={classes.AquariumBuilder}>
      <AquariumPreview ingredients={ingredients} />
      <AquariumControls ingredients={ingredients}
       addIngredient={addIngredient}
       removeIngredient={removeIngredient}
       />
    </div>
  );
}

export default AquariumBuilder;
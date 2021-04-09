import Button from "../../UI/Button/Button";
import AquariumControl from "./AquariumControl/AquariumControl";
import classes from "./AquariumControls.module.css";

const AquariumControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    results.push(<AquariumControl
        key={ingredient}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }

  return (
    <div className={classes.AquariumControls}>
      <strong>Fish</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default AquariumControls;
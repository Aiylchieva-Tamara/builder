import Button from "../../../UI/Button/Button";
import AquariumFish from "../../AquariumFish/AquariumFish";
import classes from "./AquariumControl.module.css";

const AquariumControl = ({ type, addIngredient, removeIngredient, count }) => {
  return (
    <div className={classes.AquariumControl}>
      <Button onClick={() => addIngredient(type)}>+</Button>
      <div className={classes.ingredient}>
        <AquariumFish type={type} fixed />
      </div>
      <Button onClick={() => removeIngredient(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default AquariumControl;

import AquariumFish from "../../AquariumFish/AquariumFish";
import classes from "./AquariumControl.module.css";

const AquariumControl = ({type , addIngredient, removeIngredient }) => {
  return (
    <div className={classes.AquariumControl}>
        <button onClick={() => addIngredient(type)}>+</button>
         <AquariumFish type={type} />
        <button onClick={() => removeIngredient(type)}>-</button>
    </div>
  );
}

export default AquariumControl;
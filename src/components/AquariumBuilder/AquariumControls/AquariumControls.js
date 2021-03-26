import AquariumControl from "./AquariumControl/AquariumControl";
import classes from "./AquariumControls.module.css";

const AquariumControls = ({ingredients, addIngredient, removeIngredient}) => {
 let type={ingredients}
  const results =[];
  for (const ingredient in ingredients) {
    results.push(<AquariumControl  type={ingredient}
     addIngredient={addIngredient} 
    removeIngredient={removeIngredient} />
    )} ;
 
  return (
    <div className={classes.AquariumControls}>{results}</div>
  );
}

export default AquariumControls;
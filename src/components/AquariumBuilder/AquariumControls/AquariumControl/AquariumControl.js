import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import AquariumFish from "../../AquariumFish/AquariumFish";
import classes from "./AquariumControl.module.css";
import { add, remove } from "../../../../store/actions/builder";

const AquariumControl = ({ type, count }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.AquariumControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <AquariumFish type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default AquariumControl;
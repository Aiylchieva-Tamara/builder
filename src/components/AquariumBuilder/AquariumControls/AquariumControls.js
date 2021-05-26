import Button from "../../UI/Button/Button";
import AquariumControl from "./AquariumControl/AquariumControl";
import classes from "./AquariumControls.module.css";

const AquariumControls = ({
  fishes,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const fish in fishes) {
    // Add fish number to totals number
    total += fishes[fish];
    // Render pizza control for this fish
    results.push(<AquariumControl
        key={fish}
        count={fishes[fish]}
        type={fish} />)
  }

  return (
    <div className={classes.AquariumControls}>
      <strong>Fishes</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default AquariumControls;
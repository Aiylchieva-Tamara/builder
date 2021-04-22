
import classes from "./CheckoutSummary.module.css";
import AquariumPreview from "../../AquariumBuilder/AquariumPreview/AquariumPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <AquariumPreview ingredients={{
         coliasis: 10,
         labeo: 4,
         blue: 6,
         angel: 4,
         yelow: 2,
         clown: 1,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
export default CheckoutSummary;
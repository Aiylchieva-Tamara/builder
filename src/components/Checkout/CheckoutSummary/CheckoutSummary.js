
import classes from "./CheckoutSummary.module.css";
import AquariumPreview from "../../AquariumBuilder/AquariumPreview/AquariumPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <AquariumPreview ingredients={{
         coliasis: 1,
         labeo: 1,
         blue: 1,
         angel: 1,
         yelow: 1,
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
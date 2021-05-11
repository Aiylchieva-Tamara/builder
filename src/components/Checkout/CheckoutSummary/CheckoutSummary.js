
import classes from "./CheckoutSummary.module.css";

import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback, submitCallback }) => {
  return (
    <form className={classes.CheckoutSummary} onSubmit={submitCallback}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" required pattern="0[0-9]{9}" />
      </div>
      <Button>Checkout</Button>
      <Button onClick={cancelCallback}>Cancel</Button>
    </form>
  );
}

export default CheckoutSummary;
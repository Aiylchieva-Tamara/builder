
import AquariumPreview from "../AquariumBuilder/AquariumPreview/AquariumPreview";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {
  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-8d5fc-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: ingredients,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <AquariumPreview ingredients={ingredients} price={price} />
      <CheckoutSummary
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
       
    </div>
  );
}
 
export default withAxios(Checkout, axios);
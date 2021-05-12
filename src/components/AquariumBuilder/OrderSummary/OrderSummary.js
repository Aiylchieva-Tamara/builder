import classes from "./OrderSummary.module.css";
const OrderSummary = ({ fishs, price }) => {
    const labels = {
        coliasis: "Coliasis",
        labeo: "Labeo",
        blue:"Blue fish",
        angel: "Angel fish",
        yelow: "Yelow fish",
        clown: "Clown",
    }
    const results = Object.keys(fishs)
    .map(type => <li key={type}>{labels[type]}: {fishs[type]}</li>);
  
    return (
      <div className={classes.OrderSummary}>
        <h3>Order summary</h3>
        <ul>
          {results}
        </ul>
        <strong>Total price: {price.toFixed(1)} som</strong>
      </div>
    );
  }
  
  export default OrderSummary; 
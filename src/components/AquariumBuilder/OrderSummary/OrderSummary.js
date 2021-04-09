
const OrderSummary = ({ ingredients, price }) => {
    const labels = {
        coliasis: "Coliasis",
        labeo: "Labeo",
        blue:"Blue fish",
        angel: "Angel fish",
        yelow: "Yelow fish",
        clown: "Clown",
    }
    const results = Object.keys(ingredients)
      .map(type => <li>{labels[type]}: {ingredients[type]}</li>);
  
    return (
      <div >
        <h3>Order summary</h3>
        <ul>
          {results}
        </ul>
        <strong>Total price: {price.toFixed(1)} som</strong>
      </div>
    );
  }
  
  export default OrderSummary; 
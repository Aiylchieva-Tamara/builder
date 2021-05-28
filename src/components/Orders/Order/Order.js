import classes from "./Order.module.css";

const Order = ({ name, phone, address, fishes, price }) => {
  const outputFish = Object.keys(fishes)
    .map(fish => <em key={fish}> {fish} - {fishes[fish]}</em>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputFish}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;
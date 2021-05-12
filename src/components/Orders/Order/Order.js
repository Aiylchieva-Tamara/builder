import classes from "./Order.module.css";

const Order = ({ name, phone, address, fish, price }) => {
  const outputFish = Object.keys(fish)
    .map(fish => <em>{fish} - {fish[fish]}</em>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputFish}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;
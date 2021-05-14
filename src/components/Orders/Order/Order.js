import classes from "./Order.module.css";

const Order = ({ name, phone, address, fishs, price }) => {
  const outputFish = Object.keys(fishs)
    .map(fish => <em key={fish}>{fish} - {fish[fish]}</em>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputFish}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;
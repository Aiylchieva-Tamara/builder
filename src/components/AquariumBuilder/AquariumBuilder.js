import classes from "./AquariumBuilder.module.css";
import AquariumPreview from "./AquariumPreview/AquariumPreview";
import AquariumControls from "./AquariumControls/AquariumControls";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const AquariumBuilder = ({ history }) => {
  const prices = {
    coliasis: 150,
    labeo: 400,
    blue: 330,
    angel: 200,
    yelow: 500,
    clown: 350,
  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(loadDefaults, []);

  function loadDefaults() {
    axios
      .get("https://builder-8d5fc-default-rtdb.firebaseio.com/default.json")
      .then((response) => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.fish);
      });
  }

  function addIngredient(type) {
    const newIngredient = { ...ingredients };
    newIngredient[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredient);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredient = { ...ingredients };
      newIngredient[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredient);
    }
  }
  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }
  function finishOrdering() {
    axios
      .post("https://builder-8d5fc-default-rtdb.firebaseio.com/orders.json", {
        ingredients: ingredients,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        loadDefaults();
        history.push("/checkout");
      });
  }

  return (
    <div className={classes.AquariumBuilder}>
      <AquariumPreview ingredients={ingredients} price={price} />
      <AquariumControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary ingredients={ingredients} price={price} />
        <Button onClick={finishOrdering} green>
          Checkout
        </Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default AquariumBuilder;

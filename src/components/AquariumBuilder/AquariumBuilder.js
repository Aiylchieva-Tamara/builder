import classes from "./AquariumBuilder.module.css";
import AquariumPreview from "./AquariumPreview/AquariumPreview";
import AquariumControls from "./AquariumControls/AquariumControls";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";

const AquariumBuilder = () => {
  const prices = {
    coliasis: 3.5,
    labeo: 4,
    blue: 0.3,
    angel: 0.3,
    yelow: 2,
    clown: 1,
  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(
    () =>
      axios
        .get("https://builder-8d5fc-default-rtdb.firebaseio.com/default.json")
        .then((response) => {
          setPrice(response.data.price);

          // For arrays
          // setIngredients(Object.values(response.data.ingredients));
          // For objects
          setIngredients(response.data.fish);
        }),
    []
  );

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

  return (
    <div className={classes.AquariumBuilder}>
      <AquariumPreview ingredients={ingredients} price={price} />
      <AquariumControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
      <Modal>Hello</Modal>
    </div>
  );
};

export default AquariumBuilder;

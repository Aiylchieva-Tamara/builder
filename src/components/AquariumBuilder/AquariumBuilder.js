import classes from "./AquariumBuilder.module.css";
import AquariumPreview from "./AquariumPreview/AquariumPreview";
import AquariumControls from "./AquariumControls/AquariumControls";
import { useEffect, useState } from "react";
import withAxios from "../withAxios";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

const AquariumBuilder = ({ history }) => {
  
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get("https://builder-8d5fc-default-rtdb.firebaseio.com/default.json")
  //     .then((response) => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setIngredients(response.data.fish);
  //     });
  // }
  

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }
  // function finishOrdering() {
  //   setOrdering(false);
  //   // loadDefaults();
  //   history.push('/checkout');
  // }
  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
    // axios
    // .post('https://builder-8d5fc-default-rtdb.firebaseio.com/orders.json',{
    //   ingredients: ingredients,
    //   price: price,
    //   address: "Kadyrova 108/6",
    //   phone:"0500023120", 
    //   name:"Dogdurbaev Emirlan",
    // })
    // .then(() =>{
    //   setOrdering(false);
    //   // loadDefaults();
    //   history.push('/checkout')
    // })
  }
  return (
    <div className={classes.AquariumBuilder}>
      <AquariumPreview 
      ingredients={ingredients} 
      price={price} />
      <AquariumControls
        ingredients={ingredients}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary ingredients={ingredients} price={price} />
        <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default withAxios(AquariumBuilder, axios);

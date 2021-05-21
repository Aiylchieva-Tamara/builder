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
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const fishs = useSelector(state => state.builder.fishs);
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
  //       // setfish(Object.values(response.data.fish));
  //       // For objects
  //       setfish(response.data.fish);
  //     });
  // }
  

  function startOrdering() {
  
    if (isAuthenticated) {
      setOrdering(true);
    }
    else {
      history.push('/auth');
    }
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
    //   fish: fish,
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
      fishs={fishs} 
      price={price} />
      <AquariumControls
        fishs={fishs}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary fishs={fishs} price={price} />
        <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default withAxios(AquariumBuilder, axios);

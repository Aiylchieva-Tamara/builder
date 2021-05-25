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
  const fishes = useSelector(state => state.builder.fishes);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);
  

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
  function finishOrdering() {
    setOrdering(false);
    history.push('/checkout');
  }
  return (
    <div className={classes.AquariumBuilder}>
      <AquariumPreview 
      fishes={fishes} 
      price={price} />
      <AquariumControls
        fishes={fishes}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary fishes={fishes} price={price} />
        <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default withAxios(AquariumBuilder, axios);

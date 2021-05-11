import Layout from "./components/Layout/Layout";
import AquariumBuilder from "./components/AquariumBuilder/AquariumBuilder";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import { Redirect, Route, Switch } from "react-router";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Layout>
       
        <Switch>
          <Route path="/" component={AquariumBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
import AquariumBuilder from "./components/AquariumBuilder/AquariumBuilder";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <AquariumBuilder />
      </Layout>
    </div>
  );
}

export default App;

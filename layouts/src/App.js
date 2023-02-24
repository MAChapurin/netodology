import "./App.css";
import Store from "./components/Store";

function App(props) {
  return (
    <div className="App">
      <Store products={props.products} />
    </div>
  );
}

export default App;

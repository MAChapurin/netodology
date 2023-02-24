import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App d-flex">
      <Card img={logo} />
      <Card title="card title" />
      <Card text="card description" />
      <Card
        img={logo}
        title="Card with all properties"
        text="This card has a;; properties in props"
        link='Do something...'
      />
    </div>
  );
}

export default App;

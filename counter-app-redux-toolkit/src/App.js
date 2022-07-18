import "./App.css";
import CounterView from "./features/counter/CounterView";
import Postview from "./features/posts/Postview";

function App() {
  return (
    <div className="App">
      <CounterView />
      <Postview />
    </div>
  );
}

export default App;

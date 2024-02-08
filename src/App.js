import "./App.css";
import Room from "./Room";
import AddRoom from "./AddRoom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>GraphQL and React Integration</h3>
      </header>
      <main>
        <Room />
        <AddRoom />
      </main>
    </div>
  );
}

export default App;

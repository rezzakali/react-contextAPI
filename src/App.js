import "./App.css";
import Card from "./Components/Card";
import Home from "./Components/Home";
import NoteState from "./Components/NoteState";

function App() {
  return (
    <div className="App">
      <h1>Hello Programmers</h1>
      <NoteState>
        <Card />
        <Home />
      </NoteState>
    </div>
  );
}

export default App;

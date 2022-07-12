import "./App.css";
import AppBar from "./components/AppBar";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
        <Student />
      </header>
    </div>
  );
}

export default App;

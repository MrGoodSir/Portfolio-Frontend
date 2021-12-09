import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Bottom from "./components/Bottom";

function App() {
  return (
    <html className="appHTML">
      <div className="App">
        <Header />
        <Main />
        <Bottom />
      </div>
    </html>
  );
}

export default App;
import "./App.css";
import Catalog from "./components/Catalog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "2rem" }}>
        <Catalog />
      </div>
    </div>
  );
}

export default App;

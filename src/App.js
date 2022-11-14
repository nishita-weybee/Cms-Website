import "./App.css";
import "./assets/styles/styles.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage.js";
import Template from "./pages/TemplatePage/Template.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="template-form" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;

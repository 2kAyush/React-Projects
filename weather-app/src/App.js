import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, TagTasks } from "./Pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tagtasks" element={<TagTasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

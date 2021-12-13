import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Items, Posts } from "./pages";
import { NavBar } from "./components";
import Cart from "./UI/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="items/:categoryId" element={<Items />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </Router>
      <Cart />
    </div>
  );
}

export default App;

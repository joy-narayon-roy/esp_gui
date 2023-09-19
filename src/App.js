import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;

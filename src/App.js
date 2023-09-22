import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import File from "./component/create/File";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />}>
          <Route path="file" element={<File />} />
          <Route path="folder" element={<File />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

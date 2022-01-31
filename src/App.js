import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  // const currentUser = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;

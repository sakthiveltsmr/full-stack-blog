import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Topbar from "./Components/Topbar/Topbar";
import About from "./Components/About/About";
import Single from "./Components/Single/Single";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Write from "./Components/write/write";
import Settings from "./Pages/Setting/Settings";

function App() {
  // const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/posts/:id" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

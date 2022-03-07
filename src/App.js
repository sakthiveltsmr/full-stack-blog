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
import { useContext } from "react";
import { Context } from "./Context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

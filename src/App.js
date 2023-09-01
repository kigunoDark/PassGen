import Navbar from "./components/Navbar/Navbar.jsx";
import PasswordGenForm from "./components/PasswordGenForm/PasswordGenForm.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<PasswordGenForm />} />
          <Route path="/login" element={<div className="login-page">Login should be here :). However, I can use Routes :P </div>} />
        </Routes>
        <ToastContainer theme="dark" position="bottom-left" autoClose={1500} />
      </div>
    </Router>
  );
}

export default App;

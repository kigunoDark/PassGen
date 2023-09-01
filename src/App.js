import React from "react";
import PasswordGenForm from "./components/PasswordGenForm/PasswordGenForm.jsx";
import { ToastContainer } from "react-toastify";


import "./App.scss";

function App() {
  return (
    <div className="App">
      <PasswordGenForm />
      <ToastContainer theme="dark" position="bottom-left" autoClose={1500} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [isRegisterShown, setIsRegisterShown] = useState(false); //Aktif veya pasif olasını sağlar

  const handleToggle = () => {
    setIsRegisterShown(!isRegisterShown);
  };

  return (
    <div className="container">
      {isRegisterShown ? <Register onToggle={handleToggle} /> : <Login onToggle={handleToggle} />}
      <button className="btn btn-link" onClick={handleToggle}>
        {isRegisterShown ? "Already have an account? Login here" : "Don't have an account? Register here"}
      </button>
    </div>
  );
}

export default App;

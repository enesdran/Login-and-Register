import React, { useState } from "react";
import Axios from "axios";
import { Alert } from "reactstrap";
import "./App.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cellphoneNumber, setCellphoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const submit = (event) => {
    event.preventDefault();

    Axios
      .post("http://localhost:3001/api", {
        username: username,
        password: password,
        cellphoneNumber: cellphoneNumber,
        email: email,
      })
      .then((response) => {

        const message = `Kayıt işlemi başarılı!`;
        setMessage(message);
        setVisible(true);

        
      })
      .catch((error) => {
        const message = "Kayıt işlemi gerçekleştirilemedi";
        setMessage(message);
        setVisible(true);
      });
  };

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      <div className="login">
        <h2>Sıgn In</h2>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="cellphoneNumber">Cell phone number:</label>
            <input
              type="text"
              className="form-control"
              id="cellphoneNumber"
              value={cellphoneNumber}
              onChange={(e) => setCellphoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-posta:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sıgn In
          </button>
        </form>

        {visible && (
          <Alert color="info" isOpen={visible} toggle={onDismiss}>
            {message}
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Register;

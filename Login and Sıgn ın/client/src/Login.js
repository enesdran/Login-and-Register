import React, { useState } from "react";
import Axios from "axios";
import { Alert } from "reactstrap";
import "./App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios
      .post("http://localhost:3001/api/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        const name = response.data[0].name;
        const message = `Giriş başarılı! Kullanıcı adı: ${name}`;
        setMessage(message);
        setVisible(true);
      })
      .catch((error) => {
        const message = "Giriş başarısız lütfen bilgilerinizi kontrol ediniz";
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
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
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

export default Login;

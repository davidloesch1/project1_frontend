import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const login = () => {
    axios({
      method: "post",
      data: {
        email: Email,
        password: Password,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <a href="http://localhost:5000/auth/google">Login with Google</a>
      <a href="http://localhost:5000/auth/facebook">Login with Facebook</a>
      <form action="/login" method="post">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="username"
            className="form-control"
            id="loginUsername"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="loginPassword"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="modal-footer">
        <button
          type="submit"
          value="login"
          className="btn btn-primary"
          onClick={login}
          data-dismiss="modal"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  //setting variable and state using hooks
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [data, setData] = useState(null);

  //login function
  const login = () => {
    console.log("login");
    Axios({
      method: "POST",
      data: {
        email: Email,
        password: Password,
      },
      withCredentials: true,
      url: "http://localhost:5000/auth/login",
    }).then((res) => console.log(res));
  };

  //register function
  const register = () => {
    console.log("regiser");
    Axios({
      method: "POST",
      data: {
        email: Email,
        password: Password,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  const logout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/auth/logout",
    }).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="App">
      <a href="http://localhost:5000/auth/google">Login with Google</a>
      <a href="http://localhost:5000/auth/facebook">Login with Facebook</a>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
        <button className="btn btn-primary" onClick={register}>
          Register
        </button>
        <button className="btn btn-primary" onClick={getUser}>
          Get Current Username
        </button>
      </div>
      {data ? (
        <button className="btn btn-primary" onClick={logout}>
          logout
        </button>
      ) : null}
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Axios from "axios";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      username: "",
    };
  }
  componentDidMount() {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      console.log(res.data);
    });
  }

  render() {
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
      <>
        <h1>Dashboard</h1>
        <button className="btn btn-primary" onClick={logout}>
          logout
        </button>
      </>
    );
  }
}

export default Dashboard;

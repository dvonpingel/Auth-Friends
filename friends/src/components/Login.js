import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    error: "",
    isLoading: false,
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    axios
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.setState({ isLoading: false });
        this.props.history.push("/friends");
      })
      .catch((err) => {
        this.setState({ error: err.response.data.error });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            value={this.state.credentials.username}
            name="username"
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            value={this.state.credentials.password}
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
          />
          <p style={{ color: "red", fontSize: "15px" }}>{this.state.error}</p>
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;

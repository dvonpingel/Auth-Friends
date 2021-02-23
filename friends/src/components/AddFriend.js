import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  state = {
    newFriend: {
      id: "",
      name: "",
      age: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then((res) => {
        console.log(res);
        this.props.history.push("./friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <p>ADD A FRIEND!!!</p>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
            placeholder="Name"
          ></input>
          <input
            type="text"
            name="age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
            placeholder="Age"
          ></input>
          <input
            type="text"
            name="email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
            placeholder="Email"
          ></input>
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;

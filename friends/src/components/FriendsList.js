import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

class FriendsList extends React.Component {
  state = {
    friends: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>FRIENDS</div>
        {this.state.friends.map((friend) => (
          <div>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;

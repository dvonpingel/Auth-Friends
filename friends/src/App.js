import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import { axiosWithAuth } from "./utils/axiosWithAuth";

function App() {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div className="App">
      <nav>
        <p>
          <Link to="/login">Login</Link>
        </p>
        <p>
          <Link to="/friends">Friends</Link>
        </p>
        <p>
          <Link to="/add-friend">Add Friend</Link>
        </p>
        <p>
          <Link onClick={logout}>Logout</Link>
        </p>
      </nav>
      <Switch>
        <PrivateRoute exact path="/add-friend" component={AddFriend} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

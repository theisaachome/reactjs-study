import React from "react";
import { Route } from "react-router-dom";

// nested routes
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/Welcome/new-user">
        <NewUser />
      </Route>
    </section>
  );
};

export default Welcome;

const NewUser = () => {
  return <p>Welcome New User</p>;
};

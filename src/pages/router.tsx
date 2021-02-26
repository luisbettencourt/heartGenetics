import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../redux/types";
import LoginPage from "./login";
import UsersPage from "./users";
import UserPage from "./user";

export interface Props {
  signedIn: boolean;
}

const Router = ({ signedIn }: Props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>

      {signedIn ? (
        <>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route exact path="/users">
            <UsersPage />
          </Route>
          <Redirect to="/users" />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </Switch>
  </BrowserRouter>
);

function mapStateToProps(state: RootState) {
  return { signedIn: state.authentication.signedIn };
}

export default connect(mapStateToProps)(Router);

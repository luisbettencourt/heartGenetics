import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";

export type AuthenticationActions = ActionType<typeof actions>;

export interface State {
  signedIn: boolean;
  email?: string;
}

const defaultState = {
  signedIn: false,
};

export const reducer: Reducer<State, AuthenticationActions> = (
  state = defaultState,
  action: AuthenticationActions
) => {
  switch (action.type) {
    case getType(actions.signIn):
      return {
        signedIn: true,
        email: action.payload.email,
      };

    case getType(actions.signOut):
      return {
        signedIn: false,
      };

    default:
      return state;
  }
};

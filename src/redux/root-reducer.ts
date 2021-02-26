import { combineReducers } from "redux";
import { reducer as authenticationReducer } from "../features/authentication/redux/reducer";
import { reducer as usersReducer } from "../features/users/redux/reducer";

export const rootReducer = combineReducers({
  authentication: authenticationReducer,
  users: usersReducer,
});

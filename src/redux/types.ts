import { StateType } from "typesafe-actions";
import { AuthenticationActions } from "../features/authentication/redux/reducer";
import { UsersActions } from "../features/users/redux/reducer";
import { rootReducer } from "./root-reducer";

export type RootAction = AuthenticationActions | UsersActions;

export type RootState = StateType<typeof rootReducer>;

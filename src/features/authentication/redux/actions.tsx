import { createAction } from "typesafe-actions";

export const signIn = createAction(
  "SIGN_IN",
  (email: string, password: string) => ({ email, password })
)();

export const signOut = createAction("SIGN_OUT")();

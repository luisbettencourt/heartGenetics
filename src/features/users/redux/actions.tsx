import { createAction } from "typesafe-actions";
import { UserData } from "./reducer";

export const createUsers = createAction(
  "CREATE_USERS",
  (users: UserData[]) => users
)();

export const editUserField = createAction(
  "EDIT_USER_FIELD",
  (userId: number, field: string, value: string) => ({ userId, field, value })
)();

export const deleteUser = createAction(
  "DELETE_USER",
  (userId: number) => userId
)();

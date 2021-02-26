import { createSelector } from "reselect";
import { RootState } from "../../../redux/types";

export const getUsers = (state: RootState) => state.users;

export const getUser = createSelector(getUsers, (users) => (id: number) => {
  return users.find((user) => user.id === id);
});

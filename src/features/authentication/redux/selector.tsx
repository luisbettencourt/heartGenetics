import { createSelector } from "reselect";
import { RootState } from "../../../redux/types";

export const getAuthentication = (state: RootState) => state.authentication;

export const getEmail = createSelector(
  getAuthentication,
  (state) => state.email
);

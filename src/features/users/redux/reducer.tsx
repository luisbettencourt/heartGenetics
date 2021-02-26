import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import * as actions from "./actions";

export type UsersActions = ActionType<typeof actions>;

export type State = User[];

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  company: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const defaultState: User[] = [];

export const reducer: Reducer<State, UsersActions> = (
  state = defaultState,
  action: UsersActions
) => {
  switch (action.type) {
    case getType(actions.createUsers):
      return action.payload.map(
        (user: UserData): User => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          city: user.address.city,
          zipcode: user.address.zipcode,
          phone: user.phone,
          website: user.website,
          company: user.company.name,
        })
      );

    case getType(actions.editUserField):
      return [...state].map((user) => {
        if (user.id === action.payload.userId) {
          return { ...user, [action.payload.field]: action.payload.value };
        }
        return user;
      });

    case getType(actions.deleteUser):
      return [...state].filter((user) => user.id !== action.payload);

    default:
      return state;
  }
};

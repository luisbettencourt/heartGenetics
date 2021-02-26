import { createStore, Store } from "redux";
import { rootReducer } from "./root-reducer";
import { RootState, RootAction } from "./types";

// export interface State {
//   authentication: {
//     signedIn: boolean;
//     email?: string;
//   };
// }

// const defaultState = {
//   authentication: {
//     signedIn: true,
//   },
// };

// export const reducer: Reducer<State, Action> = (
//   state = defaultState,
//   action: Action
// ) => {
//   console.log(action);
//   switch (action.type) {
//     case getType(actions.signIn):
//       console.log("hey");
//       return state;

//     default:
//       return state;
//   }
// };

const store: Store<RootState, RootAction> = createStore(rootReducer);

export default store;

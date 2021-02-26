import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../../redux/types";
import UserList from "./user-list";
import { createUsers } from "../redux/actions";
import { getUsers } from "../redux/selector";
import { UserData } from "../redux/reducer";

const mapStateToProps = (state: RootState) => ({
  users: getUsers(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      createUsers: (users: UserData[]) => createUsers(users),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

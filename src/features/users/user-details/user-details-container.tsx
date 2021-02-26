import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../../redux/types";
import UserDetails from "./user-details";
import { deleteUser, editUserField } from "../redux/actions";
import { getUser } from "../redux/selector";

interface OwnProps {
  id: number;
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  user: getUser(state)(ownProps.id),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
  ownProps: OwnProps
) =>
  bindActionCreators(
    {
      editField: (value: string, field: string) =>
        editUserField(ownProps.id, field, value),
      deleteUser: () => deleteUser(ownProps.id),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);

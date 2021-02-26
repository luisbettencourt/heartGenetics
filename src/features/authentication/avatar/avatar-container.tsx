import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../../redux/types";
import Avatar from "./avatar";
import { signOut } from "../redux/actions";
import { getEmail } from "../redux/selector";

const mapStateToProps = (state: RootState) => ({
  email: getEmail(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      signOut: () => signOut(),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

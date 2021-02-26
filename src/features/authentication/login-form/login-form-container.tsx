import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../../redux/types";
import LoginForm from "./login-form";
import { signIn } from "../redux/actions";

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      signIn: (email: string, password: string) => signIn(email, password),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

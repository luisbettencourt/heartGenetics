import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { LoginForm } from "../features/authentication";

const styles = createStyles({
  login: {
    padding: 20,
    boxSizing: "border-box",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    maxWidth: "100%",
    width: 400,
  },
});

export interface Props {}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const LoginPage = ({ classes }: PropsAndStyles) => {
  return (
    <div className={classes.login}>
      <Paper elevation={1} className={classes.paper}>
        <LoginForm />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(LoginPage);

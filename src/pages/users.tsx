import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "../features/authentication";
import { UserList } from "../features/users";

const styles = createStyles({
  users: {
    padding: 20,
    boxSizing: "border-box",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    position: "relative",
    maxWidth: "100%",
    width: 800,
    overflowY: "auto",
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 20,
  },
});

export interface Props {}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const UsersPage = ({ classes }: PropsAndStyles) => {
  return (
    <div className={classes.users}>
      <div className={classes.avatar}>
        <Avatar />
      </div>
      <Paper elevation={1} className={classes.paper}>
        <UserList />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(UsersPage);

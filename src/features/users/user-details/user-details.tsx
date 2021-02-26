import React from "react";
import {
  createStyles,
  WithStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import { User } from "../redux/reducer";
import UserInfo from "../../../components/user-info";

const styles = (theme: Theme) =>
  createStyles({
    usersList: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 50,
      [theme.breakpoints.down("xs")]: {
        padding: "40px 20px",
      },
    },
    user: {
      display: "flex",
      justifyContent: "center",
      margin: "10px 0",
    },
  });

export interface Props {
  user?: User;
  editField: (value: string, field: string) => void;
  deleteUser: () => void;
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const UserDetails = ({
  classes,
  user,
  editField,
  deleteUser,
}: PropsAndStyles) => (
  <div className={classes.usersList}>
    {user && (
      <UserInfo user={user} editField={editField} deleteUser={deleteUser} />
    )}
  </div>
);

export default withStyles(styles)(UserDetails);

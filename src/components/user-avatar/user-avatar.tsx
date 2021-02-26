import React from "react";
import {
  createStyles,
  WithStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import { User } from "../../features/users/redux/reducer";

const styles = (theme: Theme) =>
  createStyles({
    avatar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textTransform: "none",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
    image: {
      height: 68,
      width: 68,
      borderRadius: "50%",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    name: {
      padding: "6px 8px",
    },
    email: {
      padding: "6px 8px",
    },
  });

export interface Props {
  user: User;
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const UserAvatar = ({ classes, user }: PropsAndStyles) => (
  <div className={classes.avatar}>
    <img
      alt={`avatar-${user.id}`}
      src={`https://i.pravatar.cc/150?img=${user.id}`}
      className={classes.image}
    />
    <div className={classes.content}>
      <div className={classes.name}>{user.name}</div>
      <div className={classes.email}>{user.email}</div>
    </div>
  </div>
);

export default withStyles(styles)(UserAvatar);

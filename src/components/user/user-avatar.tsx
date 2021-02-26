import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { User } from "../../features/users/redux/reducer";
import Button from "@material-ui/core/Button";

const styles = createStyles({
  avatar: {
    height: 80,
    display: "flex",
    justifyContent: "center",
    textTransform: "none",
  },
  image: {
    height: 68,
    borderRadius: "50%",
  },
  content: {
    marginLeft: 10,
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
  handleClick: () => void;
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const UserAvatar = ({ classes, user, handleClick }: PropsAndStyles) => (
  <Button className={classes.avatar} onClick={handleClick}>
    <img
      alt={`avatar-${user.id}`}
      src={`https://i.pravatar.cc/150?img=${user.id}`}
      className={classes.image}
    />
    <div className={classes.content}>
      <div className={classes.name}>{user.name}</div>
      <div className={classes.email}>{user.email}</div>
    </div>
  </Button>
);

export default withStyles(styles)(UserAvatar);

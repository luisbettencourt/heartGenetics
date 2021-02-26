import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = createStyles({
  avatar: {
    width: 800,
    maxWidth: "100%",
    height: 80,
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: "50%",
  },
  content: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  email: {
    padding: "6px 8px",
  },
});

export interface Props {
  email?: string;
  signOut: () => void;
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const Avatar = ({ classes, email, signOut }: PropsAndStyles) => (
  <div className={classes.avatar}>
    <img
      alt="avatar"
      src="https://www.w3schools.com/howto/img_avatar.png"
      className={classes.image}
    />
    <div className={classes.content}>
      <div className={classes.email}>{email}</div>
      <Button color="secondary" onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(Avatar);

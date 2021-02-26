import React, { useEffect } from "react";
import {
  createStyles,
  WithStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import axios from "axios";
import { User, UserData } from "../redux/reducer";
import UserAvatar from "../../../components/user-avatar";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) =>
  createStyles({
    usersList: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 50,
      [theme.breakpoints.down("xs")]: {
        padding: 20,
      },
    },
    user: {
      display: "flex",
      justifyContent: "center",
      margin: "10px 0",
    },
  });

export interface Props {
  users: User[];
  createUsers: (users: UserData[]) => void;
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const Avatar = ({ classes, users, createUsers }: PropsAndStyles) => {
  const history = useHistory();

  useEffect(() => {
    if (!users.length) {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        createUsers(res.data);
      });
    }
  }, [users, createUsers]);

  return (
    <div className={classes.usersList}>
      {users.map((user) => (
        <Button
          className={classes.user}
          onClick={() => history.push(`users/${user.id}`)}
        >
          <UserAvatar user={user} />
        </Button>
      ))}
    </div>
  );
};

export default withStyles(styles)(Avatar);

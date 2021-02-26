import React, { useState, ChangeEvent } from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { User } from "../../features/users/redux/reducer";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";

const styles = createStyles({
  avatar: {
    height: 80,
    display: "flex",
    justifyContent: "center",
    textTransform: "none",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  image: {
    height: 68,
    width: 68,
    borderRadius: "50%",
  },
  content: {
    marginLeft: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textfield: {
    width: "100%",
    margin: "10px 0",
  },
});

export interface Props {
  user: User;
  editField: (value: string, field: string) => void;
  deleteUser: () => void;
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const UserInfo = ({ classes, user, editField, deleteUser }: PropsAndStyles) => {
  const [readOnly, setReadOnly] = useState(true);

  const history = useHistory();

  const goBack = () => {
    history.replace("/users");
  };
  const toggleEditUser = () => {
    setReadOnly(!readOnly);
  };
  const onDeleteUser = () => {
    deleteUser();
    history.replace("/users");
  };

  const changeValue = (field: string) => (e: ChangeEvent<HTMLInputElement>) =>
    editField(e.target.value, field);

  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <IconButton color="primary" onClick={() => goBack()}>
          <ArrowBack />
        </IconButton>
        <img
          alt={`avatar-${user.id}`}
          src={`https://i.pravatar.cc/150?img=${user.id}`}
          className={classes.image}
        />
        <div>
          <IconButton color="primary" onClick={() => toggleEditUser()}>
            <Edit />
          </IconButton>
          <IconButton color="secondary" onClick={() => onDeleteUser()}>
            <Delete />
          </IconButton>
        </div>
      </div>

      <TextField
        className={classes.textfield}
        value={user.name}
        label="Name"
        onChange={changeValue("name")}
        InputProps={{
          readOnly,
        }}
      />
      <TextField
        className={classes.textfield}
        value={user.username}
        label="Username"
        onChange={changeValue("username")}
        InputProps={{
          readOnly,
        }}
      />
      <TextField
        className={classes.textfield}
        value={user.email}
        label="Email Address"
        onChange={changeValue("email")}
        InputProps={{
          readOnly,
        }}
      />
      <TextField
        className={classes.textfield}
        value={user.phone}
        label="Phone Number"
        onChange={changeValue("phone")}
        InputProps={{
          readOnly,
        }}
      />
      <TextField
        className={classes.textfield}
        value={user.city}
        label="City"
        onChange={changeValue("city")}
        InputProps={{
          readOnly,
        }}
      />
      <TextField
        className={classes.textfield}
        value={user.zipcode}
        label="Zip Code"
        onChange={changeValue("zipcode")}
        InputProps={{
          readOnly,
        }}
      />
      <TextField
        className={classes.textfield}
        value={user.company}
        label="Company Name"
        onChange={changeValue("company")}
        InputProps={{
          readOnly,
        }}
      />
    </div>
  );
};

export default withStyles(styles)(UserInfo);

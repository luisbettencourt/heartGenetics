import React, { useState, FormEvent, ChangeEvent } from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const styles = createStyles({
  form: {
    width: "100%",
    boxSizing: "border-box",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  texfield: {
    margin: "10px 0",
  },
  button: {
    width: 100,
    marginTop: 40,
  },
});

export interface Props {
  signIn: (email: string, password: string) => void;
}

type PropsAndStyles = Props & WithStyles<typeof styles>;

const LoginForm = ({ classes, signIn }: PropsAndStyles) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const history = useHistory();

  const onSignIn = (e: FormEvent) => {
    e.preventDefault();

    setEmailError(!email ? "Email Address can't be empty" : "");
    setPasswordError(!password ? "Password can't be empty" : "");
    if (email && password) {
      signIn(email, password);
      history.push("/");
    }
  };

  return (
    <form onSubmit={onSignIn} className={classes.form}>
      <TextField
        id="email"
        label="Email Address"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value.trim())
        }
        error={!!emailError}
        helperText={emailError}
        className={classes.texfield}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        error={!!passwordError}
        helperText={passwordError}
        className={classes.texfield}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        type="submit"
      >
        Sign in
      </Button>
    </form>
  );
};

export default withStyles(styles)(LoginForm);

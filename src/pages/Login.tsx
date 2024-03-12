import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  return (
    <div className="margin-0-auto">
      <h1>Sign in to</h1>
      <div>
        New user?<Link to={"/signin"}>Create an account</Link>
      </div>
      <TextField id="email address" label="email address" type="search" />
      <br />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <br />
      <Button variant="contained" disableElevation>
        Login
      </Button>
    </div>
  );
}

export default Login;

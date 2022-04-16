import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";

import login from "../../../images/login.png";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const { user, authError, isLoading, loginUser,googleSignIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  //handle input 
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  //submit button handling
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    e.preventDefault();
  };
  //sign in with google
  const signInWithGoogle=()=>{
    googleSignIn(location,history)
  }
  return (
    <Container className='App'>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="h6">Login</Typography>
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User logged in successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          <form onSubmit={handleLoginSubmit}>
            <Box>
              <TextField
                sx={{ width: "75%", mt: 5, my: 1 }}
                helperText="Please enter your email"
                id="demo-helper-text-aligned"
                label="Your Email"
                name="email"
                onBlur={handleOnBlur}
              />

              <TextField
                sx={{ width: "75%", my: 1 }}
                helperText="Please enter your password"
                id="demo-helper-text-aligned"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
              />
            </Box>
            <Button type="submit" variant="contained">
              Login
            </Button>
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/register"
              >
                <Button variant="text" style={{textTransform:'capitalize'}}>New user? Please register</Button>
              </NavLink>
            </Box>
            <hr />
          </form>
          <Button onClick={signInWithGoogle} variant="contained">Google Sign In</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} width="100%" height="auto" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

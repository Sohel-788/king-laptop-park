import React, { useState } from "react";
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink,useHistory} from "react-router-dom";
import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";
const Register = () => {
  const { registerUser,isLoading,user,authError } = useAuth();
  const [registerData, setRegisterData] = useState([]);
  const history=useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  //register handler
  const handleLoginSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Password did't match");
    }
    if(user.email){
      <Alert severity="success">User account created successfully!</Alert>
    }
    registerUser(registerData.email, registerData.password,registerData.name,history);
    e.preventDefault();
  };
  return (
    <Container className='App'>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="h6">Register</Typography>
          {!isLoading &&
            <form onSubmit={handleLoginSubmit}>
            <Box>
              <TextField
                sx={{ width: "75%", mt: 5, my: 1 }}
                helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="Your Name"
                name="name"
                type="text"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", mt: 5, my: 1 }}
                helperText="Please enter your email"
                id="demo-helper-text-aligned"
                label="Your Email"
                name="email"
                type="email"
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
              <TextField
                sx={{ width: "75%", my: 1 }}
                helperText="Please re-enter your password"
                id="demo-helper-text-aligned"
                label="Confirm Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
              />
            </Box>
            <Button type="submit" variant="contained">
              Register
            </Button>
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button style={{textTransform:'capitalize'}}>Already Registerd? Please login</Button>
              </NavLink>
            </Box>
          </form>
        }
          {isLoading &&
            <CircularProgress />
          }    
          {user?.email && <Alert severity="success">User created successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={login} width="100%" height="auto" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

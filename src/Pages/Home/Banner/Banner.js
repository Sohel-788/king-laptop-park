import { Grid, Typography,Container,Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import feature from "../../../images/feature.jpg";
import './Banner.css'
const Banner = () => {
  
  return (
    <Container sx={{ flexGrow: 1,my:8 }}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" gutterBottom component="div">
            <span style={{color:'goldenrod'}}>Welcome to</span> <br/><span style={{color:'tomato'}}>King Laptop Park</span>
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            King laptop park is a top leading laptop selling online shop all
            over the world. We are online base shop. Our product is imported and
            exported all over the world. So you can feel free to shop our
            exclusive laptop shop..!
          </Typography>
          <NavLink to='/allproducts' style={{textDecoration:'none'}}><Button sx={{my:3}} className='btn-style' variant="outlined">Explore more</Button></NavLink>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <img
            src={feature}
            alt="laptop"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
};

export default Banner;

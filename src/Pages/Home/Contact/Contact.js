import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";
import { Paper, Container, Grid, Typography } from "@mui/material";
import {
  faFacebookF,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  const fac = <FontAwesomeIcon icon={faFacebookF} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const pinterest = <FontAwesomeIcon icon={faPinterest} />;

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  return (
    <div id='contact'>
      <Container sx={{mb:8}}>
      <Typography sx={{ mt: 5 }}
                variant="h4"
                gutterBottom
                component="div"
              >
        {" "}
        
          Please feel free to{" "}
          <span style={{ color: "tomato" }}>contuct us</span>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
        <Item style={{ boxShadow: "none" }}>
            <Typography variant="h5" gutterBottom component="div">
              Our office
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              121 King, St Melbourne, <br />
              VIC 3000, Australia.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Item style={{ boxShadow: "none" }}>
            <Typography variant="h5" gutterBottom component="div">
              Contact
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Mobile: +8801937273724 <br />
              Email: mahmudsohel788@gmail.com <br />
              Web address: www.kinglaptoppark.com
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Item style={{ boxShadow: "none" }}>
            <Typography variant="h5" gutterBottom component="div">
              Follow us
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              <div className="footer-social">
                <span>{fac}</span>
                <span>{twitter}</span>
                <span>{pinterest}</span>
              </div>
                
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default Contact;

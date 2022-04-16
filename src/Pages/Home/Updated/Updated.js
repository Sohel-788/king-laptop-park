import {
  Grid,
  Paper,
  Typography,
  Container,
  TextField,
  Button
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";

const Updated = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container>
      <Box sx={{ flexGrow: 1,my:5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item style={{ boxShadow: "none" }}>
              <Typography
                sx={{ mt: 5 }}
                variant="h4"
                gutterBottom
                component="div"
              >
                Stay connected <span style={{ color: "tomato" }}>us</span>
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Drop your email here. We will notify you about our exclusive
                discount, new product, upcoming product and so on.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item style={{ boxShadow: "none" }}>
              <form>
                <Box>
                  <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    label="Email"
                    name="email"
                    type="email"
                    /* onBlur={handleOnBlur} */
                    size="small"
                  />
                </Box>
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Updated;

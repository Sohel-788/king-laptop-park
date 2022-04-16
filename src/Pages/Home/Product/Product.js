import React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Product = ({ product }) => {
  const { name, brand, price, img, series } = product;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className='card-style' style={{marginBottom:'40px'}}>
        <CardActionArea>
          <CardMedia component="img" height="auto" width="100%" image={img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Brand: {brand}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Series: {series}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Price: ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="outlined" className='btn-style' size="medium" color="primary">
            Purchase Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;

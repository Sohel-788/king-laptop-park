import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id="products">
      <Container>
        <Typography variant="h4" gutterBottom component="div" sx={{ my: 5 }}>
          Our exclusive branded <span style={{ color: "tomato" }}>laptops</span>
        </Typography>
        <Grid container spacing={2}>
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;

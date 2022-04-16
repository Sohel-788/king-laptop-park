import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import SingleProduct from "../SingleProduct/SingleProduct";
/* import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer"; */

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      {/* <Navigation></Navigation> */}
      <Container>
        <Typography variant="h4" gutterBottom component="div" sx={{ my: 5 }}>
          Our exclusive branded <span style={{ color: "tomato" }}>laptops</span>
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => (
            <SingleProduct key={product.id} product={product}></SingleProduct>
          ))}
        </Grid>
      </Container>
      {/* <Footer></Footer> */}
    </>
  );
};

export default AllProducts;

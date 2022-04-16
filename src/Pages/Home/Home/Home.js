
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Updated from "../Updated/Updated";
const Home = () => {
  return (
    <div id="home">
        <Navigation></Navigation>
        <Banner></Banner>
        <Products></Products>
        <Reviews></Reviews>
        <Updated></Updated>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default Home;

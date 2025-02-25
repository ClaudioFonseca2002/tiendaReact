import React from "react";
import Header from "../../../layouts/Headers";
import Category from "../../../layouts/Category";
import Banner from "../../../layouts/Banner";
import Brands from "../../../layouts/Brands";
import Offers from "../../../layouts/Offers";
import Footer from "../../../layouts/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Category></Category>
      <Banner></Banner>
      <Brands></Brands>
      <Offers></Offers>
      <Footer></Footer>
    </>
  );
};

export default Home;

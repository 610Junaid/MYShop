import React from "react";

import HeroSection from "../../components/HeroSection";
import Service from "../../components/service";
import Gallary from "../../components/gallary";
import PopularProducts from "../../components/popularProducts";

function Home({ AddToCart }) {
  return (
    <>
      <HeroSection />
      <Service />
      <PopularProducts AddToCart={AddToCart} />
      <Gallary />
    </>
  );
}

export default Home;

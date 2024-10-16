import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const PopularProducts = ({ AddToCart }) => {
  const [popularProductsItems, setpopularProductsItems] = useState([]);

  useEffect(() => {
    //this useeffect is for getting popular products on homepage
    const popularProductsFetch = async () => {
      try {
        const res = await axios("https://dummyjson.com/carts/1"); //this api fetches the name of available products only not anything else
        setpopularProductsItems(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    popularProductsFetch();
  }, []);

  return (
    <>
      <div className="mt-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-black">
          POPULAR PRODUCTS
        </h2>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {popularProductsItems.map((popularItems) => (
              <div
                className="lg:w-1/4 md:w-1/2 p-4 w-full border"
                key={popularItems.id}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={popularItems.thumbnail}
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {popularItems.title}
                  </h2>
                  <p className="mt-1">Price : {popularItems.price}</p>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mb-2 mr-2 mt-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => AddToCart(popularItems)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-1 mb-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-black">
          GALLAREY
        </h2>
      </div>
    </>
  );
};

export default PopularProducts;

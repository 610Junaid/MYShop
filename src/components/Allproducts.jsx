import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Allproducts({ AddToCart }) {
  const [allCategories, setallCategories] = useState([]); // this state holds names of all available categories
  const [allProductsHome, setallProductsHome] = useState([]); //this state holds products data that is displayed on the refresh
  const [selectedCategory, setselectedCategory] = useState("");
  const [originalProducts, setoriginalProducts] = useState([]);

  const [searchItem, setSearchItem] = useState("");

  const filterProducts = (selectcategory) => {
    // setselectedCategory(allproducts);
    setselectedCategory(selectcategory);

    const data = selectcategory
      ? originalProducts.filter(
          (filterItem) => filterItem.category === selectcategory
        )
      : originalProducts;
    setallProductsHome(data);
  };

  useEffect(() => {
    //this useeffect is for getting the nams of all categories
    const getAllProductCategories = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list"); //this api fetches the name of available categories only not anything else
        setallCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProductCategories();
  }, []);

  useEffect(() => {
    //this useeffect is used to show the default produts on homepage whenever an user open the website or all prouct section
    const allProductsHomepage = async () => {
      try {
        const res = await axios("https://dummyjson.com/products");
        setallProductsHome(res.data.products);
        setoriginalProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    allProductsHomepage();
  }, []);

  // search item functionality for searching single products

  const handleSearchItem = () => {
    const searchProducts = originalProducts.filter((searchFilterItem) =>
      searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    );

    setallProductsHome(searchProducts);
  };

  return (
    <>
      {/* this section is showing the names of available categories on the UI with allcategories state from this div to */}
      <div className=" flex flex-wrap flex-col gap-1 mt-0 mb-1  px-20 py-4 justify-center bg-gray-300 text-center">
        <select
          onChange={(e) => filterProducts(e.target.value)}
          className="mt-2 w-[20%] border rounded focus:outline-none text-center translate-x-[200%]"
        >
          <option>Select Product Category</option>
          {allCategories.map((items, index) => (
            <option
              key={index}
              value={items}
              className=" border px-2 py-2 bg-blue-300 rounded"
            >
              {items}
            </option>
          ))}
        </select>

        <div className="text-center">
          <input
            placeholder="Search Product"
            className="border text-center px-1 py-1 text-xl mt-2 rounded-lg focus:outline-none"
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
            value={searchItem}
          />
          <button
            className="border text-center px-2 py-1 text-xl mt-2 ml-1 rounded-lg focus:outline-none text-white bg-blue-600"
            onClick={handleSearchItem}
          >
            Search
          </button>
        </div>
      </div>
      {/* end of showing available categories on UI section */}

      {/* we consider this as all products as we are going to fetch categories from this */}
      <div className="flex flex-wrap gap-3 justify-center mb-8 mt-4">
        {/* this area of code is written to show some default products on homepage whenever someone open the website or the all products section */}
        {allProductsHome.map((allitems) => (
          <div className="border-2 rounded-xl" key={allitems.id}>
            <Link to={`/singleProduct/${allitems.id}`}>
              <img src={allitems.thumbnail} alt="" />
            </Link>
            <div className="mt-4">
              <h3 className="text-black font-bold text-xs tracking-widest title-font mb-1 ml-2">
                {allitems.title}
              </h3>
              <span className=" bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
                Ratings : {allitems.rating}
              </span>
              <div className="flex items-center justify-between">
                <p className="text-xl ml-2 mb-2 font-bold text-gray-900 dark:text-white">
                  Price : {allitems.price} $
                </p>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mb-2 mr-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => AddToCart(allitems)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Allproducts;

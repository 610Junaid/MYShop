import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaToggleOff } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar(cart, {userName}) {
  const [isOpen, setIsopen] = useState(false);

  const ToggleChange = () => {
    isOpen === false ? setIsopen(true) : setIsopen(false);
  };

  return (
    <>
      <div className="">
        <header className="bg-[#D2D1C3] border-b border-[maroon]">
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div>
              <Link to="/">
                <h3 className="font-bold text-2xl text-[#4E161F]">
                  MY<span className="text-[white]">Shop</span>
                </h3>
              </Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 text-[#4E161F] hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </Link>

                <Link to="/allproducts">
                  <li className="mr-5 text-[#4E161F] hover:text-gray-900 cursor-pointer">
                    All Products
                  </li>
                </Link>
                <Link to="/about">
                  <li className="mr-5 text-[#4E161F] hover:text-gray-900 cursor-pointer">
                    About
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="mr-5 text-[#4E161F] hover:text-gray-900 cursor-pointer">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>

            {
            isOpen ? (
              <div>
                <ul className="flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-[50vh] w-full z-10 bg-red-500 text-white items-center  justify-center font-semibold">
                  <Link to="/">
                    <li className="mt-0 text-[#4E161F] hover:text-gray-900 cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Link to="/allproducts">
                    <li className="mt-0 text-[#4E161F] hover:text-gray-900 cursor-pointer">
                      All Products
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className="mt-0 text-[#4E161F] hover:text-gray-900 cursor-pointer">
                      About
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="mt-0 text-[#4E161F] hover:text-gray-900 cursor-pointer">
                      Contact
                    </li>
                  </Link>
                </ul>
                <button
                  onClick={ToggleChange}
                  className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer"
                >
                  <RxCross2 size={30} />
                </button>
              </div>
            ) : (
              ""
            )
            }

            <div className="flex justify-center items-center gap-3">
              <Link to="/login">
                <button className=" bg-[#4E161F] text-[#fff] border-1  py-1  px-3 focus:outline-none hover:bg-[#fff] hover:text-[#4E161F] font-semibold rounded text-base hover:border-none">
                  Login
                </button>
              </Link>
              <span>{userName}</span>

              <Link to="/Cart">
                <button>
                  <FaShoppingCart size={28} color="#4E161F" />
                </button>
              </Link>
              {isOpen ? (
                ""
              ) : (
                <button className=" md:hidden" onClick={ToggleChange}>
                  <GiHamburgerMenu size={28} color="#4E161F" />
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;

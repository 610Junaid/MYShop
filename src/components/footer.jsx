import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 md:mx-0 mx-auto text-center md:text-left">
            <h3 className="font-bold text-4xl mt-10 ">
              MY<span className="text-[#4E161F]">Shop</span>
            </h3>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                MENU
              </h2>
              <ul className="list-none mb-10">
                <li>Features</li>
                <li className="mt-1">Info Center</li>
                <li className="mt-1">News Blog</li>
                <li className="mt-1">Login</li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                Company
              </h2>
              <ul className="list-none mb-10">
                <li className="mt-1">About Us</li>
                <li className="mt-1">Privacy Policy</li>
                <li className="mt-1">Terms & Conditions</li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                Contact
              </h2>
              <ul className="list-none mb-10">
                <li className="mt-1">Contact Sales</li>
                <li className="mt-1">News Blog </li>
                <li className="mt-1">+91 6395374066 </li>
                <li className="mt-1">+91 7455884347 </li>
              </ul>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                Tech Support
              </h2>
              <ul className="list-none mb-10">
                <li className="mt-1">Contact Support</li>
                <li className="mt-1">Info Center </li>
                <li className="mt-1">Activities </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#4E161F] text-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">
              © 2024 MYShop - <span>@copyright</span>
            </p>
            <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <span className="mr-2">
                <FaFacebook size={30} />
              </span>
              <span className="mr-2">
                <FaInstagram size={30} />
              </span>
              <span>
                <FaTwitter size={30} />
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

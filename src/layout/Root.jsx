import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CiHome, CiShoppingCart, CiPhone, CiBoxes } from "react-icons/ci";
import Footer from "./Footer";

function Root() {
  return (
    <>
      <nav className="md:flex hidden w-full p-4 bg-[#AE1C85] fixed top-0  justify-between items-center">
        <Link to={"/"} className="text-white font-bold md:text-2xl">
          React Store
        </Link>
        <ul className="flex space-x-8 text-white font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/cart-product"}>Cart Product</Link>
          </li>
       
        </ul>
      </nav>
      {/* this nav in mobile only */}
      <nav className="md:hidden w-full fixed bottom-0 p-4 bg-[#D9D9D9]">
        <ul className="flex justify-evenly">
          <li>
            <Link to={"/"} className="flex flex-col items-center">
              <CiHome />
              <span className="text-sm">Home</span>
            </Link>
          </li>

          <li>
            <Link to={"/product"} className="flex flex-col items-center">
              <CiBoxes />
              <span className="text-sm">Product</span>
            </Link>
          </li>
          <li>
            <Link to={"/cart-product"} className="flex flex-col items-center">
              <CiShoppingCart />
              <span className="text-sm">Cart</span>
            </Link>
          </li>
     
        </ul>
      </nav>
      {/* this nav in mobile only */}
      <section className="w-full min-h-[100vh] bg-[#F3EEEE] ">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default Root;

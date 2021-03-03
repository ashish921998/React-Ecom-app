import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoPlaystation } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div>
        <p className="dis">
          End of Season discount: 50% Use code{" "}
          <strong style={{ color: "red" }}>#SALE50</strong> at the Checkout
        </p>
      </div>

      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/mobile">Mobiles</Link>
        <Link to="/laptop">Laptops</Link>
        <Link to="/">
          <IoLogoPlaystation size={50} className="ps" />
        </Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </>
  );
}

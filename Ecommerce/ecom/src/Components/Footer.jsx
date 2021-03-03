import React from "react";
import { Link } from "react-router-dom";
import { IoLogoPlaystation } from "react-icons/io";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import "./nav.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <IoLogoPlaystation
          style={{ color: " #f5c991", margin: "50px" }}
          size={100}
        />
        <div className="h2">
          <h2>
            <Link to="/faq">Frequently asked Questions</Link>
          </h2>
          <h2>
            <Link to="/career">Careers</Link>
          </h2>
        </div>
        <div className="h2">
          <h2>
            <Link to="/about">About Us</Link>
          </h2>
          <h2>
            <Link to="/contact">Contact Us</Link>
          </h2>
        </div>
      </div>
      <div className="social">
        <GrFacebook style={{ margin: "30px" }} size={30} />
        <GrInstagram style={{ margin: "30px" }} size={30} />
        <GrTwitter style={{ margin: "30px" }} size={30} />
      </div>
    </>
  );
}

export default Footer;

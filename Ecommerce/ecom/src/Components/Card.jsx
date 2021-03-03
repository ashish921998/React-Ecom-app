import React from "react";
import Btn from "./Btn";
import "./nav.css";
import axios from "axios";
import { BiRupee } from "react-icons/bi";

function Card({ img, product, price, handleClick, id }) {
  const promise1 = `https://protected-mesa-68876.herokuapp.com/mobile/${id}`;
  const promise2 = `https://protected-mesa-68876.herokuapp.com/laptop/${id}`;
  const promise3 = `https://protected-mesa-68876.herokuapp.com/men/${id}`;
  const promise4 = `https://protected-mesa-68876.herokuapp.com/women/${id}`;
  const handleAdd = (id) => {
    console.log(id);
    return Promise.all([
      axios.patch(promise1, {
        cart: true,
      }),
      axios.patch(promise2, {
        cart: true,
      }),
      axios.patch(promise3, {
        cart: true,
      }),
      axios.patch(promise4, {
        cart: true,
      }),
    ])
      .then(console.log("hi"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="card">
        <img src={img} alt="product" onClick={handleClick} />
        <h2>
          <strong></strong>
          {product}
        </h2>
        <div className="price">
          <h3>
            <BiRupee />
            {price}
          </h3>
          <Btn label="Add to cart" onClick={() => handleAdd(id)}></Btn>
        </div>
      </div>
    </>
  );
}

export default Card;

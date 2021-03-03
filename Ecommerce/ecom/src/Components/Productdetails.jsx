import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Btn from "./Btn";
import "./nav.css";

export default function Productdetails() {
  const { userid, pro } = useParams();
  const [info, setInfo] = React.useState({});

  React.useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    return axios
      .get(`https://protected-mesa-68876.herokuapp.com/${pro}/${userid}`)
      .then((res) => {
        setInfo(res.data);
        console.log(res.data.id);
      })
      .catch((err) => console.log(err));
  };
  const promise1 = `https://protected-mesa-68876.herokuapp.com/mobile/${userid}`;
  const promise2 = `https://protected-mesa-68876.herokuapp.com/laptop/${userid}`;
  const promise3 = `https://protected-mesa-68876.herokuapp.com/men/${userid}`;
  const promise4 = `https://protected-mesa-68876.herokuapp.com/women/${userid}`;
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
  const { img, product, price, id } = info;
  return (
    <>
      <div className="details">
        <div>
          <img src={img} alt="hi" />
        </div>
        <div className="add">
          <h1>Name - {product}</h1>
          <h2>Price - {price}</h2>
          <h3>Description</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id numquam
            at magni unde. Accusamus sunt, harum aliquid cum necessitatibus
            obcaecati. Dolore eveniet alias sed ipsum recusandae corporis cum
            sint? Eos!
          </p>
          <Btn label="Add to cart" onClick={() => handleAdd(id)}></Btn>
        </div>
      </div>
    </>
  );
}

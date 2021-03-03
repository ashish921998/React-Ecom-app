import axios from "axios";
import React from "react";
import Card from "./Card";
import "./nav.css";

function Cart({ id }) {
  const [data, setData] = React.useState([]);

  const promise1 =
    "https://protected-mesa-68876.herokuapp.com/mobile/?cart=true";
  const promise2 =
    "https://protected-mesa-68876.herokuapp.com/laptop/?cart=true";
  const promise3 = "https://protected-mesa-68876.herokuapp.com/men/?cart=true";
  const promise4 =
    "https://protected-mesa-68876.herokuapp.com/women/?cart=true";

  React.useEffect(() => {
    handleGet();
  }, []);

  const handleDelete = (id) => {
    console.log(id);

    if (id <= 6) {
      axios
        .patch(`https://protected-mesa-68876.herokuapp.com/mobile/${id}`, {
          cart: false,
        })
        .then((res) => handleGet())
        .catch((err) => console.log(err));
    } else if (id > 6 && id <= 12) {
      axios
        .patch(`https://protected-mesa-68876.herokuapp.com/laptop/${id}`, {
          cart: false,
        })
        .then((res) => handleGet())
        .catch((err) => console.log(err));
    } else if (id > 12 && id <= 18) {
      axios
        .patch(`https://protected-mesa-68876.herokuapp.com/men/${id}`, {
          cart: false,
        })
        .then((res) => handleGet())
        .catch((err) => console.log(err));
    } else if (id > 18 && id <= 24) {
      axios
        .patch(`https://protected-mesa-68876.herokuapp.com/women/${id}`, {
          cart: false,
        })
        .then((res) => handleGet())
        .catch((err) => console.log(err));
    }
  };

  const handleGet = () => {
    return Promise.all([
      axios.get(promise1),
      axios.get(promise2),
      axios.get(promise3),
      axios.get(promise4),
    ])
      .then((res) => {
        setData([
          ...res[0].data,
          ...res[1].data,
          ...res[2].data,
          ...res[3].data,
        ]);
      })
      .catch((err) => console.log(err));
  };

  const handleCheckout = () => {};
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Card {...item} />
          <select label="Quantity" style={{ backgroundColor: "white" }}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <button onClick={() => handleDelete(item.id)} className="delete">
            {" "}
            Delete{" "}
          </button>
        </div>
      ))}

      <div style={{ display: "flex", color: "white" }}>
        <h2>Order Total: </h2>
        <h2>
          {data.reduce((acc, e) => {
            return acc + Number(e.price);
          }, 0)}
        </h2>
        <button className="checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </>
  );
}

export default Cart;

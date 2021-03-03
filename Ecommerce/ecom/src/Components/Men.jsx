import React from "react";
import axios from "axios";
import Card from "./Card";
import "./nav.css";
import { useHistory } from "react-router-dom";
export default function Laptop() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    handleGet();
  }, []);

  const handleGet = () => {
    return axios
      .get("https://protected-mesa-68876.herokuapp.com/men")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  let history = useHistory();
  const handleClick = (id) => {
    history.push(`/men/${id}`);
  };
  return (
    <>
      <div className="laptop">
        {data.map((item) => (
          <Card
            key={item.id}
            {...item}
            handleClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </>
  );
}

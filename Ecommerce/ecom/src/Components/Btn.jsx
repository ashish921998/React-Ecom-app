
import React from "react";

export default function Btn(props) {
  const  {onClick, label} = props

  return (
    <div>
      <button
        style={{
          backgroundColor: "orangered",
          color: "white",
          width: "120px",
          height: "35px",
          textAlign: "center",
          borderRadius: "5px ",
          fontSize: "15px",
        }}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

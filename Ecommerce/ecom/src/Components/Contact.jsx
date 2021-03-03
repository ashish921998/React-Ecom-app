import React from "react";
import "./nav.css";
function Contact() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  const [data, setData] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data }, { email, name, mobile }); // need to figure this out
    console.log(name, email, mobile);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h3>Name</h3>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <h3>Email Address</h3>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <h3>Mobile No.</h3>
        <input
          type="number"
          placeholder="Enter Mobile no"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
        <br />
        <br />
        <input type="submit" className="submit" />
      </form>
    </div>
  );
}

export default Contact;

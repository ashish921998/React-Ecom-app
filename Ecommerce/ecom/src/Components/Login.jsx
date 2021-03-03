import React from "react";
import { AuthContext } from "../Context/AuthContextProvider";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { handleAuth } = React.useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAuth({ email, password });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;

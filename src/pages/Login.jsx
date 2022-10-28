import loginImg from "../assets/login-img.jpg";
import "../css/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.taget.email]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/home", { userName: user.email });
  };
  return (
    <div className="container-fluid row g-0">
      <div className="img w-50 h-100 col-sm-12 ">
        <img src={loginImg} alt="login-img" />
      </div>

      <div className="login w-50 vh-100 d-flex col-sm-12 flex-column justify-content-center align-items-center">
        <div className="header mb-5 pb-5">
          <h2>Login to See All of the Delicious Recipes</h2>
        </div>

        <div className="form d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="d-flex flex-column ">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              required
              placeholder="Enter your e-mail.."
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              required
              placeholder="Enter your password.."
            />
            <button className="btn btn-danger btn-sm" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

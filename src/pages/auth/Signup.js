import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../services/api.service";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await apiService.signUp(state);
      setErrors({ name: "", password: "", email: "" });
      navigate("/auth/login");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="text-center">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px"}} >
        <div style={{width:"38%"}} >
          <form onSubmit={handleSubmit}>
            <div style={{marginBottom: "38px"}}>
              <h1 style={{fontSize: "78px", fontWeight: "700"}}>Signup!</h1>
            </div>
            <div style={{display: "flex", flexDirection: "column", marginBottom:"30px"}}>
              <label
                style={{fontSize: "34px", fontWeight: "200"}}
                htmlFor="signupFormName">Name</label>
              <input
                style={{height: "74px", fontSize:"26px"}}
                className="badge-pill"
                type="text"
                name="name"
                id="signupFormName"
                value={state.name}
                error={errors.name}
                onChange={handleChange}
              />
            </div>

            <div style={{display: "flex", flexDirection: "column", marginBottom:"30px"}}>
              <label
                style={{fontSize: "34px", fontWeight: "200"}}
                htmlFor="signupFormEmail">E-mail Address</label>
              <input
                style={{height: "74px", fontSize:"32px"}}
                className="badge-pill"
                type="email"
                name="email"
                id="signupFormEmail"
                value={state.email}
                error={errors.email}
                onChange={handleChange}
              />
            </div>

            <div  style={{display: "flex", flexDirection: "column"}}>
              <label
                style={{fontSize: "34px", fontWeight: "200"}}
                htmlFor="signupFormPassword">Password</label>
              <input
                style={{height: "74px", fontSize:"26px"}}
                className="badge-pill"
                type="password"
                name="password"
                id="signupFormPassword"
                value={state.password}
                error={errors.password}
                onChange={handleChange}
              />
            </div>

            <div  style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "46px"}}>
              <button
                style={{height: "60px", fontSize:"26px", width: "280px",
                backgroundColor: "black", color: "white", marginBottom: "18px"}}
                className="badge-pill"
                type="submit">Signup!</button>

              <Link to="/auth/login">
                Already have an account? Click here to login.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

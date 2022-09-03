import "./Signup.css"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../services/api.service";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    setErrors("")
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await apiService.signUp(state);
      setErrors("");
      navigate("/auth/login");
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.msg);
    }
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <navbar style={{backgroundColor: "black", width: "100%", height:"60px" , position: "fixed", color:"white"}}>
        <nav style={{display: "flex", flexDirection: "row", justifyContent:"right"}}>
          <div style={{display: "flex", flexDirection: "row", marginTop:"6px"}}>
            <div style={{marginRight:"16px"}}>
              <Link to="/auth/login">
                <button className='badge-pill login'>LOGIN</button>
              </Link>
            </div>
          </div>
        </nav>
      </navbar>
    <div className="text-center">
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "88px"}} >
        <div style={{width:"34%"}} >
          <form onSubmit={handleSubmit}>
            <div style={{marginBottom: "42px"}}>
              <h1 style={{fontSize: "58px", fontWeight: "700"}}>Signup!</h1>
            </div>
            <div style={{display: "flex", flexDirection: "column", marginBottom:"18px"}}>
              <label
                style={{fontSize: "30px", fontWeight: "200"}}
                htmlFor="signupFormName">Name</label>
              <input
                style={{height: "68px", fontSize:"26px"}}
                className="badge-pill"
                type="text"
                name="name"
                id="signupFormName"
                value={state.name}
                error={errors.name}
                onChange={handleChange}
              />
            </div>

            <div style={{display: "flex", flexDirection: "column", marginBottom:"18px"}}>
              <label
                style={{fontSize: "30px", fontWeight: "200"}}
                htmlFor="signupFormEmail">E-mail Address</label>
              <input
                style={{height: "68px", fontSize:"32px"}}
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
                style={{fontSize: "30px", fontWeight: "200"}}
                htmlFor="signupFormPassword">Password</label>
              <input
                style={{height: "68px", fontSize:"26px"}}
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

            <div className="error-container">
              {errors !== "" && <p>{errors}</p>}
            </div>

          </form>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Signup;

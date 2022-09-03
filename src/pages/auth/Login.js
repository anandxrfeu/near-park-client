import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../services/api.service";
import './Login.css'

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
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
    console.log("in handleSubmit..")
    try {
      const response = await apiService.login(state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors("");
      navigate("/saas");
    } catch (err) {
      console.error("err", err);
      console.error("err.response.data.errors", err.response.data.msg );
      //setErrors({ ...err.response.data.msg });
      setErrors(err.response.data.msg)
    }
  }

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <navbar style={{backgroundColor: "black", width: "100%", height:"60px" , position: "fixed", color:"white"}}>
        <nav style={{display: "flex", flexDirection: "row", justifyContent:"right"}}>
          <div style={{display: "flex", flexDirection: "row", marginTop:"6px"}}>
            <div style={{marginRight:"16px"}}>
              <Link to="/auth/signup">
                <button className='badge-pill login'>Signup</button>
              </Link>
            </div>
          </div>
        </nav>
      </navbar>
      <div className="text-center">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
          <div style={{width:"38%"}}>
            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <h1 style={{fontSize: "72px", fontWeight: "bold", marginBottom: "58px"}}>Login</h1>
              </div>
              <div style={{display: "flex", flexDirection: "column"}}>
                <label
                    style={{fontSize: "38px", fontWeight: "200", marginBottom: "16px"}}
                    htmlFor="signupFormEmail">E-mail Address</label>
                <input className="badge-pill"
                  style ={{height:"74px", fontSize:"38px", fontWeight:"400", border: "1px solid black"}}
                  type="email"
                  name="email"
                  id="signupFormEmail"
                  value={state.email}
                  error={errors}
                  onChange={handleChange}
                />
              </div>

              <div style={{display: "flex", flexDirection: "column", marginTop:"32px"}}>
                <label
                  style={{fontSize: "38px", fontWeight: "200", marginBottom: "16px"}}
                  htmlFor="signupFormPassword">Password</label>
                <input className="badge-pill"
                  style ={{height:"74px", fontSize:"38px", fontWeight:"400", border: "1px solid black"}}
                  type="password"
                  name="password"
                  id="signupFormPassword"
                  value={state.password}
                  error={errors}
                  onChange={handleChange}
                />
              </div>

              <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "58px"}}>
                <button className="badge-pill mainLogin"
                  style={{width: "280px", height:"72px",
                  fontSize: "34px", marginBottom: "20px",
                  backgroundColor: "black", color: "white"
                  }}
                  type="submit">Login!</button>

                <Link to="/auth/signup">
                  Don't have an account? Click here to signup!
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

export default Login;

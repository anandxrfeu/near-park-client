import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextComponent } from "./contexts/authContext";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );


ReactDOM.render(
  <AuthContextComponent>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </AuthContextComponent>,
  document.getElementById("root")
 );

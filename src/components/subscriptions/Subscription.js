import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

const Subscription = () => {

  const {loggedInUser} = useContext(AuthContext)

  return (
      <div>
        <div>
          <h1>SUBSCRIPTION</h1>
        </div>
       {loggedInUser.user.role === "ADMIN" && <div>
            <Link to="/saas/subscription/create">

                <p>Create New Plan</p>

            </Link>

        </div> }
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{border: "1px solid black", width: "460px", height: "500px", marginRight: "80px", borderRadius: "22px", marginTop: "40px"}}>
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
              <h2 style={{fontWeight: "bold", fontSize: "42px"}}>BASIC</h2>
            </div>
            <div style={{marginTop: "50px"}}>
              <div className="benefits" style={{paddingLeft: "50px"}}>
                <div style={{marginBottom: "20px"}}>
                  <h4 style={{fontSize: "24px", fontWeight: "bold"}}>DASHBOARD</h4>
                  <h5 style={{fontSize: "20px", fontWeight: "300"}}>FINANCIAL ACCOUNTING</h5>
                </div>
                <div>
                  <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>CASHIER</h4>
                  <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>MOBILE TICKET MANAGEMENT</h4>
                </div>
              </div>
              <div  style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                 <button style={{width: "260px", border: "1px solid black"}}className="badge-pill">SUBSCRIBE</button>
              </div>
              <h3  style={{display: "flex", justifyContent: "center", marginTop: "50px", fontSize: "30px", fontWeight: "bold"}}>1.7% Per Transaction</h3>
            </div>

          </div>

          <div style={{border: "1px solid black", width: "460px", height: "500px", marginRight: "80px", borderRadius: "22px", marginTop: "40px"}}>
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
              <h2 style={{fontWeight: "bold",  fontSize: "42px"}}>STANDARD</h2>
            </div>
            <div style={{marginTop: "50px"}}>
              <div className="benefits" style={{paddingLeft: "50px"}}>
                <div style={{marginBottom: "20px"}}>
                  <h4 style={{fontSize: "24px", fontWeight: "bold"}}>DASHBOARD</h4>
                  <h5 style={{fontSize: "20px", fontWeight: "300"}}>FINANCIAL ACCOUNTING</h5>
                </div>
                <div>
                  <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>CASHIER</h4>
                  <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>MOBILE TICKET MANAGEMENT</h4>
                </div>
              </div>
              <div  style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                 <button style={{width: "260px", border: "1px solid black"}}className="badge-pill">SUBSCRIBE</button>
              </div>
              <h3  style={{display: "flex", justifyContent: "center", marginTop: "50px", fontSize: "30px", fontWeight: "bold"}}>89 Reais</h3>
            </div>

          </div>






        </div>




      </div>


  )
}

export default Subscription

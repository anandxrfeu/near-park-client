import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"
import apiService from "../../services/api.service"

const Subscription = (props) => {

  const {subscriptions} = props

  const {loggedInUser} = useContext(AuthContext)

  const clickHandler = async (e) =>{
    const payload = {subscriptionPlan: e.target.id}
    try{
      const data = await apiService.subscribeToPlan(payload)
      console.log(data)
    }catch(err){
      console.log(err)
    }

  }

  return (
      <div>
       {loggedInUser.user.role === "ADMIN" && <div>
            <Link to="/saas/subscription/create">
                <p>Create New Plan</p>
            </Link>
        </div> }

        <div style={{display: "flex", justifyContent: "space-between"}}>
          {subscriptions && subscriptions.map(subscription => {
            return  (
                      <div key={subscription._id}  
                          style={{border: "1px solid black", width: "460px", height: "500px", marginRight: "80px", borderRadius: "22px", marginTop: "40px"}}>
                        <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                          <h2 style={{fontWeight: "bold", fontSize: "42px"}}>{subscription.name}</h2>
                        </div>
                        <div style={{marginTop: "50px"}}>
                          <div className="benefits" style={{paddingLeft: "50px"}}>
                          {subscription.benefits.map(benefit => {
                            return (
                              <h4 key={benefit} style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>{benefit}</h4>
                            )
                          })}
                          </div>
                          <div  style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                            <button disabled={loggedInUser.user.role === "ADMIN"} 
                                    style={{width: "260px", border: "1px solid black"}}
                                    className="badge-pill"
                                    id={subscription._id}
                                    onClick={clickHandler}
                            >{subscription.callToAction.toUpperCase()}</button>
                          </div>
                          <h3  style={{display: "flex", justifyContent: "center", marginTop: "50px", fontSize: "30px", fontWeight: "bold"}}>R$ {subscription.pricePerMonth} / month</h3>
                        </div>
                      </div>
            )
          })}
        </div>

      </div>


  )
}

export default Subscription

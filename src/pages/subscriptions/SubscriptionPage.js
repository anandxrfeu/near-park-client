import "./SubscriptionPage.css"

import { useEffect, useState } from "react";
import Subscription from "../../components/subscriptions/Subscription";
import apiService from "../../services/api.service";

const SubscriptionPage = (props) => {


   const [subscriptions, setSubscriptions] = useState([])
   const [IsLoading, setIsloading] = useState(true)

   useEffect (() => {
      async function fetchData () {
         const data  = await apiService.getAllActiveSubscriptions()
         setSubscriptions(data)
         setIsloading(false)
      }
      fetchData()
   }, [])

    return (
      <div className="subscription-container">
         <h1 className="subscriptions_controls-title">SUBSCRIPTION PLANS</h1>
         {IsLoading && <p>Loading..</p>}
         {!IsLoading && <Subscription subscriptions={subscriptions} />}
      </div>
 )
}

export default SubscriptionPage;

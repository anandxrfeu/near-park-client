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
      <div>
         <h1>SUBSCRIPTION PLANS</h1>
         {IsLoading && <p>Loading..</p>}
         {!IsLoading && <Subscription subscriptions={subscriptions} />}
      </div>
 )
}

export default SubscriptionPage;

import OneReservationForm from "../components/layout/OneReservation/OneReservationForm";
import ContainerOneReservation from "../components/layout/OneReservation/ContainerOneReservation";
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import apiService from "../services/api.service";
import DetailLeftContainer from "../components/layout/OneReservation/DetailLeftContainer";
import PaymentANDStatusContainer from "../components/layout/OneReservation/PaymentANDStatusContainer";
import OneReservationDetail from "../components/layout/OneReservation/OneReservationDetail";
import ChangeCashCalc from "../components/layout/OneReservation/ChangeCashCalc";
import PaymentSelect from "../components/layout/OneReservation/PaymentSelect"
import CardCheckout from "../components/layout/OneReservation/CardCheckout"
import PaymentComplete from '../components/layout/OneReservation/PaymentComplete'
import ChangeTotal from '../components/layout/OneReservation/ChangeTotal'

const OneReservationPage = (props) => {
  const {id} = useParams()


  const [isLoading, setIsLoading] = useState(true)
  const [reservation, setReservation] = useState({})
  const [payByCash, setPayByCash] = useState(false)
  const [showChange, setShowChange] = useState(false)
  const [change, setChange] = useState(0)

  const updatePaymentMethod = (paymentMethod) => {
    if (paymentMethod === "CASH") {
      setPayByCash(true)
    }
    else if (paymentMethod === "CHECKOUT") {
      setPayByCash(false)
    }
  }

  const calculateChange = (changeValue) => {
    setChange(changeValue)

  }


  const startDateTime = new Date(reservation.createdAt)
  reservation.startTime = `${startDateTime.getHours()} : ${startDateTime.getMinutes()} `;

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(false)
        const data = await apiService.getAReservation(id)
        console.log(data)
        console.log(id)
        const startDateTime = new Date(data.createdAt)
        data.startTime = `${startDateTime.getHours()} : ${startDateTime.getMinutes()} `;
        setReservation(data)
        console.log(data)


      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  const updateReservation = async (payload) => {
    console.log(payload)
    try {
      const data = await apiService.updateAReservation(id, payload)
      setReservation(data)
    } catch(err) {
      console.log(err)
    }
  }

    if(isLoading) {
      return (
        <p>loading...</p>
      )
    }
    return (

      <div style={{marginLeft: '-20px', marginTop: "-7px"}}>
            <div>
               <OneReservationForm reservation={reservation} updateReservation={updateReservation}/>
               <div>
                <div style={{display: "flex", border: "1px solid red"}}>
                    <div>
                      <div style={{border: "1px solid green", width: "45vw", height: "80vh"}}>

                          <div>
                              <div>
                              <OneReservationDetail updateReservation={updateReservation} reservation={reservation}/>
                              </div>
                              <div>
                                {payByCash && <ChangeCashCalc calculateChange={calculateChange}/>}
                              </div>
                          </div>

                      </div>
                      {/* <DetailLeftContainer reservation={reservation} updateReservation={updateReservation}/> */}
                    </div>
                    <div>
                      <div style={{border: "1px solid blue", width: "45vw", height: "80vh"}}>
                          <div style={{display: "flex", justifyContent: "right", backgroundColor: "black", color: "white"}}>
                            <h2 style={{paddingRight: "20px", display: "flex"}}>PAYMENT</h2>
                          </div>
                          <div>
                            <div>
                              {!showChange && <PaymentSelect updatePaymentMethod={updatePaymentMethod} /> }
                            </div>
                            {/* <div>
                              <CardCheckout/>
                            </div> */}
                            {/* <div>
                              <PaymentComplete/>
                            </div> */}
                            <div>
                              {showChange && <ChangeTotal change={change}/>}
                            </div>

                          </div>

                      </div>
                      {/* <PaymentANDStatusContainer/> */}
                    </div>

                </div>

                {/* <ContainerOneReservation reservation={reservation} updateReservation={updateReservation}/> */}
               </div>

            </div>


      </div>



    )
}

export default OneReservationPage;

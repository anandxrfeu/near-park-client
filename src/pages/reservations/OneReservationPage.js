import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import apiService from "../../services/api.service";

import OneReservationForm from "../../components/reservations/oneReservation/OneReservationForm";
import OneReservationDetail from "../../components/reservations/oneReservation/OneReservationDetail";
import ChangeCashCalc from "../../components/reservations/oneReservation/ChangeCashCalc";
import PaymentSelect from "../../components/reservations/oneReservation/PaymentSelect"
import CardCheckout from "../../components/reservations/oneReservation/CardCheckout"
import PaymentComplete from '../../components/reservations/oneReservation/PaymentComplete'
import ChangeTotal from '../../components/reservations/oneReservation/ChangeTotal'

const OneReservationPage = (props) => {
  const {id} = useParams()


  const [isLoading, setIsLoading] = useState(true)
  const [reservation, setReservation] = useState({})
  const [payByCash, setPayByCash] = useState(false)
  const [showChange, setShowChange] = useState(false)
  const [change, setChange] = useState("0")
  const [reservationPrice, setReservationPrice] = useState(0)
  const [showPaymentComplete, setShowPaymentComplete] = useState(false)
  const [showPaymentSelect, setShowPaymentSelect] = useState(true)
  const [showCheckOut, setShowCheckOut] = useState(false)



  const updatePaymentMethod = (paymentMethod) => {
    if (paymentMethod === "CASH") {
      setPayByCash(true)
      const durationInHours = calculateDurationInHours(reservation.createdAt, new Date())
      setReservationPrice(calculatePrice(reservation.parkingLot.pricing, durationInHours))
    }
    else if (paymentMethod === "CHECKOUT") {
      setShowPaymentSelect(false)
      setShowCheckOut(false)

      console.log("showChange",showChange)
      console.log("payByCash)",payByCash)
      console.log("showPaymentComplete",showPaymentComplete)
      console.log("showCheckOut",showCheckOut)
      console.log("showPaymentSelect",showPaymentSelect)
    }
  }


  const calculateChange = (changeValue) => {
    console.log("changeValue", changeValue)
    setChange(changeValue)
    setShowChange(true)
    setShowPaymentSelect(false)
    console.log("change", change)

  }

  const formatTime = (time) => {
    return Number(time) < 10 ? `0${time}` : time
  }

  const startDateTime = new Date(reservation.createdAt)
  reservation.startTime = `${formatTime(startDateTime.getHours())} : ${formatTime(startDateTime.getMinutes())} `;

  if (reservation.endedAt) {
    const endDateTime = new Date(reservation.endedAt)
    reservation.endTime = `${formatTime(endDateTime.getHours())} : ${formatTime(endDateTime.getMinutes())} `;
  }


  const calculateDurationInHours = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const durationInHours = Math.ceil((endDate.valueOf() - startDate.valueOf())/3600000)
  return durationInHours
}

const calculatePrice = (pricing, durationInHours) => {
  console.log(pricing, durationInHours)
  let price = 0
  if(durationInHours >= 24){
      price = parseInt(pricing.twentyFourHourPrice) + (durationInHours - 24)*parseInt(pricing.oneHourAdditionalPrice)
  } else if (durationInHours >= 8 ){
      price = parseInt(pricing.eightHourPrice) + (durationInHours - 8)*parseInt(pricing.oneHourAdditionalPrice)
  }else{
      price = parseInt(pricing.oneHourPrice) + (durationInHours - 1)*parseInt(pricing.oneHourAdditionalPrice)
  }
  console.log("price > ",price)
  return price
}

  const confirmPaymentByCash = () => {
    setShowChange(false)
    setShowPaymentComplete(true)
    setPayByCash(false)

  }

  const confirmPaymentByCard = () => {
    setShowChange(false)
    setShowPaymentComplete(true)
    setShowCheckOut(true)
  }

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
        if (data.status === "CLOSED"){
          setShowPaymentComplete(true)
          setShowPaymentSelect(false)
          setShowCheckOut(true)
        }
        else if (data.status === "OPEN") {
          setShowCheckOut(true)
        }

        if (data.payBy === "CARD"){
          // setShowPaymentComplete(true)
          setShowPaymentSelect(false)
          setShowCheckOut(true)
        }



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
                                {payByCash && <ChangeCashCalc calculateChange={calculateChange} reservationPrice={reservationPrice}/>}
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
                              {showPaymentSelect && <PaymentSelect updatePaymentMethod={updatePaymentMethod} /> }
                            </div>
                            <div>
                              {!showCheckOut && <CardCheckout reservation={reservation} confirmPaymentByCard={confirmPaymentByCard}/>}
                            </div>
                            <div>
                              {showPaymentComplete && <PaymentComplete reservation={reservation}/>}
                            </div>
                            <div>
                              {showChange && <ChangeTotal change={change} updateReservation={updateReservation} confirmPaymentByCash={confirmPaymentByCash}/>}
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

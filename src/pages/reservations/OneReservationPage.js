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
    }
  }


  const calculateChange = (changeValue) => {
    setChange(changeValue)
    setShowChange(true)
    setShowPaymentSelect(false)
  }

  const formatTime = (time) => {
    return Number(time) < 10 ? `0${time}` : time
  }

  const startDateTime = new Date(reservation.createdAt)
  reservation.startTime = `${formatTime(startDateTime.getHours())}:${formatTime(startDateTime.getMinutes())} `;

  if (reservation.endedAt) {
    const endDateTime = new Date(reservation.endedAt)
    reservation.endTime = `${formatTime(endDateTime.getHours())}:${formatTime(endDateTime.getMinutes())} `;
  }


  const calculateDurationInHours = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const durationInHours = Math.ceil((endDate.valueOf() - startDate.valueOf())/3600000)
  return durationInHours
}

const calculatePrice = (pricing, durationInHours) => {
  let price = 0
  if(durationInHours >= 24){
      price = parseInt(pricing.twentyFourHourPrice) + (durationInHours - 24)*parseInt(pricing.oneHourAdditionalPrice)
  } else if (durationInHours >= 8 ){
      price = parseInt(pricing.eightHourPrice) + (durationInHours - 8)*parseInt(pricing.oneHourAdditionalPrice)
  }else{
      price = parseInt(pricing.oneHourPrice) + (durationInHours - 1)*parseInt(pricing.oneHourAdditionalPrice)
  }
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
        const startDateTime = new Date(data.createdAt)
        data.startTime = `${startDateTime.getHours()} : ${startDateTime.getMinutes()} `;
        setReservation(data)
        if (data.status === "CLOSED"){
          setShowPaymentComplete(true)
          setShowPaymentSelect(false)
          setShowCheckOut(true)
        }
        else if (data.status === "OPEN") {
          setShowCheckOut(true)
        }

        if (data.payBy === "CARD"){
          console.log("user wants to pay by card...")
          // setShowPaymentComplete(true)
          setShowPaymentSelect(false)
          setShowCheckOut(false)
        }



      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [id])

  const updateReservation = async (payload) => {
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

      <div style={{marginLeft: '-20px',  width:"100%", height:"100%", border: "4px solid purple", display: "flex", flexDirection: "column"}}>
        <div style={{height: "22%", width:"100%", border: "4px solid blue"}}>
          <OneReservationForm reservation={reservation} updateReservation={updateReservation}/>
        </div>
        <div style={{height: "78%", width:"100%", border: "4px solid yellow", display: "flex", flexDirection:"row"}}>
            <div style={{height: "100%", width:"100%", border: "4px solid yellow"}}>
              <div style={{height: "69%", width:"100%"}}>
                <OneReservationDetail updateReservation={updateReservation} reservation={reservation}/>
              </div>
              <div style={{height: "31%", width:"100%", border: "3px solid blue"}}>
                {payByCash && <ChangeCashCalc calculateChange={calculateChange} reservationPrice={reservationPrice}/>}
              </div>


            </div>
            <div style={{height: "100%", width:"100%", border: "4px solid yellow"}}>
                <div style={{display: "flex", justifyContent: "right", backgroundColor: "black", color: "white"}}>
                     <h2 style={{paddingRight: "20px", display: "flex"}}>PAYMENT</h2>
                </div>
                <div style={{height: "100%", width:"100%"}}>
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


        </div>


      </div>



    )
}

export default OneReservationPage;

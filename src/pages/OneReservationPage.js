import OneReservationForm from "../components/layout/OneReservation/OneReservationForm";
import ContainerOneReservation from "../components/layout/OneReservation/ContainerOneReservation";
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import apiService from "../services/api.service";

const OneReservationPage = (props) => {
  const {id} = useParams()


  const [isLoading, setIsLoading] = useState(true)
  const [reservation, setReservation] = useState({})

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
                <ContainerOneReservation reservation={reservation}/>
               </div>

            </div>


      </div>



    )
}

export default OneReservationPage;

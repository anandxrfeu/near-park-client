import {useState, useEffect} from "react";
import './OneReservationForm.css'

const OneReservationForm = (props) => {
  const {reservation, updateReservation} = props

  const [licensePlate, setLicensePlate] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [vehicleDescription, setVehicleDescription] = useState("")
  const [ticketCode, setTicketCode] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(reservation && reservation.vehicle) {
      setLicensePlate(reservation.vehicle.licensePlate)
      setVehicleType(reservation.vehicle.type)
      setVehicleDescription(reservation.vehicle.description)
    }
    if(reservation) {
      setTicketCode(reservation.ticket)
      setCheckIn(reservation.startTime)
    }

    setIsLoading(false)

  }, [reservation])

  const editHandler = (e) => {
    e.preventDefault()
    const payload = {
      vehicle : {
        licensePlate : licensePlate,
        type : vehicleType,
        description: vehicleDescription,
      }

    }
    updateReservation(payload)
  }


if (isLoading) {
  return (
    <p>Loading ...</p>
  )
}





  return (
    <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", backgroundColor: "white"}}>
      <div style={{width:"100%", height:"42%", border:" 1px solid black", backgroundColor: "white", marginTop: "4px"}}>
        <table style={{width: "100%", height: "100%"}}>
           <thead style={{height: "100%", width: "100%", paddingTop: "0.3%"}}>
              <tr style={{display: "flex", flexDirection: "row",
              justifyContent: 'space-between', fontSize:"1.2em", height:"100%", width:"100%", paddingTop:"0.9%"}}>
                <th  style={{ width:"14%", textAlign:"center", height:"100%"}}>TICKET #</th>
                <th  style={{ width:"12%", textAlign:"center", height:"100%"}}>CHECK-IN</th>
                <th  style={{ width:"19%",  textAlign:"center", height:"100%"}}>LICENSE PLATE</th>
                <th  style={{ width:"14%",  textAlign:"center", height:"100%"}}>TYPE</th>
                <th  style={{ width:"26%", textAlign:"center", height:"100%" }}>DESCRIPTION</th>
                <th  style={{ width:"11%",  height:"100%"}}></th>
              </tr>
            </thead>
          </table>
      </div>
      <div style={{width:"100%", height:"68%", backgroundColor: "white", marginTop: "6px", marginBottom: "8px"}}>
        <div style={{width:"100%", height:"100%",  backgroundColor: "white"}}>
             <form style={{width: "100%", height:"100%", display: "flex", border: "1px solid black",
                flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", alignItems: "baseline", paddingTop:"1.2%"
                }} onSubmit={editHandler}>
                <div style={{ width: "14%", height:"100%"}} >
                  <p style={{fontSize: " 1.6em", fontWeight: "bold", width: "100%", height:"68%",  textAlign: "center"}}>{ticketCode}</p>
                </div>
                <div style={{width: "12%", height:"100%"}}>
                  <p style={{fontSize: "1.6em",  width: "100%", height:"62px", textAlign: "center"}}>{checkIn}</p>
                </div>
                <div style={{width: "19%"}}>
                    <input className="LicensePlateOne badge-pill"
                      style={{ width: "100%", height:"3.1em" }}
                      placeholder = "LICENSE PLATE"
                      type="text"
                      name="LicensePlate"
                      maxLength={"8"}
                      onChange={(e) => setLicensePlate(e.target.value)}
                      value={licensePlate}
                    />
                </div>
                <div className='vehicleType' style={{ width: "14%", height:"100%"}}>
                  <select value={vehicleType} className="vehicleType  badge-pill"
                    style={{width: "100%", height:"3.1em"}}
                    onChange={(e) => setVehicleType(e.target.value) }>
                      <option className='vehicleType'>VEHICLE TYPE</option>
                      <option className='vehicleType' value="CAR">Carro</option>
                      <option className='vehicleType' value="MOTORBIKE">Moto</option>
                  </select>
                </div>
                <div style={{ width: "26%", height:"100%"}}>
                    <input className="Vehicle-DescriptionOne badge-pill"
                          style={{width: "100%", height:"3.1em"}}
                          placeholder = "VEHICLE DESCRIPTION"
                          type="text"
                          maxLength={"27"}
                          name="VehicleDescription"
                          onChange={(e) => setVehicleDescription(e.target.value)}
                          value={vehicleDescription}
                        />
                </div>
                <div style={{width: "10%", marginRight: "10px", height:"100%"}} >
                  <button className='formBtnOne badge-pill' style={{border: "1px solid black", width: "100%",  height:"3.1em"}} type="submit">EDIT</button>
                </div>
             </form>

        </div>


      </div>


    </div>



  )
}

export default OneReservationForm

import './ReservationList.css'
import {Link} from 'react-router-dom';

const ReservationList = (props) => {
  const {reservationList} = props

   console.log('reservationList', reservationList)



  return (
    <>
      <div className="TableReservation" style={{marginTop: "20px", border: "1px solid black"}}>
         <table style={{marginTop: "12px", border: "3px solid green", width: "100%"}}>
            <thead >
                <div >
                  <tr style={{border: "2px solid red", display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                      <div>
                        <th  style={{border: "2px solid yellow", paddingLeft:"20px"}}>TICKET #</th>
                      </div>
                      <div>
                        <th  style={{border: "2px solid yellow"}}>CHECK-IN</th>
                      </div>
                      <div>
                        <th  style={{border: "2px solid yellow"}}>LICENSE PLATE</th>
                      </div>
                      <div>
                        <th  style={{border: "2px solid yellow"}}>TYPE</th>
                      </div>
                      <div>
                        <th  style={{border: "2px solid yellow"}}>DESCRIPTION</th>
                      </div>
                      <div  style={{paddingLeft:  "50px", paddingRight: "15px"}}>
                         <th style={{border: "2px solid yellow"}}>STATUS</th>
                      </div>
                  </tr>
                </div>
            </thead>
            <div className="scrollit" >
              <tbody>
                <div>
                  {/* <div style={{height: "55px", border: "2px solid Black"}}>
                    <tr style={{border: "2px solid grey", display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "50px", width: "1200px"}}>
                        <td style={{border: "2px solid blue"}}><span style={{marginLeft: "20px", border: "2px solid red", fontSize: "28px", fontWeight: "bold"}}>005</span></td>
                        <td style={{marginLeft: "48px", border: "2px solid blue"}}><span  style={{border: "2px solid red", fontSize: "28px"}}>01:36</span></td>
                        <td  style={{marginLeft: "28px", border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "28px", fontWeight: "bold"}}>AAA-1234</span></td>
                        <td style={{border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "28px"}}>CARRO</span></td>
                        <td style={{border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "24px"}}>VW JETTA PRETO</span></td>
                        <td style={{border: "2px solid blue"}}><span style={{ paddingRight: "15px", border: "2px solid red"}}>ACTIVE</span></td>
                    </tr>
                  </div> */}
                  {reservationList.map( reservation => {
                    reservation.statusCode = reservation.status === "CLOSED" ? 'Inactive' : 'Active' ;
                    const startDateTime = new Date(reservation.createdAt)
                    reservation.startTime = `${startDateTime.getHours()} : ${startDateTime.getMinutes()} `;
                    return (
                      <div key={reservation._id} style={{height: "55px", border: "2px solid Black"}}>
                        <tr style={{border: "2px solid grey", display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "50px", width: "1200px"}}>
                            <td style={{border: "2px solid blue"}}><span style={{marginLeft: "20px", border: "2px solid red", fontSize: "28px", fontWeight: "bold"}}>{reservation.ticket}</span></td>
                            <td style={{marginLeft: "48px", border: "2px solid blue"}}><span  style={{border: "2px solid red", fontSize: "28px"}}>{reservation.startTime}</span></td>
                            <td  style={{marginLeft: "28px", border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "28px", fontWeight: "bold"}}>{reservation.vehicle.licensePlate}</span></td>
                            <td style={{border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "28px"}}>{reservation.vehicle.type}</span></td>
                            <td style={{border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "24px"}}>{reservation.vehicle.description}</span></td>
                            <Link to={`/saas/reservation/${reservation._id}`}>
                              <td className="rounded-circle" style={{marginRight:"20px", marginTop:"4px", border: "2px solid black", width: "38px", height: "38px", backgroundColor: "#FED000"}}>{reservation.statusCode}</td>
                            </Link>


                        </tr>
                      </div>

                    )


                  })}

                </div>
              </tbody>
            </div>
          </table>

      </div>

    </>
  )
}

export default ReservationList

import './ReservationList.css'
import {Link} from 'react-router-dom';

const ReservationList = (props) => {
  const {reservationList} = props
  const formatTime = (time) => {
  return Number(time) < 10 ? `0${time}` : time
}

  return (
    <>
      <div className="TableReservation" >
         <table className="tableListMain table-hover">
            <thead >
                <div >
                  <tr style={{border: "2px solid red", display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                      <div style={{border: "1px solid green", width:"100px"}}>
                        <th  style={{border: "2px solid yellow", paddingLeft:"20px"}}>TICKET #</th>
                      </div>
                      <div style={{border: "1px solid green", width:"86px", marginLeft: "42px"}}>
                        <th  style={{border: "2px solid yellow"}}>CHECK-IN</th>
                      </div>
                      <div style={{border: "1px solid green", width:"128px", marginLeft: "12px"}}>
                        <th  style={{border: "2px solid yellow"}}>LICENSE PLATE</th>
                      </div>
                      <div  style={{border: "1px solid green", width:"48px",  marginRight: "110px", marginLeft: "42px"}}>
                        <th  style={{border: "2px solid yellow"}}>TYPE</th>
                      </div>
                      <div style={{border: "1px solid green", width:"116px", marginRight: "50px"}}>
                        <th  style={{border: "2px solid yellow"}}>DESCRIPTION</th>
                      </div>
                      <div  style={{border: "1px solid green", width:"70px", marginRight: "12px"}}>
                         <th style={{border: "2px solid yellow"}}>STATUS</th>
                      </div>
                  </tr>
                </div>
            </thead>
            <div className="scrollit" >
              <tbody>
                <div>
                  {reservationList.map( reservation => {
                    reservation.statusCode = reservation.status === "CLOSED" ? 'Inactive' : 'Active' ;
                    const startDateTime = new Date(reservation.createdAt)
                    reservation.startTime = `${formatTime(startDateTime.getHours())} : ${formatTime(startDateTime.getMinutes())} `;
                    return (
                      <div key={reservation._id} style={{height: "55px", border: "2px solid Black"}}>
                        <tr className='tableRowReservationList'>
                            <td style={{border: "2px solid white",  width:"120px"}}><span style={{marginLeft: "20px", border: "2px solid white", fontSize: "28px", fontWeight: "bold", width:"120px"}}>{reservation.ticket}</span></td>
                            <td style={{marginLeft: "48px", border: "2px solid white", width: "108px", textAlign: "center"}}><span  style={{border: "2px solid white", fontSize: "28px", width: "116px"}}>{reservation.startTime}</span></td>
                            <div style={{width: "180px"}}>
                               <td  style={{marginLeft: "28px", border: "2px solid white", width: "180px", textAlign: "left"}}><span style={{border: "2px solid white", fontSize: "28px", fontWeight: "bold", width: "180px"}}>{reservation.vehicle.licensePlate}</span></td>
                            </div>

                            <div style={{width: "164px"}}>
                              <td style={{border: "2px solid white", width: "164px"}}><span style={{border: "2px solid white", fontSize: "28px", width: "164px"}}>{reservation.vehicle.type}</span></td>
                            </div>

                            <td style={{border: "2px solid white", width: "280px"}}><span style={{border: "2px solid white", fontSize: "24px",  width: "280px"}}>{reservation.vehicle.description}</span></td>
                            <Link to={`/saas/reservation/${reservation._id}`}>
                              <div style={{marginRight: "24px", marginTop:"4px", width:"38px"}}>
                                <td className={reservation.status !== "CLOSED" ? "statusActive rounded-circle" : "statusClosed rounded-circle"} ></td>
                                {/* {reservation.statusCode} */}
                              </div>
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

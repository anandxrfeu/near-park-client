

const Occupancy = (props) => {
const {maxOccupancy, activeReservations} = props

const occupancyRate = `${activeReservations}/${maxOccupancy}`

  return (
    <div>
        <div  style={{border: "4px solid black", borderRadius: "6px", backgroundColor: "black", width: "146px", height: "82px", marginTop: "20px", paddingLeft:"6px"}}>
          <p style={{color: "white", paddingLeft: "15px", paddingTop: "8px",  fontSize: "16px"}}>OCCUPANCY</p>
          <h2 style={{color: "white", paddingLeft: "15px", fontWeight: "bold", fontSize: "34px", marginTop: "-16px", texAlign: "center"}}>{occupancyRate}</h2>
        </div>
    </div>
  )
}

export default Occupancy

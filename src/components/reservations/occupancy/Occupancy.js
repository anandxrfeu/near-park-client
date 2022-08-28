

const Occupancy = (props) => {
const {maxOccupancy, activeReservations} = props

console.log("max", maxOccupancy, typeof maxOccupancy)
console.log("active", activeReservations, typeof activeReservations)

const occupancyRate = `${activeReservations}/${maxOccupancy}`

  return (
    <div>
        <div  style={{border: "4px solid black", borderRadius: "6px", backgroundColor: "black", width: "140px", height: "82px", marginTop: "20px", border: "2px solid red"}}>
          <p style={{color: "white", paddingLeft: "15px", paddingTop: "8px"}}>OCCUPANCY</p>
          <h2 style={{color: "white", paddingLeft: "14px", fontWeight: "bold", fontSize: "34px", marginTop: "-12px"}}>{occupancyRate}</h2>
        </div>
    </div>
  )
}

export default Occupancy

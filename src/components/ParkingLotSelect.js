const ParkingLotSelect = (props) => {
const {parkingLotList, onSelectHandler} = props





  return (
    <div style={{width: "300px", display: "flex", flexDirection: "row"}}>
      <div className='container' style={{width: "300px", display: "flex", flexDirection: "column"}}>
        <select
        className="custom-select badge-pill"
        onChange={(e) => {
          const parkingLot = parkingLotList.find( parkingLot => parkingLot.name === e.target.value )
          onSelectHandler(parkingLot)
        }}
        >
        {/* <option key={1} defaultValue={"Select a parking lot"}>{"Select a parking lot"}</option>   */}
        {parkingLotList.map(parkingLot =>  <option key={parkingLot._id} value={parkingLot.name}>{parkingLot.name}</option> )}
        </select>

      </div>
    </div>

  )
}

export default ParkingLotSelect

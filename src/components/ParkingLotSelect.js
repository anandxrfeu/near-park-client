import {useState, useEffect} from 'react'
import apiService from '../services/api.service'

const ParkingLotSelect = (props) => {
const {parkingLotList, onSelectHandler} = props





  return (
    <div style={{width: "300px", display: "flex", flexDirection: "row"}}>
      <div className='container' style={{width: "300px", display: "flex", flexDirection: "column"}}>
        <select
        className="custom-select badge-pill"
        onChange={(e) => {
          console.log("parkinglot",e.target.value)
          // const selectedParkingLot = e.target.value;
          // setParkingLotSelect(selectedParkingLot)
          onSelectHandler(e.target.value)
        }}
        > {parkingLotList.map(parkingLot =>  <option key={parkingLot._id} value={parkingLot.name}>{parkingLot.name}</option> )}
           {/* { return (

        )} */}


        </select>

      </div>
    </div>

  )
}

export default ParkingLotSelect

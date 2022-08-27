import './FilterAndSearch.css'
import {useState} from "react";
import SearchReservation from './FilterAndSearchComponents/SearchReservation';
import Occupancy from './FilterAndSearchComponents/Occupancy';
import FilterList from './FilterAndSearchComponents/FilterList';



const FilterAndSearch = (props) => {

  const [search, setSearch] = useState('')
  const {searchReservation} = props

  return (
    <div style={{marginTop: "30px", border: "1px solid red"}} >
      <div>
        <FilterList/>
      </div>

      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
        <div>
          <Occupancy/>
        </div>

        <div>
          <div className="Search" style={{marginTop: "30px", border: "1px solid red"}}>
            <div>
              <SearchReservation searchReservation={searchReservation} />
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
export default FilterAndSearch
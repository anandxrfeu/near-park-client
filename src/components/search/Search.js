import "./Search.css"

import { useState } from "react"

const Search = (props) => {

 const {searchFunction, placeholder} = props

 const [search, setSearch] = useState('')

 const searchHandler = (e) => {
   e.preventDefault()
   setSearch(e.target.value)
   searchFunction(e.target.value)
 }


  return (
            <input className="search badge-pill" 
                placeholder={placeholder}
                type="text"
                name="searchForm"
                value={search}
                onChange={searchHandler}
            />
  )
}

export default Search

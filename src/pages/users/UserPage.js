import "./UserPage.css"

import Search from "../../components/search/Search"
import User from "../../components/users/User"
import { useEffect } from "react"

const UserPage = (props) => {

    useEffect(() => {
        
    }, [])

    return (
        <div className="user-management">
            
            <div className="user-management_search" >
                <Search placeholder="SEARCH BY NAME" />
            </div>
            <div className="user-management_table">
                <div className="user-management_table_name">NAME</div>
                <div className="user-management_table_email">EMAIL</div>
                <div className="user-management_table_plan">PLAN</div>
                <div className="user-management_table_price">PRICE</div>
                <div className="user-management_table_since">SINCE</div>
                <div className="user-management_table_status">STATUS</div>
            </div>


            <User />
            <User />
            <User />

        </div>
    )
}

export default UserPage
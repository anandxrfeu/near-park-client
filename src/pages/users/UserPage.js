import "./UserPage.css"

import Search from "../../components/search/Search"
import User from "../../components/users/User"
import { useState, useEffect } from "react"
import apiService from "../../services/api.service"
import Filter from "../../components/filter/Filter"

const UserPage = (props) => {

    const [owners, setOwners] = useState([])
    const [ownersFiltered, setOwnersFiltered] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {

        async function fetchData(){
            const userData = await apiService.getAllUsers()
            const userSubsciptions = await apiService.getAllUserSubscptionDetails()
            
            if(userSubsciptions && userData && userData.map((user) => {
                userSubsciptions.forEach(subscription => {
                    if(subscription.user.toString() === user._id.toString()){
                        user.subscription = subscription
                    }
                })
                return user 
            }))
            setOwners(userData)
            setOwnersFiltered(userData)
            setIsloading(false)
        }
        fetchData()

    }, [])

    const searchUsers = (searchTerm) => {
        let ownersFilteredCopy = []
        ownersFilteredCopy = owners.filter(owner => {
            return owner.email.toLowerCase().startsWith(searchTerm.toLowerCase())
        })
        setOwnersFiltered(ownersFilteredCopy)
    }

    const filterUsers = (option) => {
        let filterOwners = []
        if (option === "Active") {
            filterOwners = owners.filter(owner => {
            return !owner.deletedAt
            })
        }
        else if (option === "Paying") {
            filterOwners = owners.filter(owner => {
            return owner.subscription
            })
        }
        else{
            filterOwners = [...owners]
        }
        setOwnersFiltered(filterOwners)
    }

    if(isLoading){
        return (
            <p>Loading..</p>
        )
    }

    return (
        <div className="user-management">
            
            <div className="user-management-controls-container">
                <div className="user-management_search" >
                    <Search placeholder="SEARCH BY USER EMAIL" searchFunction={searchUsers}/>
                </div>
                <div className="user-management_filter" >
                    <Filter btnText={"All"} filterFunction={filterUsers}/>
                    <Filter btnText={"Active"} filterFunction={filterUsers}/>
                    <Filter btnText={"Paying"} filterFunction={filterUsers}/>
                </div>
            </div>
            <div className="user-management_table">
                <div className="user-management_table_name">NAME</div>
                <div className="user-management_table_email">EMAIL</div>
                <div className="user-management_table_plan">PLAN</div>
                <div className="user-management_table_price">PRICE</div>
                <div className="user-management_table_since">SINCE</div>
                <div className="user-management_table_status">STATUS</div>
            </div>

            {ownersFiltered.length !== 0 && ownersFiltered.map(plo => {
                const memberSinceTimestamp = new Date(plo.createdAt)
                plo.memberSince = `${memberSinceTimestamp.getMonth()}/${memberSinceTimestamp.getFullYear()}`
                if(plo.subscription){
                    plo.plan = plo.subscription.subscriptionPlan.name
                    plo.planPrice = plo.subscription.subscriptionPlan.pricePerMonth
                }
                return ( <User key={plo._id} user={plo}/>)
            })}

        </div>
    )
}

export default UserPage
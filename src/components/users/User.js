import apiService from "../../services/api.service"
import ToggleSwitch from "../layout/toggleSwitch/ToggleSwitch"
import "./User.css"

const User = (props) => {

const {user} = props

//console.log("user -> ", user)

const changeUserActivation = async (isAtive) => {
    const payload = {
        "active": isAtive
    }
    try{
        await apiService.toggleUserAccess(user._id, payload)
    }catch(err){
        console.log(err)
    }
}

return (
    <div className="user-card">
                <div className="user-card_name">{user.name.toUpperCase()}</div>
                <div className="user-card_email">{user.email}</div>
                <div className="user-card_plan">{user.plan ? user.plan : "No Active Subscription"}</div>
                <div className="user-card_price">{user.planPrice ? `R$ ${user.planPrice}/ month` : "-"}</div>
                <div className="user-card_since">{user.memberSince}</div>
                <div className="user-card_status"><ToggleSwitch toggleState={changeUserActivation} isActive={user.deletedAt === undefined || !user.deletedAt } /></div>
    </div>

)
}

export default User
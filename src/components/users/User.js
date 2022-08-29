import "./User.css"

const User = (props) => {

const {user} = props

console.log(user)

return (
    <div className="user-card">
                <div className="user-card_name">{user.name.toUpperCase()}</div>
                <div className="user-card_email">{user.email}</div>
                <div className="user-card_plan">BASIC</div>
                <div className="user-card_price">R$ 89 / month</div>
                <div className="user-card_since">07/12</div>
                <div className="user-card_status">ACTIVE</div>
    </div>

)
}

export default User
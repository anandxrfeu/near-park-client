import "./User.css"

const User = (props) => {
return (
    <div className="user-card">
                <div className="user-card_name">Near Park HQ</div>
                <div className="user-card_email">Owner1@gmail.com</div>
                <div className="user-card_plan">BASIC</div>
                <div className="user-card_price">R$ 89 / month</div>
                <div className="user-card_since">07/12</div>
                <div className="user-card_status">ACTIVE</div>
    </div>

)
}

export default User
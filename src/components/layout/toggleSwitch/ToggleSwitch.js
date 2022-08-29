import "./ToggleSwitch.css"
import { useEffect, useState } from "react"

const ToggleSwitch =  (props) => {

    const {isActive, toggleState} = props
    const [check, setCheck] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setCheck(isActive)
        setIsLoading(false)

    },[isActive])

    const onChangeHandler = (e) => {
        setCheck(e.target.checked)
        toggleState(e.target.checked)
        setIsLoading(false)

    }

    if(isLoading){
        return (<p>Loading..</p>)
    }

    return (
    <label className="switch">
        <input type="checkbox" onChange={onChangeHandler} checked={check} ></input>
        <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch




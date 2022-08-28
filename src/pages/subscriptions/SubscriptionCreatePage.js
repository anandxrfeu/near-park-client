import "./SubscriptionCreatePage.css"

import {useRef} from "react"
import {useNavigate} from "react-router-dom"
import apiService from "../../services/api.service"

const SubscriptionCreatePage = (props) => {

  const name = useRef("")
  const benefitOne = useRef("")
  const benefitTwo = useRef("")
  const benefitThree = useRef("")
  const benefitFour = useRef("")
  const benefitFive = useRef("")
  const costDetails = useRef("")
  const callToActionText = useRef("")

  const navigate = useNavigate()

const submitHandler = async (e) => {
  e.preventDefault()
  console.log(name.current.value)
  console.log(benefitOne.current.value, benefitTwo.current.value, benefitThree.current.value, benefitFour.current.value, benefitFive.current.value)
  console.log(costDetails.current.value)
  console.log(callToActionText.current.value)

  let benefitList = []
  if(benefitOne.current.value.trim() !== ""){
    benefitList.push(benefitOne.current.value )
  }
  if(benefitTwo.current.value.trim() !== ""){
    benefitList.push(benefitTwo.current.value )
  }
  if(benefitThree.current.value.trim() !== ""){
    benefitList.push(benefitThree.current.value )
  }
  if(benefitFour.current.value.trim() !== ""){
    benefitList.push(benefitFour.current.value )
  }
  if(benefitFive.current.value.trim() !== ""){
    benefitList.push(benefitFive.current.value )
  }

  const payload = {
    "name": name.current.value,
    "benefits": benefitList,
    "pricePerMonth": Number(costDetails.current.value),
    "callToAction": callToActionText.current.value
  }
  console.log("payLoad", payload)

  try{
    const data = await apiService.createSubscription(payload)
    console.log(data)
    navigate("/saas/subscription")
  }catch(err){
    console.log(err)
  }
}


  return (
    (
      <form className="subsctiption" onSubmit={submitHandler}>
          <div className="subscriptions_controls">
            <h1 className="subscriptions_controls-title">CREATE NEW PLAN</h1>
          </div>
          <div className="subscriptions_controls">
            <input className="subscriptions_controls-name badge-pill" type="text" placeholder="NAME" ref={name}/>
          </div>
          <div className="subscriptions_controls subscriptions_controls-benefits-cost-cta">
            <div className="subscriptions_controls-benefits">
              <h3>BENEFIT LIST</h3>
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" ref={benefitOne}/>
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" ref={benefitTwo}/>
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" ref={benefitThree}/>
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" ref={benefitFour}/>
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" ref={benefitFive} />
            </div>
            <div className="subscriptions_controls-cost-cta">
              <div className="subscriptions_controls-cost">
                <h3>COST DETAILS</h3>
                <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="number" ref={costDetails}/>
              </div>
              <div className="subscriptions_controls-cta">
                <h3>CALL TO ACTION TEXT</h3>
                <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" ref={callToActionText}/>
              </div>
            </div>
          </div>
          <div className="subscriptions_controls">
            <button className="badge-pill subscriptions_controls-btn" >SAVE</button>
          </div>
      </form>
    )
  )
}

export default SubscriptionCreatePage

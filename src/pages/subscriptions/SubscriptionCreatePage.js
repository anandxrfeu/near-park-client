import "./SubscriptionCreatePage.css"

import {useState} from "react"

const SubscriptionCreatePage = (props) => {


  return (
    (
      <form className="subsctiption">
          <div className="subscriptions_controls">
            <h1 className="subscriptions_controls-title">CREATE NEW PLAN</h1>
          </div>
          <div className="subscriptions_controls">
            <input className="subscriptions_controls-name badge-pill" type="text" placeholder="NAME"/>
          </div>
          <div className="subscriptions_controls subscriptions_controls-benefits-cost-cta">
            <div className="subscriptions_controls-benefits">
              <h3>BENEFIT LIST</h3>
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" />
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" />
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" />
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" />
              <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text" />
            </div>
            <div className="subscriptions_controls-cost-cta">
              <div className="subscriptions_controls-cost">
                <h3>COST DETAILS</h3>
                <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text"/>
              </div>
              <div className="subscriptions_controls-cta">
                <h3>CALL TO ACTION TEXT</h3>
                <input className="subscriptions_controls-benefit-cost-cta badge-pill" type="text"/>
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

import React from "react";
import { Container } from "@chakra-ui/react";

export default function PreApproval() {
  return (
    <section>
      <div className="form_wrapper">
        <h4 className="form--title">Payment Option</h4>
        <form className="form">
          <fieldset>
            <label className="label ">What's your accomodation status?</label>
            <button className="btn--outline selected">
              Looking to renew my rent
            </button>
            <button className="btn--outline">
              Want to pay for a new place
            </button>
            <button className="btn--outline">I'm still searching</button>
          </fieldset>
          <fieldset>
            <label className="label ">
              How much is your rent request amount?
            </label>
            <input className="form-control" placeholder="Amount" />
          </fieldset>
          <fieldset>
            <label className="label ">How much do you earn monthly?</label>
            <input className="form-control" placeholder="Amount" />
          </fieldset>
          <fieldset>
            <label className="label ">Choose a monthly payment plan?</label>
            <select className="form-control" placeholder="Amount">
              <option>1 month</option>
              <option>3 month</option>
            </select>
          </fieldset>
          <button className="btn">NEXT</button>
        </form>
      </div>
    </section>
  );
}

import React from "react";

export default function Review() {
  return (
    <section>
      <div className="form_wrapper">
        <h4 className="form--title">Payment Breakdown</h4>
        <form className="form">
          <fieldset>
            <label className="label ">Rent request amount</label>
            <input className="form-control" placeholder="Amount" />
          </fieldset>
          <fieldset>
            <label className="label ">Monthly payment plan</label>
            <select className="form-control" placeholder="Amount">
              <option>1 month</option>
              <option>3 month</option>
            </select>
          </fieldset>

          <div className="infos--wrapper">
            <label className="label ">Payment option</label>
            <div className="infos--panel">
              <span>
                <label>Pre-approved amount</label>
                <strong>N 200.000</strong>
              </span>
              <span>
                <label>Monthly</label>
                <strong>N 150.000</strong>
              </span>
              <span>
                <label>Tenor</label>
                <strong>2 months</strong>
              </span>
            </div>
          </div>

          <button className="btn btn--accept">ACCEPT</button>
        </form>
      </div>
    </section>
  );
}

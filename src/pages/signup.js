import React from "react";

export default function Signup() {
  return (
    <section>
      <div className="form_wrapper">
        <h4 className="form--title">Your next home acquisition starts here</h4>
        <form className="form">
          <fieldset>
            <label className="label ">Full name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Full name"
            />
          </fieldset>
          <fieldset>
            <label className="label ">Email</label>
            <input className="form-control" type="email" placeholder="Email" />
          </fieldset>
          <fieldset>
            <label className="label ">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </fieldset>
          <fieldset>
            <label className="label ">Confirm</label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
            />
          </fieldset>
          <button className="btn btn--accept">SIGN UP</button>
        </form>
      </div>
    </section>
  );
}

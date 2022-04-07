import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRent } from "../redux/actions/users";

const outlineStyle = {
  border: "1px solid #a9a5ee",
  color: "#a9a5ee",
};
export default function PreApproval() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const rentApi = useSelector((state) => state.rent);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  let navigate = useNavigate();

  const [checkedStatus, setCheckedStatus] = useState("");

  const onSubmit = async (data) => {
    let rent = {
      acc_status: data.acc_status,
      monthly_plan_pay: parseFloat(data.monthly_plan_pay),
      req_amount: parseFloat(data.req_amount),
      salary: data.salary,
    };
    const u = await dispatch(addRent(rent));
    setTimeout(() => {
      if (rentApi) {
        navigate("/review", { replace: true });
      }
    }, 500);
  };

  useEffect(() => {}, [checkedStatus]);

  const onStatusChanged = (event) => {
    const status = event.target.value;
    setCheckedStatus(status);
  };

  return (
    <section>
      <div className="form_wrapper">
        <h4 className="form--title">Payment Option</h4>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="radio-wrapper">
            <label className="label ">What's your accomodation status?</label>
            <label
              className="btn--outline "
              style={
                checkedStatus === "Looking to renew my rent"
                  ? outlineStyle
                  : null
              }
            >
              Looking to renew my rent{" "}
              <input
                type="radio"
                {...register("acc_status", {
                  required: "Please select a status",
                })}
                value="Looking to renew my rent"
                onChange={onStatusChanged}
              />
            </label>

            <label
              className="btn--outline "
              style={
                checkedStatus === "Want to pay for a new place"
                  ? outlineStyle
                  : null
              }
            >
              Want to pay for a new place
              <input
                type="radio"
                {...register("acc_status", {
                  required: "Please select a status",
                })}
                value="Want to pay for a new place"
                onChange={onStatusChanged}
                className={
                  checkedStatus === "Want to pay for a new place"
                    ? "selected"
                    : null
                }
              />
            </label>

            <label
              className="btn--outline "
              style={
                checkedStatus === "I'm still searching" ? outlineStyle : null
              }
            >
              I'm still searching
              <input
                type="radio"
                {...register("acc_status", {
                  required: "Please select a status",
                })}
                value="I'm still searching"
                onChange={onStatusChanged}
                className={
                  checkedStatus === "I'm still searching" ? "selected" : null
                }
              />
            </label>
            {errors.acc_status && <p>{errors.acc_status.message}</p>}
          </fieldset>
          <fieldset>
            <label className="label ">
              How much is your rent request amount?
            </label>
            <input
              className="form-control"
              {...register("req_amount", {
                required: "Please enter your request amount",
              })}
              placeholder="Amount"
              type="number"
            />
            {errors.req_amount && <p>{errors.req_amount.message}</p>}
          </fieldset>
          <fieldset>
            <label className="label ">How much do you earn monthly?</label>
            <input
              className="form-control"
              {...register("salary", {
                required: "Please enter your monthly salary",
              })}
              placeholder="Amount"
              type="number"
            />
            {errors.salary && <p>{errors.salary.message}</p>}
          </fieldset>
          <fieldset>
            <label className="label ">Choose a monthly payment plan?</label>
            <select
              className="form-control"
              {...register("monthly_plan_pay", {
                required: "Please enter a monthly payment plan",
              })}
              placeholder=""
            >
              <option value="" defaultValue="">
                Select a plan
              </option>
              <option value={1}>1 month</option>
              <option value={2}>2 months</option>
              <option value={3}>3 months</option>
              <option value={4}>4 months</option>
              <option value={5}>5 months</option>
              <option value={6}>6 months</option>
              <option value={7}>7 months</option>
              <option value={8}>8 months</option>
              <option value={9}>9 months</option>
              <option value={10}>10 months</option>
              <option value={11}>11 months</option>
              <option value={12}> 12 months</option>
            </select>
            {errors.monthly_plan_pay && (
              <p>{errors.monthly_plan_pay.message}</p>
            )}
          </fieldset>
          <button className="btn">NEXT</button>
        </form>
      </div>
    </section>
  );
}

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateRent } from "../redux/actions/users";

export default function Review() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const rentApi = useSelector((state) => state.rent);
  const rentUpdateApi = useSelector((state) => state.updateRent);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    let rent = {
      id: rentApi?.id,
      monthly_plan_pay: data
        ? parseFloat(data.monthly_plan_pay)
        : rentApi?.monthly_plan_pay,
      req_amount: data ? parseFloat(data.req_amount) : rentApi.req_amount,
      is_approved: true,
    };
    const u = await dispatch(updateRent(rent));
    setTimeout(() => {
      if (rentUpdateApi) {
        navigate("/success", { replace: true });
      }
    }, 500);
  };

  const onSubmitUpdate = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(rentApi);
    let defaultValues = {};
    defaultValues.req_amount = rentApi?.req_amount;
    defaultValues.monthly_plan_pay = rentApi?.monthly_plan_pay;
    reset({ ...defaultValues });
  }, [rentApi]);

  return (
    <section>
      <div className="form_wrapper">
        <h4 className="form--title">Payment Breakdown</h4>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label className="label ">Rent request amount</label>
            <input
              className="form-control"
              {...register("req_amount")}
              placeholder="Amount"
              type="number"
            />
          </fieldset>
          <fieldset>
            <label className="label ">Monthly payment plan</label>
            <select
              className="form-control"
              {...register("monthly_plan_pay", {})}
              placeholder="Amount"
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
          </fieldset>

          <div className="infos--wrapper">
            <label className="label ">Payment option</label>
            <div className="infos--panel">
              <span>
                <label>Pre-approved amount</label>
                <strong> ₦ {rentApi?.req_amount} </strong>
              </span>
              <span>
                <label>Monthly payment</label>
                <strong> ₦ {rentApi?.payment} </strong>
              </span>
              <span>
                <label>Tenor</label>
                <strong>12 months</strong>
              </span>
            </div>
          </div>

          <button className="btn btn--accept">ACCEPT</button>
        </form>
      </div>
    </section>
  );
}

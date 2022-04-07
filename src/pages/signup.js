import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Loader from "../components/Loader";
import { addUser } from "../redux/actions/users";

export default function Signup() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  let navigate = useNavigate();

  const [User, setUser] = useState();
  const [showPassNotMatch, setshowPassNotMatch] = useState(false);
  const [showUserExist, setUserExist] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password === data.confirm) {
      delete data.confirm;
      const u = await dispatch(addUser(data));
      setTimeout(() => {
        setUser(user);
        if (error) {
          setUserExist(true);
        }
        if (User) {
          navigate("/home", { replace: true });
        }
      }, 300);
    } else {
      setshowPassNotMatch(true);
    }
  };

  return (
    <section>
      <div className="form_wrapper">
        <h4 className="form--title">Your next home acquisition starts here</h4>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label className="label ">Full name</label>
            <input
              className="form-control"
              type="text"
              placeholder="Full name"
              {...register("name", {
                required: "Please enter your full name",
              })}
            />
            {errors.fullname && <p>{errors.fullname.message}</p>}
          </fieldset>
          <fieldset>
            <label className="label ">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              {...register("email", { required: "Please enter your email" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </fieldset>
          <fieldset>
            <label className="label ">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Please enter a password",
                minLength: { value: 8, message: "Minimum 8 characters" },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </fieldset>
          <fieldset>
            <label className="label ">Confirm</label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
              {...register("confirm", {
                required: "Please confirm your password",
              })}
            />
            {errors.confirm && <p>{errors.confirm.message}</p>}
          </fieldset>
          <button className="btn btn--accept">
            {" "}
            {loading && <Loader />}
            SIGN UP
          </button>
          {showPassNotMatch && (
            <div className="alert">
              Your password confirmation is not correct
            </div>
          )}
          {showUserExist && (
            <div className="alert">User with this email already exists</div>
          )}
        </form>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.data);

  const [userConnected, setUserConnected] = useState({});

  useEffect(() => {
    console.log(user);
    if (user.token) {
      localStorage.setItem("userKwabaToken", JSON.stringify(user));
      setUserConnected(user);
    } else {
      const usr = localStorage.getItem("userKwabaToken");
      setUserConnected(JSON.parse(usr));
    }
  }, []);

  return (
    <section>
      <div className="form_wrapper">
        <h4 className="form--title">Welcome to the future of home payment.</h4>
        <div className="user--avatar"> {userConnected?.name?.charAt(0)} </div>
        <h4 className="user--name"> {userConnected?.name} </h4>

        <Link to={"/preapproval"}>
          {" "}
          <button className="btn btn--apply">APPLY NOW</button>{" "}
        </Link>
      </div>
    </section>
  );
}

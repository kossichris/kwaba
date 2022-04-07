import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./auth/authProvider";
import Home from "./pages/home";
import PreApproval from "./pages/preApproval";
import Review from "./pages/review";
import Signup from "./pages/signup";
import Success from "./pages/success";

function App() {
  const [authed, setAuthed] = useState(false);
  const user = JSON.parse(localStorage.getItem("userKwabaToken"));

  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          exact
          path="/"
          element={<PrivateRoute auth={user.token ? true : false} />}
        >
          <Route exact path="/" element={<Home />} />
          <Route path="/preapproval" element={<PreApproval />} />
          <Route path="/review" element={<Review />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;

import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import TrackingForm from "./components/TrackingForm";
import Feedback from "./components/Feedback";
import DiscoverMore from "./components/DiscoverMore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ForgotPassword from "./components/ForgotPassword";
import OTPForm from "./components/OTPForm";
import UpdatePassword from "./components/UpdatePassword";
import UpdateProfile from "./components/UpdateProfile";
import Prices from "./components/Prices/Prices";
import Overview from "./components/Prices/Overview";
import TransportationServices from "./components/Prices/TransportationServices";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/auth/register" element={<SignUp />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/tracking-form" element={<TrackingForm />}></Route>
        <Route path="/Feedback" element={<Feedback />}></Route>
        <Route path="/insights" element={<DiscoverMore />}></Route>
        <Route
          path="/auth/forgot-password"
          element={<ForgotPassword />}
        ></Route>
        <Route path="/auth/verify-otp" element={<OTPForm />}></Route>
        <Route path="/user/update-profile" element={<UpdateProfile />}></Route>
        <Route
          path="/auth/update-password"
          element={<UpdatePassword />}
        ></Route>
        <Route path="/prices-and-quotes" element={<Prices />}></Route>
      </Routes> */}
      <Prices />
    </>
  );
}

export default App;

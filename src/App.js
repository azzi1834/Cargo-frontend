import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
// import "./styling/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { lazy, Suspense } from "react";
// const CompanyDetails = lazy(() => import("./components/Prices/CompanyDetails"));
// const RequestMaerskFlow = lazy(() =>
//   import("./components/Prices/RequestMaerskFlow")
// );
// const FindCompany = lazy(() => import("./components/Prices/FindCompany"));
// const CompleteAccount = lazy(() =>
//   import("./components/Prices/CompleteAccount")
// );
// const DigitalServices = lazy(() =>
//   import("./components/Prices/DigitalServices")
// );
// const SupplyChainAndLogistics = lazy(() =>
//   import("./components/Prices/SupplyChainAndLogistics")
// );
// const TransportationServices = lazy(() =>
//   import("./components/Prices/TransportationServices")
// );
// const Overview = lazy(() => import("./components/Prices/Overview"));
// const Prices = lazy(() => import("./components/Prices/Prices"));
// const UpdateProfile = lazy(() => import("./components/UpdateProfile"));
// const UpdatePassword = lazy(() => import("./components/UpdatePassword"));
// const OTPForm = lazy(() => import("./components/OTPForm"));
// const ForgotPassword = lazy(() => import("./components/ForgotPassword"));
// const DiscoverMore = lazy(() => import("./components/DiscoverMore"));
// const Feedback = lazy(() => import("./components/Feedback"));
// const TrackingForm = lazy(() => import("./components/TrackingForm"));
// const SignUp = lazy(() => import("./components/SignUp"));
// const Login = lazy(() => import("./components/Login"));
// const HomePage = lazy(() => import("./components/HomePage"));
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TrackingForm from "./components/TrackingForm";
import Feedback from "./components/Feedback";
import DiscoverMore from "./components/DiscoverMore";
import ForgotPassword from "./components/ForgotPassword";
import OTPForm from "./components/OTPForm";
import UpdatePassword from "./components/UpdatePassword";
import UpdateProfile from "./components/UpdateProfile";
import Prices from "./components/Prices/Prices";
import Overview from "./components/Prices/Overview";
import TransportationServices from "./components/Prices/TransportationServices";
import SupplyChainAndLogistics from "./components/Prices/SupplyChainAndLogistics";
import DigitalServices from "./components/Prices/DigitalServices";
import CompleteAccount from "./components/Prices/CompleteAccount";
import FindCompany from "./components/Prices/FindCompany";
import RequestMaerskFlow from "./components/Prices/RequestMaerskFlow";
import CompanyDetails from "./components/Prices/CompanyDetails";
function App() {
  return (
    <>
      {/* <Suspense
        fallback={
          <div>Loading...</div>
          // <div className="spinner-container">
          //   <div className="loading-spinner"></div>
          // </div>
        }
      > */}
      <Routes>
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
        {/* --------------------- */}
        <Route path="/prices-and-quotes" element={<Prices />}>
          <Route index element={<Overview />}></Route>
          <Route
            path="transportation-services"
            element={<TransportationServices />}
          ></Route>
          <Route path="logistics" element={<SupplyChainAndLogistics />}></Route>
          <Route path="digital-services" element={<DigitalServices />}></Route>
        </Route>
        <Route path="/groups" element={<CompleteAccount />}></Route>
        <Route path="/groups/new-customer" element={<FindCompany />}></Route>
        <Route
          path="/groups/maersk-flow"
          element={<RequestMaerskFlow />}
        ></Route>
        <Route
          path="/user/additional-details"
          element={<CompanyDetails />}
        ></Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;

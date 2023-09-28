import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logo from "../images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { verifyToken } from "../redux/slices/user";
import { logout } from "../redux/slices/auth";
function MyNavbar() {
  const navigate = useNavigate();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const showDropdown1 = (e) => {
    setShow1(!show1);
  };
  const hideDropdown1 = (e) => {
    setShow1(false);
  };
  const showDropdown2 = (e) => {
    setShow2(!show2);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };
  const showDropdown3 = (e) => {
    setShow3(!show3);
  };
  const hideDropdown3 = (e) => {
    setShow3(false);
  };
  const { data } = useSelector((state) => state.auth);
  const {isLogged}=useSelector((state)=>state.auth);
  const handleProfile = () => {
    if (isLogged) {
      navigate("/user/update-profile");
    } else {
      navigate("/auth/register");
    }
    console.log("data", data);
    // navigate("/auth/register");
  };
  return (
    <>
      <Navbar expand={false} className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: "white" }}>
            <img
              src={logo}
              alt="MyCargo"
              style={{ width: "160px", height: "40px" }}
            />
          </Navbar.Brand>
          <div className="d-flex flex-wrap" style={{ marginRight: "130px" }}>
            <div className="nav-items">
              <Nav.Link href="/prices-and-quotes">Prices</Nav.Link>
            </div>
            <div className="nav-items">
              <NavDropdown
                title="Books"
                id="Books"
                show={show1}
                onMouseEnter={showDropdown1}
                onMouseLeave={hideDropdown1}
              >
                <NavDropdown.Item href="new-booking">
                  New Booking
                </NavDropdown.Item>
                <NavDropdown.Item href="duplicate-booking">
                  Duplicate Booking
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="new-lcl-booking">
                  New LCL Booking
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className="nav-items">
              <Nav.Link href="/tracking">Tracking</Nav.Link>
            </div>
            <div className="nav-items">
              <Nav.Link href="/schedules">Schedules</Nav.Link>
            </div>
            <div className="nav-items">
              <Nav.Link href="/Prices">Logistics Solutions</Nav.Link>
            </div>
          </div>
          <div className="d-flex" style={{ marginLeft: "160px" }}>
            <div className="nav-items2">
              <NavDropdown
                title="EN"
                id="language"
                show={show3}
                onMouseEnter={showDropdown3}
                onMouseLeave={hideDropdown3}
              >
                <NavDropdown.Item href="new-booking">English</NavDropdown.Item>
                <NavDropdown.Item href="new-booking">Español</NavDropdown.Item>
                <NavDropdown.Item href="new-booking">Français</NavDropdown.Item>
                <NavDropdown.Item href="new-booking">Deutsch</NavDropdown.Item>
                <NavDropdown.Item href="new-booking">Italiano</NavDropdown.Item>
                <NavDropdown.Item href="new-booking">
                  Português (Brasil)
                </NavDropdown.Item>
                <NavDropdown.Item href="new-booking">Türkçe</NavDropdown.Item>
                <NavDropdown.Item href="new-booking">Русский</NavDropdown.Item>
                <NavDropdown.Item href="new-booking">简体中文</NavDropdown.Item>
                <NavDropdown.Item href="new-booking">繁體中文</NavDropdown.Item>
                <NavDropdown.Item href="new-lcl-booking">
                  N한국어
                </NavDropdown.Item>
                <NavDropdown.Item href="new-lcl-booking">
                  日本語
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="nav-items2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div className="nav-items2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
                onClick={handleProfile}
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </div>
          </div>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ width: 400 }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 navabr">
                <div className="row p-5">
                  <div className="col-sm-12">
                    <Nav.Link
                      href="/transportation-services"
                      style={{ fontSize: "20px", paddingTop: "10px" }}
                    >
                      <strong>Transportation Services</strong>
                    </Nav.Link>
                    <Nav.Link href="/transportation-services/ocean-transport">
                      Ocean Transport
                    </Nav.Link>
                    <Nav.Link href="/transportation-services/cross-border-rail-transport">
                      Cross Border Rail Transportation
                    </Nav.Link>
                    <Nav.Link href="/transportation-services/inland-transport">
                      Inland Transport
                    </Nav.Link>
                    <Nav.Link href="/transportation-services/air-freights">
                      Air Freight
                    </Nav.Link>
                    <Nav.Link href="/transportation-services/lcl">
                      Less than Container Load(LCL)
                    </Nav.Link>

                    <Nav.Link
                      href="/supply-chain-logistics"
                      style={{ fontSize: "20px", paddingTop: "30px" }}
                    >
                      <strong>Supply Chain & Logistics</strong>
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/managements">
                      Supply Chain Management
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/warehousing-and-distributions">
                      Warehousing & Distribution
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/customs-services">
                      Customs Services
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/supply-chain-development">
                      Supply Chain Development
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/maersk-flow">
                      Maersk Flow
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/4pl">
                      4PL Logistics Solutions
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/cold-chain-logistics">
                      Cold Chain Logistics
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/ecommerce-logistics">
                      E-Commerce Logistics
                    </Nav.Link>
                    <Nav.Link href="/supply-chain-logistics/international-development">
                      International Development
                    </Nav.Link>

                    <Nav.Link
                      href="/digital-solutions"
                      style={{ fontSize: "20px" }}
                    >
                      <strong>Digital solutions</strong>
                    </Nav.Link>
                    <Nav.Link href="/digital-solutions/data-integration">
                      Data Integration
                    </Nav.Link>
                    <Nav.Link href="/digital-solutions/captain-peter">
                      Captain Peter
                    </Nav.Link>
                    <Nav.Link href="/digital-solutions/emissions-dashboard">
                      Emissions Dashboard
                    </Nav.Link>
                    <Nav.Link href="/digital-solutions/maersk-app">
                      Maersk App
                    </Nav.Link>
                    <Nav.Link href="/digital-solutions/my-finance">
                      My Finance
                    </Nav.Link>

                    <Nav.Link
                      href="/local-information"
                      style={{ fontSize: "20px", paddingTop: "30px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fillRule="currentColor"
                        className="bi bi-buildings mx-2"
                        viewBox="0 0 16 16"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                        <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                      </svg>
                      <strong>Local offices & information</strong>
                    </Nav.Link>
                    <Nav.Link
                      href="/industry-sectors"
                      style={{ fontSize: "20px" }}
                    >
                      <svg
                        className="ign-icon mx-2"
                        viewBox="0 0 25 24"
                        fillRule="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-di-rand="1695102262154"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path
                          className="ign-icon__fill"
                          d="M3.5 3C3.5 2.44772 3.94772 2 4.5 2H8.5C9.05228 2 9.5 2.44772 9.5 3V10.1295L14.7481 7.06811C14.9027 6.9779 15.0938 6.97726 15.249 7.06643C15.4043 7.1556 15.5 7.32097 15.5 7.5V10.1295L20.7481 7.06811C20.9027 6.9779 21.0938 6.97726 21.249 7.06643C21.4043 7.1556 21.5 7.32097 21.5 7.5V21C21.5 21.5523 21.0523 22 20.5 22H4.5C3.94772 22 3.5 21.5523 3.5 21V3ZM8.5 3H4.5V21H20.5V8.37052L15.2519 11.4319C15.0973 11.5221 14.9062 11.5227 14.751 11.4336C14.5957 11.3444 14.5 11.179 14.5 11V8.37052L9.25194 11.4319C9.09729 11.5221 8.90622 11.5227 8.75097 11.4336C8.59572 11.3444 8.5 11.179 8.5 11V3ZM9.5 16V14H10.5V16H9.5ZM14.5 16V14H15.5V16H14.5Z"
                          fillRule="#141414"
                        ></path>
                      </svg>
                      <strong>Industry sectors</strong>
                    </Nav.Link>
                    <Nav.Link href="/insights" style={{ fontSize: "20px" }}>
                      <svg
                        className="ign-icon mx-2"
                        viewBox="0 0 25 24"
                        fillRule="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-di-rand="1695102262154"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path
                          className="ign-icon__fill"
                          d="M13 0V3H12V0H13ZM7.5188 6.24644C8.57972 4.94595 10.2204 4 12.5 4C14.7796 4 16.4202 4.94595 17.4812 6.24644C18.5294 7.53136 19 9.14584 19 10.5C19 13.2664 17.777 14.6885 16.8244 15.7961C16.6706 15.975 16.5238 16.1456 16.3904 16.3123C15.5079 17.4155 15.5001 18.505 15.5 19.5V21.0002C15.5 21.5526 15.0521 22 14.5 22H10.5C9.9479 22 9.49998 21.5526 9.49998 21.0002V19.5C9.49998 19.3217 9.50577 19.1607 9.51124 19.0084C9.52345 18.6684 9.53412 18.3712 9.47554 18.0197C9.39793 17.5541 9.19039 17.0095 8.61587 16.3201C8.47244 16.148 8.32343 15.9768 8.17288 15.8039C7.70596 15.2676 7.22426 14.7143 6.84814 14.0624C6.3311 13.1662 5.99998 12.0783 5.99998 10.5C5.99998 9.14584 6.47058 7.53136 7.5188 6.24644ZM14.5038 19C14.5251 18.0539 14.6669 16.8659 15.6096 15.6877C15.7624 15.4966 15.9219 15.3099 16.0829 15.1215C17.0174 14.0276 18 12.8775 18 10.5C18 9.35416 17.5956 7.96864 16.7063 6.87856C15.8297 5.80405 14.4704 5 12.5 5C10.5296 5 9.17025 5.80405 8.29367 6.87856C7.40439 7.96864 6.99998 9.35416 6.99998 10.5C6.99998 11.9217 7.29387 12.8338 7.71433 13.5626C8.03788 14.1235 8.43053 14.5749 8.8787 15.0901C9.04017 15.2757 9.20885 15.4696 9.3841 15.6799C10.0596 16.4905 10.352 17.1959 10.4619 17.8553C10.5289 18.2573 10.5247 18.6547 10.5137 19H14.5038ZM10.5 20.0003V21H14.5V20.0003H10.5ZM2.75723 4.07125L5.25723 5.57125L4.74274 6.42875L2.24274 4.92875L2.75723 4.07125ZM22.7572 4.92875L20.2572 6.42875L19.7427 5.57125L22.2427 4.07125L22.7572 4.92875ZM2.74274 17.0713L5.24274 15.5713L5.75723 16.4287L3.25723 17.9287L2.74274 17.0713ZM21.7427 17.9287L19.2427 16.4287L19.7572 15.5713L22.2572 17.0713L21.7427 17.9287Z"
                          fillRule="#141414"
                        ></path>
                      </svg>
                      <strong>Insights</strong>
                    </Nav.Link>
                    <Nav.Link href="/contact" style={{ fontSize: "20px" }}>
                      <svg
                        className="ign-icon mx-2"
                        viewBox="0 0 25 24"
                        fillRule="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-di-rand="1695102262154"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path
                          className="ign-icon__fill"
                          d="M13 0V3H12V0H13ZM7.5188 6.24644C8.57972 4.94595 10.2204 4 12.5 4C14.7796 4 16.4202 4.94595 17.4812 6.24644C18.5294 7.53136 19 9.14584 19 10.5C19 13.2664 17.777 14.6885 16.8244 15.7961C16.6706 15.975 16.5238 16.1456 16.3904 16.3123C15.5079 17.4155 15.5001 18.505 15.5 19.5V21.0002C15.5 21.5526 15.0521 22 14.5 22H10.5C9.9479 22 9.49998 21.5526 9.49998 21.0002V19.5C9.49998 19.3217 9.50577 19.1607 9.51124 19.0084C9.52345 18.6684 9.53412 18.3712 9.47554 18.0197C9.39793 17.5541 9.19039 17.0095 8.61587 16.3201C8.47244 16.148 8.32343 15.9768 8.17288 15.8039C7.70596 15.2676 7.22426 14.7143 6.84814 14.0624C6.3311 13.1662 5.99998 12.0783 5.99998 10.5C5.99998 9.14584 6.47058 7.53136 7.5188 6.24644ZM14.5038 19C14.5251 18.0539 14.6669 16.8659 15.6096 15.6877C15.7624 15.4966 15.9219 15.3099 16.0829 15.1215C17.0174 14.0276 18 12.8775 18 10.5C18 9.35416 17.5956 7.96864 16.7063 6.87856C15.8297 5.80405 14.4704 5 12.5 5C10.5296 5 9.17025 5.80405 8.29367 6.87856C7.40439 7.96864 6.99998 9.35416 6.99998 10.5C6.99998 11.9217 7.29387 12.8338 7.71433 13.5626C8.03788 14.1235 8.43053 14.5749 8.8787 15.0901C9.04017 15.2757 9.20885 15.4696 9.3841 15.6799C10.0596 16.4905 10.352 17.1959 10.4619 17.8553C10.5289 18.2573 10.5247 18.6547 10.5137 19H14.5038ZM10.5 20.0003V21H14.5V20.0003H10.5ZM2.75723 4.07125L5.25723 5.57125L4.74274 6.42875L2.24274 4.92875L2.75723 4.07125ZM22.7572 4.92875L20.2572 6.42875L19.7427 5.57125L22.2427 4.07125L22.7572 4.92875ZM2.74274 17.0713L5.24274 15.5713L5.75723 16.4287L3.25723 17.9287L2.74274 17.0713ZM21.7427 17.9287L19.2427 16.4287L19.7572 15.5713L22.2572 17.0713L21.7427 17.9287Z"
                          fillRule="#141414"
                        ></path>
                      </svg>
                      <strong>Contact us</strong>
                    </Nav.Link>
                    <Nav.Link href="/support" style={{ fontSize: "20px" }}>
                      <svg
                        className="ign-icon mx-2"
                        viewBox="0 0 25 24"
                        fillRule="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-di-rand="1695102262154"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path
                          className="ign-icon__fill"
                          d="M12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3ZM2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12ZM12.5 7C11.1193 7 10 8.11929 10 9.5H9C9 7.567 10.567 6 12.5 6C14.433 6 16 7.567 16 9.5C16 10.7721 15.088 11.8801 14.0499 12.4699C13.4214 12.8269 12.9988 13.3354 12.9993 13.8412C12.9997 14.3013 13 14.7581 13 15H12C12 14.7586 11.9997 14.3023 11.9993 13.842C11.9983 12.7855 12.826 12.0151 13.556 11.6004C14.4015 11.12 15 10.2926 15 9.5C15 8.11929 13.8807 7 12.5 7ZM11.75 16.5H13.25V18H11.75V16.5Z"
                          fillRule="#141414"
                        ></path>
                      </svg>
                      <strong>Support</strong>
                    </Nav.Link>
                    <Nav.Link href="/news" style={{ fontSize: "20px" }}>
                      <svg
                        className="ign-icon mx-2"
                        viewBox="0 0 25 24"
                        fillRule="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-di-rand="1695102262154"
                        style={{ width: "24px", height: "24px" }}
                      >
                        <path
                          className="ign-icon__fill"
                          d="M6.5 3C6.5 2.44772 6.94772 2 7.5 2H21.5C22.0523 2 22.5 2.44771 22.5 3V20C22.5 21.1046 21.6046 22 20.5 22H5C3.61929 22 2.5 20.8807 2.5 19.5V8H3.5V19.5C3.5 20.3284 4.17157 21 5 21C5.82843 21 6.5 20.3284 6.5 19.5V3ZM7.00018 21H20.5C21.0523 21 21.5 20.5523 21.5 20V3H7.5V19.5C7.5 20.0628 7.31403 20.5822 7.00018 21ZM5.5 5V20H4.5V5H5.5ZM9.5 5H14.5V9H9.5V5ZM10.5 6V8H13.5V6H10.5ZM19.5 6H16.5V5H19.5V6ZM16.5 8H19.5V9H16.5V8ZM9.5 12V11H19.5V12H9.5ZM9.5 15V14H19.5V15H9.5ZM9.5 18V17H19.5V18H9.5Z"
                          fillRule="#141414"
                        ></path>
                      </svg>
                      <strong>News & advisories</strong>
                    </Nav.Link>
                  </div>
                </div>
                <div
                  className="row mx-2 p-1"
                  style={{ backgroundColor: "rgb(180, 209, 206,0.2)" }}
                >
                  <div className="d-flex flex-column col-md-6">
                    <div style={{ paddingTop: "20px" }}>
                      <strong>Logistics Insights</strong>
                    </div>
                    <div>
                      <p className="mt-3">
                        Enhance your business' potential with must-read industry
                        insights, upcoming trends and reports.
                      </p>
                    </div>
                    <div>
                      <Link to={"/insights"}>
                        <button
                          className="btn btn-info my-2 w-100"
                          style={{
                            border: "0px",
                            borderRadius: "0px",
                            backgroundColor: "#043358",
                            color: "white",
                            padding: "15px 10px",
                          }}
                        >
                          Discover more
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      className="img-fluid my-3"
                      style={{ width: "350px", height: "200px" }}
                      src="https://www.maersk.com/~/media_sc9/Maersk/Insights/Images/insights_600x600"
                      alt="Logistics Insights"
                    />
                  </div>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default MyNavbar;

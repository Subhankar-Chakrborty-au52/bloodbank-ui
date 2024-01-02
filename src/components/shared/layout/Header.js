import React from "react";
import { useSelector } from "react-redux";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import { useNavigate , useLocation , Link } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // Handelling logout
  const handleLogout = () => {
    localStorage.clear();
    toast.error("Logout successfully");
    navigate("/login");
  };

  return (
    <>
    <nav className="navbar bg-dark">
      <div className="container-fluid ">
        <div className="navbar-brand h1 text-light">
          <BiDonateBlood color="red" /> Blood Bank App
        </div>
        <ul className="navbar-nav flex-row">
          <li className="nav-item mx-3">
            <p className="nav-link text-light">
              <BiUserCircle /> Welcome{" "}
              {user?.name || user?.hospitalName || user?.organisationName}
              &nbsp;
              <span className="badge bg-secondary">{user?.role}</span>
            </p>
          </li>
          {location.pathname === "/" ||
          location.pathname === "/donar" ||
          location.pathname === "/hospital" ? (
            <li className="nav-item mx-3">
              <Link to="/analytics" className="nav-link text-light">
                Analytics
              </Link>
            </li>
          ) : (
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
          )}
          <li className="nav-item mx-3">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </>
  );
};

export default Header;

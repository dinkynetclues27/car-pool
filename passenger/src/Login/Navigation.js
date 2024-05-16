import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <ul className="nav nav-pills" style={{ backgroundColor: "white", padding: "10px" }}>
            <div className="d-flex gap-4">

              {token ? (
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/main">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/personaldetails">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/"> Take Ride</a>
                  </li>
                  <li className="nav-item">
                    <button className="btn" style={{ padding: "8px 12px", backgroundColor: "#ff0000", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={handleLogout}>Logout</button>
                  </li>
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <li className="nav-item">
                    <a className="nav-link text-dark" aria-current="page" href="/register">Register</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="/login">Login</a>
                  </li>
                </div>
              )}

            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigate;

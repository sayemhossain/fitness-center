import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../Images/logo/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <CustomLink
                className="nav-link fw-bold"
                aria-current="page"
                to="/"
              >
                Home
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link fw-bold" to="/blogs">
                Blogs
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link fw-bold " to="/about">
                About
              </CustomLink>
            </li>
            <li className="nav-item">
              {user ? (
                <button
                  className="text-white btn btn-danger  py-1 px-3 ms-2 fw-bold rounded-pill "
                  onClick={handleSignout}
                >
                  LogOut
                </button>
              ) : (
                <Link
                  className="nav-link text-white py-1 px-3 btn btn-success fw-bold ms-2 rounded-pill"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React, { useEffect } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "../../app/actions/admin.actions";
import { getUser } from "../../app/actions/user.actions";
import { logout } from "../../app/slices/admin.slice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const adminState = useSelector((state) => state.admin);
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem("role") === "USER") {
      dispatch(getUser());
    } else if (localStorage.getItem("role") === "ADMIN") {
      dispatch(getAdmin());
    }
  }, [adminState.loginStatus, userState.loginStatus]);
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
        />
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
          </ul>
        </nav>
      </div>
      <div>
        {adminState.user || userState.user ? (
          <>
            <a style={{ marginRight: "20px" }} className='text-white text-decoration-none'>
              {userState.user ? userState.user.email : adminState.user.email}
            </a>
            <a
              style={{ marginRight: "20px" }}
              onClick={() => {
                dispatch(logout());
              }}
              className='text-white text-decoration-none'
            >
              {" "}
              Sign Out
            </a>
          </>
        ) : (
          <>
            <a style={{ marginRight: "20px" }} href="/login" className='text-white text-decoration-none'>
              login
            </a>
            <a style={{ marginRight: "20px" }} href="/signup" className='text-white text-decoration-none'>
              register
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

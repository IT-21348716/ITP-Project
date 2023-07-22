// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAdmin } from "../../app/actions/admin.actions";
// import { getUser } from "../../app/actions/user.actions";
// import { logout } from "../../app/slices/admin.slice";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const dispatch = useDispatch();
//   const adminState = useSelector((state) => state.admin);
//   const userState = useSelector((state) => state.user);

//   useEffect(() => {
//     if (localStorage.getItem("role") === "USER") {
//       dispatch(getUser());
//     } else if (localStorage.getItem("role") === "ADMIN") {
//       dispatch(getAdmin());
//     }
//   }, [adminState.loginStatus, userState.loginStatus]);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           Saloon Management System
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" href="/">
//                 Home
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="d-flex">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {adminState.user || userState.user ? (
//               <>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/">
//                     {userState.user
//                       ? userState.user.email
//                       : adminState.user.email}
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <button
//                     className="btn btn-warning"
//                     onClick={() => {
//                       dispatch(logout());
//                     }}
//                   >
//                     LOGOUT
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 {" "}
//                 <li className="nav-item p-2">
//                   <Link to="/login">
//                     {" "}
//                     <button className="btn btn-success">LOGIN</button>
//                   </Link>
//                 </li>
//                 <li className="nav-item p-2">
//                   <Link to="/signup">
//                     {" "}
//                     <button className="btn btn-primary">REGISTER</button>
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdmin } from "../../app/actions/admin.actions";
import { getUser } from "../../app/actions/user.actions";
import { logout } from "../../app/slices/admin.slice";
import { Link } from "react-router-dom";

const myStyle1 = {
  height: "100px",
  width: "90px",
  display: "flex",
};

function Navbar() {
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
    <nav
      className="navbar navbar-light p-2"
      style={{ backgroundColor: "#712643" }}
    >
      {/* <img src="./images/icon.png" style={myStyle1} alt="First slide"/> */}
      <button
        className="navbar-toggler"
        style={{ backgroundColor: "#ffffff" }}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a
        className="navbar-brand"
        href="#"
        style={{ color: "#ffffff", textAlign: "left" }}
      >
        MARIYA SALON
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/" style={{ color: "#ffffff" }}>
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/add" style={{ color: "#ffffff" }}>
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              style={{ color: "#ffffff" }}
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                className="dropdown-item"
                href="/resForm"
                style={{ color: "#712643" }}
              >
                resForm
              </a>
              <a
                className="dropdown-item"
                href="/list"
                style={{ color: "#712643" }}
              >
                reserved list
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="/addPayment"
                style={{ color: "#712643" }}
              >
                send payment
              </a>

              <a
                className="dropdown-item"
                href="/IseeTable/:id"
                style={{ color: "#712643" }}
              >
                IsaraTable
              </a>
              <a
                className="dropdown-item"
                href="/IseeEdit/:id"
                style={{ color: "#712643" }}
              >
                IsaraEdit
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              style={{ color: "#ffffff" }}
            >
              Disabled
            </a>
          </li>
          {adminState.user || userState.user ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{ color: "#ffffff" }}>
                  {userState.user
                    ? userState.user.email
                    : adminState.user.email}
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  LOGOUT
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login"  className="nav-link" style={{ color: "#ffffff" }}>
                  LOGIN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link" style={{ color: "#ffffff" }}>
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

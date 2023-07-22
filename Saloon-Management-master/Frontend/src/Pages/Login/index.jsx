import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../app/actions/user.actions";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };
    dispatch(login(userCredentials));
  };

  return (
    <div className="container card mt-5 mb-5 cardBackgroud">
      <div className="card-body row p-5">
        <div className="left-image"></div>
        <div className="col-md-6 offset-md-1">
          <h1 style={{ color: "#FFFFFF" }}>WELCOME</h1>
          <h5 style={{ color: "#FFFFFF" }}>To Salon Mariya</h5>
          <hr />
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <div id="emailHelp" class="form-text text-white">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div>
            <button
              class="btn btn-outline w-100"
              style={{ backgroundColor: "#E7D0FD" }}
              onClick={handleOnSubmit}
            >
              LOGIN
            </button>
          </div>
          <hr />
          <div>
            <Link
              class="btn btn-outline w-100"
              style={{ backgroundColor: "#E7D0FD" }}
              to="/adminlogin"
            >
              ADMIN LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

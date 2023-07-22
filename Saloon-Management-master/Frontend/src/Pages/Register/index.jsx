import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../app/actions/user.actions";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./register.css"

function Register() {
  const dispatch = useDispatch();
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password mismatch");
      return;
    }

    const newUser = {
      userName,
      email,
      password,
      address,
      contactNumber,
    };
    dispatch(register(newUser));
  };

  return (
    <div className="container card mt-5 mb-5 cardBackgroud-reg">
      <div className="card-body row p-5">
        {" "}
        <div className="left-image-reg"></div>
        <div className="col-md-6 offset-md-1">
          <h1>WELCOME</h1>
          <h5>To Salon Mariya</h5>
          <hr />
          <form onSubmit={handleOnSubmit}>
            <div className="row">
              <div className="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Address</label>
                  <textarea
                    type="text"
                    class="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Phone number</label>
                  <input
                    type="text"
                    class="form-control"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                class="btn btn-outline w-100 saloon-btn"
                type="submit"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

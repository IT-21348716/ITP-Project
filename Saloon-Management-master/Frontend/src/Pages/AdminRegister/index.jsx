import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../app/actions/admin.actions";
import { toast } from "react-toastify";
import "./register-admin.css";

function AdminRegister() {
  const dispatch = useDispatch();
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
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
    };
    dispatch(register(newUser));
  };

  return (
    <div className="container card mt-5 mb-5 cardBackgroud">
      <div className="card-body row p-5">
        <div className="left-image-register-admin"></div>
        <div className="col-md-6 offset-md-1">
          <h1 style={{ color: "#5A189A" }}>ADMIN REGISTER</h1>
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

            <button
              type="submit"
              class="btn btn-outline w-100 text-white"
              style={{ backgroundcolor: "#5A189A" }}
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminRegister;

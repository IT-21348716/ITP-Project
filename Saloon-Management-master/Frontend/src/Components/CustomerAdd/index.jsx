import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../app/actions/user.actions";
import { toast } from "react-toastify";

function CustomerAdd(props) {
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
    dispatch(addUser(newUser));

    props.closeModal();
  };

  return (
    <div>
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
          <button class="btn btn-outline w-100 mb-3 saloon-submit-btn" type="submit">
            ADD
          </button>
        </div>
        <div>
          <button class="btn btn-outline w-100 saloon-submit-btn" onClick={props.closeModal}>
            CLOSE
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerAdd;
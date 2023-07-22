import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../app/actions/user.actions";
import { toast } from "react-toastify";

function CustomerEdit(props) {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [contactNumber, setContactNumber] = useState();

  useEffect(() => {
    if (selectedUser) {
      setUsername(selectedUser.userName);
      setAddress(selectedUser.address);
      setContactNumber(selectedUser.contactNumber);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      _id: selectedUser._id,
      userName,
      email,
      address,
      contactNumber,
    };
    dispatch(updateUser(newUser));

    props.closeModal();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly
              />
            </div>
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
          </div>
        </div>

        <div>
          <button class="btn btn-outline w-100 mb-3 saloon-submit-btn" type="submit">
            EDIT
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

export default CustomerEdit;

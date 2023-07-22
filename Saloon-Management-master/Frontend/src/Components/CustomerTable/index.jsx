import React from "react";
import Modal from "react-modal";
import { deleteUser } from "../../app/actions/user.actions";
import { getUserById } from "../../app/slices/user.slice";
import { useDispatch } from "react-redux";
import CustomerEdit from "../CustomerEdit";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("div");

function CustomerTable({ dataArray }) {
  const dispatch = useDispatch();
  const [editModalIsOpen, setEditModalIsOpen] = React.useState(false);

  function openModal() {
    setEditModalIsOpen(true);
  }

  function closeModal() {
    setEditModalIsOpen(false);
  }

  return (
    <div>
      <table className="table table-hover mt-2 table-saloon">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataArray &&
            dataArray.map((item, key) => {
              return (
                <tr key={item._id}>
                  <th scope="row">{++key}</th>

                  <td>{item?.userName}</td>
                  <td>{item?.email}</td>
                  <td>{item?.address}</td>
                  <td>{item?.contactNumber}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        class="btn dropdown-toggle btn-outline w-100 saloon-submit-btn"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link
                            className="dropdown-item btn btn-primary"
                            to={{
                              pathname: `/transactions/${item._id}`,
                            }}
                          >
                            VIEW
                          </Link>
                        </li>
                        <li>
                          <button
                            className="dropdown-item btn btn-primary"
                            onClick={() => {
                              dispatch(getUserById(item._id));
                              openModal();
                            }}
                          >
                            EDIT
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item btn btn-danger"
                            onClick={() => dispatch(deleteUser(item._id))}
                          >
                            DELETE
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center" style={{color: "#5A189A"}}>EDIT CUSTOMER</h2>
        <div className="p-2">
          <CustomerEdit closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default CustomerTable;

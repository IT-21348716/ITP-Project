import React from "react";
import Modal from "react-modal";
import { deleteOffer, getOfferById } from "../../app/actions/offer.actions";
import { useDispatch } from "react-redux";
import CustomerEdit from "../CustomerEdit";
import OfferEdit from "../OfferEdit";

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

function OffersTable({ dataArray }) {
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
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataArray &&
            dataArray.map((item, key) => {
              return (
                <tr key={item._id}>
                  <th scope="row">{++key}</th>
                  <td>{item?.title}</td>
                  <td>{item?.description}</td>
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
                          <button
                            className="dropdown-item btn btn-primary"
                            onClick={() => {
                              dispatch(getOfferById(item._id));
                              openModal();
                            }}
                          >
                            EDIT
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item btn btn-danger"
                            onClick={() => dispatch(deleteOffer(item._id))}
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
        <h2 className="text-center" style={{color: "#5A189A"}}>EDIT OFFER</h2>
        <div className="p-2">
          <OfferEdit closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
}

export default OffersTable;

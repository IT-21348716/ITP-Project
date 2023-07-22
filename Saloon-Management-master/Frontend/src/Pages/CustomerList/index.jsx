import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import CustomerTable from '../../Components/CustomerTable'
import { getUsers } from "../../app/actions/user.actions";
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from "jspdf";
import "jspdf-autotable";
import CustomerAdd from '../../Components/CustomerAdd';

const customStyles = {
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("div");

function CustomerList() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [customerList, setCustomerist] = useState([]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (users) {
      setCustomerist(users);
    }
  }, [users]);

  const filterData = (searchWord) => {
    let newArray = users.filter(function (el) {
      return (
        el.userName.toLowerCase().includes(searchWord.toLowerCase()) ||
        el.email.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    setCustomerist(newArray);
  };

  function generatePDF(data) {
    
    const doc = new jsPDF();
    const tableColumn = ["Id", "username", "email", "address", "contact"];
    const tableRows = [];

    data.forEach((item) => {
      const rowData = [
        item.id,
        item.userName,
        item.email,
        item.address,
        item.contactNumber,
      ];
      tableRows.push(rowData);
    });
    
    doc.autoTable({
      headStyles: { fillColor: "#5A189A", textColor: [255, 255, 255] },
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
    doc.save("customer-table.pdf");
  
  }

  return (
    <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-3">
        <h2 style={{color: "#5A189A"}}>CUSTOMERS</h2>
      </div>
      <div className="col-3">
        <button class="btn btn-outline w-100 saloon-submit-btn" onClick={openModal}>
          ADD CUSTOMERS
        </button>
      </div>
      <div className="col-3">
        <button
          class="btn btn-outline w-100 saloon-submit-btn"
          onClick={() => {
            generatePDF(customerList);
          }}
        >
          PRINT
        </button>
      </div>
      <div className="col-3">
        <input
          type="text"
          onChange={(e) => filterData(e.target.value)}
          name="search"
          placeholder="search..."
          className="form-control"
        />
      </div>
    </div>
    <CustomerTable dataArray={customerList} />
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className="text-center" style={{color: "#5A189A"}}>ADD CUSTOMER</h2>
      <div className="p-2">
        <CustomerAdd closeModal={closeModal} />
      </div>
    </Modal>
  </div>
  )
}

export default CustomerList
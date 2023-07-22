import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import CustomerTable from '../../Components/CustomerTable'
import { getTransactions } from "../../app/actions/transaction.actions";
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from "jspdf";
import "jspdf-autotable";
import CustomerAdd from '../../Components/CustomerAdd';
import { useParams } from 'react-router-dom';
import TransactionAdd from '../../Components/TransactionAdd';
import TransactionTable from '../../Components/TransactionTable';

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

function CustomerTransactions() {

  const dispatch = useDispatch();
  const { userId } = useParams();
  const transactions = useSelector((state) => state.transaction.transactions);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [transactionList, setTransactionList] = useState([]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    dispatch(getTransactions(userId));
  }, []);

  useEffect(() => {
    console.log(userId)
    if (transactions) {
      setTransactionList(transactions);
    }
  }, [transactions]);

  const filterData = (searchWord) => {
    let newArray = transactions.filter(function (el) {
      return (
        el.description.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    setTransactionList(newArray);
  };

  function generatePDF(data) {
    const doc = new jsPDF();
    const tableColumn = ["Id", "userId", "description", "amount"];
    const tableRows = [];

    data.forEach((item) => {
      const rowData = [
        item._id,
        item.userId,
        item.description,
        item.amount,
      ];
      tableRows.push(rowData);
    });

    doc.autoTable({
      headStyles: { fillColor: "#5A189A", textColor: [255, 255, 255] },
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
    doc.save("customer-transaction-table.pdf");
  }

  return (
    <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-3">
        <h2 style={{color: "#5A189A"}}>TRANSACTIONS</h2>
      </div>
      <div className="col-3">
        <button class="btn btn-outline w-100 mb-3 saloon-submit-btn" onClick={openModal}>
          ADD TRANSACTION
        </button>
      </div>
      <div className="col-3">
        <button
          class="btn btn-outline w-100 mb-3 saloon-submit-btn"
          onClick={() => {
            generatePDF(transactionList);
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
    <TransactionTable dataArray={transactionList} role="ADMIN"/>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className="text-center" style={{color: "#5A189A"}}>ADD TRANSACTION</h2>
      <div className="p-2">
        <TransactionAdd closeModal={closeModal} userId={userId}/>
      </div>
    </Modal>
  </div>
  )
}

export default CustomerTransactions
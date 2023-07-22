import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import CustomerTable from '../../Components/CustomerTable'
import { getOffers } from "../../app/actions/offer.actions";
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from "jspdf";
import "jspdf-autotable";
import CustomerAdd from '../../Components/CustomerAdd';
import OffersTable from '../../Components/OffersTable';
import OfferAdd from '../../Components/OfferAdd';

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

function OfferList() {

  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offer.offers);

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [offersList, setOffersList] = useState([]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    dispatch(getOffers());
  }, []);

  useEffect(() => {
    if (offers) {
      setOffersList(offers);
    }
  }, [offers]);

  const filterData = (searchWord) => {
    let newArray = offers.filter(function (el) {
      return (
        el.title.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    setOffersList(newArray);
  };

  function generatePDF(data) {
    const doc = new jsPDF();
    const tableColumn = ["Id", "title", "description"];
    const tableRows = [];

    data.forEach((item) => {
      const rowData = [
        item.id,
        item.title,
        item.description,
      ];
      tableRows.push(rowData);
    });

    doc.autoTable({
      headStyles: { fillColor: "#5A189A", textColor: [255, 255, 255] },
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
    doc.save("offer-table.pdf");
  }

  return (
    <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-3">
        <h2 style={{color: "#5A189A"}}>OFFERS</h2>
      </div>
      <div className="col-3">
        <button class="btn btn-outline w-100 saloon-submit-btn" onClick={openModal}>
          ADD OFFERS
        </button>
      </div>
      <div className="col-3">
        <button
          class="btn btn-outline w-100 saloon-submit-btn"
          onClick={() => {
            generatePDF(offersList);
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
    <OffersTable dataArray={offersList} />
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 className="text-center" style={{color: "#5A189A"}}>ADD OFFER</h2>
      <div className="p-2">
        <OfferAdd closeModal={closeModal} />
      </div>
    </Modal>
  </div>
  )
}

export default OfferList
import React, { useState } from "react";
import CustomerList from "../CustomerList";
import OfferList from "../OfferList";

function AdminDashboard() {
  const [selectedOption, setselectedOption] = useState(true);
  return (
    <div className="container mt-5 mb-5">
      <h1 style={{color: "#5A189A"}}>DASHBOARD</h1>
      <hr />
      <div className="row">
        <div className="col-12 mb-2">
          <button
            class="btn btn-outline w-100 saloon-submit-btn"
            onClick={() => setselectedOption(true)}
          >
            CUSTOMER MANAGEMENT
          </button>
        </div>
        <div className="col-12">
          <button
            class="btn btn-outline w-100 saloon-submit-btn"
            onClick={() => setselectedOption(false)}
          >
            OFFER MANAGEMENT
          </button>
        </div>
      </div>
      <div>
        {selectedOption && <CustomerList />}
        {!selectedOption && <OfferList />}
      </div>
    </div>
  );
}

export default AdminDashboard;

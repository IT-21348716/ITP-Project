import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { saveTransaction } from "../../app/actions/transaction.actions";

function TransactionAdd(props) {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(props.userId);
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(amount < 0){
      toast.error("Amount cannot below zero");
      return;
    }

    const newData = {
      userId,
      description,
      amount,
    };

    dispatch(saveTransaction(newData));

    props.closeModal();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div class="mb-3">
              <label class="form-label">User Id</label>
              <input
                type="text"
                class="form-control"
                value={userId}
                readOnly
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <input
                type="text"
                class="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Amount ( LKR )</label>
              <input
                type="number"
                class="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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

export default TransactionAdd;
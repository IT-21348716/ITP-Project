import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveOffer } from "../../app/actions/offer.actions";

function OfferAdd(props) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newData = {
      title,
      description,
    };

    dispatch(saveOffer(newData));

    props.closeModal();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-md-12">
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input
                type="text"
                class="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <div id="emailHelp" class="form-text">Please insert the suitable short term for offer</div>
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

export default OfferAdd;
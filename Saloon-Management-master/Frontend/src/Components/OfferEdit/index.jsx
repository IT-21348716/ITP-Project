import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOffer } from "../../app/actions/offer.actions";

function OfferEdit(props) {
  const dispatch = useDispatch();
  const selectedOffer = useSelector((state) => state.offer.selectedOffer);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    if(selectedOffer){
      setTitle(selectedOffer.title);
      setDescription(selectedOffer.description);
    }
  }, [selectedOffer]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newData = {
      _id: selectedOffer._id,
      title,
      description,
    };

    dispatch(updateOffer(newData));

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
              <div id="emailHelp" class="form-text">
                Please insert the suitable short term for offer
              </div>
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

export default OfferEdit;

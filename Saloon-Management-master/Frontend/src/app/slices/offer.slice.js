import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deleteOffer, getOfferById, getOffers, saveOffer, updateOffer } from '../actions/offer.actions';

const offerSlice = createSlice({
  name: 'dailynotice',
  initialState: {
    selectedOffer: null,
    offers: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveOffer.fulfilled, (state, action) => {
        state.offers = [...state.offers, action.payload];
        toast.success("Saved Successfully");
        toast.success("Emails sent");
    });
    builder.addCase(saveOffer.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getOfferById.fulfilled, (state, action) => {
      state.selectedOffer = action.payload;
    });
    builder.addCase(getOfferById.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
    });
    builder.addCase(getOffers.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(updateOffer.fulfilled, (state, action) => {
      state.offers = state.offers.map((x) => (x._id === action.payload._id ? action.payload : x));
      toast.success("Edited Successfully");
    });
    builder.addCase(updateOffer.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(deleteOffer.fulfilled, (state, action) => {
      state.offers = state.offers.filter((x) => x._id !== action.payload._id);
      toast.success("Deleted Successfully");
    });
    builder.addCase(deleteOffer.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
  },
});

export const { } = offerSlice.actions;

export default offerSlice.reducer;
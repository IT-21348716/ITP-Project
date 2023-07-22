import { createAsyncThunk } from "@reduxjs/toolkit";
import { OFFERAPI } from "../apis/offer.api";

export const saveOffer = createAsyncThunk(
  "offer/saveOffer",
  async (data) => {
      const response = await OFFERAPI.saveOffer(data);
      return response.data;
  }
);

export const getOffers = createAsyncThunk("offer/getOffers", async () => {
  const response = await OFFERAPI.getOffers();
  return response.data;
});

export const getOfferById = createAsyncThunk("offer/getOfferById", async (id) => {
  const response = await OFFERAPI.getOfferById(id);
  return response.data;
});

export const updateOffer = createAsyncThunk(
  "offer/updateOffer",
  async (updateData) => {
    const response = await OFFERAPI.updateOffer(
      updateData._id,
      updateData
    );
    return response.data;
  }
);

export const deleteOffer = createAsyncThunk(
  "offer/deleteOffer",
  async (id) => {
    const response = await OFFERAPI.deleteOffer(id);
    return response.data;
  }
);
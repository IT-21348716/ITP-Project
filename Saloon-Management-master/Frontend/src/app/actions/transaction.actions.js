import { createAsyncThunk } from "@reduxjs/toolkit";
import { TRANSACTIONAPI } from "../apis/transaction.api";

export const saveTransaction = createAsyncThunk(
  "transaction/saveTransaction",
  async (data) => {
      const response = await TRANSACTIONAPI.saveTransaction(data);
      return response.data;
  }
);

export const getTransactions = createAsyncThunk("transaction/getTransactions", async (id) => {
  const response = await TRANSACTIONAPI.getTransactions(id);
  return response.data;
});

export const getTransactionById = createAsyncThunk("transaction/getTransactionById", async (id) => {
  const response = await TRANSACTIONAPI.getTransactionById(id);
  return response.data;
});

export const updateTransaction = createAsyncThunk(
  "transaction/updateTransaction",
  async (updateData) => {
    const response = await TRANSACTIONAPI.updateTransaction(
      updateData._id,
      updateData
    );
    return response.data;
  }
);

export const deleteTransaction = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id) => {
    const response = await TRANSACTIONAPI.deleteTransaction(id);
    return response.data;
  }
);
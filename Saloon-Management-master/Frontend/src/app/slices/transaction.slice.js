import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { deleteTransaction, getTransactionById, getTransactions, saveTransaction, updateTransaction } from '../actions/transaction.actions';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    selectedTransaction: null,
    transactions: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(saveTransaction.fulfilled, (state, action) => {
        state.transactions = [...state.transactions, action.payload];
        toast.success("Saved Successfully");
    });
    builder.addCase(saveTransaction.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getTransactionById.fulfilled, (state, action) => {
      state.selectedTransaction = action.payload;
    });
    builder.addCase(getTransactionById.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(updateTransaction.fulfilled, (state, action) => {
      state.transactions = state.transactions.map((x) => (x._id === action.payload._id ? action.payload : x));
      toast.success("Edited Successfully");
    });
    builder.addCase(updateTransaction.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
    builder.addCase(deleteTransaction.fulfilled, (state, action) => {
      state.transactions = state.transactions.filter((x) => x._id !== action.payload._id);
      toast.success("Deleted Successfully");
    });
    builder.addCase(deleteTransaction.rejected, (state, action) => {
        toast.error("Something went wrong");
    });
  },
});

export const { } = transactionSlice.actions;

export default transactionSlice.reducer;
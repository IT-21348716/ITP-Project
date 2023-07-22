
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import adminReducer from './slices/admin.slice';
import transactionReducer from './slices/transaction.slice';
import offerReducer from './slices/offer.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    transaction: transactionReducer,
    offer: offerReducer
  },
});
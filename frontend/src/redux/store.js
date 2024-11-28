import {configureStore} from "@reduxjs/toolkit";
import foodReducer from "./slices/foodSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import aboutReducer from './slices/aboutSlice';
import menuReducer from './slices/menuSlice';

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";

export const store = configureStore({
    reducer: {
        about: aboutReducer,
        menu: menuReducer,
        foods: foodReducer,
        orders: orderReducer,
        admin: adminReducer
    },
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

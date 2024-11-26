import {configureStore} from "@reduxjs/toolkit";
import foodReducer from "./slices/foodSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";

export const store = configureStore({
    reducer: {
        foods: foodReducer,
        orders: orderReducer,
        admin: adminReducer
    }
});

export default store;
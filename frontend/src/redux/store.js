import {configureStore} from "@reduxjs/toolkit";
import foodReducer from "./slices/foodSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import aboutReducer from './slices/aboutSlice';
import menuReducer from './slices/menuSlice';


export const store = configureStore({
    reducer: {
        about: aboutReducer,
        menu: menuReducer,
        foods: foodReducer,
        orders: orderReducer,
        admin: adminReducer
    },
});

export default store;

import {configureStore} from "@reduxjs/toolkit";
import foodReducer from "./slices/foodSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";

export const store = configureStore({
import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './slices/aboutSlice'; // Редуктор для "About"
import menuReducer from './slices/menuSlice';   // Редуктор для "Menu"

const store = configureStore({
    reducer: {
        about: aboutReducer, // Редуктор для About
        menu: menuReducer,   // Редуктор для Menu
    },
        foods: foodReducer,
        orders: orderReducer,
        admin: adminReducer
    }
});

export default store;

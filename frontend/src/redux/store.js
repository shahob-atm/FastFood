import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './slices/aboutSlice'; // Редуктор для About
import menuReducer from './slices/menuSlice';   // Редуктор для Menu
import takeawayReducer from './slices/takeawaySlice'; // Редуктор для Takeaway

const store = configureStore({
    reducer: {
        about: aboutReducer,
        menu: menuReducer,
        takeaway: takeawayReducer, // Новый редуктор для Takeaway
    },
});

export default store;

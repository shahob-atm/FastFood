import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './slices/aboutSlice'; // Редуктор для "About"
import menuReducer from './slices/menuSlice';   // Редуктор для "Menu"

const store = configureStore({
    reducer: {
        about: aboutReducer, // Редуктор для About
        menu: menuReducer,   // Редуктор для Menu
    },
});

export default store;

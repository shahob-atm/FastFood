import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './slices/aboutSlice'; // ваш срез (slice)

const store = configureStore({
    reducer: {
        about: aboutReducer, // регистрируем редуктор
    },
});

export default store;

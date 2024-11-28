// slices/takeawaySlice.js
import { createSlice } from '@reduxjs/toolkit';
import phone from "./images/Снимок экрана 2024-11-28 180130.png"

const takeawaySlice = createSlice({
    name: 'takeaway',
    initialState: {
        title: 'Food Stalls with Persons but to Product marketing plane.',
        description:
            'There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment with Persons but also Just Food Stalls with Persons.',
        appLinks: {
            appStore: '#',
            googlePlay: '#',
        },
        image: phone// URL изображения
    },
    reducers: {},
});

export const selectTakeaway = (state) => state.takeaway;
export default takeawaySlice.reducer;

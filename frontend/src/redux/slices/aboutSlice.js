import { createSlice } from '@reduxjs/toolkit';
import image from "./images/FmlS61J9LP 1.png"
const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        title: 'Food Stalls with Persons but to Product marketing plane catalogues etc to.',
        description:
            'There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment make your marketing plane Effective.',
        buttonText: 'Read More',
        image: image,
    },
    reducers: {},
});

export const selectAbout = (state) => state.about;
export default aboutSlice.reducer;

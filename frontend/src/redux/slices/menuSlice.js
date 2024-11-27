import { createSlice } from '@reduxjs/toolkit';
import vegie_muffen from "./images/XAWO3cHvnE.png"
import salad from "./images/vegie-muffen.jpg"
import Burger from "./images/5N8cjhxWSH 1.png"
import Steak from "./images/Mask Group.png"
import Egg from "./images/Mask Group (1).png"
import Peach from "./images/Mask Group (2).png"


const initialState = {
    items: [
        {
            id: 1,
            name: 'Vegie Muffen',
            price: '16$',
            description: 'There are many things needed to start the fast food business.',
            rating: 4.5,
            image: vegie_muffen,
        },
        {
            id: 2,
            name: 'Salads',
            price: '12$',
            description: 'A healthy and refreshing option for everyone.',
            rating: 4.8,
            image: salad,
        },
        {
            id: 3,
            name: 'Burger',
            price: '10$',
            description: 'A delicious burger to satisfy your hunger.',
            rating: 4.6,
            image: Burger
        },
        {
            id: 4,
            name: 'Delmonico Steak Dish',
            price: '14$',
            description: 'Rich and juicy steak for meat lovers.',
            rating: 4.7,
            image: Steak,
        },
        {
            id: 5,
            name: 'Egg Masala',
            price: '9$',
            description: 'Spicy and flavorful egg curry.',
            rating: 4.3,
            image: Egg,
        },
        {
            id: 6,
            name: 'Peach Melba Dish',
            price: '15$',
            description: 'A sweet and delightful dessert.',
            rating: 4.9,
            image: Peach,
        },
    ],
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
});

export default menuSlice.reducer;

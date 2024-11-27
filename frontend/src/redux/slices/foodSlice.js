import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Asinxron API chaqiruvini aniqlash
export const getFoods = createAsyncThunk("foods/getFoods", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("/api/food"); // API URL
        if (!response.ok) {
            throw new Error("Serverda xato!");
        }
        const data = await response.json();
        return data; // Thunk muvaffaqiyatli tugadi
    } catch (error) {
        return rejectWithValue(error.message); // Xatolikni qaytarish
    }
});

// Slice yaratish
const foodSlice = createSlice({
    name: "foods",
    initialState: {
        foods: [], // API ma'lumotlarini saqlash
        orders: JSON.parse(localStorage.getItem("orders")) || [],
        loading: false, // Yuklanish holati
        error: null,    // Xatolik holati
    },
    reducers: {
        // Foydalanuvchi uchun boshqa oddiy reducer'lar
        addToCart: (state, action) => {
            const food = action.payload;
            state.orders.push({...food, foodId: food.id, price: food.price, count: 1});
            state.orders = [...state.orders];
            localStorage.setItem("orders", JSON.stringify(state.orders));
            console.log(state.orders);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFoods.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFoods.fulfilled, (state, action) => {
                state.loading = false;
                state.foods = action.payload; // Ma'lumotni saqlash
                console.log(state.foods)
            })
            .addCase(getFoods.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Xatolikni saqlash
            });
    },
});

export const { addToCart } = foodSlice.actions;
export default foodSlice.reducer;

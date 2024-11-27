import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Asinxron API chaqiruvini aniqlash
export const getFoods = createAsyncThunk("foods/getFoods", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:8080/api/food"); // API URL
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
        foods: [],      // API ma'lumotlarini saqlash
        loading: false, // Yuklanish holati
        error: null,    // Xatolik holati
    },
    reducers: {
        // Foydalanuvchi uchun boshqa oddiy reducer'lar
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

export default foodSlice.reducer;

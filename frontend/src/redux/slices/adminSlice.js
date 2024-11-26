import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Asinxron API chaqiruvini aniqlash
export const getFoods = createAsyncThunk("admin/getFoods", async (_, { rejectWithValue }) => {
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

export const getCategory = createAsyncThunk("admin/getCategory", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("http://localhost:8080/api/category"); // API URL
        if (!response.ok) {
            throw new Error("Serverda xato!");
        }
        const data = await response.json();
        return data; // Thunk muvaffaqiyatli tugadi
    } catch (error) {
        return rejectWithValue(error.message); // Xatolikni qaytarish
    }
});

const adminSlice = createSlice({
    name: "foods",
    initialState: {
        foods: [],  // API ma'lumotlarini saqlash
        categories: [],
        error: null,
        name: "",
        description: "",
        price: "",
        imageUrl: "",
        categoryId: "",
        isModalVisible: false,
        file: ""
    },
    reducers: {
        // Foydalanuvchi uchun boshqa oddiy reducer'lar
        updateState: (state, action) => {
            state[action.payload.stateName] = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFoods.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFoods.fulfilled, (state, action) => {
                state.foods = action.payload; // Ma'lumotni saqlash
                console.log(state.foods)
            })
            .addCase(getFoods.rejected, (state, action) => {
                state.error = action.payload; // Xatolikni saqlash
            });
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.categories = action.payload; // Ma'lumotni saqlash
                console.log(state.categories)
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.error = action.payload; // Xatolikni saqlash
            });
    },
});

export const {updateState} = adminSlice.actions;
export default adminSlice.reducer;
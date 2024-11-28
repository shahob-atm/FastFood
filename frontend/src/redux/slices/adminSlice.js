import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getFoods = createAsyncThunk("admin/getFoods", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("/api/food");
        if (!response.ok) {
            throw new Error("Serverda xato!");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

export const getCategory = createAsyncThunk("admin/getCategory", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch("/api/category");
        if (!response.ok) {
            throw new Error("Serverda xato!");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const adminSlice = createSlice({
    name: "foods",
    initialState: {
        foods: [],
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
                state.foods = action.payload;
                console.log(state.foods)
            })
            .addCase(getFoods.rejected, (state, action) => {
                state.error = action.payload;
            });
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.categories = action.payload;
                console.log(state.categories)
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const {updateState} = adminSlice.actions;
export default adminSlice.reducer;
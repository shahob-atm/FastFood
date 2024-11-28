import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getFoods = createAsyncThunk("foods/getFoods", async (_, { rejectWithValue }) => {
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

export const postRating = createAsyncThunk("foods/postRating", async (data, { dispatch, rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
            throw new Error("Token mavjud emas!");
        }

        const response = await fetch("/api/rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": `${token}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Serverda xato!");
        }
        dispatch(getFoods());
        return response.json();
    } catch (error) {
        console.error("Xatolik:", error.message);
        return rejectWithValue(error.message);
    }
});

const foodSlice = createSlice({
    name: "foods",
    initialState: {
        foods: [],
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFoods.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFoods.fulfilled, (state, action) => {
                state.loading = false;
                state.foods = action.payload;
            })
            .addCase(getFoods.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default foodSlice.reducer;

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getOrder = createAsyncThunk("orders/getOrder", async (data, { rejectWithValue }) => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
            throw new Error("Token mavjud emas!");
        }

        const response = await fetch("/api/order", {
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
        localStorage.removeItem("orders");
        return response.json();
    } catch (error) {
        console.error("Xatolik:", error.message);
        return rejectWithValue(error.message);
    }
});

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: JSON.parse(localStorage.getItem("orders")) || [],
        loading: false,
    },
    reducers: {
        plusCount: (state, action) => {
            const index = action.payload;
            state.orders[index].count++;
            state.orders = [...state.orders];
            localStorage.setItem("orders", JSON.stringify(state.orders));
        },
        minusCount: (state, action) => {
            const index = action.payload;
            if (state.orders[index].count > 1) {
                state.orders[index].count--;
                state.orders = [...state.orders];
                localStorage.setItem("orders", JSON.stringify(state.orders));
            }else {
                state.orders = [...state.orders.filter(order => order.id !== state.orders[index].id)];
                localStorage.setItem("orders", JSON.stringify(state.orders));
            }
        },
        addToCart: (state, action) => {
            const food = action.payload;
            state.orders.push({...food, foodId: food.id, price: food.price, count: 1});
            state.orders = [...state.orders];
            localStorage.setItem("orders", JSON.stringify(state.orders));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getOrder.pending, () => {
            })
            .addCase(getOrder.fulfilled, (state) => {
                state.orders = [];
                localStorage.removeItem("orders");
            })
    },
});

export const {minusCount, plusCount, addToCart } = orderSlice.actions;
export default orderSlice.reducer;
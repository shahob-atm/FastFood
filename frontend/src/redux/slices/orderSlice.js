import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getOrder = createAsyncThunk("orders/getOrder", async (data, { rejectWithValue }) => {
    try {
        // Tokenni olish
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
            throw new Error("Token mavjud emas!");
        }

        // API so'rovni yuborish
        const response = await fetch("http://localhost:8080/api/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": `${token}`, // Tokenni yuborish
            },
            body: JSON.stringify(data), // Ma'lumotni JSON formatga o'tkazish
        });

        if (!response.ok) {
            throw new Error("Serverda xato!");
        }
        return;
    } catch (error) {
        console.error("Xatolik:", error.message);
        return rejectWithValue(error.message); // Xatolikni reject qilish
    }
});

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: JSON.parse(localStorage.getItem("orders")) || [],  // API ma'lumotlarini saqlash
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
            .addCase(getOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Xatolikni saqlash
            });
    },
});

export const {minusCount, plusCount } = orderSlice.actions;
export default orderSlice.reducer;
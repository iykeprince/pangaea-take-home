import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
        currency: 'USD',
        loading: false
    },
    reducers: {
        updateProducts(state, { payload }) {
           
            state.items = state.items.length > 0 ? payload.reduce((acc, item) => {
                const foundItem = state.items.find(r => r.id === item.id)
                const index = state.items.findIndex(r => r.id === item.id)
                acc[index] = { ...foundItem, price: item.price }
                return acc;
            }, []) : payload
        },
        updateCurrency(state, { payload }) {
            state.currency = payload;
        }
    }
})

export const { updateProducts, updateCurrency } = productSlice.actions;

export default productSlice.reducer;
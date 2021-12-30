import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
        currency: 'USD',
        loading: false
    },
    reducers: {
        updateProducts(state, {payload}){
            console.log('payload', payload)
           state.items = payload
        },
        updateCurrency(state,{payload}){
            state.currency = payload;
        }
    }
})

export const { updateProducts, updateCurrency } = productSlice.actions;

export default productSlice.reducer;
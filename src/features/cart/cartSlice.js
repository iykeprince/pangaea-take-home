import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalQty: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const foundItem = state.cartItems.find(item => item.id === action.payload.id)
            if (foundItem) {
                const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
                state.cartItems[itemIndex].quantity++;
            } else {
                state.cartItems.push(action.payload);
            }
            state.totalPrice += action.payload.price;
            state.totalQty += action.payload.quantity;
        },
        removeFromCart(state, action) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            // check if the quantity is 
            if (state.cartItems[index].quantity > 1) {
                state.cartItems[index].quantity -= 1
                state.totalQty -= 1;
                state.totalPrice -= state.cartItems[index].price;
            } else {
                console.log('poping item', state.cartItems)
             state.cartItems.filter(item => item.id !== action.payload.id)

            }

        },
        deleteFromCart(state, action) {
             state.cartItems.filter(item => item.id !== action.payload.id)
        }
        
    }
})

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer
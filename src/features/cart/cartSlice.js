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
        updateCart(state, { payload }) {
            console.log('update cart payload to call')
            const result = payload.filter(item => state.cartItems.find(cart => cart.id === item.id))
            console.log('result oriented', result)
            state.cartItems = result.reduce((acc, item) => {
                const foundItem = state.cartItems.find(r => r.id === item.id)
                const index = state.cartItems.findIndex(r => r.id === item.id)
                acc[index] = { ...foundItem, price: item.price }
                return acc;
            }, [])
            console.log('after update', state.cartItems)
        },
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

export const { addToCart, removeFromCart, deleteFromCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer
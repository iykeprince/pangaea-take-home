import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import productReducer from '../features/product/productSlice'

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer
  },
})
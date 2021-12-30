import { configureStore, combineReducers} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from '../features/cart/cartSlice'
import productReducer from '../features/product/productSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, combineReducers( {
  product: productReducer,
  cart: cartReducer
}))

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export { store, persistor}
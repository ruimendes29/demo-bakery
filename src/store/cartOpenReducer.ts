import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// start the cart closed
const initialState: {cartOpen: boolean} = {cartOpen: false};

export const cartOpenSlice = createSlice({
  name: 'cartOpen',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartOpen = true
    },
    closeCart: (state) => {
      state.cartOpen = false
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen
    }
  }
})

export const { openCart, closeCart, toggleCart } = cartOpenSlice.actions

export default cartOpenSlice.reducer
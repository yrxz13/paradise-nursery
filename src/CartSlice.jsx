import { createSelector, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload: product }) {
      if (state.items.some(item => item.id === product.id)) return;
      state.items.push({ ...product, quantity: 1 });
    },
    increaseQuantity(state, { payload: id }) {
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, { payload: id }) {
      const index = state.items.findIndex(item => item.id === id);
      if (index === -1) return;
      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity -= 1;
      }
    },
    removeItem(state, { payload: id }) {
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartCount = createSelector(
  [selectCartItems], items => items.reduce((count, item) => count + item.quantity, 0),
);
export const selectCartTotal = createSelector(
  [selectCartItems], items => items.reduce((total, item) => total + item.priceCents * item.quantity, 0),
);
export default cartSlice.reducer;

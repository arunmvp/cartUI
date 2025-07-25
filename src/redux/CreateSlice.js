import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const already = state.items.find((f) => f.id === product.id);

      if (already) {
        already.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      } 
    },
    removeItem: (state,action)=>{ 
        state.items = state.items.filter(f=> f.id !== action.payload) 
    }
  },
  
});

export const {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer

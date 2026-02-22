import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product.types";

/* ================= Initial State ================= */
interface CompareState {
  items: Product[];
}

const initialState: CompareState = {
  items: [],
};
const MAX_COMPARE_ITEMS = 4; 
/* ================= Compare Slice ================= */
const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    // Add product to compare list
    addToCompare: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find((item) => item._id === action.payload._id);
      if (!exists && state.items.length < MAX_COMPARE_ITEMS) {
        state.items.push(action.payload);
      }
    },
    // Remove product from compare list by id
    removeFromCompare: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    // Clear all compared products
    clearCompare: (state) => {
      state.items = [];
    },
  },
});

export const { addToCompare, removeFromCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;

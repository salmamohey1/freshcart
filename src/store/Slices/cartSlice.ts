import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/config/api.config";
import { ENDPOINTS } from "@/constants/api.constants";
import type { CartItem, CartState } from "@/types/cart.types";

// Initial state for cart
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  cartId: null,
  loading: false,
  error: null,
};

/* ================= Async Thunks ================= */

// Fetch cart data
export const getCart = createAsyncThunk(
  "cart/getCart",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(ENDPOINTS.CART.BASE, {
        headers: { token },
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch cart");
    }
  }
);

// Add item to cart
export const addToCartApi = createAsyncThunk(
  "cart/add",
  async ({ productId, token }: { productId: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(
        ENDPOINTS.CART.BASE,
        { productId },
        { headers: { token } }
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to add to cart");
    }
  }
);

// Update quantity of a cart item
export const updateQuantityApi = createAsyncThunk(
  "cart/updateQuantity",
  async (
    { productId, count, token }: { productId: string; count: number; token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiClient.put(
        ENDPOINTS.CART.ITEM(productId),
        { count },
        { headers: { token } }
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to update quantity");
    }
  }
);

// Remove an item from the cart
export const removeFromCartApi = createAsyncThunk(
  "cart/remove",
  async ({ productId, token }: { productId: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.delete(ENDPOINTS.CART.ITEM(productId), {
        headers: { token },
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to remove item");
    }
  }
);

// Clear the entire cart
export const clearCartApi = createAsyncThunk(
  "cart/clear",
  async (token: string, { rejectWithValue }) => {
    try {
      await apiClient.delete(ENDPOINTS.CART.BASE, {
        headers: { token },
      });
      return null;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to clear cart");
    }
  }
);

/* ================= Helper Functions ================= */

// Update state after fulfilled API calls
const handleFulfilled = (state: CartState, action: any) => {
  state.loading = false;
  const data = action.payload?.data;
  if (data) {
   state.items = data.products.map((p: any): CartItem => ({
  id: typeof p.product === "string" ? p.product : p.product?._id,
  title: typeof p.product === "string" ? "" : p.product?.title,
  price: p.price,
  image: typeof p.product === "string" ? "" : p.product?.imageCover,
  quantity: p.count,
}));
    state.totalAmount = data.totalCartPrice;
    state.totalQuantity = action.payload.numOfCartItems || 0;
    state.cartId = data._id;
  }
};

/* ================= Cart Slice ================= */

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      state.cartId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // getCart
      .addCase(getCart.pending, (state) => { state.loading = true; })
      .addCase(getCart.fulfilled, handleFulfilled)
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // addToCartApi
      .addCase(addToCartApi.pending, (state) => { state.loading = true; })
      .addCase(addToCartApi.fulfilled, handleFulfilled)
      // updateQuantityApi
      .addCase(updateQuantityApi.fulfilled, handleFulfilled)
      // removeFromCartApi
      .addCase(removeFromCartApi.fulfilled, handleFulfilled)
      // clearCartApi
      .addCase(clearCartApi.fulfilled, (state) => {
        state.items = [];
        state.totalAmount = 0;
        state.totalQuantity = 0;
        state.cartId = null;
        state.loading = false;
      });
  },
});

export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;

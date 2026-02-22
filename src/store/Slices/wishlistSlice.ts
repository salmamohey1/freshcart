import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/config/api.config";
import { ENDPOINTS } from "@/constants/api.constants";

/* ================= Initial State ================= */
interface WishlistState {
  items: string[];       
  isLoading: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  items: [],
  isLoading: false,
  error: null,
};

/* ================= Async Thunks ================= */

// Fetch wishlist items from server
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetch",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get(ENDPOINTS.WISHLIST.BASE, {
        headers: { token },
      });
      return response.data.data.map((item: any) => item.id);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch wishlist");
    }
  }
);

// Toggle an item in wishlist (add/remove)
export const toggleWishlist = createAsyncThunk(
  "wishlist/toggle",
  async ({ id, token }: { id: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post(
        ENDPOINTS.WISHLIST.BASE,
        { productId: id },
        { headers: { token } }
      );
      return { id, action: response.data.status }; // response.data.status: 'added' | 'removed'
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Failed to toggle wishlist item");
    }
  }
);

/* ================= Wishlist Slice ================= */
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchWishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWishlist.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // toggleWishlist
      .addCase(toggleWishlist.fulfilled, (state, action: any) => {
        const id = action.payload.id;
        if (state.items.includes(id)) {
          state.items = state.items.filter((itemId) => itemId !== id);
        } else {
          state.items.push(id);
        }
      })
      .addCase(toggleWishlist.rejected, (state, action: any) => {
        state.error = action.payload;
      });
  },
});

export default wishlistSlice.reducer;

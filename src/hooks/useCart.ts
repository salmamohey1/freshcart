"use client";

import { useCallback } from "react";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "./useRedux";
import {
  getCart,
  addToCartApi,
  updateQuantityApi,
  removeFromCartApi,
  clearCartApi,
} from "@/store/Slices/cartSlice";

export function useCart() {
  const dispatch = useAppDispatch();

  const { items, totalQuantity, totalAmount, cartId, loading, error } =
    useAppSelector((state) => state.cart);

  const token = useAppSelector((state) => state.auth.token);

  /** Fetch the cart items from server */
  const fetchCart = useCallback(() => {
    if (token) {
      dispatch(getCart(token));
    }
  }, [dispatch, token]);

  /** Add a product to cart */
  const addToCart = useCallback(
    async (productId: string) => {
      if (!token) {
        toast.error("Please login to add items to cart");
        return;
      }
      try {
        await dispatch(addToCartApi({ productId, token })).unwrap();
        toast.success("Added to cart!");
      } catch (err: any) {
        toast.error(err || "Failed to add to cart");
      }
    },
    [dispatch, token]
  );

  /** Update quantity of a product in cart */
  const updateQuantity = useCallback(
    async (productId: string, count: number) => {
      if (!token) return;
      try {
        await dispatch(updateQuantityApi({ productId, count, token })).unwrap();
      } catch (err: any) {
        toast.error(err || "Failed to update quantity");
      }
    },
    [dispatch, token]
  );

  /** Remove a product from cart */
  const removeFromCart = useCallback(
    async (productId: string) => {
      if (!token) return;
      try {
        await dispatch(removeFromCartApi({ productId, token })).unwrap();
        toast.success("Removed from cart");
      } catch (err: any) {
        toast.error(err || "Failed to remove item");
      }
    },
    [dispatch, token]
  );

  /** Clear all items from cart */
  const clearCart = useCallback(async () => {
    if (!token) return;
    try {
      await dispatch(clearCartApi(token)).unwrap();
      toast.success("Cart cleared");
    } catch (err: any) {
      toast.error(err || "Failed to clear cart");
    }
  }, [dispatch, token]);

  return {
    items,
    totalQuantity,
    totalAmount,
    cartId,
    loading,
    error,
    fetchCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };
}

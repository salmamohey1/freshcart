"use client";

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { verifyToken } from "@/store/Slices/authSlice";
import { fetchWishlist } from "@/store/Slices/wishlistSlice";
import { getCart } from "@/store/Slices/cartSlice";
import { getCookie } from "@/utils/cookie.util";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const { token, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      const tokenCookie = getCookie("token");
      if (tokenCookie && !isAuthenticated) {
        dispatch(verifyToken(tokenCookie));
      }
      isMounted.current = true;
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (token) {
      dispatch(fetchWishlist(token));
      dispatch(getCart(token));
    }
  }, [token, dispatch]);

  return <>{children}</>;
}
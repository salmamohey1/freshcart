"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { setAuth, logout as logoutAction, verifyToken } from "@/store/Slices/authSlice";
import type { User } from "@/types/auth.types";
import { ROUTES } from "@/constants/app.constants";

export function useAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { user, token, isAuthenticated, isLoading, error } = useAppSelector(
    (state) => state.auth
  );

  /** Login: set user and token in Redux store */
  const handleLogin = useCallback(
    (userData: User, userToken: string) => {
      dispatch(setAuth({ user: userData, token: userToken }));
    },
    [dispatch]
  );

  /** Logout: clear auth state and redirect to login page */
  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
    router.push(ROUTES.LOGIN);
  }, [dispatch, router]);

  /** Verify token: dispatch verifyToken thunk */
  const handleVerifyToken = useCallback(
    (tokenToVerify: string) => {
      dispatch(verifyToken(tokenToVerify));
    },
    [dispatch]
  );

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    handleLogin,
    handleLogout,
    handleVerifyToken,
  };
}

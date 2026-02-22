"use client";

import { useQuery } from "@tanstack/react-query";
import apiClient from "@/config/api.config";
import { ENDPOINTS } from "@/constants/api.constants";
import type { CategoriesApiResponse } from "@/types/category.types";

export function useCategories() {
  const { data, isLoading, isError, error } = useQuery<CategoriesApiResponse>({
    queryKey: ["categories"], // unique key for caching
    queryFn: async () => {
      const response = await apiClient.get(ENDPOINTS.CATEGORIES.LIST);
      return response.data;
    },
    staleTime: 1000 * 60 * 60, // 1 hour - categories rarely change
  });

  return {
    categories: data?.data ?? [], // return empty array if no data
    isLoading,
    isError,
    error,
  };
}

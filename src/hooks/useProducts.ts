"use client";

import { useQuery } from "@tanstack/react-query";
import apiClient from "@/config/api.config";
import { ENDPOINTS } from "@/constants/api.constants";
import type { ProductsApiResponse } from "@/types/product.types";

interface UseProductsOptions {
  page?: number;
  limit?: number;
  sort?: string;
  category?: string;
  brand?: string;
  search?: string;
}


export function useProducts(options: UseProductsOptions = {}) {
  const { page = 1, limit = 40, sort, category, brand, search } = options;

  // Construct query string for API
  const queryParams = new URLSearchParams();
  queryParams.set("page", String(page));
  queryParams.set("limit", String(limit));
  if (sort) queryParams.set("sort", sort);
  if (category) queryParams.set("category[in]", category);
  if (brand) queryParams.set("brand", brand);
  if (search) queryParams.set("keyword", search);

  const queryKey = ["products", { page, limit, sort, category, brand, search }];

  const { data, isLoading, isError, error, isFetching } = useQuery<ProductsApiResponse>({
    queryKey,
    queryFn: async () => {
      const response = await apiClient.get(
        `${ENDPOINTS.PRODUCTS.LIST}?${queryParams.toString()}`
      );
      return response.data;
    },
    placeholderData: (previousData) => previousData, // keep previous data while fetching new
  });

  return {
    products: data?.data ?? [],
    totalPages: data?.metadata?.numberOfPages ?? 1,
    currentPage: data?.metadata?.currentPage ?? page,
    totalResults: data?.results ?? 0,
    isLoading,
    isFetching,
    isError,
    error,
  };
}

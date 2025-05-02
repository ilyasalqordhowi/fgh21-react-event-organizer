import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
  reducerPath: "query/categories",
  baseQuery: fetchBaseQuery({ baseUrl: "http://143.198.222.47:20001" }),
  endpoints: (builder) => ({
    listCategories: builder.query({
      query: ([page, limit]) => `/categories?page=${page}&limit=${limit}`,
    }),
    getOneCategory: builder.query({
      query: (id) => `/categories/${id}`,
    }),
  }),
});

export const { useListCategoriesQuery, useGetOneCategoryQuery } = categories;

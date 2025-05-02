import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const event = createApi({
  reducerPath: "query/events",
  baseQuery: fetchBaseQuery({ baseUrl: "http://143.198.222.47:20001" }),
  endpoints: (builder) => ({
    listEvents: builder.query({
      query: ([page, limit]) =>
        `/events/pagination?page=${page}&limit=${limit}`,
    }),
    getOneEvent: builder.query({
      query: (id) => `/events/pagination${id}`,
    }),
  }),
});

export const { useListEventsQuery, useGetOneEventQuery } = event;

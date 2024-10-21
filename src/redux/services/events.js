import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const event = createApi({
  reducerPath: "query/events",
  baseQuery: fetchBaseQuery({ baseUrl: "http://103.93.58.89:21213" }),
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "api/users?page=2",
        method: "GET",
      }),
    }),
    getByID: builder.query({
      query: (id) => ({
        url: `api/users/${id}`,
        method: "GET",
      }),
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: `api/users`,
        method: "POST",
        body: newPost,
      }),
      header: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }),

    delete: builder.mutation({
      query: (id) => ({
        url: `api/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetByIDQuery,
  useDeleteMutation,
  useCreatePostMutation,
} = postApi;

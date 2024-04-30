import { PostResponse } from '../types';
import { getToken } from '../utils/getToken';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/posts`,
  }),
  endpoints: builder => ({
   getAllPosts  : builder.query<PostResponse, void>({
      query: () => {
        const token = getToken();
        return {
          url: `/all`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    createPost: builder.mutation<PostResponse, FormData>({
      query: body => {
        const token = getToken();
        return {
          url: '/create',
          method: 'POST',
          body,
          formData: true,
          headers: {
            ContentType: 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updatePost: builder.mutation<PostResponse, FormData>({
      query: body => {
        const token = getToken();
        return {
          url: '/update',
          method: 'PATCH',
          body,
          formData: true,
          headers: {
            ContentType: 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    deletePost: builder.mutation<PostResponse, FormData>({
      query: body => {
        const token = getToken();
        return {
          url: '/delete',
          method: 'DELETE',
          body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getSinglePost: builder.query<PostResponse, string>({
      query: id => {
        const token = getToken();
        return {
          url: `/get/${id}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useCreatePostMutation, useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery, useGetSinglePostQuery, useLazyGetSinglePostQuery, useUpdatePostMutation } = postApi;

import { LocalStorageKeys } from '../configs/localStorageKeys';
import { UserAuthResponsePayload } from '../types';
import { SaveImageResponse } from '../types/image';
import { UpdateUserPayload, UpdateUserResponse } from '../types';
import { getToken } from '../utils/getToken';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/user`,
  }),
  endpoints: builder => ({
    updateUserImage: builder.mutation<SaveImageResponse, FormData>({
      query: body => {
        const token = getToken();
        return {
          url: `/photo`,
          method: 'PUT',
          body,
          formData: true,
          headers: {
            ContentType: 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updateUser: builder.mutation<UpdateUserResponse, UpdateUserPayload>({
      query: body => {
        const token = getToken();
        return {
          url: '/update',
          method: 'PATCH',
          body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useUpdateUserImageMutation, useUpdateUserMutation } = userApi;

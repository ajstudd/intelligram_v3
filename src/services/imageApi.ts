import { ICommentGroup } from '@/components/img-mapper/ImageComment';
import { LocalStorageKeys } from '@/configs/localStorageKeys';
import { UserAuthResponsePayload } from '@/types';
import { SaveImageResponse } from '@/types/image';
import { UpdateUserPayload, UpdateUserResponse } from '@/types/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import FormData from 'form-data';

const API_URL: string = import.meta.env.VITE_API_URL;

export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/image`,
  }),
  endpoints: builder => ({
    saveImage: builder.mutation<SaveImageResponse, FormData>({
      query: body => ({
        url: `/save`,
        method: 'POST',
        body,
        formData: true,
        headers: {
          ContentType: 'multipart/form-data',
        },
      }),
    }),
    applyComments: builder.mutation<
      any,
      { imageId: string; commentGroups: ICommentGroup[] }
    >({
      query: ({ commentGroups, imageId }) => ({
        url: `/comment/${imageId}`,
        method: 'POST',
        body: commentGroups,
      }),
    }),
  }),
});

export const { useApplyCommentsMutation, useSaveImageMutation } = imageApi;

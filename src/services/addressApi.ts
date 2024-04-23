import { LocalStorageKeys } from '@/configs/localStorageKeys';
import { ErrorResponse, UserAuthResponsePayload } from '@/types';
import {
  AddressResponsePayload,
  GetAddressResponse,
  IAddress,
  UpdateResponsePayload,
} from '@/types/profile';
// import { reAuthBaseQuery } from '@/utils/reAuth';
import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const API_URL: string = import.meta.env.VITE_API_URL;
export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/address`,
  }) as BaseQueryFn<
    FetchArgs,
    unknown,
    { status: number; data: ErrorResponse }
  >,
  endpoints: builder => ({
    addAddress: builder.mutation<IAddress, AddressResponsePayload>({
      query: body => {
        let token = '';
        let headers = {};
        const headerData = localStorage.getItem(LocalStorageKeys.TOKEN);
        if (headerData) {
          token = headerData;
          headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return {
          url: `/add`,
          method: 'POST',
          body,
          headers,
        };
      },
    }),
    getAllAddresses: builder.query<Pick<GetAddressResponse, 'data'>, void>({
      providesTags: ['UserAddress'],
      query: body => {
        let token = '';
        let headers = {};
        const headerData = localStorage.getItem(LocalStorageKeys.TOKEN);
        if (headerData) {
          token = headerData;
          headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return {
          url: `/my`,
          method: 'GET',
          body,
          headers,
        };
      },
    }),
    deleteAddress: builder.mutation<
      { success: boolean },
      {
        id: string;
      }
    >({
      query: ({ id }) => {
        let token = '';
        let headers = {};
        const headerData = localStorage.getItem(LocalStorageKeys.TOKEN);
        if (headerData) {
          token = headerData;
          headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return {
          url: `/${id}`,
          method: 'DELETE',
          headers,
        };
      },
      invalidatesTags: ['UserAddress'],
    }),
    updateAddress: builder.mutation<
      IAddress,
      {
        id: string;
        addressData: AddressResponsePayload;
      }
    >({
      query: ({ addressData, id }) => {
        let token = '';
        let headers = {};
        const headerData = localStorage.getItem(LocalStorageKeys.TOKEN);
        if (headerData) {
          token = headerData;
          headers = {
            Authorization: `Bearer ${token}`,
          };
        }
        return {
          url: `/${id}`,
          method: 'PATCH',
          body: addressData,
          headers,
        };
      },
      invalidatesTags: ['UserAddress'],
    }),
  }),
  tagTypes: ['UserAddress'],
});

export const {
  useAddAddressMutation,
  useDeleteAddressMutation,
  useGetAllAddressesQuery,
  useUpdateAddressMutation,
} = addressApi;

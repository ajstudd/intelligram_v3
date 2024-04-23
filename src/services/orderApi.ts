import { ICommentGroup } from '@/components/img-mapper/ImageComment';
import { LocalStorageKeys } from '@/configs/localStorageKeys';
import { UserAuthResponsePayload } from '@/types';
import { SaveImageResponse } from '@/types/image';
import {
  getOrder,
  IOrder,
  MyOrdersResponsePayload,
  OrderQuote,
  OrderResponsePayload,
  orderByPages,
  updateExpectedDeliveryAt,
  updateStatus,
  getOrderResponse,
  OrderStatuses,
} from '@/types/order';
import { UpdateUserPayload, UpdateUserResponse } from '@/types/user';
import { getToken } from '@/utils/getToken';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL: string = import.meta.env.VITE_API_URL;

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/order`,
  }),
  endpoints: builder => ({
    placeOrder: builder.mutation<OrderResponsePayload, IOrder>({
      query: body => {
        const token = getToken();
        return {
          url: `/place`,
          method: 'POST',
          body,
          // TODO: add token if existing
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getMyorders: builder.query<MyOrdersResponsePayload, void>({
      query: () => {
        const token = getToken();
        return {
          url: `/my`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseHandler: async (response: Response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            // Sort the data by createdAt in descending order
            data.orders.sort((a: any, b: any) => {
              const dateA = new Date(a.createdAt);
              const dateB = new Date(b.createdAt);
              return dateB.getTime() - dateA.getTime();
            });
            return data;
          },
        };
      },
    }),

    getAllOrders: builder.query<getOrderResponse, orderByPages>({
      query: queryParams => {
        console.log('ede');
        const token = getToken();
        return {
          url: `/all?page=${encodeURIComponent(queryParams.currentPage)}${
            queryParams.status === 'all'
              ? ''
              : `&orderStatus=${encodeURIComponent(queryParams.status)}`
          }`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    getAllStatus: builder.query<OrderStatuses, void>({
      query: () => {
        const token = getToken();
        return {
          url: `/get-filters`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getOrderById: builder.query<{ order: getOrder }, string>({
      query: orderId => {
        const token = getToken();
        return {
          url: `/${orderId}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updateOrder: builder.mutation<getOrder, updateExpectedDeliveryAt>({
      query: updated => {
        const token = getToken();
        return {
          url: `/update`,
          method: 'POST',
          body: {
            orderId: updated.orderId,
            expectedDeliveryAt: updated.expectedDeliveryAt,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updateStatus: builder.mutation<getOrder, updateStatus>({
      query: updated => {
        const token = getToken();
        return {
          url: `/status`,
          method: 'POST',
          body: {
            orderId: updated.orderId,
            status: updated.status,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    sendQuote: builder.mutation<getOrder, OrderQuote>({
      query: body => {
        const token = getToken();
        return {
          url: `/sendQuote`,
          method: 'POST',
          body,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetAllStatusQuery,
  useGetMyordersQuery,
  useGetOrderByIdQuery,
  usePlaceOrderMutation,
  useSendQuoteMutation,
  useUpdateOrderMutation,
  useUpdateStatusMutation,
} = orderApi;

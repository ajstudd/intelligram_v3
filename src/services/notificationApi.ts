import { NotificationResponsePayload } from '@/types/notification';
import { getToken } from '@/utils/getToken';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL: string = import.meta.env.VITE_API_URL;

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/notification`,
  }),
  endpoints: builder => ({
    getNotifications: builder.query<NotificationResponsePayload, void>({
      query: () => {
        const token = getToken();

        return {
          url: `/my`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;

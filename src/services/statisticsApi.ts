import { CustomerStatistics } from '@/types/statistics';
import { getToken } from '@/utils/getToken';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL: string = import.meta.env.VITE_API_URL;

export const statisticsApi = createApi({
  reducerPath: 'statisticsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/statistics`,
  }),
  endpoints: builder => ({
    getTopCustomers: builder.query<CustomerStatistics[], number>({
      query: x => {
        const token = getToken();
        return {
          url: `/top-customers?count=${x + 1}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetTopCustomersQuery } = statisticsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hostApiServices = createApi({
    reducerPath: 'hostApiServices',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6773d3bb77a26d4701c674b0.mockapi.io' }),
    endpoints: (builder: any) => ({
        getUsers: builder.query({
            query: () => '/students',
        }),
    }),
});

export const { useLazyGetUsersQuery } = hostApiServices;

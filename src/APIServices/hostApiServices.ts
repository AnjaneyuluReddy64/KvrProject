import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hostApiServices = createApi({
    reducerPath: 'hostApiServices',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6773d3bb77a26d4701c674b0.mockapi.io' }),
    endpoints: (builder) => ({

        // Users Get Call
        getUsers: builder.query({
            query: () => ({
                url: '/students',
                method: 'GET',
            }),
        }),

        // Users POST Call
        postRequestToUpdateInfo: builder.mutation({
            query: (data) => ({
                url: '/students',
                method: 'POST',
                body: data,
            }),
        }),
        // Users POST Call
        putRequestToUpdateInfo: builder.mutation({
            query: (data) => ({
                url: `/students/${data?.id}`,
                method: 'PUT',
                body: data,
            }),
        }),
    }),
});

export const { useLazyGetUsersQuery, usePostRequestToUpdateInfoMutation, usePutRequestToUpdateInfoMutation } = hostApiServices;

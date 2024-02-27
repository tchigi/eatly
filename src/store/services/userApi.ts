import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {UserType} from "../../types/UserType.ts";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getUserInfo: builder.query<UserType, number>({
            query: (value) => `users/${value}`,
        }),

    }),
})

export const {useGetUserInfoQuery} = userApi
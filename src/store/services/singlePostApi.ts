import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {SinglePostType} from "../../types/SinglePostType.ts";

export const singlePostApi = createApi({
    reducerPath: 'singlePostApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getSinglePost: builder.query<SinglePostType, number>({
            query: (value) => `posts/${value}`,
        }),
    }),
})

export const {useGetSinglePostQuery} = singlePostApi
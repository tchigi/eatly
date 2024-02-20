import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CommentsType} from "../../types/CommentsType.ts";

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getComments: builder.query<CommentsType, number>({
            query: () => `comments?limit=6&select=id,body,user`,
        }),
    }),
})

export const {useGetCommentsQuery} = commentsApi
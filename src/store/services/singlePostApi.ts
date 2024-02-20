import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CommentsType} from "../../types/CommentsType.ts";
import {UserType} from "../../types/UserType.ts";
import {SinglePostType} from "../../types/SinglePostType.ts";

export const singlePostApi = createApi({
    reducerPath: 'singlePostApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getSinglePost: builder.query<SinglePostType, number>({
            query: (value) => `posts/${value}`,
        }),
        getUserInfo: builder.query<UserType, number>({
            query: (value) => `users/${value}`,
        }),
        getPostComments: builder.query<CommentsType, number>({
            query: (value) => `comments/post/${value}`,
        }),
    }),
})

export const {useGetSinglePostQuery, useGetUserInfoQuery, useGetPostCommentsQuery} = singlePostApi
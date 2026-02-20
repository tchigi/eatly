import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BlogType} from "../../types/BlogType.ts";

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getBlog: builder.query<BlogType, number>({
            query: (page) => `posts?limit=12&skip=${page * 12}&select=id,title,body,reactions,tags,userId`,
        }),
    }),
})

export const {useGetBlogQuery} = blogApi
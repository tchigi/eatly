import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CommentsType} from "../../types/CommentsType.ts";

type PostComment = {
    body: string,
    postId: number,
    userId: number,
}

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    tagTypes: ["Comments"],
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getComments: builder.query<CommentsType, void>({
            query: () => `comments?limit=6&select=id,body,user`,
        }),
        getPostComments: builder.query<CommentsType, number>({
            query: (value) => `comments/post/${value}`,
            providesTags: (result) => result
                ? [
                    ...result.comments.map(({id}) => ({type: 'Comments', id} as const)),
                    {type: 'Comments', id: 'LIST'},
                ]
                : [{type: 'Comments', id: 'LIST'}],
        }),
        addPostComment: builder.mutation<PostComment, PostComment>({
            query: (body) => ({
                url: "comments/add",
                method: "POST",
                body
            }),
            invalidatesTags: [{type: 'Comments', id: 'LIST'}]
        })
    }),
})

export const {useGetCommentsQuery, useGetPostCommentsQuery, useAddPostCommentMutation} = commentsApi
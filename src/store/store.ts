import {configureStore} from '@reduxjs/toolkit'
import blogReducer from "./slices/blogSlice.ts"
import {blogApi} from "./services/blogApi.ts";
import {recipesApi} from "./services/recipesApi.ts";
import {commentsApi} from "./services/commentsApi.ts";
import {setupListeners} from "@reduxjs/toolkit/query";
import {singlePostApi} from "./services/singlePostApi.ts";
import {userApi} from "./services/userApi.ts";

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [singlePostApi.reducerPath]: singlePostApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware, recipesApi.middleware, commentsApi.middleware, singlePostApi.middleware, userApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
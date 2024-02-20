import { createSlice } from '@reduxjs/toolkit'

export interface PostsState {
    page: number;
}

const initialState: PostsState = {
    page: 1,
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        incrementPage: (state) => {
            state.page += 1
        },
        decrementPage: (state) => {
            state.page -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { incrementPage, decrementPage } = blogSlice.actions

export default blogSlice.reducer
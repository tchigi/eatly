import {createSlice} from '@reduxjs/toolkit'

export interface NewCommentsState {
    newComments: Array<{
        id: number,
        body: string,
        postId: number,
        user: {
            id: number,
            username: string
        }
    }>;
}

const initialState: NewCommentsState = {
    newComments: [],
}

export const newCommentsSlice = createSlice({
    name: 'newComments',
    initialState,
    reducers: {
        addNewComment: (state, action) => {
            state.newComments.push(action.payload)
        },
        clearNewComments: (state) => {
            state.newComments = []
        }
    },
})

// Action creators are generated for each case reducer function
export const {addNewComment, clearNewComments} = newCommentsSlice.actions

export default newCommentsSlice.reducer
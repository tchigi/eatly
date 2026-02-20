export type CommentsType = {
    comments: Array<CommentType>,
    total: number,
    skip: number,
    limit: number
}

type CommentType = {
    id: number,
    body: string,
    user: {
        username: string,
        id: number
    }
}
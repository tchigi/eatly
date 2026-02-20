export type SinglePostType = {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: Array<string>,
    reactions: { likes: number, dislikes: number }
}
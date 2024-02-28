export type BlogType = {
    posts: Array<BlogPostType>,
    total: number,
    skip: number,
    limit: number,
}

export type BlogPostType = {
    id: number,
    title: string,
    body: string,
    reactions: string,
    tags: Array<string>,
    userId: number
}
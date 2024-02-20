export type RecipesType = {
    recipes: Array<RecipeType>,
    total: number,
    skip: number,
    limit: number
}

type RecipeType = {
    id: number,
    name: string,
    tags: Array<string>,
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    rating: number,
    image: string
}
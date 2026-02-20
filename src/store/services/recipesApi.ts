import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RecipesType} from "../../types/RecipesType.ts";

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getRecipes: builder.query<RecipesType, void>({
            query: () => `recipes?limit=100&select=id,name,tags,prepTimeMinutes,cookTimeMinutes,rating,image`,
        }),
    }),
})

export const {useGetRecipesQuery} = recipesApi
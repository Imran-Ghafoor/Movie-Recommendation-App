import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// pagination

const page = 1
export const TMDBAPI = createApi({
    reducerPath: 'TMDBAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        // Get Movies
        getMovies: builder.query({
            query: () => `movie/popular?page=${page}
            &api_key=dcf2811913b2dce7729cd89584295d64`
        }),

        getMovie: builder.query({
            query: (id) => `/movie/${id}? 
            append_to_response=videos,credits&api_key=dcf2811913b2dce7729cd89584295d64`
        })
    })
})
export const {
    useGetMoviesQuery,
    useGetMovieQuery,
} = TMDBAPI;

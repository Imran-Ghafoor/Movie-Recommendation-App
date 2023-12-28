import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// pagination

const page = 1
export const TMDBAPI = createApi({
    reducerPath: 'TMDBAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        // Get Movie
        getMovie: builder.query({
            query: (id) =>
                `/movie/${id}?append_to_response=videos,credits&api_key=c643a6685dfefa1bd8e9df8ab94f6004`,
        }),

        getMovies: builder.query({
            query: ({ genreName, page, searchQuery }) => {

                // Get movie by Searching
                if (searchQuery) {
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=c643a6685dfefa1bd8e9df8ab94f6004`
                }

                // Get movies by Genre
                if (genreName && typeof genreName === 'number') {
                    return `discover/movie?with_genres=${genreName}&page=${page}&api_key=dcf2811913b2dce7729cd89584295d64`
                }
                // Get Popular Movies
                return `movie/popular?page=${page}&api_key=dcf2811913b2dce7729cd89584295d64`;
            }
        }),

        // Get Genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=dcf2811913b2dce7729cd89584295d64`,
        }),



    })
})
export const {
    useGetMoviesQuery,
    useGetMovieQuery,
    useGetGenresQuery,
    // useGetMovieByGenreQuery,
} = TMDBAPI;

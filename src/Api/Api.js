import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const kinopoiskApi = createApi({
    baseQuery: fetchBaseQuery( {
        baseUrl: 'https://api.kinopoisk.dev/v1.3/', 
        prepareHeaders:(Headers) => {
            Headers.set( 'X-API-KEY', "HYC5PB3-QSCM2BD-PYEK30E-E863V39");
            return Headers
        } ,
        mode:'cors'
    } ),
    endpoints: (builder) => ({
        getRandomMovie: builder.query({
            query: ()=> '/movie/random',
        }),
        getMovieKpRating: builder.query({
            query: (n) => 'movie?limit='+ n
        }),
        getTvSeries: builder.query({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=tv-series&limit='+ n
        }),
        getCartoon: builder.query({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=cartoon&limit='+ n
        }),
        getAnime: builder.query({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=anime&limit='+ n
        }),
        getAnimatedSeries: builder.query({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=animated-series&limit='+ n
        }),
        getTvShow: builder.query({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=tv-show&limit='+ n
        }),
        getTitleById: builder.query({
            query: (n) => 'movie?selectFields=persons&selectFields=genres&selectFields=name&selectFields=description&selectFields=year&selectFields=poster&selectFields=rating&selectFields=watchability&id='+ n
        }),
        getFilterTitle: builder.query({
            query: (q) => 'movie?'+ q
        })
    })

});

export const { useGetRandomMovieQuery, useGetMovieKpRatingQuery, useGetTvSeriesQuery, 
    useGetCartoonQuery, useGetAnimeQuery, useGetAnimatedSeriesQuery, useGetTvShowQuery,
    useGetTitleByIdQuery, useGetFilterTitleQuery } = kinopoiskApi;
 
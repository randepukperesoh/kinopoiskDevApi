import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Doc, Movie } from '../components/types';

export const kinopoiskApi = createApi({
    reducerPath: "kinopoiskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.kinopoisk.dev/v1.4/',
        prepareHeaders: (headers) => {
            headers.set('X-API-KEY', "HYC5PB3-QSCM2BD-PYEK30E-E863V39");
            return headers;
        },
        mode: "cors"
    }),
    endpoints: build => ({       
        getRandomMovie: build.query<Movie, any>({
            query: () => '/movie/random'
        }), 
        getMovieKpRating: build.query<Movie, string>({
            query:(n) => 'movie?limit='+ n
        }),
        getTvSeries: build.query<Movie, string>({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=tv-series&limit='+ n
        }),
        getCartoon: build.query<Movie, string>({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=cartoon&limit='+ n
        }),
        getAnime: build.query<Movie, string>({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=anime&limit='+ n
        }),
        getAnimatedSeries: build.query<Movie, string>({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=animated-series&limit='+ n
        }),
        getTvShow: build.query<Movie, string>({
            query: (n) => 'movie?sortField=rating.kp&page=3&type=tv-show&limit='+ n
        }),
        getTitleById: build.query<Movie, string>({
            query: (n) => 'movie?selectFields=persons&selectFields=genres&selectFields=name&selectFields=description&selectFields=year&selectFields=poster&selectFields=rating&selectFields=watchability&id='+ n
        }),
        getFilterTitle: build.query<Movie, string>({
            query: (q) => 'movie?'+ q
        })
    })
});

export const {useGetRandomMovieQuery, useGetMovieKpRatingQuery, useGetTvSeriesQuery,
useGetCartoonQuery, useGetAnimeQuery, useGetAnimatedSeriesQuery, useGetTvShowQuery,
useGetTitleByIdQuery, useGetFilterTitleQuery} = kinopoiskApi;

// const kinopoiskApi = kinoApi.injectEndpoints({
//     endpoints: (build) => ({        
//         getRandomMovieQuery: build.query<Movie, void>({
//             query: () => '/movie/random'
//         }), 
//         getMovieKpRating: build.query<Movie, void>({
//             query:(n) => 'movie?limit='+ n
//         })
//     })
// })

//export const kinopoiskApi; 
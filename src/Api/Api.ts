import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Doc, Movie } from '../components/types';

interface ParamsInterface{ 
    year: string;
    genres: string;
    status: string;
    ageRating: string;
    limit: string
}

export interface Image {
    docs:  Img[];
    total: number;
    limit: number;
    page:  number;
    pages: number;
}

export interface Img {
    movieId:    number;
    type:       string;
    url:        string;
    previewUrl: string;
    height:     number;
    width:      number;
    createdAt:  Date;
    updatedAt:  Date;
    id:         string;
}

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
        getRandomMovie: build.query<Doc, any>({
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
        getTitleById: build.query<Doc, number>({
            query: (n) => `movie/${n}`
        }),
        getFilterTitle: build.query<Movie, ParamsInterface>({
            query: (q) => `movie?genres.name=${q.genres}&limit=${q.limit}`//&status=${q.status}&year=${q.year}&ageRating=${q.ageRating}`
            //     {
            //     return{
            //         url: 'movie',
            //         params: q //q.genres.name
            //     }
            // }
        }),
        getImageById: build.query<Image, number>({
            query: (id) => `image?page=1&limit=10&movieId=${id}`
        }) 
    })
});

export const {useGetRandomMovieQuery, useGetMovieKpRatingQuery, useGetTvSeriesQuery,
useGetCartoonQuery, useGetAnimeQuery, useGetAnimatedSeriesQuery, useGetTvShowQuery,
useGetTitleByIdQuery, useGetFilterTitleQuery, useGetImageByIdQuery} = kinopoiskApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Doc, Movie } from "../components/types";

export interface ParamsInterface {
  year?: string;
  genres?: string;
  status?: string;
  ageRating?: string;
  limit?: string;
  type?: string;
  page?: number;
}

export interface Image {
  docs: Img[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Img {
  movieId: number;
  type: string;
  url: string;
  previewUrl: string;
  height: number;
  width: number;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

const defGet = (type: string, limit: number) => {
  return {
    sortField: "rating.kp",
    type,
    limit,
  };
};

export const kinopoiskApi = createApi({
  reducerPath: "kinopoiskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", "HYC5PB3-QSCM2BD-PYEK30E-E863V39");
      return headers;
    },
    mode: "cors",
  }),
  endpoints: (build) => ({
    getRandomMovie: build.query<Doc, null>({
      query: () => {
        return {
          url: "movie/random",
        };
      },
    }),
    getMovieKpRating: build.query<Movie, number>({
      query: (limit) => {
        return { url: "movie", params: { limit } };
      },
    }),
    getTvSeries: build.query<Movie, number>({
      query: (limit) => {
        return {
          url: "movie",
          params: defGet("tv-series", limit),
        };
      },
    }),
    getCartoon: build.query<Movie, number>({
      query: (limit) => {
        return {
          url: "movie",
          params: defGet("cartoon", limit),
        };
      },
    }),
    getAnime: build.query<Movie, number>({
      query: (limit) => {
        return {
          url: "movie",
          params: defGet("anime", limit),
        };
      },
    }),
    getAnimatedSeries: build.query<Movie, number>({
      query: (limit) => {
        return {
          url: "movie",
          params: defGet("animated-series", limit),
        };
      },
    }),
    getTvShow: build.query<Movie, number>({
      query: (limit) => {
        return {
          url: "movie",
          params: defGet("tv-show", limit),
        };
      },
    }),
    getTitleById: build.query<Doc, number>({
      query: (id) => {
        return {
          url: `movie/${id}`,
        };
      },
    }),
    getFilterTitle: build.query<Movie, ParamsInterface>({
      query: (params) => {
        return {
          url: "movie",
          params: {
            ...params,
          },
        };
      },
    }),
    getImageById: build.query<Image, number | undefined>({
      query: (id) => `image?page=1&limit=10&movieId=${id}`,
    }),
  }),
});

export const {
  useGetRandomMovieQuery,
  useGetMovieKpRatingQuery,
  useGetTvSeriesQuery,
  useGetCartoonQuery,
  useGetAnimeQuery,
  useGetAnimatedSeriesQuery,
  useGetTvShowQuery,
  useGetTitleByIdQuery,
  useGetFilterTitleQuery,
  useGetImageByIdQuery,
} = kinopoiskApi;

export interface Data {
    status:             string;
    endpointName:       string;
    requestId:          string;
    originalArgs:       string;
    startedTimeStamp:   number;
    data:               Movie;
    fulfilledTimeStamp: number;
    isUninitialized:    boolean;
    isLoading:          boolean;
    isSuccess:          boolean;
    isError:            boolean;
    currentData:        Data;
    isFetching:         boolean;
}

export interface Movie {
    docs:  Doc[];
    total: number;
    limit: number;
    page:  number;
    pages: number;
}

export interface Doc {
    externalId:       ExternalID;
    rating:           Rating;
    votes:            Rating;
    movieLength:      number;
    id:               number;
    type:             Type;
    name:             string;
    description:      string;
    year:             number;
    poster:           Poster;
    genres:           Country[];
    countries:        Country[];
    alternativeName:  null | string;
    enName:           null | string;
    names:            Name[];
    shortDescription: string;
    logo:             Logo;
    watchability:     Watchability;
    color?:           string;
    persons :          Person[];
}

export interface Country {
    name: string;
}

export interface ExternalID {
    tmdb: number;
    imdb: string;
}

export interface Logo {
    url: string;
}

export interface Name {
    name:      string;
    language?: string;
    type?:     null | string;
}

export interface Poster {
    url:        string;
    previewUrl: string;
}

export interface Rating {
    kp:                 number;
    imdb:               number;
    filmCritics:        number;
    russianFilmCritics: number;
    await:              number | null;
}

export enum Type {
    Movie = "movie",
}

export interface Watchability {
    items: Item[];
}

export interface Item {
    name: string;
    logo: Logo;
    url:  string;
}

export interface Person {
    id:           number;
    photo:        string;
    name:         string;
    enName:       string;
    description:  string;
    profession:   string;
    enProfession: string;
}
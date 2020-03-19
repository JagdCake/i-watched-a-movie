import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { PageNavProp } from './footer';

export interface MovieSearchData {
    id: number;
    title: string;
    yearOfRelease: number;
}

const moviePage: Function = (
    movieId: number,
    numberOfMovies: number,
    moviesPerPage: number,
    page: number,
    lastPage: number
) => {
    const startRangeOfIdsForPage = numberOfMovies - moviesPerPage * page;
    const endRangeOfIdsForPage = startRangeOfIdsForPage + moviesPerPage;

    if (page === lastPage) {
        return page;
    }

    if (movieId > startRangeOfIdsForPage && movieId <= endRangeOfIdsForPage) {
        return page;
    }

    return moviePage(movieId, numberOfMovies, moviesPerPage, page + 1);
};

interface MovieLinkListProps extends PageNavProp {
    displayStatus: boolean;
    movieData: MovieSearchData[];
}

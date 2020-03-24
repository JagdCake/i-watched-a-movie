import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { Link } from 'gatsby';
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

export interface MovieLinkListProps extends PageNavProp {
    displayStatus: boolean;
    movieData: MovieSearchData[];
}

const MovieLinkList: FunctionComponent<MovieLinkListProps> = ({
    displayStatus,
    pageContext,
    movieData,
}: MovieLinkListProps): ReactElement | null => {
    if (displayStatus === false) {
        return null;
    }

    const numberOfMovies = pageContext.numberOfMovies;
    const moviesPerPage = pageContext.first;
    const firstPage = 1;
    const lastPage = pageContext.numPages;
    const links: ReactElement[] = movieData.map((movie) => {
        const pageWhereTheMovieIs = moviePage(
            movie.id,
            numberOfMovies,
            moviesPerPage,
            firstPage,
            lastPage
        );

        const linkToMovie = `page/${pageWhereTheMovieIs}#${movie.id}`;
        return (
            <li key={movie.id} className="my-1">
                <Link to={linkToMovie}>
                    {movie.title} | {movie.yearOfRelease}
                </Link>
            </li>
        );
    });

    return (
        <ul
            aria-label="list of movie titles, each followed by release year"
            className="absolute w-48 list-disc list-inside bg-red-500 p-2 border-2 border-t-0 border-black rounded-sm"
        >
            {(links.length > 0 && links) || (
                <strong className="block my-1 text-center">
                    Nothing here.
                </strong>
            )}
        </ul>
    );
};

export default MovieLinkList;

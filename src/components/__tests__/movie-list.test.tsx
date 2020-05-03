import React from 'react';
import { render } from '@testing-library/react';
import MovieLinkList from '../movie-list';
import { MovieLinkListProps } from '../movie-list';

const mockMovieLinkListProps = (movieData: Array<{}> = [], pageContext: {}) => {
    return {
        displayStatus: true,
        movieData: [
            ...movieData,
            {
                id: 1,
                title: 'Test Movie',
                yearOfRelease: 2020,
            },
        ],
        pageContext: pageContext,
        handleClick: () => {
            return;
        },
    };
};

describe(`if there are 2 movies and you want 1 per page`, () => {
    const aSecondMovie = [
        {
            id: 2,
            title: 'Test Movie 2',
            yearOfRelease: 2020,
        },
    ];

    const numberOfMovies = 2;
    const moviesPerPage = 1;
    const currentPage = 1;
    const numberOfPages = numberOfMovies / moviesPerPage;

    const pageContextForTwoMovies = {
        first: moviesPerPage,
        offset: moviesPerPage * currentPage,
        numPages: numberOfPages,
        currentPage: currentPage,
        numberOfMovies: numberOfMovies,
    };

    const props = mockMovieLinkListProps(aSecondMovie, pageContextForTwoMovies);

    it(`the link to the first movie should lead to page 2`, () => {
        const { getByLabelText } = render(
            <MovieLinkList {...(props as MovieLinkListProps)} />
        );

        const movieList = getByLabelText(/list.*movie.*titles/i);
        const movieLinks = Array.from(movieList.querySelectorAll('a')) as Array<
            HTMLAnchorElement
        >;

        // the first movie is second in the array because the movies are
        // ordered by their IDs, in descending order
        const linkToFirstMovie = movieLinks[1];
        expect(linkToFirstMovie.href).toMatch(/page\/2#1/);
    });

    it(`the link to the second movie should lead to page 1`, () => {
        const { getByLabelText } = render(
            <MovieLinkList {...(props as MovieLinkListProps)} />
        );

        const movieList = getByLabelText(/list.*movie.*titles/i);
        const movieLinks = Array.from(movieList.querySelectorAll('a')) as Array<
            HTMLAnchorElement
        >;

        const linkToSecondMovie = movieLinks[0];
        expect(linkToSecondMovie.href).toMatch(/page\/1#2/);
    });
});

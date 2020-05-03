import React from 'react';
import { render } from '@testing-library/react';

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
});

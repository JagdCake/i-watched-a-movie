import React from 'react';
import { render } from '@testing-library/react';

const mockMovieLinkListProps = (movieData: Array<{}> = []) => {
    return {
        displayStatus: true,
        movieData: [
            {
                id: 1,
                title: 'Test Movie',
                yearOfRelease: 2020,
            },
            ...movieData,
        ],
        pageContext: {
            first: 1,
            offset: 0,
            numPages: 1,
            currentPage: 1,
            numberOfMovies: movieData.length,
        },
        handleClick: () => {
            return;
        },
    };
};

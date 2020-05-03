import React from 'react';
import { render } from '@testing-library/react';

const mockMovieLinkListProps = (movieData: Array<{}> = [], pageContext: {}) => {
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
        pageContext: pageContext,
        handleClick: () => {
            return;
        },
    };
};

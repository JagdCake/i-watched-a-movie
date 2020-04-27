import React from 'react';
import Header from '../header';

describe(`Header's About section`, () => {
    const mockHeaderProps = {
        siteTitle: 'Test Site',
        searchData: [
            {
                id: 1,
                title: 'Test Movie',
                yearOfRelease: 2020,
            },
        ],
        pageContext: {
            first: 0,
            offset: 0,
            numPages: 0,
            currentPage: 0,
            numberOfMovies: 0,
        },
    };
});

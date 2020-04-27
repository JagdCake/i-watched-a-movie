import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

    it(`should be hidden by default`, () => {
        const { getByLabelText } = render(<Header {...mockHeaderProps} />);

        const aboutSection = getByLabelText(/about section/i);
        expect(aboutSection).toHaveClass('h-0', 'opacity-0', 'invisible');
    });

    it(`should have it's visibility toggled on click of the About section button`, () => {
        const { getByLabelText, getByTitle } = render(
            <Header {...mockHeaderProps} />
        );
        const aboutSection = getByLabelText(/about section/i);

        const aboutSectionButton = getByTitle(/open.*about/i);
        // open About section
        fireEvent.click(aboutSectionButton);

        expect(aboutSection).not.toHaveClass('h-0', 'opacity-0', 'invisible');
        expect(aboutSection).toHaveClass('h-full', 'opacity-100', 'mt-3');

        const aboutSectionCloseButton = getByTitle(/close.*about/i);
        // close About section
        fireEvent.click(aboutSectionCloseButton);

        expect(aboutSection).not.toHaveClass('h-full', 'opacity-100', 'mt-3');
        expect(aboutSection).toHaveClass('h-0', 'opacity-0', 'invisible');
    });
});

import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { MovieLinkListProps, MovieSearchData } from './movie-list';
import MovieLinkList from './movie-list';

const normalizedValue: Function = (value: string): string => {
    const specialCharacters = /[|`|~|!|@|#|$|%|^|*|(|)|_|||+|\|\-|=|?|;|:|'|"|,|.|<|>|\{|\}|\[|\]|\\|\/]/g;
    const twoOrMoreSpaces = /\s{2,}/g;
    const ampersand = /&/g;
    const nothing = '';
    const oneSpace = ' ';
    const and = 'and';

    return value
        .trim()
        .toLowerCase()
        .replace(specialCharacters, nothing) // removing special characters can leave more than two spaces
        .replace(twoOrMoreSpaces, oneSpace)
        .replace(ampersand, and);
};

const matchSearch: Function = (
    searchValue: string,
    searchData: string
): boolean => {
    const regex = new RegExp(`.*${searchValue}.*`, 'g');
    const searchMatches: boolean = regex.test(searchData);

    return searchMatches;
};

interface MovieLinkSearchProps extends MovieLinkListProps {
    searchValue: string;
}

const MovieLinkSearch: FunctionComponent<MovieLinkSearchProps> = ({
    displayStatus,
    pageContext,
    movieData,
    handleClick,
    searchValue,
}: MovieLinkSearchProps): ReactElement => {
    const normalizedSearchValue = normalizedValue(searchValue);

    const searchResults: MovieSearchData[] = movieData.filter((movie) => {
        const normalizedMovieTitle = normalizedValue(movie.title);

        const valueMatches: boolean = matchSearch(
            normalizedSearchValue,
            normalizedMovieTitle
        );

        if (valueMatches) {
            return movie;
        }
    });

    const threeTriosOfSearchResults = searchResults.slice(0, 9);

    return (
        <MovieLinkList
            displayStatus={displayStatus}
            pageContext={pageContext}
            movieData={threeTriosOfSearchResults}
            handleClick={handleClick}
        />
    );
};

export default MovieLinkSearch;

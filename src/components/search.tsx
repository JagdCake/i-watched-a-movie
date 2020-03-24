import { MovieLinkListProps } from './movie-list';

const normalizedValue: Function = (value: string): string => {
    const specialCharacters = /[|`|~|!|@|#|$|%|^|&|*|(|)|_|||+|\|\-|=|?|;|:|'|"|,|.|<|>|\{|\}|\[|\]|\\|\/]/g;
    const twoOrMoreSpaces = /\s{2,}/g;
    const nothing = '';
    const oneSpace = ' ';

    return value
        .trim()
        .toLowerCase()
        .replace(specialCharacters, nothing) // removing special characters can leave more than two spaces
        .replace(twoOrMoreSpaces, oneSpace);
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

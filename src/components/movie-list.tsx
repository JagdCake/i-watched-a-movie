import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';

export interface MovieSearchData {
    id: number;
    title: string;
    yearOfRelease: number;
}

interface MovieLinkListProps {
    displayStatus: boolean;
    movieData: MovieSearchData[];
}

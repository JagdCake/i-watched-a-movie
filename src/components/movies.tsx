import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { LinkUrl } from './header';

interface Movie {
    id: number;
    title: string;
    yearOfRelease: number;
    directors: [string];
    topActors: [string];
    myRating: string;
    watchedOn: string;
    discussion: LinkUrl;
    imdbId: string;
}

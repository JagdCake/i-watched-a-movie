import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { LinkUrl } from './header';

interface InfoCardProps {
    title: string;
    yearOfRelease: number;
    directors: [string];
    topActors: [string, string];
}

interface MiscMetadataProps {
    myRating: string;
    watchedOn: string;
    discussion: LinkUrl;
    imdbId: string;
}

interface MovieProps extends InfoCardProps, MiscMetadataProps {
    id: number;
}

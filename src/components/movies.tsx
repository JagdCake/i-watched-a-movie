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

const InfoCard: FunctionComponent<InfoCardProps> = ({
    title,
    yearOfRelease,
    directors,
    topActors,
}: InfoCardProps): ReactElement => {
    const listOfDirectors: ReactElement[] = directors.map((director, index) => {
        return <li key={index}>{director}</li>;
    });

    return (
        <>
            <div
                aria-label="Movie info card top part"
                className="border-b-2 border-black h-56 px-5 flex flex-wrap content-center"
            >
                <h1
                    aria-label="title"
                    className="text-2xl font-bold mb-2 w-full"
                >
                    {title}
                </h1>
                <h2 aria-label="release year" className="text-lg w-full">
                    {yearOfRelease}
                </h2>
            </div>

            <div
                aria-label="Movie info card bottom part"
                className="h-56 px-5 flex flex-wrap content-center"
            >
                <h1 className="text-sm w-full">Directed by</h1>
                <ul
                    aria-label="director(s)"
                    className="text-xl font-bold mb-2 w-full"
                >
                    {listOfDirectors}
                </ul>
                <h2 className="text-sm w-full">Starring</h2>
                <ul
                    aria-label="first two top actors"
                    className="text-xl font-bold w-full"
                >
                    <li>{topActors[0]}</li>
                    <li>{topActors[1]}</li>
                </ul>
            </div>
        </>
    );
};

interface MiscMetadataProps {
    myRating: string;
    watchedOn: string;
    discussion: LinkUrl;
    imdbId: string;
}

interface MovieProps extends InfoCardProps, MiscMetadataProps {
    id: number;
}

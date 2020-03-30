import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { LinkUrl } from './header';

interface InfoCardProps {
    title: string;
    yearOfRelease: number;
    directors: string[];
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

const MiscMetadata: FunctionComponent<MiscMetadataProps> = ({
    myRating,
    watchedOn,
    discussion,
    imdbId,
}: MiscMetadataProps): ReactElement => (
    <ul className="inline-block bg-red border border-black rounded-sm w-2/3 mt-2">
        <li aria-label="my rating" className="border-b border-black">
            {myRating}
        </li>
        <li aria-label="watched on date" className="border-b border-black">
            <time dateTime={watchedOn}>{watchedOn}</time>
        </li>
        <li
            aria-label="link to discussion / reviews"
            className="border-b border-black"
        >
            <a href={discussion} className="underline">
                Discussion
            </a>
        </li>
        <li aria-label="link to movie's IMDb page">
            <a
                href={`https://www.imdb.com/title/${imdbId}`}
                className="underline"
            >
                IMDb page
            </a>
        </li>
    </ul>
);

export interface MovieProps extends InfoCardProps, MiscMetadataProps {
    id: number;
}

const Movie: FunctionComponent<MovieProps> = (
    props: MovieProps
): ReactElement => {
    const movieId = props.id.toString();
    const anchorLink = window.location.hash;
    const movieIsSelected = anchorLink === `#${movieId}`;

    return (
        <>
            <div aria-label="Movie entry" id={movieId} className="m-6">
                <section
                    aria-label="Movie info card"
                    className={`
                        border border-red bg-white
                        ${movieIsSelected ? 'highlight' : ''}
                    `}
                >
                    <InfoCard
                        title={props.title}
                        yearOfRelease={props.yearOfRelease}
                        directors={props.directors}
                        topActors={props.topActors}
                    />
                </section>

                <section aria-label="Misc movie metadata" className="text-2xl">
                    <MiscMetadata
                        myRating={props.myRating}
                        watchedOn={props.watchedOn}
                        discussion={props.discussion}
                        imdbId={props.imdbId}
                    />
                </section>

                <div className="separator mt-6 h-px"></div>
            </div>
        </>
    );
};
export interface MovieTrioProp {
    movies: [MovieProps, MovieProps, MovieProps];
}

const MovieTrio: FunctionComponent<MovieTrioProp> = ({
    movies,
}: MovieTrioProp): ReactElement => {
    const threeMovies: ReactElement[] = movies.map((movie) => (
        <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            yearOfRelease={movie.yearOfRelease}
            directors={movie.directors}
            topActors={movie.topActors}
            myRating={movie.myRating}
            watchedOn={movie.watchedOn}
            discussion={movie.discussion}
            imdbId={movie.imdbId}
        />
    ));

    return (
        <>
            <article aria-label="Movie trio" className="text-center">
                {threeMovies}
                <div className="separator mt-6 h-px"></div>
            </article>
        </>
    );
};

export default MovieTrio;

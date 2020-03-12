import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MovieTrio from '../components/movies';
import { MovieProps } from '../components/movies';
import { MovieTrioProp } from '../components/movies';

export const query = graphql`
    query AllMovies($first: Int!, $offset: Int!) {
        postgres {
            allMoviesList(orderBy: ID_DESC, first: $first, offset: $offset) {
                id
                title
                yearOfRelease
                directors
                topActors
                myRating
                watchedOn
                imdbId
                discussion
            }
        }
    }
`;

interface MovieData {
    data: {
        postgres: {
            allMoviesList: [
                {
                    id: number;
                    title: string;
                    yearOfRelease: number;
                    directors: string;
                    topActors: string;
                    myRating: string;
                    watchedOn: string;
                    imdbId: string;
                    discussion: string;
                }
            ];
        };
    };
}

// Convert the directors and actors fields into arrays so they can be
// used by the MovieTrio component.
const movieList = (movieData: MovieData): MovieProps[] => {
    const movies = movieData.data.postgres.allMoviesList.map((movie) => {
        return {
            id: movie.id,
            title: movie.title,
            yearOfRelease: movie.yearOfRelease,
            directors: movie.directors.split(','),
            topActors: movie.topActors.split(',') as [string, string],
            myRating: movie.myRating,
            watchedOn: movie.watchedOn,
            imdbId: movie.imdbId,
            discussion: movie.discussion,
        };
    });

    return movies;
};

type RecursiveFunction = Function;

// Split the list of movies into a list of movie triples.
const moviesAsTrios: RecursiveFunction = (
    targetNumberOfTrios: number,
    movieList: MovieProps[],
    trios: MovieTrioProp[]
) => {
    const numberOfTrios = trios.length;

    if (targetNumberOfTrios === numberOfTrios) {
        return trios;
    }

    const [firstMovie, secondMovie, thirdMovie] = movieList.slice(0, 3);
    const movieTrio: MovieTrioProp = {
        movies: [firstMovie, secondMovie, thirdMovie],
    };

    const restOfMovies: MovieProps[] = movieList.slice(3);
    const movieTrios: MovieTrioProp[] = trios.concat(new Array(movieTrio));

    return moviesAsTrios(targetNumberOfTrios, restOfMovies, movieTrios);
};

const MovieTriosPage: FunctionComponent<MovieData> = ({
    data,
}: MovieData): ReactElement => {
    const movies: MovieProps[] = movieList({ data });
    const targetNumberOfTrios = Math.floor(movies.length / 3);
    const trios: MovieTrioProp[] = moviesAsTrios(
        targetNumberOfTrios,
        movies,
        []
    );

    const movieTrios: ReactElement[] = trios.map((trio, index) => {
        return <MovieTrio key={index} movies={trio.movies} />;
    });

    return (
        <Layout>
            <SEO title="Home" />
            {movieTrios}
        </Layout>
    );
};

export default MovieTriosPage;

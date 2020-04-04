import React from 'react';
import { FunctionComponent } from 'react';
import { ReactElement } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import MovieTrio from '../components/movies';
import { MovieProps } from '../components/movies';
import { MovieTrioProp } from '../components/movies';
import { PageNavProp } from '../components/footer';
import BackToTopLink from '../components/back-to-top-link';

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

interface MovieData extends PageNavProp {
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
    pageContext,
}: MovieData): ReactElement => {
    const movies: MovieProps[] = data.postgres.allMoviesList;
    const targetNumberOfTrios = Math.floor(movies.length / 3);
    const trios: MovieTrioProp[] = moviesAsTrios(
        targetNumberOfTrios,
        movies,
        []
    );

    const movieTrios: ReactElement[] = trios.map((trio, index) => {
        // insert a "back to top" link after each 9th movie
        if (index !== 0 && index % 3 === 0) {
            return (
                <>
                    <MovieTrio key={index} movies={trio.movies} />
                    <BackToTopLink
                        linkToTopOfWindow={`page/${pageContext.currentPage}`}
                    />
                </>
            );
        }

        return <MovieTrio key={index} movies={trio.movies} />;
    });

    return (
        <Layout pageContext={pageContext}>
            <SEO title={`Page ${pageContext.currentPage}`} />
            {movieTrios}
        </Layout>
    );
};

export default MovieTriosPage;

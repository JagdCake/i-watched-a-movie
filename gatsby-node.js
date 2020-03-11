require('ts-node').register({ files: true });

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(
        `
            {
                postgres {
                    allMoviesList(orderBy: ID_DESC) {
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
        `
    );

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    const movies = result.data.postgres.allMoviesList;
    const numberOfMovies = movies.length;
    const moviesPerPage = 48;
    const numPages = Math.ceil(numberOfMovies / moviesPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/page/1` : `/page/${i + 1}`,
            component: path.resolve('./src/templates/movie-list-template.tsx'),
            context: {
                first: moviesPerPage,
                offset: i * moviesPerPage,
                numPages,
                currentPage: i + 1,
            },
        });
    });

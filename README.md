## I watched a Movie!
[![Netlify Status](https://api.netlify.com/api/v1/badges/db2da6dc-f14e-42ed-86a8-751c485ff2c6/deploy-status)](https://app.netlify.com/sites/friendly-swartz-e20e0e/deploys)

Personal movie catalogue built using Gatsby.

- displays a paginated list of movie entries (consisting of an info card
  and metadata)
    - on large screens the entries are displayed in groups of three
    - movies are sourced from a PostgreSQL database using [gatsby-source-pg](https://github.com/graphile/gatsby-source-pg)
- has simple search functionality (filtering based on movie title)

### First Time Setup

1. Database
    - make sure you have PostgreSQL (version 10+) installed and running
    - download database dump from
      https://github.com/jagdcake/i-watched-a-movie/releases
    - create a database for the movies `psql -d [DATABASE USER] -c "create database [DATABASE NAME]"`
    - extract the database dump `tar -xavf database_dump.movies.tar.xz`
    - import the database dump `psql -U [DATABASE USER] -d [DATABASE NAME] < movies_dump`
    - open [gatsby-config.js](./gatsby-config.js) and update
      `connectionString: postgres:///[DATABASE NAME FROM ABOVE]` in the
      `gatsby-source-pg` options

1. Install dependencies
    - `npm install` / `yarn install`

1. Start the development server
    - `npm run develop` / `yarn run develop`
    - the site will be running at `http://localhost:8000`

1. Generate static files to get ready for deployment
    - `npm run build` / `yarn run build`

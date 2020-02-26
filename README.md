<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h2 align="center">
  Gatsby's default starter, but with TypeScript and Tailwind CSS support
</h2>

This starter uses Gatsby's default starter as a base and adds support
for [TypeScript](https://www.typescriptlang.org/) and [Tailwind
CSS](https://tailwindcss.com/) on top.

-   there are 13 new dependencies
    -   [typescript](https://www.npmjs.com/package/typescript)
    -   [ts-node](https://www.npmjs.com/package/ts-node)
    -   [gatsby-plugin-typescript](https://www.npmjs.com/package/gatsby-plugin-typescript)
    -   [@types/react-helmet](https://www.npmjs.com/package/@types/react-helmet)
    -   [tailwindcss](https://www.npmjs.com/package/tailwindcss)
    -   [gatsby-plugin-postcss](https://www.npmjs.com/package/gatsby-plugin-postcss)
    -   [eslint](https://www.npmjs.com/package/eslint)
    -   [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
    -   [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
    -   [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
    -   [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
    -   [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
    -   [gatsby-plugin-purgecss](https://www.npmjs.com/package/gatsby-plugin-purgecss)
-   the files in [src/components/](./src/components/) and
    [src/pages/](./src/pages/) have been updated with TypeScript support
-   the default Gatsby CSS file (layout.css) has been deleted; you'll find
    [src/components/main.css](./src/components/main.css) in its place

## 🚀 Quick start

1. **Choose starter version.**

    - TypeScript + Tailwind CSS: move on to step 2
    - TypeScript support only: follow the steps from [branch typescript](https://github.com/JagdCake/gatsby-typescript-tailwind-starter/tree/typescript#-quick-start)

1. **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using gatsby-typescript-tailwind-starter
    gatsby new my-tswind-starter https://github.com/jagdcake/gatsby-typescript-tailwind-starter
    ```

1. **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-tswind-starter/
    gatsby develop
    ```

1. **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-tswind-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This starter is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JagdCake/gatsby-typescript-tailwind-starter)

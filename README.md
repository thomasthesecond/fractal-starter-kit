# fractal-starter-kit

A web style guide starter kit using Fractal

### Requirements

#### Node.js

[Fractal](http://fractal.build/), and therefore this project, requires Node.js v4.4.7+ to run. While you can install Node a variety of ways, we highly recommend using [Node Version Manager](https://github.com/creationix/nvm) to install and manage Node versions.

#### Yarn

[Yarn](https://yarnpkg.com/en/) is a package manager for Node.js. Yarn is preferred over [npm](https://www.npmjs.com/) because it’s faster. However, if npm is already installed or you prefer it to Yarn, then `yarn` scripts can be replaced with `npm`.

https://yarnpkg.com/en/docs/install

### Getting started

Once you’ve installed Node and Yarn, you’re ready to install the project’s dependencies. To do that, run simply run `yarn` (or `npm install`).

To run the project and develop locally, run  `yarn start`. This will start Fractal and run a local development server at the address displayed by Fractal in your terminal window, usually the address is http://localhost:3000/.

You will also need to start webpack to watch and compile changes to the assets. In a separate console window, run `yarn run assets`. This command starts webpack with the `--watch` flag.

Now you may open http://localhost:3000/ in a web browser and begin developing.

### Commands

All commands should be run through `yarn run`.

| Command | Description |
| ------- | ----------- |
| `start`| Starts Fractal and the local development server |
| `assets`| Watches and compiles JS and CSS assets with webpack |
| `build`| Builds and compiles production-ready files |
| `clean`| Deletes the build directories `tmp` and `www`; used within the `build` script |
| `eslint`| Lints JavaScript files with ESLint |
| `stylelint`| Lints CSS files with stylelint |
| `lint`| Runs both `eslint` and `stylelint` scripts at once |
| `gh-pages`| Builds and deploys the project to Github pages |

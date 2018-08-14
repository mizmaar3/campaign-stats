# Campaign Statistics

> Test project

Small app to view statistics of campaign offers and add them into the store. Codebase consist of [ES6](https://babeljs.io/docs/learn-es2015/) script with [ReastJs](https://facebook.github.io/react/) components and [Less](http://lesscss.org/) css preprocessor styles.

- [Browserify](http://browserify.org/) is used to `bundle` the Project.

- [Redux](http://redux.js.org/) is used to store records and update item view in structured way.

- Bundling done with simple commands using [Gulp](http://gulpjs.com/) which is famous build system to automate build process.


## Install

First, clone the repo via git:

```bash
git clone https://github.com/mizmaar3/campaign-stats your-folder-name
```

And then install dependencies.

```bash
$ cd your-folder-name && npm install
```


## Build

Run this command to build and bundle the project.

```bash
$ npm start
```

It will open index.html into your default browser


To get minified+uglified version of bundle.js please run

```bash
$ npm run release


## Brief Code Explanation

#### The JS folder

- It contains all views and redux store files.


#### The common-ui

- It contains the only used input custom component to create radio buttons.


#### The LESS folder

- Less folder contains `.less` files which will be compiled with `gulp-less` and concatenated into single file `style.css`, can be found in `dist` folder after building project.

#### The Data folder

- Data folder contains dummy data for this app. It is used to show data on app load


## TODO

- Data should be stored in `database` and there needs to be an API to fetch data

- Item-view needs to have `pagination`

- Input field validation needs to be more visible and more structured

- 1999's JS Confirm popup when you click `delete` button needs modernization

- Unit tests and test automation needed to be implemented

- Of course UI needs improvements

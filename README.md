# brewdog-beer

Web app to display beers from https://punkapi.com/documentation/v2

## Usage

[TODO]

## Architecture

## Notes

- "Methods" were always referred in plural, however in the API data the field is singular and an object type rather an array. The app also works when the field is an array but it adds complexity and it's confusing.

- You can see a lot of devDependencies but they are all related to ejecting a create-react-app. I have written many Webpack configurations from scratch but it's not worth my time here.

- Libraries used in development:

  - `node-sass` and `sass-loader` for SASS support
  - `babel-plugin-module-resolver`for babel aliases
  - `plop` for code generation
  - `prettier` for auto formatting

- Libraries used:

  - `axios`: HTTP requests simplified and promises
  - `immutable`: easier JSON state manipulation
  - `uuid`: to have unique keys easily for loops

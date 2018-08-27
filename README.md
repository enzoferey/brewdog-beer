# brewdog-beer

Web app to display beers from https://punkapi.com/documentation/v2

## Usage

[TODO]

## Architecture

## Notes

- "Methods" were always referred in plural, however in the API data the field is singular and an object type rather an array. The app also works when the field is an array but it adds complexity and it's confusing.

- You can see a lot of devDependencies but they are all related to ejecting a create-react-app except `node-sass`, `sass-loader`, `plop`, `prettier`, first 2 for supporting SASS and former 2 for improved dev experience. I have written many Webpack configurations from scratch but it's not worth my time here.

- Libraries used:

  - `axios`: HTTP requests simplified and promises
  - `immutable`: easier JSON state manipulation
  - `uuid`: to have unique keys easily for loops

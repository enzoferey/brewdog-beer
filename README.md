# brewdog-beer

Web app to display beers from https://punkapi.com/documentation/v2

## Usage

[TODO]

## Architecture choices

- Given the simplicity of the app, the Route files holds the app state like a Redux store would do. If the app grows in the future Context API can be used to avoid prop drillings and I'm a believer that Redux should only be used when it makes sense.

- The app always asks for the whole beer endpoint, even when a beer page is loaded directly so it doesn't need all the data at first. The good thing about it is that user won't have wait time any more in the future. The bad thing is that depending on the number of items expected it can add an additional wait time upfront. This could be discussed with the product team to match their expectations.

## Notes

- "Methods" were always referred in plural, however in the API data the field is singular and an object type rather an array. The app also works when the field is an array but it adds complexity and it's confusing.

- The methods duration don't have a time unit, I assumed seconds.

- You can see a lot of devDependencies but they are all related to ejecting a create-react-app. I have written many Webpack configurations from scratch but it's not worth my time here.

- Libraries used in development:

  - `node-sass` and `sass-loader` for SASS support
  - `babel-plugin-module-resolver`for babel aliases
  - `plop` for code generation
  - `prettier` for auto formatting

- Libraries used:

  - `axios`: HTTP requests simplified and promises
  - `immutable`: easier state manipulation

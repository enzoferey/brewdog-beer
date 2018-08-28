# brewdog-beer

Web app to display beers from https://punkapi.com/documentation/v2

## Usage

The app is uploaded at [https://wonderful-banach-b79042.netlify.com/](https://wonderful-banach-b79042.netlify.com/).

### How to run locally

1. Clone the repository
2. Run `npm start`
3. The browser should open pointing to [localhost:3000](http://locahost:3000)

### Test

1. Clone the repository
2. Run `npm run test`
3. All details of the run will be displayed as well as the coverage

## Architecture choices

- Given the simplicity of the app, the Route files holds the app state like a Redux store would do. If the app grows in the future Context API can be used to avoid prop drillings and I'm a believer that Redux should only be used when it makes sense.

- The app always asks for the whole beer endpoint, even when a beer page is loaded directly so it doesn't need all the data at first. The good thing about it is that user won't have wait time any more in the future. The bad thing is that depending on the number of items expected it can add an additional wait time upfront. This could be discussed with the product team to match their expectations.

## Notes

- "Methods" were always referred in plural, however in the API data the field is singular and an object type rather an array. The app also works when the field is an array but it adds complexity and it's confusing.

- The methods duration don't have a time unit, I assumed seconds.

- The task to be done with Hops, Malts and Methods was labelled "Add" as I'm not sure what the proper word should be.

- You can see a lot of devDependencies but they are all related to ejecting a create-react-app. I have written many Webpack configurations from scratch but it's not worth my time here.

- Libraries used in development:

  - `node-sass` and `sass-loader` for SASS support
  - `babel-plugin-module-resolver`for babel aliases
  - `plop` for code generation
  - `prettier` for auto formatting
  - `enzyme`, `enzyme-adapter-react-16`, `enzyme-react-16-adapter-setup` and `jest-enzyme` for Enzyme support in Jest

- Libraries used:

  - `axios`: HTTP requests simplified and promises
  - `immutable`: easier state manipulation

- This code test was done in under 20 hours.

<img alt="Npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" /> <img alt="React" src="https://img.shields.io/badge/-React-1572B6?style=flat-square&logo=react&logoColor=white" /> <img alt="ESLint" src="https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" /> <img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" />

# A quick start Redux + React-Router Create React App template configured with Prettier and EsLint Airbnb style

An opinionated quick start [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with configured **Redux**, **React Router**, **Prettier** and custom **ESlint** configuration.

Original Create React App README available [here](./README_CRA.md)

## Usage

```bash
npx create-react-app your-project-name --template azwell-js-redux
```

Or

```bash
yarn create react-app your-project-name --template azwell-js-redux
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

## Purpose

I've been struggling since the beginning of my developer journey to have things I use the most already configured on a new project.
React-Router, Redux, Eslint config, Prettier etc can be so long to configure that's why I've created this template, feel free to use it and ask for any questions.

## Available Scripts

In the project directory, you can run:

- `npm start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run test` - launches the test runner in the interactive watch mode.

- `npm run build` - builds the app for production to the `build` folder.

**Husky pre-commit** has been added to this project so that you can check for eslint error before commit and can't commit unless you have 0 warnings in your code.

Due to CRA template limitations (we can change only `scripts` and `dependencies` inside generated `package.json`) all configuration is done by adding config files where possible. Also no `devDependencies` for now, sorry.

## [Prettier](https://prettier.io/)

I added `prettier` to force consistent formatting. Don't like trailing semicolons? Feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside `.prettierrc` file to match your code style.

## Eslint configurations

The template extends CRA ESLint rules with a custom set, tailored for the reasonable and clean development process.

Eslint rules are commented for your convenience feel free to tweak or remove them inside `.eslintrc`. No judgment.

## Testing template locally

To test the output of your template locally run

```bash
npx create-react-app my-app --template file:/\path\to\file
```

## Thank you

I hope this template will be helpful for you !

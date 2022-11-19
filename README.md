# Styling React

## CSS stylesheets

In the `index.css`

- Change the default colour for all link elements
- Use a pseudo class to change the default visited colour for all links
- Create a 'css reset' that will:
  - set the default margin to 0 for all elements
  - set the default padding to 0 for all elements
  - and set the [box-sizing](https://www.w3schools.com/css/css3_box-sizing.asp) for all elements to "border-box"

<br />

## Inline styling

In the `App.js`

- Add an inline style to centre the title (h1)

In the Home folder

- Create a javascript file called `HomeStyles.js`
- In this file create and export an object called HomeStyles
  - name the keys of this object should after the element you'd like to style in `Home.js`
  - and the values should be inline style objects (take a look at the slides for reference)
- import this file into `Home.js`
- apply your inline styles to the relevant jsx elements

<br />

## Styled components

- Install styled components: `npm i styled-components`
- Import styled components into your Navigation.js file: `import styled from 'styled-components';`
- In the navigation component [use styled components](https://styled-components.com/docs/basics#getting-started) to
  - Style the container (i.e. `<ul>` element)
  - Style each link in your nav differently (how you can [extend styles](https://styled-components.com/docs/basics#extending-styles) may prove useful here)

<br />

## CSS Modules

Remember to use the lecture slides for reference

- Create an about css module in the About folder
- Create some style declarations for the About component
- Import your styles into the About component
- Apply styling to the relevant jsx elements for the styles you've created

Extension:

- Create a media query and/or css transition for the react logo

<br />

## Contact Us Page

- Choose your favourite styling approach and practice!

<br />
<br />
<hr />
<br />
<br />

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

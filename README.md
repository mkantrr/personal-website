# Personal Website

[![Screenshot](/public/social-image.png?raw=true)](https://matutu.dev)

[![Website matutu.dev](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://matutu.dev)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/mkantrr/personal-website/blob/master/LICENSE)

My personal website source code. View it at [matutu.dev](https://matutu.dev)

-   built using [React](https://reactjs.org/)
-   bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
-   styled with [Material-UI](https://material-ui.com/)
-   hosted at [matutu.dev](https://matutu.dev)

Kudos to [Cody Bennett](https://github.com/CodyJasonBennett) and [Jolein Hoop](https://github.com/JoHoop) for the inspiration. And of course my good friend [Eric Knocklein](https://github.com/EricKnocklein/) for his generous help with resuable card components.

## Features

-   Most, if not all of the personal information is populated from the [`resume.json`](https://github.com/mkantrr/personal-website/blob/master/src/settings/resume.json) file following the [JSON Resume](https://jsonresume.org/) standard (to a point), a community driven open source initiative to create a JSON based standard for resumes. Discover the official schema [here](https://jsonresume.org/schema/).
-   The toggle/switch for the dark mode syncs its state to the browser's local storage.

## Customization

Feel free to fork this project and customize it with your own information and style.

Refer to the [Material UI docs](https://material-ui.com/customization/theming/) for guidance on how to quickly customize the themes, components and colors to suit your tastes. Specifically for the background graphic of the displacement sphere, you have to do a bit of trial and error if you want a specific color.

To start you off, there are plenty of in-line and Material UI `makeStyles()` stylings on components that you can edit at your own whim for your own formatting.

## Available Scripts

In the project directory, you can run:

### `npm install`

to install the dependencies.

### `npm start`

to run the app in the development mode at [http://localhost:3000](http://localhost:3000)<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed! Simply copy the contents of your `build` folder to your public/Internet facing folder on your website server.

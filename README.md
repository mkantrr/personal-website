![Screenshot of web app](https://api.apiflash.com/v1/urltoimage?access_key=735a6940920248499214aa2dbd812a6a&delay=6&format=png&height=800&url=https%3A%2F%2Fjohoop.vercel.app&width=1100)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fjohoop%2Fpersonal-website-react&c=1)

# Personal Website React

[![Website johoop.vercel.app](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://johoop.vercel.app)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/JoHoop/personal-website-react/blob/master/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/JoHoop/personal-website-react.svg)](https://github.com/JoHoop/personal-website-react/graphs/contributors/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/JoHoop/personal-website-react/graphs/commit-activity)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

A clean, responsive, single-page webapp template for developers. View demo at [johoop.vercel.app](https://johoop.vercel.app)

-   built using [React](https://reactjs.org/)
-   bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
-   styled with [Material-UI](https://material-ui.com/)
-   deployed with [Vercel](https://vercel.com) and hosted at [johoop.vercel.app](https://johoop.vercel.app)
-   screenshot by [ApiFlash](https://apiflash.com)
 
Kudos to [José Coelho](https://github.com/jcoelho93/personal-website) and [Brittany Chiang](https://github.com/bchiang7/bchiang7.github.io) for the inspiration.

## Features

-   All of the personal information is populated from the resume.json file following the [JSON Resume](https://jsonresume.org/) standard, a community driven open source initiative to create a JSON based standard for resumes. Discover the official schema [here](https://jsonresume.org/schema/).
-   The toggle/switch for the dark mode syncs its state to the local storage.

#### Coming soon

-   Two beautiful resume page templates generated based on the data in the resume.json file -- a modern approach of the traditional printed CV.
-   Rich Google search results using structured data with [json-ld.org/](https://json-ld.org/).

## Customization

Feel free to fork this project and customize it with your own information and style.

Refer to the [Material UI docs](https://material-ui.com/customization/theming/) for guidance on how to quickly customize the themes, components and colors to suit your tastes.

If you improve the app in any way a pull request would be very much appreciated ✌️

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
Your app is ready to be deployed!


<!--
@license
Copyright 2018 The Lighthouse Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
  <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEhklEQVR4AWJxL/BhIAesev1U5tcflpncgNrKIsqNIwzC9feMpDUzs70kOczMzMzJJcxwCTMzncPMnOwtzBwzMzPb0vRfeZPp0VhPS5I39V5fdiXV1/VD+9QC7OVn9BsyH1XIoEI1PfmJvLFowVV564+34DFUHudbmfDh4kVXh//7XwE+WjS/YfXZe3yr4j2rqj1AIhSB7hZ8ZtPZu/zw8cK523U4wE1/rvPfWrz4zs0m9ZdC9yUJAlASdBAgocRegfF/f3/h/PuaFsxMdwjAR0vm1+06eMMfIrhLqTWqdH4EumU2SPfMhigJAlRQbZrgrRsl9U+Y2DYDFCz3ILC9kiAiqSrMwbWT0nceEnR+9Kggc2zjOJCASDENkg0a5HfZZgDP81CM3CrQs2Z1+o7DJ6ePr8sK0AOCHv5Jjdt3evyYSaZ351VIStIxPRAUtrBYbxC6w+BZ0ivVSBKkIhJhemSyZpfB00EiPO2VjzYkxhcqXQqCWCShGplvi3y0QxqbuBurMjyJeWnkHZuAEgIQGsUBqwrfjZ+IlBgKyRJzVVYF8O6qFWdh86YzQzMrZigYmxAyfvHgLZQ/LC1CbeniW2Hkqr/PH16SgvGuf2/uzNMBwJA/njxizGPtSyAf7EziJCMGRDRdhoAC4PL1A/SrKQMAAQkEfpJAcRQdrBJ7gNwjSpJsdwK+CANBkqa1LgQB4IicV9nYUct7gaxuDJUErQIiEAiMxLVOFlKzIktPpT0ggpdpC/8YAHnxbgkUY4tAAFSR7AAXNyAAWHJrA/kHGjzg5nleuwFO7Nd/IoDw4Pm58+4jNLmYG0wRA5bErc2Mr3Y+dXTDW1VvwqbJkzMCHQ4S1GTCBOIgUHJrGdEwqzR+jAp/o2qAZelUDoQnruEEdDclJI6576AlNVfc+22XN/+Y1vnJD0Yind6UpEEvn/Hqq15EYjCW7jZCJEpnNvDgkyelDjs106kuux2AAXCSobULOWP8mLhYlpoDMK4qAFXJGk+grtH8YXVz5KJblqaG1+VUdTc0I290bmUQAriGITRbdQnom0aoFj8kx1+wMD2ifncAXUQE4SkDqN1hE0jEophs1SUwZAOhUAiMCLwRtamtTZtbbmZErSAUHbSysaoEmnrsakiMiUAURi283gN6wans9oX8rOCrj7/JP35DFD+iQ7Au/K2KE1jzx6ujjUnXFH9KjEq6ZlhsTBICrNLJf47Pv/pkHzvup1w4dmUbEei0+bcXRqJuh5kVARQ8byyYxOwNGr7A87xh1tp8sGT+uMInrwi++Xj7TQz2d27NvwEkrOflAFQGIDA5khASBCGdO2/Z/MnLPwYfv5TFhjW7QhVKAB6afwe2LpFlFsCnlQEosgQgDsdOG1/LKeNqJS4JCSPJ/i+TakwEARor7gER1Iva5JmPOJK0RUqmoPnnlzFCtmIAhAAQEIQRgDaiYPIauNXcnDlRIrWNFY3hm7PG9YRqr7IV7HrCgAC17befjEvRq2nGhAHtBqDpOuI/I1diUUAMYIxEdyejBJqLnNoszGZtfiX/CztGv2mq+sdaAAAAAElFTkSuQmCC">
  <title>Lighthouse Report</title>
  <style>/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
  Naming convention:

  If a variable is used for a specific component: --{component}-{property name}-{modifier}

  Both {component} and {property name} should be kebab-case. If the target is the entire page,
  use 'report' for the component. The property name should not be abbreviated. Use the
  property name the variable is intended for - if it's used for multiple, a common descriptor
  is fine (ex: 'size' for a variable applied to 'width' and 'height'). If a variable is shared
  across multiple components, either create more variables or just drop the "{component}-"
  part of the name. Append any modifiers at the end (ex: 'big', 'dark').

  For colors: --color-{hue}-{intensity}

  {intensity} is the Material Design tag - 700, A700, etc.
*/
.lh-vars {
  /* Palette using Material Design Colors
   * https://www.materialui.co/colors */
  --color-amber-50: #FFF8E1;
  --color-blue-200: #90CAF9;
  --color-blue-900: #0D47A1;
  --color-blue-A700: #2962FF;
  --color-cyan-500: #00BCD4;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-50: #FAFAFA;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;
  --color-gray: #000000;
  --color-green-700: #018642;
  --color-green: #0CCE6B;
  --color-orange-50: #FFF3E0;
  --color-orange-700: #D04900;
  --color-orange: #FFA400;
  --color-red-700: #EB0F00;
  --color-red: #FF4E42;
  --color-teal-600: #00897B;
  --color-white: #FFFFFF;

  /* Context-specific colors */
  --color-average-secondary: var(--color-orange-700);
  --color-average: var(--color-orange);
  --color-fail-secondary: var(--color-red-700);
  --color-fail: var(--color-red);
  --color-hover: var(--color-gray-50);
  --color-informative: var(--color-blue-900);
  --color-pass-secondary: var(--color-green-700);
  --color-pass: var(--color-green);

  /* Component variables */
  --audit-description-padding-left: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right));
  --audit-explanation-line-height: 16px;
  --audit-group-margin-bottom: 40px;
  --audit-group-padding-vertical: 8px;
  --audit-margin-horizontal: 5px;
  --audit-padding-vertical: 8px;
  --category-header-font-size: 20px;
  --category-padding: 40px;
  --chevron-line-stroke: var(--color-gray-600);
  --chevron-size: 12px;
  --default-padding: 12px;
  --env-item-background-color: var(--color-gray-100);
  --env-item-font-size: 28px;
  --env-item-line-height: 36px;
  --env-item-padding: 10px 0px;
  --env-name-min-width: 220px;
  --footer-padding-vertical: 16px;
  --gauge-circle-size-big: 112px;
  --gauge-circle-size: 80px;
  --gauge-label-font-size-big: 28px;
  --gauge-label-font-size: 20px;
  --gauge-label-line-height-big: 36px;
  --gauge-label-line-height: 26px;
  --gauge-percentage-font-size-big: 38px;
  --gauge-percentage-font-size: 28px;
  --gauge-wrapper-width: 148px;
  --header-line-height: 24px;
  --highlighter-background-color: var(--report-text-color);
  --icon-square-size: calc(var(--score-icon-size) * 0.88);
  --image-preview-size: 48px;
  --metric-toggle-lines-fill: #7F7F7F;
  --metrics-toggle-background-color: var(--color-gray-200);
  --plugin-badge-background-color: var(--color-white);
  --plugin-badge-size-big: calc(var(--gauge-circle-size-big) / 2.7);
  --plugin-badge-size: calc(var(--gauge-circle-size) / 2.7);
  --plugin-icon-size: 65%;
  --pwa-icon-margin: 0 6px 0 -2px;
  --pwa-icon-size: var(--topbar-logo-size);
  --report-background-color: #fff;
  --report-border-color-secondary: #ebebeb;
  --report-font-family-monospace: 'Roboto Mono', 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
  --report-font-family: Roboto, Helvetica, Arial, sans-serif;
  --report-font-size: 16px;
  --report-monospace-font-size: calc(var(--report-font-size) * 0.85);
  --report-line-height: 24px;
  --report-min-width: 400px;
  --report-text-color-secondary: var(--color-gray-800);
  --report-text-color: var(--color-gray-900);
  --report-width: calc(60 * var(--report-font-size));
  --score-container-padding: 8px;
  --score-icon-background-size: 24px;
  --score-icon-margin-left: 4px;
  --score-icon-margin-right: 12px;
  --score-icon-margin: 0 var(--score-icon-margin-right) 0 var(--score-icon-margin-left);
  --score-icon-size: 12px;
  --scores-container-padding: 20px 0 20px 0;
  --scorescale-height: 6px;
  --scorescale-width: 18px;
  --section-padding-vertical: 12px;
  --snippet-background-color: var(--color-gray-50);
  --snippet-color: #0938C2;
  --sparkline-height: 5px;
  --stackpack-padding-horizontal: 10px;
  --sticky-header-background-color: var(--report-background-color);
  --table-higlight-background-color: hsla(0, 0%, 75%, 0.1);
  --tools-icon-color: var(--color-gray-600);
  --tools-icon-size: var(--score-icon-background-size);
  --topbar-background-color: var(--color-gray-100);
  --topbar-height: 32px;
  --topbar-logo-size: 24px;
  --topbar-padding: 0 8px;
  --toplevel-warning-background-color: var(--color-orange-50);
  --toplevel-warning-message-text-color: #BD4200;
  --toplevel-warning-padding: 18px;
  --toplevel-warning-text-color: var(--report-text-color);

  /* SVGs */
  --plugin-icon-url-dark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>');
  --plugin-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23757575"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>');

  --pass-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>check</title><path fill="%23178239" d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/></svg>');
  --average-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>info</title><path fill="%23E67700" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z"/></svg>');
  --fail-icon-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>warn</title><path fill="%23C7221F" d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"/></svg>');

  --pwa-fast-reliable-gray-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="%23DAE0E3" cx="12" cy="12" r="12"/><path d="M12.3 4l6.3 2.8V11c0 3.88-2.69 7.52-6.3 8.4C8.69 18.52 6 14.89 6 11V6.8L12.3 4zm-.56 12.88l3.3-5.79.04-.08c.05-.1.01-.29-.26-.29h-1.96l.56-3.92h-.56L9.6 12.52c0 .03.07-.12-.03.07-.11.2-.12.37.2.37h1.97l-.56 3.92h.56z" fill="%23FFF"/></g></svg>');
  --pwa-installable-gray-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="%23DAE0E3" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>');
  --pwa-optimized-gray-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%23DAE0E3" width="24" height="24" rx="12"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/><path d="M5 5h14v14H5z"/></g></svg>');

  --pwa-fast-reliable-gray-url-dark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="%23424242" cx="12" cy="12" r="12"/><path d="M12.3 4l6.3 2.8V11c0 3.88-2.69 7.52-6.3 8.4C8.69 18.52 6 14.89 6 11V6.8L12.3 4zm-.56 12.88l3.3-5.79.04-.08c.05-.1.01-.29-.26-.29h-1.96l.56-3.92h-.56L9.6 12.52c0 .03.07-.12-.03.07-.11.2-.12.37.2.37h1.97l-.56 3.92h.56z" fill="%23FFF"/></g></svg>');
  --pwa-installable-gray-url-dark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="nonzero"><circle fill="%23424242" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>');
  --pwa-optimized-gray-url-dark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%23424242" width="24" height="24" rx="12"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/><path d="M5 5h14v14H5z"/></g></svg>');

  --pwa-fast-reliable-color-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><circle fill="%230CCE6B" cx="12" cy="12" r="12"/><path d="M12 4.3l6.3 2.8v4.2c0 3.88-2.69 7.52-6.3 8.4-3.61-.88-6.3-4.51-6.3-8.4V7.1L12 4.3zm-.56 12.88l3.3-5.79.04-.08c.05-.1.01-.29-.26-.29h-1.96l.56-3.92h-.56L9.3 12.82c0 .03.07-.12-.03.07-.11.2-.12.37.2.37h1.97l-.56 3.92h.56z" fill="%23FFF"/></g></svg>');
  --pwa-installable-color-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="none"><circle fill="%230CCE6B" cx="12" cy="12" r="12"/><path d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm3.5 7.7h-2.8v2.8h-1.4v-2.8H8.5v-1.4h2.8V8.5h1.4v2.8h2.8v1.4z" fill="%23FFF"/></g></svg>');
  --pwa-optimized-color-url: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="%230CCE6B" width="24" height="24" rx="12"/><path d="M5 5h14v14H5z"/><path fill="%23FFF" d="M12 15.07l3.6 2.18-.95-4.1 3.18-2.76-4.2-.36L12 6.17l-1.64 3.86-4.2.36 3.2 2.76-.96 4.1z"/></g></svg>');
}

@media not print {
  .lh-vars.dark {
    /* Pallete */
    --color-gray-200: var(--color-gray-800);
    --color-gray-400: var(--color-gray-600);
    --color-gray-700: var(--color-gray-400);
    --color-gray-50: #757575;
    --color-gray-600: var(--color-gray-500);
    --color-green-700: var(--color-green);
    --color-orange-700: var(--color-orange);
    --color-red-700: var(--color-red);
    --color-teal-600: var(--color-cyan-500);

    /* Context-specific colors */
    --color-hover: rgba(0, 0, 0, 0.2);
    --color-informative: var(--color-blue-200);

    /* Component variables */
    --env-item-background-color: var(--color-gray);
    --plugin-badge-background-color: var(--color-gray-800);
    --report-background-color: var(--color-gray-900);
    --report-border-color-secondary: var(--color-gray-200);
    --report-text-color-secondary: var(--color-gray-400);
    --report-text-color: var(--color-gray-100);
    --snippet-color: var(--color-cyan-500);
    --topbar-background-color: var(--color-gray);
  	--toplevel-warning-background-color: #544B40;
  	--toplevel-warning-message-text-color: var(--color-orange-700);
	--toplevel-warning-text-color: var(--color-gray-100);

    /* SVGs */
    --plugin-icon-url: var(--plugin-icon-url-dark);
    --pwa-fast-reliable-gray-url: var(--pwa-fast-reliable-gray-url-dark);
    --pwa-installable-gray-url: var(--pwa-installable-gray-url-dark);
    --pwa-optimized-gray-url: var(--pwa-optimized-gray-url-dark);
  }
}

@media only screen and (max-width: 480px) {
  .lh-vars {
    --audit-group-margin-bottom: 20px;
    --category-padding: 24px;
    --env-name-min-width: 120px;
    --gauge-circle-size-big: 96px;
    --gauge-circle-size: 72px;
    --gauge-label-font-size-big: 22px;
    --gauge-label-font-size: 14px;
    --gauge-label-line-height-big: 26px;
    --gauge-label-line-height: 20px;
    --gauge-percentage-font-size-big: 34px;
    --gauge-percentage-font-size: 26px;
    --gauge-wrapper-width: 112px;
    --header-padding: 16px 0 16px 0;
    --image-preview-size: 24px;
    --plugin-icon-size: 75%;
    --pwa-icon-margin: 0 7px 0 -3px;
    --report-font-size: 14px;
    --report-line-height: 20px;
    --score-icon-margin-left: 2px;
    --score-icon-size: 10px;
    --topbar-height: 28px;
    --topbar-logo-size: 20px;
  }

  /* Not enough space to adequately show the relative savings bars. */
  .lh-sparkline {
    display: none;
  }
}

.lh-vars.lh-devtools {
  --audit-explanation-line-height: 14px;
  --audit-group-margin-bottom: 20px;
  --audit-group-padding-vertical: 12px;
  --audit-padding-vertical: 4px;
  --category-header-font-size: 16px;
  --category-padding: 12px;
  --default-padding: 12px;
  --env-name-min-width: 120px;
  --footer-padding-vertical: 8px;
  --gauge-circle-size-big: 72px;
  --gauge-circle-size: 64px;
  --gauge-label-font-size-big: 22px;
  --gauge-label-font-size: 14px;
  --gauge-label-line-height-big: 26px;
  --gauge-label-line-height: 20px;
  --gauge-percentage-font-size-big: 34px;
  --gauge-percentage-font-size: 26px;
  --gauge-wrapper-width: 97px;
  --header-line-height: 20px;
  --header-padding: 16px 0 16px 0;
  --plugin-icon-size: 75%;
  --pwa-icon-margin: 0 7px 0 -3px;
  --report-font-family-monospace: 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace;
  --report-font-family: '.SFNSDisplay-Regular', 'Helvetica Neue', 'Lucida Grande', sans-serif;
  --report-font-size: 12px;
  --report-line-height: 20px;
  --score-icon-margin-left: 2px;
  --score-icon-size: 10px;
  --section-padding-vertical: 8px;
}

.lh-devtools.lh-root {
  height: 100%;
}
.lh-devtools.lh-root img {
  /* Override devtools default 'min-width: 0' so svg without size in a flexbox isn't collapsed. */
  min-width: auto;
}
.lh-devtools .lh-container {
  overflow-y: scroll;
  height: calc(100% - var(--topbar-height));
}
@media print {
  .lh-devtools .lh-container {
    overflow: unset;
  }
}
.lh-devtools .lh-sticky-header {
  /* This is normally the height of the topbar, but we want it to stick to the top of our scroll container .lh-container` */
  top: 0;
}

@keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 0.6;}
}

.lh-root *, .lh-root *::before, .lh-root *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

.lh-root {
  font-family: var(--report-font-family);
  font-size: var(--report-font-size);
  margin: 0;
  line-height: var(--report-line-height);
  background: var(--report-background-color);
  scroll-behavior: smooth;
  color: var(--report-text-color);
}

.lh-root :focus {
    outline: -webkit-focus-ring-color auto 3px;
}
.lh-root summary:focus {
    outline: none;
    box-shadow: 0 0 0 1px hsl(217, 89%, 61%);
}

.lh-root [hidden] {
  display: none !important;
}

.lh-root pre {
  margin: 0;
}

.lh-root details > summary {
  cursor: pointer;
}

.lh-container {
  /*
  Text wrapping in the report is so much FUN!
  We have a `word-break: break-word;` globally here to prevent a few common scenarios, namely
  long non-breakable text (usually URLs) found in:
    1. The footer
    2. .lh-node (outerHTML)
    3. .lh-code

  With that sorted, the next challenge is appropriate column sizing and text wrapping inside our
  .lh-details tables. Even more fun.
    * We don't want table headers ("Potential Savings (ms)") to wrap or their column values, but
    we'd be happy for the URL column to wrap if the URLs are particularly long.
    * We want the narrow columns to remain narrow, providing the most column width for URL
    * We don't want the table to extend past 100% width.
    * Long URLs in the URL column can wrap. Util.getURLDisplayName maxes them out at 64 characters,
      but they do not get any overflow:ellipsis treatment.
  */
  word-break: break-word;
}

.lh-audit-group a,
.lh-category-header__description a,
.lh-audit__description a,
.lh-footer a,
.lh-table-column--link a {
  color: var(--color-informative);
}

.lh-audit__description, .lh-audit__stackpack {
  --inner-audit-padding-right: var(--stackpack-padding-horizontal);
  padding-left: var(--audit-description-padding-left);
  padding-right: var(--inner-audit-padding-right);
  padding-top: 8px;
  padding-bottom: 8px;
}

.lh-details {
  font-size: var(--report-font-size);
  margin-top: var(--default-padding);
  margin-bottom: var(--default-padding);
  margin-left: var(--audit-description-padding-left);
  /* whatever the .lh-details side margins are */
  width: 100%;
}

.lh-details.flex .lh-code {
  max-width: 70%;
}

.lh-audit__stackpack {
  display: flex;
  align-items: center;
}

.lh-audit__stackpack__img {
  max-width: 50px;
  margin-right: var(--default-padding)
}

/* Report header */

.report-icon {
  opacity: 0.7;
}
.report-icon:hover {
  opacity: 1;
}
.report-icon[disabled] {
  opacity: 0.3;
  pointer-events: none;
}

.report-icon--print {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path fill="none" d="M0 0h24v24H0z"/></svg>');
}
.report-icon--copy {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>');
}
.report-icon--open {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>');
}
.report-icon--download {
  background-image: url('data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
}
.report-icon--dark {
  background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 100 125"><path d="M50 23.587c-16.27 0-22.799 12.574-22.799 21.417 0 12.917 10.117 22.451 12.436 32.471h20.726c2.32-10.02 12.436-19.554 12.436-32.471 0-8.843-6.528-21.417-22.799-21.417zM39.637 87.161c0 3.001 1.18 4.181 4.181 4.181h.426l.41 1.231C45.278 94.449 46.042 95 48.019 95h3.963c1.978 0 2.74-.551 3.365-2.427l.409-1.231h.427c3.002 0 4.18-1.18 4.18-4.181V80.91H39.637v6.251zM50 18.265c1.26 0 2.072-.814 2.072-2.073v-9.12C52.072 5.813 51.26 5 50 5c-1.259 0-2.072.813-2.072 2.073v9.12c0 1.259.813 2.072 2.072 2.072zM68.313 23.727c.994.774 2.135.634 2.91-.357l5.614-7.187c.776-.992.636-2.135-.356-2.909-.992-.776-2.135-.636-2.91.357l-5.613 7.186c-.778.993-.636 2.135.355 2.91zM91.157 36.373c-.306-1.222-1.291-1.815-2.513-1.51l-8.85 2.207c-1.222.305-1.814 1.29-1.51 2.512.305 1.223 1.291 1.814 2.513 1.51l8.849-2.206c1.223-.305 1.816-1.291 1.511-2.513zM86.757 60.48l-8.331-3.709c-1.15-.512-2.225-.099-2.736 1.052-.512 1.151-.1 2.224 1.051 2.737l8.33 3.707c1.15.514 2.225.101 2.736-1.05.513-1.149.1-2.223-1.05-2.737zM28.779 23.37c.775.992 1.917 1.131 2.909.357.992-.776 1.132-1.917.357-2.91l-5.615-7.186c-.775-.992-1.917-1.132-2.909-.357s-1.131 1.917-.356 2.909l5.614 7.187zM21.715 39.583c.305-1.223-.288-2.208-1.51-2.513l-8.849-2.207c-1.222-.303-2.208.289-2.513 1.511-.303 1.222.288 2.207 1.511 2.512l8.848 2.206c1.222.304 2.208-.287 2.513-1.509zM21.575 56.771l-8.331 3.711c-1.151.511-1.563 1.586-1.05 2.735.511 1.151 1.586 1.563 2.736 1.052l8.331-3.711c1.151-.511 1.563-1.586 1.05-2.735-.512-1.15-1.585-1.562-2.736-1.052z"/></svg>');
}

/* Node */
.lh-node__snippet {
  font-family: var(--report-font-family-monospace);
  color: var(--snippet-color);
  font-size: var(--report-monospace-font-size);
  line-height: 20px;
}

/* Score */

.lh-audit__score-icon {
  width: var(--score-icon-size);
  height: var(--score-icon-size);
  margin: var(--score-icon-margin);
}

.lh-audit--pass .lh-audit__display-text {
  color: var(--color-pass-secondary);
}
.lh-audit--pass .lh-audit__score-icon {
  border-radius: 100%;
  background: var(--color-pass);
}

.lh-audit--average .lh-audit__display-text {
  color: var(--color-average-secondary);
}
.lh-audit--average .lh-audit__score-icon {
  background: var(--color-average);
  width: var(--icon-square-size);
  height: var(--icon-square-size);
}

.lh-audit--fail .lh-audit__display-text {
  color: var(--color-fail-secondary);
}
.lh-audit--fail .lh-audit__score-icon,
.lh-audit--error .lh-audit__score-icon {
  border-left: calc(var(--score-icon-size) / 2) solid transparent;
  border-right: calc(var(--score-icon-size) / 2) solid transparent;
  border-bottom: var(--score-icon-size) solid var(--color-fail);
}

.lh-audit--manual .lh-audit__display-text,
.lh-audit--notapplicable .lh-audit__display-text {
  color: var(--color-gray-600);
}
.lh-audit--manual .lh-audit__score-icon,
.lh-audit--notapplicable .lh-audit__score-icon {
  border-radius: 100%;
  background: var(--color-gray-400);
}

.lh-audit--informative .lh-audit__display-text {
  color: var(--color-gray-600);
}

.lh-audit--informative .lh-audit__score-icon {
  border: none;
  border-radius: 100%;
  background: var(--color-gray-400);
}

.lh-audit__description,
.lh-audit__stackpack {
  color: var(--report-text-color-secondary);
}
.lh-category-header__description  {
  font-size: var(--report-font-size);
  text-align: center;
  margin: 0px auto;
  max-width: 400px;
}


.lh-audit__display-text,
.lh-load-opportunity__sparkline,
.lh-chevron-container {
  margin: 0 var(--audit-margin-horizontal);
}
.lh-chevron-container {
  margin-right: 0;
}

.lh-audit__title-and-text {
  flex: 1;
}

.lh-audit__title-and-text code {
  color: var(--snippet-color);
  font-size: var(--report-monospace-font-size);
}

/* Prepend display text with em dash separator. But not in Opportunities. */
.lh-audit__display-text:not(:empty):before {
  content: '—';
  margin-right: var(--audit-margin-horizontal);
}
.lh-audit-group.lh-audit-group--load-opportunities .lh-audit__display-text:not(:empty):before {
  display: none;
}

/* Expandable Details (Audit Groups, Audits) */
.lh-audit__header {
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: var(--audit-padding-vertical) 0;
}

.lh-audit--load-opportunity .lh-audit__header {
  display: block;
}

.lh-audit__header:hover {
  background-color: var(--color-hover);
}

/* Hide the expandable arrow icon, three ways: via the CSS Counter Styles spec, for webkit/blink browsers, hiding the polyfilled icon */
/* https://github.com/javan/details-element-polyfill/blob/master/src/details-element-polyfill/polyfill.sass */
.lh-audit-group > summary,
.lh-expandable-details > summary {
  list-style-type: none;
}
.lh-audit-group > summary::-webkit-details-marker,
.lh-expandable-details > summary::-webkit-details-marker {
  display: none;
}
.lh-audit-group > summary:before,
.lh-expandable-details > summary:before {
  display: none;
}


/* Perf Metric */

.lh-columns {
  display: flex;
  width: 100%;
}
@media screen and (max-width: 640px) {
  .lh-columns {
    flex-wrap: wrap;

  }
}

.lh-column {
  flex: 1;
}
.lh-column:first-of-type {
  margin-right: 24px;
}

@media screen and (max-width: 800px) {
  .lh-column:first-of-type {
    margin-right: 8px;
  }
}
@media screen and (max-width: 640px) {
  .lh-column {
    flex-basis: 100%;
  }
  .lh-column:first-of-type {
    margin-right: 0px;
  }
  .lh-column:first-of-type .lh-metric:last-of-type {
    border-bottom: 0;
  }
}


.lh-metric {
  border-bottom: 1px solid var(--report-border-color-secondary);
}
.lh-metric:first-of-type {
  border-top: 1px solid var(--report-border-color-secondary);
}

.lh-metric__innerwrap {
  display: grid;
  grid-template-columns: var(--audit-description-padding-left) 10fr 3fr;
  align-items: center;
  padding: 10px 0;
}

.lh-metric__details {
  order: -1;
}

.lh-metric__title {
  flex: 1;
  font-weight: 500;
}

.lh-metrics__disclaimer {
  color: var(--color-gray-600);
  margin: var(--section-padding-vertical) 0;
}
.lh-metrics__disclaimer a {
  color: var(--color-gray-700);
}

.lh-calclink {
  padding-left: calc(1ex / 3);
}

.lh-metric__description {
  display: none;
  grid-column-start: 2;
  grid-column-end: 3;
  color: var(--report-text-color-secondary);
}

.lh-metric__value {
  white-space: nowrap; /* No wrapping between metric value and the icon */
  font-weight: 500;
  justify-self: end;
}

/* No-JS toggle switch */
/* Keep this selector sync'd w/ `magicSelector` in report-ui-features-test.js */
 .lh-metrics-toggle__input:checked ~ .lh-columns .lh-metric__description {
  display: block;
}

.lh-metrics-toggle__input {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  right: 0;
  width: 74px;
  height: 28px;
  top: -3px;
}
.lh-metrics-toggle__label {
  display: flex;
  background-color: #eee;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: -3px;
  pointer-events: none;
}
.lh-metrics-toggle__input:focus + label {
  outline: -webkit-focus-ring-color auto 3px;
}
.lh-metrics-toggle__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  width: 50%;
  height: 28px;
}
.lh-metrics-toggle__input:not(:checked) + label .lh-metrics-toggle__icon--less,
.lh-metrics-toggle__input:checked + label .lh-metrics-toggle__icon--more {
  background-color: var(--color-blue-A700);
  --metric-toggle-lines-fill: var(--color-white);
}
.lh-metrics-toggle__lines {
  fill: var(--metric-toggle-lines-fill);
}

.lh-metrics-toggle__label  {
  background-color: var(--metrics-toggle-background-color);
}

.lh-metrics-toggle__label .lh-metrics-toggle__icon--less {
  padding-left: 8px;
}
.lh-metrics-toggle__label .lh-metrics-toggle__icon--more {
  padding-right: 8px;
}

/* Pushes the metric description toggle button to the right. */
.lh-audit-group--metrics .lh-audit-group__header {
  display: flex;
}
.lh-audit-group--metrics .lh-audit-group__header span.lh-audit-group__title {
  flex: 1;
}

.lh-metric .lh-metric__innerwrap::before {
  content: '';
  width: var(--score-icon-size);
  height: var(--score-icon-size);
  display: inline-block;
  margin: var(--score-icon-margin);
}

.lh-metric--pass .lh-metric__value {
  color: var(--color-pass-secondary);
}
.lh-metric--pass .lh-metric__innerwrap::before {
  border-radius: 100%;
  background: var(--color-pass);
}

.lh-metric--average .lh-metric__value {
  color: var(--color-average-secondary);
}
.lh-metric--average .lh-metric__innerwrap::before {
  background: var(--color-average);
  width: var(--icon-square-size);
  height: var(--icon-square-size);
}

.lh-metric--fail .lh-metric__value {
  color: var(--color-fail-secondary);
}
.lh-metric--fail .lh-metric__innerwrap::before,
.lh-metric--error .lh-metric__innerwrap::before {
  border-left: calc(var(--score-icon-size) / 2) solid transparent;
  border-right: calc(var(--score-icon-size) / 2) solid transparent;
  border-bottom: var(--score-icon-size) solid var(--color-fail);
}

.lh-metric--error .lh-metric__value,
.lh-metric--error .lh-metric__description {
  color: var(--color-fail-secondary);
}

/* Perf load opportunity */

.lh-load-opportunity__cols {
  display: flex;
  align-items: flex-start;
}

.lh-load-opportunity__header .lh-load-opportunity__col {
  color: var(--color-gray-600);
  display: unset;
  line-height: calc(2.3 * var(--report-font-size));
}

.lh-load-opportunity__col {
  display: flex;
}

.lh-load-opportunity__col--one {
  flex: 5;
  align-items: center;
  margin-right: 2px;
}
.lh-load-opportunity__col--two {
  flex: 4;
  text-align: right;
}

.lh-audit--load-opportunity .lh-audit__display-text {
  text-align: right;
  flex: 0 0 calc(3 * var(--report-font-size));
}


/* Sparkline */

.lh-load-opportunity__sparkline {
  flex: 1;
  margin-top: calc((var(--report-line-height) - var(--sparkline-height)) / 2);
}

.lh-sparkline {
  height: var(--sparkline-height);
  width: 100%;
}

.lh-sparkline__bar {
  height: 100%;
  float: right;
}

.lh-audit--pass .lh-sparkline__bar {
  background: var(--color-pass);
}

.lh-audit--average .lh-sparkline__bar {
  background: var(--color-average);
}

.lh-audit--fail .lh-sparkline__bar {
  background: var(--color-fail);
}



/* Filmstrip */

.lh-filmstrip-container {
  /* smaller gap between metrics and filmstrip */
  margin: -8px auto 0 auto;
}

.lh-filmstrip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: var(--default-padding);
}

.lh-filmstrip__frame {
  text-align: right;
  position: relative;
}

.lh-filmstrip__thumbnail {
  border: 1px solid var(--report-border-color-secondary);
  max-height: 100px;
  max-width: 60px;
}

@media screen and (max-width: 750px) {
  .lh-filmstrip {
    flex-wrap: wrap;
  }
  .lh-filmstrip__frame {
    width: 20%;
    margin-bottom: 5px;
  }
  .lh-filmstrip__thumbnail {
    display: block;
    margin: auto;
  }
}

/* Audit */

.lh-audit {
  border-bottom: 1px solid var(--report-border-color-secondary);
}

/* Apply border-top to just the first audit. */
.lh-audit {
  border-top: 1px solid var(--report-border-color-secondary);
}
.lh-audit ~ .lh-audit {
  border-top: none;
}


.lh-audit--error .lh-audit__display-text {
  color: var(--color-fail);
}

/* Audit Group */

.lh-audit-group {
  margin-bottom: var(--audit-group-margin-bottom);
  position: relative;
}

.lh-audit-group__header::before {
  /* By default, groups don't get an icon */
  content: none;
  width: var(--pwa-icon-size);
  height: var(--pwa-icon-size);
  margin: var(--pwa-icon-margin);
  display: inline-block;
  vertical-align: middle;
}

/* Style the "over budget" columns red. */
.lh-audit-group--budgets #performance-budget tbody tr td:nth-child(4),
.lh-audit-group--budgets #performance-budget tbody tr td:nth-child(5),
.lh-audit-group--budgets #timing-budget tbody tr td:nth-child(3) {
  color: var(--color-red-700);
}

/* Align the "over budget request count" text to be close to the "over budget bytes" column. */
.lh-audit-group--budgets .lh-table tbody tr td:nth-child(4){
  text-align: right;
}

.lh-audit-group--budgets .lh-table {
  width: 100%;
  margin: 16px 0px 16px 0px;
}

.lh-audit-group--pwa-fast-reliable .lh-audit-group__header::before {
  content: '';
  background-image: var(--pwa-fast-reliable-gray-url);
}
.lh-audit-group--pwa-installable .lh-audit-group__header::before {
  content: '';
  background-image: var(--pwa-installable-gray-url);
}
.lh-audit-group--pwa-optimized .lh-audit-group__header::before {
  content: '';
  background-image: var(--pwa-optimized-gray-url);
}
.lh-audit-group--pwa-fast-reliable.lh-badged .lh-audit-group__header::before {
  background-image: var(--pwa-fast-reliable-color-url);
}
.lh-audit-group--pwa-installable.lh-badged .lh-audit-group__header::before {
  background-image: var(--pwa-installable-color-url);
}
.lh-audit-group--pwa-optimized.lh-badged .lh-audit-group__header::before {
  background-image: var(--pwa-optimized-color-url);
}

.lh-audit-group--metrics .lh-audit-group__summary {
  margin-top: 0;
  margin-bottom: 0;
}

.lh-audit-group__summary {
  display: flex;
  justify-content: space-between;
  margin-top: calc(var(--category-padding) * 1.5);
  margin-bottom: var(--category-padding);
}

.lh-audit-group__itemcount {
  color: var(--color-gray-600);
  font-weight: bold;
}
.lh-audit-group__header .lh-chevron {
  margin-top: calc((var(--report-line-height) - 5px) / 2);
}

.lh-audit-group__header {
  font-size: var(--report-font-size);
  margin: 0 0 var(--audit-group-padding-vertical);
  /* When the header takes 100% width, the chevron becomes small. */
  max-width: calc(100% - var(--chevron-size));
}
/* max-width makes the metric toggle not flush. metrics doesn't have a chevron so unset. */
.lh-audit-group--metrics .lh-audit-group__header {
  max-width: unset;
}

.lh-audit-group__header span.lh-audit-group__title {
  font-weight: bold;
}

.lh-audit-group__header span.lh-audit-group__itemcount {
  font-weight: bold;
  color: var(--color-gray-600);
}

.lh-audit-group__header span.lh-audit-group__description {
  font-weight: 500;
  color: var(--color-gray-600);
}
.lh-audit-group__header span.lh-audit-group__description::before {
  content: '—';
  margin: 0px var(--audit-margin-horizontal);
}

.lh-clump > .lh-audit-group__header,
.lh-audit-group--diagnostics .lh-audit-group__header,
.lh-audit-group--load-opportunities .lh-audit-group__header,
.lh-audit-group--metrics .lh-audit-group__header,
.lh-audit-group--pwa-fast-reliable .lh-audit-group__header,
.lh-audit-group--pwa-installable .lh-audit-group__header,
.lh-audit-group--pwa-optimized .lh-audit-group__header {
  margin-top: var(--audit-group-padding-vertical);
}

.lh-audit-explanation {
  margin: var(--audit-padding-vertical) 0 calc(var(--audit-padding-vertical) / 2) var(--audit-margin-horizontal);
  line-height: var(--audit-explanation-line-height);
  display: inline-block;
}

.lh-audit--fail .lh-audit-explanation {
  color: var(--color-fail);
}

/* Report */
.lh-list > div:not(:last-child) {
  padding-bottom: 20px;
}

.lh-header-container {
  display: block;
  margin: 0 auto;
  position: relative;
  word-wrap: break-word;
}

.lh-report {
  min-width: var(--report-min-width);
}

.lh-exception {
  font-size: large;
}

.lh-code {
  white-space: normal;
  margin-top: 0;
  font-size: var(--report-monospace-font-size);
}

.lh-warnings {
  --item-margin: calc(var(--report-line-height) / 6);
  color: var(--color-average);
  margin: var(--audit-padding-vertical) 0;
  padding: calc(var(--audit-padding-vertical) / 2) calc(var(--audit-description-padding-left));
}
.lh-warnings span {
  font-weight: bold;
}

.lh-warnings--toplevel {
  --item-margin: calc(var(--header-line-height) / 4);
  color: var(--toplevel-warning-text-color);
  margin-left: auto;
  margin-right: auto;
  max-width: calc(var(--report-width) - var(--category-padding) * 2);
  background-color: var(--toplevel-warning-background-color);
  padding: var(--toplevel-warning-padding);
  border-radius: 8px;
}

.lh-warnings__msg {
  color: var(--toplevel-warning-message-text-color);
  margin: 0;
}

.lh-warnings ul {
  margin: 0;
}
.lh-warnings li {
  margin: var(--item-margin) 0;
}
.lh-warnings li:last-of-type {
  margin-bottom: 0;
}

.lh-scores-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.lh-scores-header__solo {
  padding: 0;
  border: 0;
}

/* Gauge */

.lh-gauge__wrapper--pass {
  color: var(--color-pass);
  fill: var(--color-pass);
  stroke: var(--color-pass);
}

.lh-gauge__wrapper--average {
  color: var(--color-average);
  fill: var(--color-average);
  stroke: var(--color-average);
}

.lh-gauge__wrapper--fail {
  color: var(--color-fail);
  fill: var(--color-fail);
  stroke: var(--color-fail);
}

.lh-gauge {
  stroke-linecap: round;
  width: var(--gauge-circle-size);
  height: var(--gauge-circle-size);
}

.lh-category .lh-gauge {
  --gauge-circle-size: var(--gauge-circle-size-big);
}

.lh-gauge-base {
    opacity: 0.1;
    stroke: var(--circle-background);
}

.lh-gauge-arc {
    fill: none;
    stroke: var(--circle-color);
    transform-origin: 50% 50%;
    animation: load-gauge var(--transition-length) ease forwards;
    animation-delay: 250ms;
}

.lh-gauge__svg-wrapper {
  position: relative;
  height: var(--gauge-circle-size);
}
.lh-category .lh-gauge__svg-wrapper {
  --gauge-circle-size: var(--gauge-circle-size-big);
}

/* The plugin badge overlay */
.lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {
  width: var(--plugin-badge-size);
  height: var(--plugin-badge-size);
  background-color: var(--plugin-badge-background-color);
  background-image: var(--plugin-icon-url);
  background-repeat: no-repeat;
  background-size: var(--plugin-icon-size);
  background-position: 58% 50%;
  content: "";
  position: absolute;
  right: -6px;
  bottom: 0px;
  display: block;
  z-index: 100;
  box-shadow: 0 0 4px rgba(0,0,0,.2);
  border-radius: 25%;
}
.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {
  width: var(--plugin-badge-size-big);
  height: var(--plugin-badge-size-big);
}

@keyframes load-gauge {
  from { stroke-dasharray: 0 352; }
}

.lh-gauge__percentage {
  width: 100%;
  height: var(--gauge-circle-size);
  position: absolute;
  font-family: var(--report-font-family-monospace);
  font-size: calc(var(--gauge-circle-size) * 0.34 + 1.3px);
  line-height: 0;
  text-align: center;
  top: calc(var(--score-container-padding) + var(--gauge-circle-size) / 2);
}

.lh-category .lh-gauge__percentage {
  --gauge-circle-size: var(--gauge-circle-size-big);
  --gauge-percentage-font-size: var(--gauge-percentage-font-size-big);
}

.lh-gauge__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  padding: var(--score-container-padding);

  --transition-length: 1s;

  /* Contain the layout style paint & layers during animation*/
  contain: content;
  will-change: opacity; /* Only using for layer promotion */
}

.lh-gauge__label {
  font-size: var(--gauge-label-font-size);
  line-height: var(--gauge-label-line-height);
  margin-top: 10px;
  text-align: center;
  color: var(--report-text-color);
}

/* TODO(#8185) use more BEM (.lh-gauge__label--big) instead of relying on descendant selector */
.lh-category .lh-gauge__label {
  --gauge-label-font-size: var(--gauge-label-font-size-big);
  --gauge-label-line-height: var(--gauge-label-line-height-big);
  margin-top: 14px;
}


.lh-scores-header .lh-gauge__wrapper,
.lh-scores-header .lh-gauge--pwa__wrapper,
.lh-sticky-header .lh-gauge__wrapper,
.lh-sticky-header .lh-gauge--pwa__wrapper {
  width: var(--gauge-wrapper-width);
}

.lh-scorescale {
  display: inline-flex;
  margin: 12px auto 0 auto;
  border: 1px solid var(--color-gray-200);
  border-radius: 20px;
  padding: 8px 8px;
}

.lh-scorescale-range {
  display: flex;
  align-items: center;
  margin: 0 12px;
  font-family: var(--report-font-family-monospace);
  white-space: nowrap;
}

.lh-scorescale-range::before {
  content: '';
  width: var(--scorescale-width);
  height: var(--scorescale-height);
  border-radius: 10px;
  display: block;
  margin-right: 10px;
}

.lh-scorescale-range--pass::before {
  background-color: var(--color-pass);
}

.lh-scorescale-range--average::before {
  background-color: var(--color-average);
}

.lh-scorescale-range--fail::before {
  background-color: var(--color-fail);
}

/* Hide category score gauages if it's a single category report */
.lh-header--solo-category .lh-scores-wrapper {
  display: none;
}


.lh-categories {
  width: 100%;
  overflow: hidden;
}

.lh-category {
  padding: var(--category-padding);
  max-width: var(--report-width);
  margin: 0 auto;
}

.lh-category-wrapper {
  border-bottom: 1px solid var(--color-gray-200);
}

.lh-category-wrapper:first-of-type {
  border-top: 1px solid var(--color-gray-200);
}

/* section hash link jump should preserve fixed header
   https://css-tricks.com/hash-tag-links-padding/
*/
.lh-category > .lh-permalink {
  --sticky-header-height: calc(var(--gauge-circle-size) + var(--score-container-padding) * 2);
  --topbar-plus-header: calc(var(--topbar-height) + var(--sticky-header-height));
  margin-top: calc(var(--topbar-plus-header) * -1);
  padding-bottom: var(--topbar-plus-header);
  display: block;
  visibility: hidden;
}

.lh-category-header {
  font-size: var(--category-header-font-size);
  min-height: var(--gauge-circle-size);
  margin-bottom: var(--section-padding-vertical);
}

.lh-category-header .lh-score__gauge {
  max-width: 400px;
  width: auto;
  margin: 0px auto;
}

.lh-category-header .lh-audit__title {
  font-size: var(--category-header-font-size);
  line-height: var(--header-line-height);
}

#lh-log {
  position: fixed;
  background-color: #323232;
  color: #fff;
  min-height: 48px;
  min-width: 288px;
  padding: 16px 24px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 2px;
  margin: 12px;
  font-size: 14px;
  cursor: default;
  transition: transform 0.3s, opacity 0.3s;
  transform: translateY(100px);
  opacity: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
}

#lh-log.show {
  opacity: 1;
  transform: translateY(0);
}

/* 964 fits the min-width of the filmstrip */
@media screen and (max-width: 964px) {
  .lh-report {
    margin-left: 0;
    width: 100%;
  }
}

@media print {
  body {
    -webkit-print-color-adjust: exact; /* print background colors */
  }
  .lh-container {
    display: block;
  }
  .lh-report {
    margin-left: 0;
    padding-top: 0;
  }
  .lh-categories {
    margin-top: 0;
  }
}

.lh-table {
  border-collapse: collapse;
  /* Can't assign padding to table, so shorten the width instead. */
  width: calc(100% - var(--audit-description-padding-left));
}

.lh-table thead th {
  font-weight: normal;
  color: var(--color-gray-600);
  /* See text-wrapping comment on .lh-container. */
  word-break: normal;
}

.lh-table tbody tr:nth-child(odd) {
  background-color: var(--table-higlight-background-color);
}

.lh-table th,
.lh-table td {
  padding: 8px 6px;
}
.lh-table th:first-child {
  padding-left: 0;
}
.lh-table th:last-child {
  padding-right: 0;
}

.lh-table tr {
  vertical-align: baseline;
}

/* Looks unnecessary, but mostly for keeping the <th>s left-aligned */
.lh-table-column--text,
.lh-table-column--source-location,
.lh-table-column--url,
/* .lh-table-column--thumbnail, */
/* .lh-table-column--empty,*/
.lh-table-column--code,
.lh-table-column--node {
  text-align: left;
}

.lh-table-column--bytes,
.lh-table-column--timespanMs,
.lh-table-column--ms,
.lh-table-column--numeric {
  text-align: right;
  word-break: normal;
}



.lh-table .lh-table-column--thumbnail {
  width: var(--image-preview-size);
  padding: 0;
}

.lh-table-column--url {
  min-width: 250px;
}

.lh-table-column--text {
  min-width: 80px;
}

/* Keep columns narrow if they follow the URL column */
/* 12% was determined to be a decent narrow width, but wide enough for column headings */
.lh-table-column--url + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--ms,
.lh-table-column--url + .lh-table-column--ms + th.lh-table-column--bytes,
.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--timespanMs {
  width: 12%;
}


.lh-text__url-host {
  display: inline;
}

.lh-text__url-host {
  margin-left: calc(var(--report-font-size) / 2);
  opacity: 0.6;
  font-size: 90%
}

.lh-thumbnail {
  object-fit: cover;
  width: var(--image-preview-size);
  height: var(--image-preview-size);
  display: block;
}

.lh-unknown pre {
  overflow: scroll;
  border: solid 1px var(--color-gray-200);
}

.lh-text__url > a {
  color: inherit;
  text-decoration: none;
}

.lh-text__url > a:hover {
  text-decoration: underline dotted #999;
}

.lh-sub-rows:not(:first-child) .lh-sub-row {
  margin-left: 20px;
  color: var(--color-gray-700);
}
.lh-sub-row {
  margin-bottom: 0;
}

/* Chevron
   https://codepen.io/paulirish/pen/LmzEmK
 */
.lh-chevron {
  --chevron-angle: 42deg;
  /* Edge doesn't support transform: rotate(calc(...)), so we define it here */
  --chevron-angle-right: -42deg;
  width: var(--chevron-size);
  height: var(--chevron-size);
  margin-top: calc((var(--report-line-height) - 12px) / 2);
}

.lh-chevron__lines {
  transition: transform 0.4s;
  transform: translateY(var(--report-line-height));
}
.lh-chevron__line {
 stroke: var(--chevron-line-stroke);
 stroke-width: var(--chevron-size);
 stroke-linecap: square;
 transform-origin: 50%;
 transform: rotate(var(--chevron-angle));
 transition: transform 300ms, stroke 300ms;
}

.lh-audit-group > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-right,
.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-left,
.lh-audit > .lh-expandable-details .lh-chevron__line-right,
.lh-audit > .lh-expandable-details[open] .lh-chevron__line-left {
 transform: rotate(var(--chevron-angle-right));
}

.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__line-right,
.lh-audit > .lh-expandable-details[open] .lh-chevron__line-right {
  transform: rotate(var(--chevron-angle));
}

.lh-audit-group[open] > summary > .lh-audit-group__summary > .lh-chevron .lh-chevron__lines,
.lh-audit > .lh-expandable-details[open] .lh-chevron__lines {
 transform: translateY(calc(var(--chevron-size) * -1));
}



/* Tooltip */
.tooltip-boundary {
  position: relative;
}

.tooltip {
  position: absolute;
  display: none; /* Don't retain these layers when not needed */
  opacity: 0;
  background: #ffffff;
  min-width: 246px;
  max-width: 275px;
  padding: 15px;
  border-radius: 5px;
  text-align: initial;
}
/* shrink tooltips to not be cutoff on left edge of narrow viewports
   45vw is chosen to be ~= width of the left column of metrics
*/
@media screen and (max-width: 535px) {
  .tooltip {
    min-width: 45vw;
    padding: 3vw;
  }
}

.tooltip-boundary:hover {
  background-color: var(--color-hover);
}

.tooltip-boundary:hover .tooltip {
  display: block;
  animation: fadeInTooltip 250ms;
  animation-fill-mode: forwards;
  animation-delay: 850ms;
  bottom: 100%;
  z-index: 1;
  will-change: opacity;
  right: 0;
  pointer-events: none;
}

.tooltip::before {
  content: "";
  border: solid transparent;
  border-bottom-color: #fff;
  border-width: 10px;
  position: absolute;
  bottom: -20px;
  right: 6px;
  transform: rotate(180deg);
  pointer-events: none;
}

@keyframes fadeInTooltip {
  0% { opacity: 0; }
  75% { opacity: 1; }
  100% { opacity: 1;  filter: drop-shadow(1px 0px 1px #aaa) drop-shadow(0px 2px 4px hsla(206, 6%, 25%, 0.15)); pointer-events: auto; }
}

/*# sourceURL=report-styles.css */

/*# sourceURL=third_party/lighthouse/report-assets/report.css */</style>
</head>
<body class="lh-root lh-vars">
  <noscript>Lighthouse report requires JavaScript. Please enable.</noscript>
  <div hidden><!--
@license
Copyright 2018 The Lighthouse Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS-IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

<!-- Lighthouse run warnings -->
<template id="tmpl-lh-warnings--toplevel">
  <div class="lh-warnings lh-warnings--toplevel">
    <p class="lh-warnings__msg"></p>
    <ul></ul>
  </div>
</template>

<!-- Lighthouse score scale -->
<template id="tmpl-lh-scorescale">
  <div class="lh-scorescale">
      <span class="lh-scorescale-range lh-scorescale-range--fail">0&ndash;49</span>
      <span class="lh-scorescale-range lh-scorescale-range--average">50&ndash;89</span>
      <span class="lh-scorescale-range lh-scorescale-range--pass">90&ndash;100</span>
  </div>
</template>

<!-- Toggle arrow chevron -->
<template id="tmpl-lh-chevron">
  <svg class="lh-chevron" title="See audits" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 100 100">
    <g class="lh-chevron__lines">
      <path class="lh-chevron__line lh-chevron__line-left" d="M10 50h40"></path>
      <path class="lh-chevron__line lh-chevron__line-right" d="M90 50H50"></path>
    </g>
  </svg>
</template>

<!-- Lighthouse category header -->
<template id="tmpl-lh-category-header">
  <div class="lh-category-header">
    <div class="lh-score__gauge" role="heading" aria-level="2"></div>
    <div class="lh-category-header__description"></div>
  </div>
</template>

<!-- Lighthouse clump -->
<template id="tmpl-lh-clump">
  <!-- TODO: group classes shouldn't be reused for clumps. -->
  <details class="lh-clump lh-audit-group">
    <summary>
      <div class="lh-audit-group__summary">
        <div class="lh-audit-group__header">
          <span class="lh-audit-group__title"></span>
          <span class="lh-audit-group__itemcount"></span>
          <!-- .lh-audit-group__description will be added here -->
          <!-- .lh-metrics-toggle will be added here -->
        </div>
        <div class=""></div>
      </div>
    </summary>
  </details>
</template>

<!-- Lighthouse metrics toggle -->
<template id="tmpl-lh-metrics-toggle">
  <div class="lh-metrics-toggle">
    <input class="lh-metrics-toggle__input" type="checkbox" id="toggle-metric-descriptions" aria-label="Toggle the display of metric descriptions">
    <label class="lh-metrics-toggle__label" for="toggle-metric-descriptions">
      <div class="lh-metrics-toggle__icon lh-metrics-toggle__icon--less" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
          <path class="lh-metrics-toggle__lines" d="M4 9h16v2H4zm0 4h10v2H4z" />
        </svg>
      </div>
      <div class="lh-metrics-toggle__icon lh-metrics-toggle__icon--more" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path class="lh-metrics-toggle__lines" d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
        </svg>
      </div>
    </label>
  </div>
</template>

<!-- Lighthouse audit -->
<template id="tmpl-lh-audit">
  <div class="lh-audit">
    <details class="lh-expandable-details">
      <summary>
        <div class="lh-audit__header lh-expandable-details__summary">
          <span class="lh-audit__score-icon"></span>
          <span class="lh-audit__title-and-text">
            <span class="lh-audit__title"></span>
            <span class="lh-audit__display-text"></span>
          </span>
          <div class="lh-chevron-container"></div>
        </div>
      </summary>
      <div class="lh-audit__description"></div>
      <div class="lh-audit__stackpacks"></div>
    </details>
  </div>
</template>

<!-- Lighthouse perf metric -->
<template id="tmpl-lh-metric">
  <div class="lh-metric">
    <div class="lh-metric__innerwrap">
      <span class="lh-metric__title"></span>
      <div class="lh-metric__value"></div>
      <div class="lh-metric__description"></div>
    </div>
  </div>
</template>

<!-- Lighthouse perf opportunity -->
<template id="tmpl-lh-opportunity">
  <div class="lh-audit lh-audit--load-opportunity">
    <details class="lh-expandable-details">
        <summary>
          <div class="lh-audit__header lh-expandable-details__summary">
            <div class="lh-load-opportunity__cols">
              <div class="lh-load-opportunity__col lh-load-opportunity__col--one">
                <span class="lh-audit__score-icon"></span>
                <div class="lh-audit__title"></div>
              </div>
              <div class="lh-load-opportunity__col lh-load-opportunity__col--two">
                <div class="lh-load-opportunity__sparkline">
                  <div class="lh-sparkline"><div class="lh-sparkline__bar"></div></div>
                </div>
                <div class="lh-audit__display-text"></div>
                <div class="lh-chevron-container" title="See resources"></div>
              </div>
            </div>
          </div>
        </summary>
      <div class="lh-audit__description"></div>
      <div class="lh-audit__stackpacks"></div>
    </details>
  </div>
</template>

<!-- Lighthouse perf opportunity header -->
<template id="tmpl-lh-opportunity-header">
  <div class="lh-load-opportunity__header lh-load-opportunity__cols">
    <div class="lh-load-opportunity__col lh-load-opportunity__col--one"></div>
    <div class="lh-load-opportunity__col lh-load-opportunity__col--two"></div>
  </div>
</template>

<!-- Lighthouse score container -->
<template id="tmpl-lh-scores-wrapper">
  <style>
    .lh-scores-container {
      display: flex;
      flex-direction: column;
      padding: var(--scores-container-padding);
      position: relative;
      width: 100%;
    }

    .lh-sticky-header {
      --gauge-circle-size: 36px;
      --plugin-badge-size: 18px;
      --plugin-icon-size: 75%;
      --gauge-wrapper-width: 60px;
      --gauge-percentage-font-size: 13px;
      position: fixed;
      left: 0;
      right: 0;
      top: var(--topbar-height);
      font-weight: 700;
      display: none;
      justify-content: center;
      background-color: var(--sticky-header-background-color);
      border-bottom: 1px solid var(--color-gray-200);
      padding-top: var(--score-container-padding);
      padding-bottom: 4px;
      z-index: 1;
      pointer-events: none;
    }

    .lh-devtools .lh-sticky-header {
      /* The report within DevTools is placed in a container with overflow, which changes the placement of this header unless we change `position` to `sticky.` */
      position: sticky;
    }

    .lh-sticky-header--visible {
      display: grid;
      grid-auto-flow: column;
      pointer-events: auto;
    }

    /* Disable the gauge arc animation for the sticky header, so toggling display: none
       does not play the animation. */
    .lh-sticky-header .lh-gauge-arc {
      animation: none;
    }

    .lh-sticky-header .lh-gauge__label {
      display: none;
    }

    .lh-highlighter {
      width: var(--gauge-wrapper-width);
      height: 1px;
      background-color: var(--highlighter-background-color);
      /* Position at bottom of first gauge in sticky header. */
      position: absolute;
      grid-column: 1;
      bottom: -1px;
    }

    .lh-gauge__wrapper:first-of-type {
      contain: none;
    }
  </style>
  <div class="lh-scores-wrapper">
    <div class="lh-scores-container">
      <div class="pyro">
        <div class="before"></div>
        <div class="after"></div>
      </div>
    </div>
  </div>
</template>

<!-- Lighthouse topbar -->
<template id="tmpl-lh-topbar">
  <style>
    .lh-topbar {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      height: var(--topbar-height);
      background-color: var(--topbar-background-color);
      padding: var(--topbar-padding);
    }

    .lh-topbar__logo {
      width: var(--topbar-logo-size);
      height: var(--topbar-logo-size);
      user-select: none;
      flex: none;
    }
    .lh-topbar__logo .shape {
      fill: var(--report-text-color);
    }

    .lh-topbar__url {
      margin: var(--topbar-padding);
      text-decoration: none;
      color: var(--report-text-color);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .lh-tools {
      margin-left: auto;
      will-change: transform;
    }
    .lh-tools__button {
      width: var(--tools-icon-size);
      height: var(--tools-icon-size);
      cursor: pointer;
      margin-right: 5px;
      /* This is actually a button element, but we want to style it like a transparent div. */
      display: flex;
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
    }
    .lh-tools__button svg {
      fill: var(--tools-icon-color);
    }
    .dark .lh-tools__button svg {
      filter: invert(1);
    }
    .lh-tools__button.active + .lh-tools__dropdown {
      opacity: 1;
      clip: rect(-1px, 187px, 242px, -3px);
      visibility: visible;
    }
    .lh-tools__dropdown {
      position: absolute;
      background-color: var(--report-background-color);
      border: 1px solid var(--report-border-color);
      border-radius: 3px;
      padding: calc(var(--default-padding) / 2) 0;
      cursor: pointer;
      top: 36px;
      right: 0;
      box-shadow: 1px 1px 3px #ccc;
      min-width: 125px;
      clip: rect(0, 164px, 0, 0);
      visibility: hidden;
      opacity: 0;
      transition: all 200ms cubic-bezier(0,0,0.2,1);
    }
    .lh-tools__dropdown a {
      display: block;
      color: currentColor;
      text-decoration: none;
      white-space: nowrap;
      padding: 0 12px;
      line-height: 2;
    }
    .lh-tools__dropdown a:hover,
    .lh-tools__dropdown a:focus {
      background-color: var(--color-gray-200);
      outline: none;
    }
    .lh-tools__dropdown .report-icon {
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: 8px 50%;
      background-size: 18px;
      background-color: transparent;
      text-indent: 18px;
    }
    .dark .report-icon {
      color: var(--color-gray-900);
      filter: invert(1);
    }
    .dark .lh-tools__dropdown a:hover,
    .dark .lh-tools__dropdown a:focus {
      background-color: #BDBDBD;
    }
    /* copy icon needs slight adjustments to look great */
    .lh-tools__dropdown .report-icon--copy {
      background-size: 16px;
      background-position: 9px 50%;
    }
    /* save-as-gist option hidden in report */
    .lh-tools__dropdown .lh-tools--gist {
      display: none;
    }

    @media screen and (max-width: 964px) {
      .lh-tools__dropdown {
        right: 0;
        left: initial;
      }
    }
    @media print {
      .lh-topbar {
        position: static;
        margin-left: 0;
      }

      .lh-tools__dropdown {
        display: none;
      }
    }
  </style>

  <div class="lh-topbar">
    <!-- Lighthouse logo.  -->
    <svg class="lh-topbar__logo" viewBox="0 0 24 24">
      <defs>
        <linearGradient x1="57.456%" y1="13.086%" x2="18.259%" y2="72.322%" id="lh-topbar__logo--a">
          <stop stop-color="#262626" stop-opacity=".1" offset="0%"/>
          <stop stop-color="#262626" stop-opacity="0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="lh-topbar__logo--b">
          <stop stop-color="#262626" stop-opacity=".1" offset="0%"/>
          <stop stop-color="#262626" stop-opacity="0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="58.764%" y1="65.756%" x2="36.939%" y2="50.14%" id="lh-topbar__logo--c">
          <stop stop-color="#262626" stop-opacity=".1" offset="0%"/>
          <stop stop-color="#262626" stop-opacity="0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="41.635%" y1="20.358%" x2="72.863%" y2="85.424%" id="lh-topbar__logo--d">
          <stop stop-color="#FFF" stop-opacity=".1" offset="0%"/>
          <stop stop-color="#FFF" stop-opacity="0" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path d="M12 3l4.125 2.625v3.75H18v2.25h-1.688l1.5 9.375H6.188l1.5-9.375H6v-2.25h1.875V5.648L12 3zm2.201 9.938L9.54 14.633 9 18.028l5.625-2.062-.424-3.028zM12.005 5.67l-1.88 1.207v2.498h3.75V6.86l-1.87-1.19z" fill="#F44B21"/>
        <path fill="#FFF" d="M14.201 12.938L9.54 14.633 9 18.028l5.625-2.062z"/>
        <path d="M6 18c-2.042 0-3.95-.01-5.813 0l1.5-9.375h4.326L6 18z" fill="url(#lh-topbar__logo--a)" fill-rule="nonzero" transform="translate(6 3)"/>
        <path fill="#FFF176" fill-rule="nonzero" d="M13.875 9.375v-2.56l-1.87-1.19-1.88 1.207v2.543z"/>
        <path fill="url(#lh-topbar__logo--b)" fill-rule="nonzero" d="M0 6.375h6v2.25H0z" transform="translate(6 3)"/>
        <path fill="url(#lh-topbar__logo--c)" fill-rule="nonzero" d="M6 6.375H1.875v-3.75L6 0z" transform="translate(6 3)"/>
        <path fill="url(#lh-topbar__logo--d)" fill-rule="nonzero" d="M6 0l4.125 2.625v3.75H12v2.25h-1.688l1.5 9.375H.188l1.5-9.375H0v-2.25h1.875V2.648z" transform="translate(6 3)"/>
      </g>
    </svg>

    <a href="" class="lh-topbar__url" target="_blank" rel="noopener"></a>

    <div class="lh-tools">
      <button id="lh-tools-button" class="report-icon report-icon--share lh-tools__button" title="Tools menu" aria-label="Toggle report tools menu" aria-haspopup="menu" aria-expanded="false" aria-controls="lh-tools-dropdown">
        <svg width="100%" height="100%" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>
      <div id="lh-tools-dropdown" role="menu" class="lh-tools__dropdown" aria-labelledby="lh-tools-button">
         <!-- TODO(i18n): localize tools dropdown -->
        <a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--print" data-i18n="dropdownPrintSummary" data-action="print-summary"></a>
        <a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--print" data-i18n="dropdownPrintExpanded" data-action="print-expanded"></a>
        <a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--copy" data-i18n="dropdownCopyJSON" data-action="copy"></a>
        <a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--download" data-i18n="dropdownSaveHTML" data-action="save-html"></a>
        <a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--download" data-i18n="dropdownSaveJSON" data-action="save-json"></a>
        <a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--open lh-tools--viewer" data-i18n="dropdownViewer" data-action="open-viewer"></a>
        <a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--open lh-tools--gist" data-i18n="dropdownSaveGist" data-action="save-gist"></a>
        <a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--dark" data-i18n="dropdownDarkTheme" data-action="toggle-dark"></a>
      </div>
    </div>
  </div>
</template>

<!-- Lighthouse header -->
<template id="tmpl-lh-heading">
  <style>
    /* CSS Fireworks. Originally by Eddie Lin
       https://codepen.io/paulirish/pen/yEVMbP
    */
    .pyro {
      display: none;
      z-index: 1;
      pointer-events: none;
    }
    .score100 .pyro {
      display: block;
    }
    .score100 .lh-lighthouse stop:first-child {
      stop-color: hsla(200, 12%, 95%, 0);
    }
    .score100 .lh-lighthouse stop:last-child {
      stop-color: hsla(65, 81%, 76%, 1);
    }

    .pyro > .before, .pyro > .after {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 2.5px;
      box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
      animation: 1s bang ease-out infinite backwards,  1s gravity ease-in infinite backwards,  5s position linear infinite backwards;
      animation-delay: 1s, 1s, 1s;
    }

    .pyro > .after {
      animation-delay: 2.25s, 2.25s, 2.25s;
      animation-duration: 1.25s, 1.25s, 6.25s;
    }
    .fireworks-paused .pyro > div {
      animation-play-state: paused;
    }

    @keyframes bang {
      to {
        box-shadow: -70px -115.67px #47ebbc, -28px -99.67px #eb47a4, 58px -31.67px #7eeb47, 13px -141.67px #eb47c5, -19px 6.33px #7347eb, -2px -74.67px #ebd247, 24px -151.67px #eb47e0, 57px -138.67px #b4eb47, -51px -104.67px #479eeb, 62px 8.33px #ebcf47, -93px 0.33px #d547eb, -16px -118.67px #47bfeb, 53px -84.67px #47eb83, 66px -57.67px #eb47bf, -93px -65.67px #91eb47, 30px -13.67px #86eb47, -2px -59.67px #83eb47, -44px 1.33px #eb47eb, 61px -58.67px #47eb73, 5px -22.67px #47e8eb, -66px -28.67px #ebe247, 42px -123.67px #eb5547, -75px 26.33px #7beb47, 15px -52.67px #a147eb, 36px -51.67px #eb8347, -38px -12.67px #eb5547, -46px -59.67px #47eb81, 78px -114.67px #eb47ba, 15px -156.67px #eb47bf, -36px 1.33px #eb4783, -72px -86.67px #eba147, 31px -46.67px #ebe247, -68px 29.33px #47e2eb, -55px 19.33px #ebe047, -56px 27.33px #4776eb, -13px -91.67px #eb5547, -47px -138.67px #47ebc7, -18px -96.67px #eb47ac, 11px -88.67px #4783eb, -67px -28.67px #47baeb, 53px 10.33px #ba47eb, 11px 19.33px #5247eb, -5px -11.67px #eb4791, -68px -4.67px #47eba7, 95px -37.67px #eb478b, -67px -162.67px #eb5d47, -54px -120.67px #eb6847, 49px -12.67px #ebe047, 88px 8.33px #47ebda, 97px 33.33px #eb8147, 6px -71.67px #ebbc47;
      }
    }
    @keyframes gravity {
      to {
        transform: translateY(80px);
        opacity: 0;
      }
    }
    @keyframes position {
      0%, 19.9% {
        margin-top: 4%;
        margin-left: 47%;
      }
      20%, 39.9% {
        margin-top: 7%;
        margin-left: 30%;
      }
      40%, 59.9% {
        margin-top: 6%;
        margin-left: 70%;
      }
      60%, 79.9% {
        margin-top: 3%;
        margin-left: 20%;
      }
      80%, 99.9% {
        margin-top: 3%;
        margin-left: 80%;
      }
    }
  </style>

  <div class="lh-header-container">
    <div class="lh-scores-wrapper-placeholder"></div>
  </div>
</template>


<!-- Lighthouse footer -->
<template id="tmpl-lh-footer">
  <style>
    .lh-footer {
      padding: var(--footer-padding-vertical) calc(var(--default-padding) * 2);
      max-width: var(--report-width);
      margin: 0 auto;
    }
    .lh-footer .lh-generated {
      text-align: center;
    }
    .lh-env__title {
      font-size: var(--env-item-font-size-big);
      line-height: var(--env-item-line-height-big);
      text-align: center;
      padding: var(--score-container-padding);
    }
    .lh-env {
      padding: var(--default-padding) 0;
    }
    .lh-env__items {
      padding-left: 16px;
      margin: 0 0 var(--audits-margin-bottom);
      padding: 0;
    }
    .lh-env__items .lh-env__item:nth-child(2n) {
      background-color: var(--env-item-background-color);
    }
    .lh-env__item {
      display: flex;
      padding: var(--env-item-padding);
      position: relative;
    }
    span.lh-env__name {
      font-weight: bold;
      min-width: var(--env-name-min-width);
      flex: 0.5;
      padding: 0 8px;
    }
    span.lh-env__description {
      text-align: left;
      flex: 1;
    }
  </style>
  <footer class="lh-footer">
    <!-- TODO(i18n): localize runtime settings -->
    <div class="lh-env">
      <div class="lh-env__title">Runtime Settings</div>
      <ul class="lh-env__items">
        <template id="tmpl-lh-env__items">
          <li class="lh-env__item">
            <span class="lh-env__name"></span>
            <span class="lh-env__description"></span>
          </li>
        </template>
      </ul>
    </div>

    <div class="lh-generated">
      <!-- TODO(i18n): use ICU replacement to replace version w/o concatenation. -->
      Generated by <b>Lighthouse</b> <span class="lh-footer__version"></span> |
      <a href="https://github.com/GoogleChrome/Lighthouse/issues" target="_blank" rel="noopener" class="lh-footer__version_issue">File an issue</a>
    </div>
  </footer>
</template>

<!-- Lighthouse score gauge -->
<template id="tmpl-lh-gauge">
  <a href="#" class="lh-gauge__wrapper">
    <!-- Wrapper exists for the ::before plugin icon. Cannot create pseudo-elements on svgs. -->
    <div class="lh-gauge__svg-wrapper">
      <svg viewBox="0 0 120 120" class="lh-gauge">
        <circle class="lh-gauge-base" r="56" cx="60" cy="60" stroke-width="8"></circle>
        <circle class="lh-gauge-arc"  r="56" cx="60" cy="60" stroke-width="8"></circle>
      </svg>
    </div>
    <div class="lh-gauge__percentage"></div>
    <!-- TODO: should likely be an h2  -->
    <div class="lh-gauge__label"></div>
  </a>
</template>


<!-- Lighthouse PWA badge gauge -->
<template id="tmpl-lh-gauge--pwa">
  <style>
    .lh-gauge--pwa .lh-gauge--pwa__component {
      display: none;
    }
    .lh-gauge--pwa__wrapper:not(.lh-badged--all) .lh-gauge--pwa__logo > path {
      /* Gray logo unless everything is passing. */
      fill: #B0B0B0;
    }

    .lh-gauge--pwa__disc {
      fill: var(--color-gray-200);
    }

    .lh-gauge--pwa__logo--primary-color {
      fill: #304FFE;
    }

    .lh-gauge--pwa__logo--secondary-color {
      fill: #3D3D3D;
    }
    .dark .lh-gauge--pwa__logo--secondary-color {
      fill: #D8B6B6;
    }

    /* No passing groups. */
    .lh-gauge--pwa__wrapper:not([class*='lh-badged--']) .lh-gauge--pwa__na-line {
      display: inline;
    }
    /* Just optimized. Same n/a line as no passing groups. */
    .lh-gauge--pwa__wrapper.lh-badged--pwa-optimized:not(.lh-badged--pwa-installable):not(.lh-badged--pwa-fast-reliable) .lh-gauge--pwa__na-line {
      display: inline;
    }

    /* Just fast and reliable. */
    .lh-gauge--pwa__wrapper.lh-badged--pwa-fast-reliable:not(.lh-badged--pwa-installable) .lh-gauge--pwa__fast-reliable-badge {
      display: inline;
    }

    /* Just installable. */
    .lh-gauge--pwa__wrapper.lh-badged--pwa-installable:not(.lh-badged--pwa-fast-reliable) .lh-gauge--pwa__installable-badge {
      display: inline;
    }

    /* Fast and reliable and installable. */
    .lh-gauge--pwa__wrapper.lh-badged--pwa-fast-reliable.lh-badged--pwa-installable .lh-gauge--pwa__fast-reliable-installable-badges {
      display: inline;
    }

    /* All passing groups. */
    .lh-gauge--pwa__wrapper.lh-badged--all .lh-gauge--pwa__check-circle {
      display: inline;
    }
  </style>

  <a href="#" class="lh-gauge__wrapper lh-gauge--pwa__wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" class="lh-gauge lh-gauge--pwa">
      <defs>
        <linearGradient id="lh-gauge--pwa__check-circle__gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop stop-color="#00C852" offset="0%"></stop>
          <stop stop-color="#009688" offset="100%"></stop>
        </linearGradient>
        <linearGradient id="lh-gauge--pwa__installable__shadow-gradient" x1="76.056%" x2="24.111%" y1="82.995%" y2="24.735%">
          <stop stop-color="#A5D6A7" offset="0%"></stop>
          <stop stop-color="#80CBC4" offset="100%"></stop>
        </linearGradient>
        <linearGradient id="lh-gauge--pwa__fast-reliable__shadow-gradient" x1="76.056%" y1="82.995%" x2="25.678%" y2="26.493%">
          <stop stop-color="#64B5F6" offset="0%"></stop>
          <stop stop-color="#2979FF" offset="100%"></stop>
        </linearGradient>

        <g id="lh-gauge--pwa__fast-reliable-badge">
          <circle fill="#FFFFFF" cx="10" cy="10" r="10"></circle>
          <path fill="#304FFE" d="M10 3.58l5.25 2.34v3.5c0 3.23-2.24 6.26-5.25 7-3.01-.74-5.25-3.77-5.25-7v-3.5L10 3.58zm-.47 10.74l2.76-4.83.03-.07c.04-.08 0-.24-.22-.24h-1.64l.47-3.26h-.47l-2.7 4.77c-.02.01.05-.1-.04.05-.09.16-.1.31.18.31h1.63l-.47 3.27h.47z"/>
        </g>
        <g id="lh-gauge--pwa__installable-badge">
          <circle fill="#FFFFFF" cx="10" cy="10" r="10"></circle>
          <path fill="#009688" d="M10 4.167A5.835 5.835 0 0 0 4.167 10 5.835 5.835 0 0 0 10 15.833 5.835 5.835 0 0 0 15.833 10 5.835 5.835 0 0 0 10 4.167zm2.917 6.416h-2.334v2.334H9.417v-2.334H7.083V9.417h2.334V7.083h1.166v2.334h2.334v1.166z"/>
        </g>
      </defs>

      <g stroke="none" fill-rule="nonzero">
        <!-- Background and PWA logo (color by default) -->
        <circle class="lh-gauge--pwa__disc" cx="30" cy="30" r="30"></circle>
        <g class="lh-gauge--pwa__logo">
          <path class="lh-gauge--pwa__logo--secondary-color" d="M35.66 19.39l.7-1.75h2L37.4 15 38.6 12l3.4 9h-2.51l-.58-1.61z"/>
          <path class="lh-gauge--pwa__logo--primary-color" d="M33.52 21l3.65-9h-2.42l-2.5 5.82L30.5 12h-1.86l-1.9 5.82-1.35-2.65-1.21 3.72L25.4 21h2.38l1.72-5.2 1.64 5.2z"/>
          <path class="lh-gauge--pwa__logo--secondary-color" fill-rule="nonzero" d="M20.3 17.91h1.48c.45 0 .85-.05 1.2-.15l.39-1.18 1.07-3.3a2.64 2.64 0 0 0-.28-.37c-.55-.6-1.36-.91-2.42-.91H18v9h2.3V17.9zm1.96-3.84c.22.22.33.5.33.87 0 .36-.1.65-.29.87-.2.23-.59.35-1.15.35h-.86v-2.41h.87c.52 0 .89.1 1.1.32z"/>
        </g>

        <!-- No badges. -->
        <rect class="lh-gauge--pwa__component lh-gauge--pwa__na-line" fill="#FFFFFF" x="20" y="32" width="20" height="4" rx="2"></rect>

        <!-- Just fast and reliable. -->
        <g class="lh-gauge--pwa__component lh-gauge--pwa__fast-reliable-badge" transform="translate(20, 29)">
          <path fill="url(#lh-gauge--pwa__fast-reliable__shadow-gradient)" d="M33.63 19.49A30 30 0 0 1 16.2 30.36L3 17.14 17.14 3l16.49 16.49z"/>
          <use href="#lh-gauge--pwa__fast-reliable-badge" />
        </g>

        <!-- Just installable. -->
        <g class="lh-gauge--pwa__component lh-gauge--pwa__installable-badge" transform="translate(20, 29)">
          <path fill="url(#lh-gauge--pwa__installable__shadow-gradient)" d="M33.629 19.487c-4.272 5.453-10.391 9.39-17.415 10.869L3 17.142 17.142 3 33.63 19.487z"/>
          <use href="#lh-gauge--pwa__installable-badge" />
        </g>

        <!-- Fast and reliable and installable. -->
        <g class="lh-gauge--pwa__component lh-gauge--pwa__fast-reliable-installable-badges">
          <g transform="translate(8, 29)"> <!-- fast and reliable -->
            <path fill="url(#lh-gauge--pwa__fast-reliable__shadow-gradient)" d="M16.321 30.463L3 17.143 17.142 3l22.365 22.365A29.864 29.864 0 0 1 22 31c-1.942 0-3.84-.184-5.679-.537z"/>
            <use href="#lh-gauge--pwa__fast-reliable-badge" />
          </g>
          <g transform="translate(32, 29)"> <!-- installable -->
            <path fill="url(#lh-gauge--pwa__installable__shadow-gradient)" d="M25.982 11.84a30.107 30.107 0 0 1-13.08 15.203L3 17.143 17.142 3l8.84 8.84z"/>
            <use href="#lh-gauge--pwa__installable-badge" />
          </g>
        </g>

        <!-- Full PWA. -->
        <g class="lh-gauge--pwa__component lh-gauge--pwa__check-circle" transform="translate(18, 28)">
          <circle fill="#FFFFFF" cx="12" cy="12" r="12"></circle>
          <path fill="url(#lh-gauge--pwa__check-circle__gradient)" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </g>
      </g>
    </svg>

    <div class="lh-gauge__label"></div>
  </a>
</template>

<!-- Lighthouse crtiical request chains component -->
<template id="tmpl-lh-crc">
  <div class="lh-crc-container">
    <style>
      .lh-crc .tree-marker {
        width: 12px;
        height: 26px;
        display: block;
        float: left;
        background-position: top left;
      }
      .lh-crc .horiz-down {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><g fill="%23D8D8D8" fill-rule="evenodd"><path d="M16 12v2H-2v-2z"/><path d="M9 12v14H7V12z"/></g></svg>');
      }
      .lh-crc .right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v2H0v-2z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .up-right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v14H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .vert-right {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v27H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .vert {
        background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v26H7z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
      }
      .lh-crc .crc-tree {
        font-size: 14px;
        width: 100%;
        overflow-x: auto;
      }
      .lh-crc .crc-node {
        height: 26px;
        line-height: 26px;
        white-space: nowrap;
      }
      .lh-crc .crc-node__tree-value {
        margin-left: 10px;
      }
      .lh-crc .crc-node__tree-value div {
        display: inline;
      }
      .lh-crc .crc-node__chain-duration {
        font-weight: 700;
      }
      .lh-crc .crc-initial-nav {
        color: #595959;
        font-style: italic;
      }
      .lh-crc__summary-value {
        margin-bottom: 10px;
      }
    </style>
    <div>
      <div class="lh-crc__summary-value">
        <span class="lh-crc__longest_duration_label"></span> <b class="lh-crc__longest_duration"></b>
      </div>
    </div>
    <div class="lh-crc">
      <div class="crc-initial-nav"></div>
      <!-- stamp for each chain -->
      <template id="tmpl-lh-crc__chains">
        <div class="crc-node">
          <span class="crc-node__tree-marker">

          </span>
          <span class="crc-node__tree-value">

          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<template id="tmpl-lh-3p-filter">
  <style>
    .lh-3p-filter {
      background-color: var(--table-higlight-background-color);
      color: var(--color-gray-600);
      float: right;
      padding: 6px;
    }
    .lh-3p-filter-label, .lh-3p-filter-input {
      vertical-align: middle;
      user-select: none;
    }
    .lh-3p-filter-input:disabled + .lh-3p-ui-string {
      text-decoration: line-through;
    }
  </style>
  <div class="lh-3p-filter">
    <label class="lh-3p-filter-label">
      <input type="checkbox" class="lh-3p-filter-input" checked />
      <span class="lh-3p-ui-string">Show 3rd party resources</span> (<span class="lh-3p-filter-count"></span>)
    </label>
  </div>
</template>

<!-- Lighthouse snippet component -->
<template id="tmpl-lh-snippet">
    <div class="lh-snippet">
      <style>
          :root {
            --snippet-highlight-light: #fbf1f2;
            --snippet-highlight-dark: #ffd6d8;
          }

         .lh-snippet__header {
          position: relative;
          overflow: hidden;
          padding: 10px;
          border-bottom: none;
          color: var(--snippet-color);
          background-color: var(--snippet-background-color);
          border: 1px solid var(--report-border-color-secondary);
        }
        .lh-snippet__title {
          font-weight: bold;
          float: left;
        }
        .lh-snippet__node {
          float: left;
          margin-left: 4px;
        }
        .lh-snippet__toggle-expand {
          padding: 1px 7px;
          margin-top: -1px;
          margin-right: -7px;
          float: right;
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 14px;
          color: #0c50c7;
        }

        .lh-snippet__snippet {
          overflow: auto;
          border: 1px solid var(--report-border-color-secondary);
        }
        /* Container needed so that all children grow to the width of the scroll container */
        .lh-snippet__snippet-inner {
          display: inline-block;
          min-width: 100%;
        }

        .lh-snippet:not(.lh-snippet--expanded) .lh-snippet__show-if-expanded {
          display: none;
        }
        .lh-snippet.lh-snippet--expanded .lh-snippet__show-if-collapsed {
          display: none;
        }

        .lh-snippet__line {
          background: white;
          white-space: pre;
          display: flex;
        }
        .lh-snippet__line:not(.lh-snippet__line--message):first-child {
          padding-top: 4px;
        }
        .lh-snippet__line:not(.lh-snippet__line--message):last-child {
          padding-bottom: 4px;
        }
        .lh-snippet__line--content-highlighted {
          background: var(--snippet-highlight-dark);
        }
        .lh-snippet__line--message {
          background: var(--snippet-highlight-light);
        }
        .lh-snippet__line--message .lh-snippet__line-number {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .lh-snippet__line--message code {
          padding: 10px;
          padding-left: 5px;
          color: var(--color-fail);
          font-family: var(--report-font-family);
        }
        .lh-snippet__line--message code {
          white-space: normal;
        }
        .lh-snippet__line-icon {
          padding-top: 10px;
          display: none;
        }
        .lh-snippet__line--message .lh-snippet__line-icon {
          display: block;
        }
        .lh-snippet__line-icon:before {
          content: "";
          display: inline-block;
          vertical-align: middle;
          margin-right: 4px;
          width: var(--score-icon-size);
          height: var(--score-icon-size);
          background-image: var(--fail-icon-url);
        }
        .lh-snippet__line-number {
          flex-shrink: 0;
          width: 40px;
          text-align: right;
          font-family: monospace;
          padding-right: 5px;
          margin-right: 5px;
          color: var(--color-gray-600);
          user-select: none;
        }
      </style>
      <template id="tmpl-lh-snippet__header">
        <div class="lh-snippet__header">
          <div class="lh-snippet__title"></div>
          <div class="lh-snippet__node"></div>
          <button class="lh-snippet__toggle-expand">
            <span class="lh-snippet__btn-label-collapse lh-snippet__show-if-expanded"></span>
            <span class="lh-snippet__btn-label-expand lh-snippet__show-if-collapsed"></span>
          </button>
        </div>
      </template>
      <template id="tmpl-lh-snippet__content">
        <div class="lh-snippet__snippet">
          <div class="lh-snippet__snippet-inner"></div>
        </div>
      </template>
      <template id="tmpl-lh-snippet__line">
          <div class="lh-snippet__line">
            <div class="lh-snippet__line-number"></div>
            <div class="lh-snippet__line-icon"></div>
            <code></code>
          </div>
        </template>
    </div>
  </template>


/*# sourceURL=third_party/lighthouse/report-assets/templates.html */</div>

  <main><!-- report populated here --></main>

  <div id="lh-log"></div>

  <script>/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self, URL */

/** @typedef {import('./i18n')} I18n */

const ELLIPSIS = '\u2026';
const NBSP = '\xa0';
const PASS_THRESHOLD = 0.9;
const SCREENSHOT_PREFIX = 'data:image/jpeg;base64,';

const RATINGS = {
  PASS: {label: 'pass', minScore: PASS_THRESHOLD},
  AVERAGE: {label: 'average', minScore: 0.5},
  FAIL: {label: 'fail'},
  ERROR: {label: 'error'},
};

// 25 most used tld plus one domains (aka public suffixes) from http archive.
// @see https://github.com/GoogleChrome/lighthouse/pull/5065#discussion_r191926212
// The canonical list is https://publicsuffix.org/learn/ but we're only using subset to conserve bytes
const listOfTlds = [
  'com', 'co', 'gov', 'edu', 'ac', 'org', 'go', 'gob', 'or', 'net', 'in', 'ne', 'nic', 'gouv',
  'web', 'spb', 'blog', 'jus', 'kiev', 'mil', 'wi', 'qc', 'ca', 'bel', 'on',
];

class Util {
  static get PASS_THRESHOLD() {
    return PASS_THRESHOLD;
  }

  static get MS_DISPLAY_VALUE() {
    return `%10d${NBSP}ms`;
  }

  /**
   * Returns a new LHR that's reshaped for slightly better ergonomics within the report rendereer.
   * Also, sets up the localized UI strings used within renderer and makes changes to old LHRs to be
   * compatible with current renderer.
   * The LHR passed in is not mutated.
   * TODO(team): we all agree the LHR shape change is technical debt we should fix
   * @param {LH.Result} result
   * @return {LH.ReportResult}
   */
  static prepareReportResult(result) {
    // If any mutations happen to the report within the renderers, we want the original object untouched
    const clone = /** @type {LH.ReportResult} */ (JSON.parse(JSON.stringify(result)));

    // If LHR is older (≤3.0.3), it has no locale setting. Set default.
    if (!clone.configSettings.locale) {
      clone.configSettings.locale = 'en';
    }

    for (const audit of Object.values(clone.audits)) {
      // Turn 'not-applicable' (LHR <4.0) and 'not_applicable' (older proto versions)
      // into 'notApplicable' (LHR ≥4.0).
      // @ts-ignore tsc rightly flags that these values shouldn't occur.
      // eslint-disable-next-line max-len
      if (audit.scoreDisplayMode === 'not_applicable' || audit.scoreDisplayMode === 'not-applicable') {
        audit.scoreDisplayMode = 'notApplicable';
      }

      if (audit.details) {
        // Turn `auditDetails.type` of undefined (LHR <4.2) and 'diagnostic' (LHR <5.0)
        // into 'debugdata' (LHR ≥5.0).
        // @ts-ignore tsc rightly flags that these values shouldn't occur.
        if (audit.details.type === undefined || audit.details.type === 'diagnostic') {
          audit.details.type = 'debugdata';
        }

        // Add the jpg data URL prefix to filmstrip screenshots without them (LHR <5.0).
        if (audit.details.type === 'filmstrip') {
          for (const screenshot of audit.details.items) {
            if (!screenshot.data.startsWith(SCREENSHOT_PREFIX)) {
              screenshot.data = SCREENSHOT_PREFIX + screenshot.data;
            }
          }
        }
      }
    }

    // For convenience, smoosh all AuditResults into their auditRef (which has just weight & group)
    if (typeof clone.categories !== 'object') throw new Error('No categories provided.');
    for (const category of Object.values(clone.categories)) {
      category.auditRefs.forEach(auditRef => {
        const result = clone.audits[auditRef.id];
        auditRef.result = result;

        // attach the stackpacks to the auditRef object
        if (clone.stackPacks) {
          clone.stackPacks.forEach(pack => {
            if (pack.descriptions[auditRef.id]) {
              auditRef.stackPacks = auditRef.stackPacks || [];
              auditRef.stackPacks.push({
                title: pack.title,
                iconDataURL: pack.iconDataURL,
                description: pack.descriptions[auditRef.id],
              });
            }
          });
        }
      });
    }

    return clone;
  }

  /**
   * Used to determine if the "passed" for the purposes of showing up in the "failed" or "passed"
   * sections of the report.
   *
   * @param {{score: (number|null), scoreDisplayMode: string}} audit
   * @return {boolean}
   */
  static showAsPassed(audit) {
    switch (audit.scoreDisplayMode) {
      case 'manual':
      case 'notApplicable':
        return true;
      case 'error':
      case 'informative':
        return false;
      case 'numeric':
      case 'binary':
      default:
        return Number(audit.score) >= RATINGS.PASS.minScore;
    }
  }

  /**
   * Convert a score to a rating label.
   * @param {number|null} score
   * @param {string=} scoreDisplayMode
   * @return {string}
   */
  static calculateRating(score, scoreDisplayMode) {
    // Handle edge cases first, manual and not applicable receive 'pass', errored audits receive 'error'
    if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'notApplicable') {
      return RATINGS.PASS.label;
    } else if (scoreDisplayMode === 'error') {
      return RATINGS.ERROR.label;
    } else if (score === null) {
      return RATINGS.FAIL.label;
    }

    // At this point, we're rating a standard binary/numeric audit
    let rating = RATINGS.FAIL.label;
    if (score >= RATINGS.PASS.minScore) {
      rating = RATINGS.PASS.label;
    } else if (score >= RATINGS.AVERAGE.minScore) {
      rating = RATINGS.AVERAGE.label;
    }
    return rating;
  }

  /**
   * Split a string by markdown code spans (enclosed in `backticks`), splitting
   * into segments that were enclosed in backticks (marked as `isCode === true`)
   * and those that outside the backticks (`isCode === false`).
   * @param {string} text
   * @return {Array<{isCode: true, text: string}|{isCode: false, text: string}>}
   */
  static splitMarkdownCodeSpans(text) {
    /** @type {Array<{isCode: true, text: string}|{isCode: false, text: string}>} */
    const segments = [];

    // Split on backticked code spans.
    const parts = text.split(/`(.*?)`/g);
    for (let i = 0; i < parts.length; i ++) {
      const text = parts[i];

      // Empty strings are an artifact of splitting, not meaningful.
      if (!text) continue;

      // Alternates between plain text and code segments.
      const isCode = i % 2 !== 0;
      segments.push({
        isCode,
        text,
      });
    }

    return segments;
  }

  /**
   * Split a string on markdown links (e.g. [some link](https://...)) into
   * segments of plain text that weren't part of a link (marked as
   * `isLink === false`), and segments with text content and a URL that did make
   * up a link (marked as `isLink === true`).
   * @param {string} text
   * @return {Array<{isLink: true, text: string, linkHref: string}|{isLink: false, text: string}>}
   */
  static splitMarkdownLink(text) {
    /** @type {Array<{isLink: true, text: string, linkHref: string}|{isLink: false, text: string}>} */
    const segments = [];

    const parts = text.split(/\[([^\]]+?)\]\((https?:\/\/.*?)\)/g);
    while (parts.length) {
      // Shift off the same number of elements as the pre-split and capture groups.
      const [preambleText, linkText, linkHref] = parts.splice(0, 3);

      if (preambleText) { // Skip empty text as it's an artifact of splitting, not meaningful.
        segments.push({
          isLink: false,
          text: preambleText,
        });
      }

      // Append link if there are any.
      if (linkText && linkHref) {
        segments.push({
          isLink: true,
          text: linkText,
          linkHref,
        });
      }
    }

    return segments;
  }

  /**
   * @param {URL} parsedUrl
   * @param {{numPathParts?: number, preserveQuery?: boolean, preserveHost?: boolean}=} options
   * @return {string}
   */
  static getURLDisplayName(parsedUrl, options) {
    // Closure optional properties aren't optional in tsc, so fallback needs undefined  values.
    options = options || {numPathParts: undefined, preserveQuery: undefined,
      preserveHost: undefined};
    const numPathParts = options.numPathParts !== undefined ? options.numPathParts : 2;
    const preserveQuery = options.preserveQuery !== undefined ? options.preserveQuery : true;
    const preserveHost = options.preserveHost || false;

    let name;

    if (parsedUrl.protocol === 'about:' || parsedUrl.protocol === 'data:') {
      // Handle 'about:*' and 'data:*' URLs specially since they have no path.
      name = parsedUrl.href;
    } else {
      name = parsedUrl.pathname;
      const parts = name.split('/').filter(part => part.length);
      if (numPathParts && parts.length > numPathParts) {
        name = ELLIPSIS + parts.slice(-1 * numPathParts).join('/');
      }

      if (preserveHost) {
        name = `${parsedUrl.host}/${name.replace(/^\//, '')}`;
      }
      if (preserveQuery) {
        name = `${name}${parsedUrl.search}`;
      }
    }

    const MAX_LENGTH = 64;
    // Always elide hexadecimal hash
    name = name.replace(/([a-f0-9]{7})[a-f0-9]{13}[a-f0-9]*/g, `$1${ELLIPSIS}`);
    // Also elide other hash-like mixed-case strings
    name = name.replace(/([a-zA-Z0-9-_]{9})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-_]{10,}/g,
      `$1${ELLIPSIS}`);
    // Also elide long number sequences
    name = name.replace(/(\d{3})\d{6,}/g, `$1${ELLIPSIS}`);
    // Merge any adjacent ellipses
    name = name.replace(/\u2026+/g, ELLIPSIS);

    // Elide query params first
    if (name.length > MAX_LENGTH && name.includes('?')) {
      // Try to leave the first query parameter intact
      name = name.replace(/\?([^=]*)(=)?.*/, `?$1$2${ELLIPSIS}`);

      // Remove it all if it's still too long
      if (name.length > MAX_LENGTH) {
        name = name.replace(/\?.*/, `?${ELLIPSIS}`);
      }
    }

    // Elide too long names next
    if (name.length > MAX_LENGTH) {
      const dotIndex = name.lastIndexOf('.');
      if (dotIndex >= 0) {
        name = name.slice(0, MAX_LENGTH - 1 - (name.length - dotIndex)) +
          // Show file extension
          `${ELLIPSIS}${name.slice(dotIndex)}`;
      } else {
        name = name.slice(0, MAX_LENGTH - 1) + ELLIPSIS;
      }
    }

    return name;
  }

  /**
   * Split a URL into a file, hostname and origin for easy display.
   * @param {string} url
   * @return {{file: string, hostname: string, origin: string}}
   */
  static parseURL(url) {
    const parsedUrl = new URL(url);
    return {
      file: Util.getURLDisplayName(parsedUrl),
      hostname: parsedUrl.hostname,
      origin: parsedUrl.origin,
    };
  }

  /**
   * @param {string|URL} value
   * @return {!URL}
   */
  static createOrReturnURL(value) {
    if (value instanceof URL) {
      return value;
    }

    return new URL(value);
  }

  /**
   * Gets the tld of a domain
   *
   * @param {string} hostname
   * @return {string} tld
   */
  static getTld(hostname) {
    const tlds = hostname.split('.').slice(-2);

    if (!listOfTlds.includes(tlds[0])) {
      return `.${tlds[tlds.length - 1]}`;
    }

    return `.${tlds.join('.')}`;
  }

  /**
   * Returns a primary domain for provided hostname (e.g. www.example.com -> example.com).
   * @param {string|URL} url hostname or URL object
   * @returns {string}
   */
  static getRootDomain(url) {
    const hostname = Util.createOrReturnURL(url).hostname;
    const tld = Util.getTld(hostname);

    // tld is .com or .co.uk which means we means that length is 1 to big
    // .com => 2 & .co.uk => 3
    const splitTld = tld.split('.');

    // get TLD + root domain
    return hostname.split('.').slice(-splitTld.length).join('.');
  }

  /**
   * @param {LH.Config.Settings} settings
   * @return {!Array<{name: string, description: string}>}
   */
  static getEnvironmentDisplayValues(settings) {
    const emulationDesc = Util.getEmulationDescriptions(settings);

    return [
      {
        name: Util.i18n.strings.runtimeSettingsDevice,
        description: emulationDesc.deviceEmulation,
      },
      {
        name: Util.i18n.strings.runtimeSettingsNetworkThrottling,
        description: emulationDesc.networkThrottling,
      },
      {
        name: Util.i18n.strings.runtimeSettingsCPUThrottling,
        description: emulationDesc.cpuThrottling,
      },
    ];
  }

  /**
   * @param {LH.Config.Settings} settings
   * @return {{deviceEmulation: string, networkThrottling: string, cpuThrottling: string}}
   */
  static getEmulationDescriptions(settings) {
    let cpuThrottling;
    let networkThrottling;

    const throttling = settings.throttling;

    switch (settings.throttlingMethod) {
      case 'provided':
        cpuThrottling = Util.i18n.strings.throttlingProvided;
        networkThrottling = Util.i18n.strings.throttlingProvided;
        break;
      case 'devtools': {
        const {cpuSlowdownMultiplier, requestLatencyMs} = throttling;
        cpuThrottling = `${Util.i18n.formatNumber(cpuSlowdownMultiplier)}x slowdown (DevTools)`;
        networkThrottling = `${Util.i18n.formatNumber(requestLatencyMs)}${NBSP}ms HTTP RTT, ` +
          `${Util.i18n.formatNumber(throttling.downloadThroughputKbps)}${NBSP}Kbps down, ` +
          `${Util.i18n.formatNumber(throttling.uploadThroughputKbps)}${NBSP}Kbps up (DevTools)`;
        break;
      }
      case 'simulate': {
        const {cpuSlowdownMultiplier, rttMs, throughputKbps} = throttling;
        cpuThrottling = `${Util.i18n.formatNumber(cpuSlowdownMultiplier)}x slowdown (Simulated)`;
        networkThrottling = `${Util.i18n.formatNumber(rttMs)}${NBSP}ms TCP RTT, ` +
          `${Util.i18n.formatNumber(throughputKbps)}${NBSP}Kbps throughput (Simulated)`;
        break;
      }
      default:
        cpuThrottling = Util.i18n.strings.runtimeUnknown;
        networkThrottling = Util.i18n.strings.runtimeUnknown;
    }

    let deviceEmulation = Util.i18n.strings.runtimeNoEmulation;
    if (settings.emulatedFormFactor === 'mobile') {
      deviceEmulation = Util.i18n.strings.runtimeMobileEmulation;
    } else if (settings.emulatedFormFactor === 'desktop') {
      deviceEmulation = Util.i18n.strings.runtimeDesktopEmulation;
    }

    return {
      deviceEmulation,
      cpuThrottling,
      networkThrottling,
    };
  }

  /**
   * Returns only lines that are near a message, or the first few lines if there are
   * no line messages.
   * @param {LH.Audit.Details.SnippetValue['lines']} lines
   * @param {LH.Audit.Details.SnippetValue['lineMessages']} lineMessages
   * @param {number} surroundingLineCount Number of lines to include before and after
   * the message. If this is e.g. 2 this function might return 5 lines.
   */
  static filterRelevantLines(lines, lineMessages, surroundingLineCount) {
    if (lineMessages.length === 0) {
      // no lines with messages, just return the first bunch of lines
      return lines.slice(0, surroundingLineCount * 2 + 1);
    }

    const minGapSize = 3;
    const lineNumbersToKeep = new Set();
    // Sort messages so we can check lineNumbersToKeep to see how big the gap to
    // the previous line is.
    lineMessages = lineMessages.sort((a, b) => (a.lineNumber || 0) - (b.lineNumber || 0));
    lineMessages.forEach(({lineNumber}) => {
      let firstSurroundingLineNumber = lineNumber - surroundingLineCount;
      let lastSurroundingLineNumber = lineNumber + surroundingLineCount;

      while (firstSurroundingLineNumber < 1) {
        // make sure we still show (surroundingLineCount * 2 + 1) lines in total
        firstSurroundingLineNumber++;
        lastSurroundingLineNumber++;
      }
      // If only a few lines would be omitted normally then we prefer to include
      // extra lines to avoid the tiny gap
      if (lineNumbersToKeep.has(firstSurroundingLineNumber - minGapSize - 1)) {
        firstSurroundingLineNumber -= minGapSize;
      }
      for (let i = firstSurroundingLineNumber; i <= lastSurroundingLineNumber; i++) {
        const surroundingLineNumber = i;
        lineNumbersToKeep.add(surroundingLineNumber);
      }
    });

    return lines.filter(line => lineNumbersToKeep.has(line.lineNumber));
  }

  /**
   * @param {string} categoryId
   */
  static isPluginCategory(categoryId) {
    return categoryId.startsWith('lighthouse-plugin-');
  }
}

/**
 * Some parts of the report renderer require data found on the LHR. Instead of wiring it
 * through, we have this global.
 * @type {LH.ReportResult | null}
 */
Util.reportJson = null;

/** @type {I18n} */
// @ts-ignore: Is set in report renderer.
Util.i18n = null;

/**
 * Report-renderer-specific strings.
 */
Util.UIStrings = {
  /** Disclaimer shown to users below the metric values (First Contentful Paint, Time to Interactive, etc) to warn them that the numbers they see will likely change slightly the next time they run Lighthouse. */
  varianceDisclaimer: 'Values are estimated and may vary. The [performance score is calculated](https://web.dev/performance-scoring/) directly from these metrics.',
  /** Text link pointing to an interactive calculator that explains Lighthouse scoring. The link text should be fairly short. */
  calculatorLink: 'See calculator.',
  /** Column heading label for the listing of opportunity audits. Each audit title represents an opportunity. There are only 2 columns, so no strict character limit.  */
  opportunityResourceColumnLabel: 'Opportunity',
  /** Column heading label for the estimated page load savings of opportunity audits. Estimated Savings is the total amount of time (in seconds) that Lighthouse computed could be reduced from the total page load time, if the suggested action is taken. There are only 2 columns, so no strict character limit. */
  opportunitySavingsColumnLabel: 'Estimated Savings',

  /** An error string displayed next to a particular audit when it has errored, but not provided any specific error message. */
  errorMissingAuditInfo: 'Report error: no audit information',
  /** A label, shown next to an audit title or metric title, indicating that there was an error computing it. The user can hover on the label to reveal a tooltip with the extended error message. Translation should be short (< 20 characters). */
  errorLabel: 'Error!',
  /** This label is shown above a bulleted list of warnings. It is shown directly below an audit that produced warnings. Warnings describe situations the user should be aware of, as Lighthouse was unable to complete all the work required on this audit. For example, The 'Unable to decode image (biglogo.jpg)' warning may show up below an image encoding audit. */
  warningHeader: 'Warnings: ',
  /** The tooltip text on an expandable chevron icon. Clicking the icon expands a section to reveal a list of audit results that was hidden by default. */
  auditGroupExpandTooltip: 'Show audits',
  /** Section heading shown above a list of passed audits that contain warnings. Audits under this section do not negatively impact the score, but Lighthouse has generated some potentially actionable suggestions that should be reviewed. This section is expanded by default and displays after the failing audits. */
  warningAuditsGroupTitle: 'Passed audits but with warnings',
  /** Section heading shown above a list of audits that are passing. 'Passed' here refers to a passing grade. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */
  passedAuditsGroupTitle: 'Passed audits',
  /** Section heading shown above a list of audits that do not apply to the page. For example, if an audit is 'Are images optimized?', but the page has no images on it, the audit will be marked as not applicable. This is neither passing or failing. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */
  notApplicableAuditsGroupTitle: 'Not applicable',
  /** Section heading shown above a list of audits that were not computed by Lighthouse. They serve as a list of suggestions for the user to go and manually check. For example, Lighthouse can't automate testing cross-browser compatibility, so that is listed within this section, so the user is reminded to test it themselves. This section is collapsed by default, as the user should be focusing on the failed audits instead. Users can click this heading to reveal the list. */
  manualAuditsGroupTitle: 'Additional items to manually check',

  /** Label shown preceding any important warnings that may have invalidated the entire report. For example, if the user has Chrome extensions installed, they may add enough performance overhead that Lighthouse's performance metrics are unreliable. If shown, this will be displayed at the top of the report UI. */
  toplevelWarningsMessage: 'There were issues affecting this run of Lighthouse:',

  /** String of text shown in a graphical representation of the flow of network requests for the web page. This label represents the initial network request that fetches an HTML page. This navigation may be redirected (eg. Initial navigation to http://example.com redirects to https://www.example.com). */
  crcInitialNavigation: 'Initial Navigation',
  /** Label of value shown in the summary of critical request chains. Refers to the total amount of time (milliseconds) of the longest critical path chain/sequence of network requests. Example value: 2310 ms */
  crcLongestDurationLabel: 'Maximum critical path latency:',

  /** Label for button that shows all lines of the snippet when clicked */
  snippetExpandButtonLabel: 'Expand snippet',
  /** Label for button that only shows a few lines of the snippet when clicked */
  snippetCollapseButtonLabel: 'Collapse snippet',

  /** Explanation shown to users below performance results to inform them that the test was done with a 4G network connection and to warn them that the numbers they see will likely change slightly the next time they run Lighthouse. 'Lighthouse' becomes link text to additional documentation. */
  lsPerformanceCategoryDescription: '[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.',
  /** Title of the lab data section of the Performance category. Within this section are various speed metrics which quantify the pageload performance into values presented in seconds and milliseconds. "Lab" is an abbreviated form of "laboratory", and refers to the fact that the data is from a controlled test of a website, not measurements from real users visiting that site.  */
  labDataTitle: 'Lab Data',

  /** This label is for a checkbox above a table of items loaded by a web page. The checkbox is used to show or hide third-party (or "3rd-party") resources in the table, where "third-party resources" refers to items loaded by a web page from URLs that aren't controlled by the owner of the web page. */
  thirdPartyResourcesLabel: 'Show 3rd-party resources',

  /** Option in a dropdown menu that opens a small, summary report in a print dialog.  */
  dropdownPrintSummary: 'Print Summary',
  /** Option in a dropdown menu that opens a full Lighthouse report in a print dialog.  */
  dropdownPrintExpanded: 'Print Expanded',
  /** Option in a dropdown menu that copies the Lighthouse JSON object to the system clipboard. */
  dropdownCopyJSON: 'Copy JSON',
  /** Option in a dropdown menu that saves the Lighthouse report HTML locally to the system as a '.html' file. */
  dropdownSaveHTML: 'Save as HTML',
  /** Option in a dropdown menu that saves the Lighthouse JSON object to the local system as a '.json' file. */
  dropdownSaveJSON: 'Save as JSON',
  /** Option in a dropdown menu that opens the current report in the Lighthouse Viewer Application. */
  dropdownViewer: 'Open in Viewer',
  /** Option in a dropdown menu that saves the current report as a new Github Gist. */
  dropdownSaveGist: 'Save as Gist',
  /** Option in a dropdown menu that toggles the themeing of the report between Light(default) and Dark themes. */
  dropdownDarkTheme: 'Toggle Dark Theme',

  /** Title of the Runtime settings table in a Lighthouse report.  Runtime settings are the environment configurations that a specific report used at auditing time. */
  runtimeSettingsTitle: 'Runtime Settings',
  /** Label for a row in a table that shows the URL that was audited during a Lighthouse run. */
  runtimeSettingsUrl: 'URL',
  /** Label for a row in a table that shows the time at which a Lighthouse run was conducted; formatted as a timestamp, e.g. Jan 1, 1970 12:00 AM UTC. */
  runtimeSettingsFetchTime: 'Fetch Time',
  /** Label for a row in a table that describes the kind of device that was emulated for the Lighthouse run.  Example values for row elements: 'No Emulation', 'Emulated Desktop', etc. */
  runtimeSettingsDevice: 'Device',
  /** Label for a row in a table that describes the network throttling conditions that were used during a Lighthouse run, if any. */
  runtimeSettingsNetworkThrottling: 'Network throttling',
  /** Label for a row in a table that describes the CPU throttling conditions that were used during a Lighthouse run, if any.*/
  runtimeSettingsCPUThrottling: 'CPU throttling',
  /** Label for a row in a table that shows in what tool Lighthouse is being run (e.g. The lighthouse CLI, Chrome DevTools, Lightrider, WebPageTest, etc). */
  runtimeSettingsChannel: 'Channel',
  /** Label for a row in a table that shows the User Agent that was detected on the Host machine that ran Lighthouse. */
  runtimeSettingsUA: 'User agent (host)',
  /** Label for a row in a table that shows the User Agent that was used to send out all network requests during the Lighthouse run. */
  runtimeSettingsUANetwork: 'User agent (network)',
  /** Label for a row in a table that shows the estimated CPU power of the machine running Lighthouse. Example row values: 532, 1492, 783. */
  runtimeSettingsBenchmark: 'CPU/Memory Power',

  /** Label for button to create an issue against the Lighthouse Github project. */
  footerIssue: 'File an issue',

  /** Descriptive explanation for emulation setting when no device emulation is set. */
  runtimeNoEmulation: 'No emulation',
  /** Descriptive explanation for emulation setting when emulating a Moto G4 mobile device. */
  runtimeMobileEmulation: 'Emulated Moto G4',
  /** Descriptive explanation for emulation setting when emulating a generic desktop form factor, as opposed to a mobile-device like form factor. */
  runtimeDesktopEmulation: 'Emulated Desktop',
  /** Descriptive explanation for a runtime setting that is set to an unknown value. */
  runtimeUnknown: 'Unknown',

  /** Descriptive explanation for environment throttling that was provided by the runtime environment instead of provided by Lighthouse throttling. */
  throttlingProvided: 'Provided by environment',
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Util;
} else {
  self.Util = Util;
}
;
/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals URL self Util */

/** @typedef {HTMLElementTagNameMap & {[id: string]: HTMLElement}} HTMLElementByTagName */

class DOM {
  /**
   * @param {Document} document
   */
  constructor(document) {
    /** @type {Document} */
    this._document = document;
    /** @type {string} */
    this._lighthouseChannel = 'unknown';
  }

  /**
   * @template {string} T
   * @param {T} name
   * @param {string=} className
   * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs.
   *     Note: if an attribute key has an undefined value, this method does not
   *     set the attribute on the node.
   * @return {HTMLElementByTagName[T]}
   */
  createElement(name, className, attrs = {}) {
    const element = this._document.createElement(name);
    if (className) {
      element.className = className;
    }
    Object.keys(attrs).forEach(key => {
      const value = attrs[key];
      if (typeof value !== 'undefined') {
        element.setAttribute(key, value);
      }
    });
    return element;
  }

  /**
   * @return {!DocumentFragment}
   */
  createFragment() {
    return this._document.createDocumentFragment();
  }

  /**
   * @template {string} T
   * @param {Element} parentElem
   * @param {T} elementName
   * @param {string=} className
   * @param {Object<string, (string|undefined)>=} attrs Attribute key/val pairs.
   *     Note: if an attribute key has an undefined value, this method does not
   *     set the attribute on the node.
   * @return {HTMLElementByTagName[T]}
   */
  createChildOf(parentElem, elementName, className, attrs) {
    const element = this.createElement(elementName, className, attrs);
    parentElem.appendChild(element);
    return element;
  }

  /**
   * @param {string} selector
   * @param {ParentNode} context
   * @return {!DocumentFragment} A clone of the template content.
   * @throws {Error}
   */
  cloneTemplate(selector, context) {
    const template = /** @type {?HTMLTemplateElement} */ (context.querySelector(selector));
    if (!template) {
      throw new Error(`Template not found: template${selector}`);
    }

    const clone = this._document.importNode(template.content, true);

    // Prevent duplicate styles in the DOM. After a template has been stamped
    // for the first time, remove the clone's styles so they're not re-added.
    if (template.hasAttribute('data-stamped')) {
      this.findAll('style', clone).forEach(style => style.remove());
    }
    template.setAttribute('data-stamped', 'true');

    return clone;
  }

  /**
   * Resets the "stamped" state of the templates.
   */
  resetTemplates() {
    this.findAll('template[data-stamped]', this._document).forEach(t => {
      t.removeAttribute('data-stamped');
    });
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  convertMarkdownLinkSnippets(text) {
    const element = this.createElement('span');

    for (const segment of Util.splitMarkdownLink(text)) {
      if (!segment.isLink) {
        // Plain text segment.
        element.appendChild(this._document.createTextNode(segment.text));
        continue;
      }

      // Otherwise, append any links found.
      const url = new URL(segment.linkHref);

      const DOCS_ORIGINS = ['https://developers.google.com', 'https://web.dev'];
      if (DOCS_ORIGINS.includes(url.origin)) {
        url.searchParams.set('utm_source', 'lighthouse');
        url.searchParams.set('utm_medium', this._lighthouseChannel);
      }

      const a = this.createElement('a');
      a.rel = 'noopener';
      a.target = '_blank';
      a.textContent = segment.text;
      a.href = url.href;
      element.appendChild(a);
    }

    return element;
  }

  /**
   * @param {string} markdownText
   * @return {Element}
   */
  convertMarkdownCodeSnippets(markdownText) {
    const element = this.createElement('span');

    for (const segment of Util.splitMarkdownCodeSpans(markdownText)) {
      if (segment.isCode) {
        const pre = this.createElement('code');
        pre.textContent = segment.text;
        element.appendChild(pre);
      } else {
        element.appendChild(this._document.createTextNode(segment.text));
      }
    }

    return element;
  }

  /**
   * The channel to use for UTM data when rendering links to the documentation.
   * @param {string} lighthouseChannel
   */
  setLighthouseChannel(lighthouseChannel) {
    this._lighthouseChannel = lighthouseChannel;
  }

  /**
   * @return {Document}
   */
  document() {
    return this._document;
  }

  /**
   * TODO(paulirish): import and conditionally apply the DevTools frontend subclasses instead of this
   * @return {boolean}
   */
  isDevTools() {
    return !!this._document.querySelector('.lh-devtools');
  }

  /**
   * Guaranteed context.querySelector. Always returns an element or throws if
   * nothing matches query.
   * @param {string} query
   * @param {ParentNode} context
   * @return {!HTMLElement}
   */
  find(query, context) {
    /** @type {?HTMLElement} */
    const result = context.querySelector(query);
    if (result === null) {
      throw new Error(`query ${query} not found`);
    }
    return result;
  }

  /**
   * Helper for context.querySelectorAll. Returns an Array instead of a NodeList.
   * @param {string} query
   * @param {ParentNode} context
   * @return {!Array<HTMLElement>}
   */
  findAll(query, context) {
    return Array.from(context.querySelectorAll(query));
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DOM;
} else {
  self.DOM = DOM;
}
;
/*
Details Element Polyfill 2.4.0
Copyright © 2019 Javan Makhmali
 */
(function() {
  "use strict";
  var element = document.createElement("details");
  var elementIsNative = typeof HTMLDetailsElement != "undefined" && element instanceof HTMLDetailsElement;
  var support = {
    open: "open" in element || elementIsNative,
    toggle: "ontoggle" in element
  };
  var styles = '\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "►";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "▼";\n}\n';
  var _ref = [], forEach = _ref.forEach, slice = _ref.slice;
  if (!support.open) {
    polyfillStyles();
    polyfillProperties();
    polyfillToggle();
    polyfillAccessibility();
  }
  if (support.open && !support.toggle) {
    polyfillToggleEvent();
  }
  function polyfillStyles() {
    document.head.insertAdjacentHTML("afterbegin", "<style>" + styles + "\u003c/style>");
  }
  function polyfillProperties() {
    var prototype = document.createElement("details").constructor.prototype;
    var setAttribute = prototype.setAttribute, removeAttribute = prototype.removeAttribute;
    var open = Object.getOwnPropertyDescriptor(prototype, "open");
    Object.defineProperties(prototype, {
      open: {
        get: function get() {
          if (this.tagName == "DETAILS") {
            return this.hasAttribute("open");
          } else {
            if (open && open.get) {
              return open.get.call(this);
            }
          }
        },
        set: function set(value) {
          if (this.tagName == "DETAILS") {
            return value ? this.setAttribute("open", "") : this.removeAttribute("open");
          } else {
            if (open && open.set) {
              return open.set.call(this, value);
            }
          }
        }
      },
      setAttribute: {
        value: function value(name, _value) {
          var _this = this;
          var call = function call() {
            return setAttribute.call(_this, name, _value);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (!wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", true);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      },
      removeAttribute: {
        value: function value(name) {
          var _this2 = this;
          var call = function call() {
            return removeAttribute.call(_this2, name);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", false);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      }
    });
  }
  function polyfillToggle() {
    onTogglingTrigger(function(element) {
      element.hasAttribute("open") ? element.removeAttribute("open") : element.setAttribute("open", "");
    });
  }
  function polyfillToggleEvent() {
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, function(mutation) {
          var target = mutation.target, attributeName = mutation.attributeName;
          if (target.tagName == "DETAILS" && attributeName == "open") {
            triggerToggle(target);
          }
        });
      }).observe(document.documentElement, {
        attributes: true,
        subtree: true
      });
    } else {
      onTogglingTrigger(function(element) {
        var wasOpen = element.getAttribute("open");
        setTimeout(function() {
          var isOpen = element.getAttribute("open");
          if (wasOpen != isOpen) {
            triggerToggle(element);
          }
        }, 1);
      });
    }
  }
  function polyfillAccessibility() {
    setAccessibilityAttributes(document);
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, function(mutation) {
          forEach.call(mutation.addedNodes, setAccessibilityAttributes);
        });
      }).observe(document.documentElement, {
        subtree: true,
        childList: true
      });
    } else {
      document.addEventListener("DOMNodeInserted", function(event) {
        setAccessibilityAttributes(event.target);
      });
    }
  }
  function setAccessibilityAttributes(root) {
    findElementsWithTagName(root, "SUMMARY").forEach(function(summary) {
      var details = findClosestElementWithTagName(summary, "DETAILS");
      summary.setAttribute("aria-expanded", details.hasAttribute("open"));
      if (!summary.hasAttribute("tabindex")) summary.setAttribute("tabindex", "0");
      if (!summary.hasAttribute("role")) summary.setAttribute("role", "button");
    });
  }
  function eventIsSignificant(event) {
    return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable);
  }
  function onTogglingTrigger(callback) {
    addEventListener("click", function(event) {
      if (eventIsSignificant(event)) {
        if (event.which <= 1) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
          }
        }
      }
    }, false);
    addEventListener("keydown", function(event) {
      if (eventIsSignificant(event)) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
            event.preventDefault();
          }
        }
      }
    }, false);
  }
  function triggerToggle(element) {
    var event = document.createEvent("Event");
    event.initEvent("toggle", false, false);
    element.dispatchEvent(event);
  }
  function findElementsWithTagName(root, tagName) {
    return (root.tagName == tagName ? [ root ] : []).concat(typeof root.getElementsByTagName == "function" ? slice.call(root.getElementsByTagName(tagName)) : []);
  }
  function findClosestElementWithTagName(element, tagName) {
    if (typeof element.closest == "function") {
      return element.closest(tagName);
    } else {
      while (element) {
        if (element.tagName == tagName) {
          return element;
        } else {
          element = element.parentNode;
        }
      }
    }
  }
})();
;
/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self CriticalRequestChainRenderer SnippetRenderer Util URL */

/** @typedef {import('./dom.js')} DOM */

const URL_PREFIXES = ['http://', 'https://', 'data:'];

class DetailsRenderer {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    this._dom = dom;
    /** @type {ParentNode} */
    this._templateContext; // eslint-disable-line no-unused-expressions
  }

  /**
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this._templateContext = context;
  }

  /**
   * @param {LH.Audit.Details} details
   * @return {Element|null}
   */
  render(details) {
    switch (details.type) {
      case 'filmstrip':
        return this._renderFilmstrip(details);
      case 'list':
        return this._renderList(details);
      case 'table':
        return this._renderTable(details);
      case 'criticalrequestchain':
        return CriticalRequestChainRenderer.render(this._dom, this._templateContext, details, this);
      case 'opportunity':
        return this._renderTable(details);

      // Internal-only details, not for rendering.
      case 'screenshot':
      case 'debugdata':
        return null;

      default: {
        // @ts-ignore tsc thinks this is unreachable, but be forward compatible
        // with new unexpected detail types.
        return this._renderUnknown(details.type, details);
      }
    }
  }

  /**
   * @param {{value: number, granularity?: number}} details
   * @return {Element}
   */
  _renderBytes(details) {
    // TODO: handle displayUnit once we have something other than 'kb'
    const value = Util.i18n.formatBytesToKB(details.value, details.granularity);
    return this._renderText(value);
  }

  /**
   * @param {{value: number, granularity?: number, displayUnit?: string}} details
   * @return {Element}
   */
  _renderMilliseconds(details) {
    let value = Util.i18n.formatMilliseconds(details.value, details.granularity);
    if (details.displayUnit === 'duration') {
      value = Util.i18n.formatDuration(details.value);
    }

    return this._renderText(value);
  }

  /**
   * @param {string} text
   * @return {HTMLElement}
   */
  renderTextURL(text) {
    const url = text;

    let displayedPath;
    let displayedHost;
    let title;
    try {
      const parsed = Util.parseURL(url);
      displayedPath = parsed.file === '/' ? parsed.origin : parsed.file;
      displayedHost = parsed.file === '/' ? '' : `(${parsed.hostname})`;
      title = url;
    } catch (e) {
      displayedPath = url;
    }

    const element = this._dom.createElement('div', 'lh-text__url');
    element.appendChild(this._renderLink({text: displayedPath, url}));

    if (displayedHost) {
      const hostElem = this._renderText(displayedHost);
      hostElem.classList.add('lh-text__url-host');
      element.appendChild(hostElem);
    }

    if (title) {
      element.title = url;
      // set the url on the element's dataset which we use to check 3rd party origins
      element.dataset.url = url;
    }
    return element;
  }

  /**
   * @param {{text: string, url: string}} details
   * @return {Element}
   */
  _renderLink(details) {
    const allowedProtocols = ['https:', 'http:'];
    let url;
    try {
      url = new URL(details.url);
    } catch (_) {}

    if (!url || !allowedProtocols.includes(url.protocol)) {
      // Fall back to just the link text if invalid or protocol not allowed.
      return this._renderText(details.text);
    }

    const a = this._dom.createElement('a');
    a.rel = 'noopener';
    a.target = '_blank';
    a.textContent = details.text;
    a.href = url.href;

    return a;
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  _renderText(text) {
    const element = this._dom.createElement('div', 'lh-text');
    element.textContent = text;
    return element;
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  _renderNumeric(text) {
    // TODO: this should probably accept a number and call `formatNumber` instead of being identical
    // to _renderText.
    const element = this._dom.createElement('div', 'lh-numeric');
    element.textContent = text;
    return element;
  }

  /**
   * Create small thumbnail with scaled down image asset.
   * @param {string} details
   * @return {Element}
   */
  _renderThumbnail(details) {
    const element = this._dom.createElement('img', 'lh-thumbnail');
    const strValue = details;
    element.src = strValue;
    element.title = strValue;
    element.alt = '';
    return element;
  }

  /**
   * @param {string} type
   * @param {*} value
   */
  _renderUnknown(type, value) {
    // eslint-disable-next-line no-console
    console.error(`Unknown details type: ${type}`, value);
    const element = this._dom.createElement('details', 'lh-unknown');
    this._dom.createChildOf(element, 'summary').textContent =
      `We don't know how to render audit details of type \`${type}\`. ` +
      'The Lighthouse version that collected this data is likely newer than the Lighthouse ' +
      'version of the report renderer. Expand for the raw JSON.';
    this._dom.createChildOf(element, 'pre').textContent = JSON.stringify(value, null, 2);
    return element;
  }

  /**
   * Render a details item value for embedding in a table. Renders the value
   * based on the heading's valueType, unless the value itself has a `type`
   * property to override it.
   * @param {LH.Audit.Details.ItemValue} value
   * @param {LH.Audit.Details.OpportunityColumnHeading} heading
   * @return {Element|null}
   */
  _renderTableValue(value, heading) {
    if (typeof value === 'undefined' || value === null) {
      return null;
    }

    // First deal with the possible object forms of value.
    if (typeof value === 'object') {
      // The value's type overrides the heading's for this column.
      switch (value.type) {
        case 'code': {
          return this._renderCode(value.value);
        }
        case 'link': {
          return this._renderLink(value);
        }
        case 'node': {
          return this.renderNode(value);
        }
        case 'source-location': {
          return this.renderSourceLocation(value);
        }
        case 'url': {
          return this.renderTextURL(value.value);
        }
        default: {
          return this._renderUnknown(value.type, value);
        }
      }
    }

    // Next, deal with primitives.
    switch (heading.valueType) {
      case 'bytes': {
        const numValue = Number(value);
        return this._renderBytes({value: numValue, granularity: heading.granularity});
      }
      case 'code': {
        const strValue = String(value);
        return this._renderCode(strValue);
      }
      case 'ms': {
        const msValue = {
          value: Number(value),
          granularity: heading.granularity,
          displayUnit: heading.displayUnit,
        };
        return this._renderMilliseconds(msValue);
      }
      case 'numeric': {
        const strValue = String(value);
        return this._renderNumeric(strValue);
      }
      case 'text': {
        const strValue = String(value);
        return this._renderText(strValue);
      }
      case 'thumbnail': {
        const strValue = String(value);
        return this._renderThumbnail(strValue);
      }
      case 'timespanMs': {
        const numValue = Number(value);
        return this._renderMilliseconds({value: numValue});
      }
      case 'url': {
        const strValue = String(value);
        if (URL_PREFIXES.some(prefix => strValue.startsWith(prefix))) {
          return this.renderTextURL(strValue);
        } else {
          // Fall back to <pre> rendering if not actually a URL.
          return this._renderCode(strValue);
        }
      }
      default: {
        return this._renderUnknown(heading.valueType, value);
      }
    }
  }

  /**
   * Get the headings of a table-like details object, converted into the
   * OpportunityColumnHeading type until we have all details use the same
   * heading format.
   * @param {LH.Audit.Details.Table|LH.Audit.Details.Opportunity} tableLike
   * @return {Array<LH.Audit.Details.OpportunityColumnHeading>}
   */
  _getCanonicalizedHeadingsFromTable(tableLike) {
    if (tableLike.type === 'opportunity') {
      return tableLike.headings;
    }

    return tableLike.headings.map(heading => this._getCanonicalizedHeading(heading));
  }

  /**
   * Get the headings of a table-like details object, converted into the
   * OpportunityColumnHeading type until we have all details use the same
   * heading format.
   * @param {LH.Audit.Details.TableColumnHeading} heading
   * @return {LH.Audit.Details.OpportunityColumnHeading}
   */
  _getCanonicalizedHeading(heading) {
    let subRows;
    if (heading.subRows) {
      // @ts-ignore: It's ok that there is no text.
      subRows = this._getCanonicalizedHeading(heading.subRows);
      if (!subRows.key) {
        // eslint-disable-next-line no-console
        console.warn('key should not be null');
      }
      subRows = {...subRows, key: subRows.key || ''};
    }

    return {
      key: heading.key,
      valueType: heading.itemType,
      subRows,
      label: heading.text,
      displayUnit: heading.displayUnit,
      granularity: heading.granularity,
    };
  }

  /**
   * @param {LH.Audit.Details.ItemValue[]} values
   * @param {LH.Audit.Details.OpportunityColumnHeading} heading
   * @return {Element}
   */
  _renderSubRows(values, heading) {
    const subRowsElement = this._dom.createElement('div', 'lh-sub-rows');
    for (const childValue of values) {
      const subRowElement = this._renderTableValue(childValue, heading);
      if (!subRowElement) continue;
      subRowElement.classList.add('lh-sub-row');
      subRowsElement.appendChild(subRowElement);
    }
    return subRowsElement;
  }

  /**
   * @param {LH.Audit.Details.Table|LH.Audit.Details.Opportunity} details
   * @return {Element}
   */
  _renderTable(details) {
    if (!details.items.length) return this._dom.createElement('span');

    const tableElem = this._dom.createElement('table', 'lh-table');
    const theadElem = this._dom.createChildOf(tableElem, 'thead');
    const theadTrElem = this._dom.createChildOf(theadElem, 'tr');

    const headings = this._getCanonicalizedHeadingsFromTable(details);

    for (const heading of headings) {
      const valueType = heading.valueType || 'text';
      const classes = `lh-table-column--${valueType}`;
      const labelEl = this._dom.createElement('div', 'lh-text');
      labelEl.textContent = heading.label;
      this._dom.createChildOf(theadTrElem, 'th', classes).appendChild(labelEl);
    }

    const tbodyElem = this._dom.createChildOf(tableElem, 'tbody');
    for (const row of details.items) {
      const rowElem = this._dom.createChildOf(tbodyElem, 'tr');
      for (const heading of headings) {
        const valueFragment = this._dom.createFragment();

        if (heading.key === null && !heading.subRows) {
          // eslint-disable-next-line no-console
          console.warn('A header with a null `key` should define `subRows`.');
        }

        if (heading.key === null) {
          const emptyElement = this._dom.createElement('div');
          emptyElement.innerHTML = '&nbsp;';
          valueFragment.appendChild(emptyElement);
        } else {
          const value = row[heading.key];
          const valueElement =
            value !== undefined && !Array.isArray(value) && this._renderTableValue(value, heading);
          if (valueElement) valueFragment.appendChild(valueElement);
        }

        if (heading.subRows) {
          const subRowsHeading = {
            key: heading.subRows.key,
            valueType: heading.subRows.valueType || heading.valueType,
            granularity: heading.subRows.granularity || heading.granularity,
            displayUnit: heading.subRows.displayUnit || heading.displayUnit,
            label: '',
          };
          const values = row[subRowsHeading.key];
          if (Array.isArray(values)) {
            const subRowsElement = this._renderSubRows(values, subRowsHeading);
            valueFragment.appendChild(subRowsElement);
          }
        }

        if (valueFragment.childElementCount) {
          const classes = `lh-table-column--${heading.valueType}`;
          this._dom.createChildOf(rowElem, 'td', classes).appendChild(valueFragment);
        } else {
          this._dom.createChildOf(rowElem, 'td', 'lh-table-column--empty');
        }
      }
    }
    return tableElem;
  }

  /**
   * @param {LH.Audit.Details.List} details
   * @return {Element}
   */
  _renderList(details) {
    const listContainer = this._dom.createElement('div', 'lh-list');

    details.items.forEach(item => {
      const snippetEl = SnippetRenderer.render(this._dom, this._templateContext, item, this);
      listContainer.appendChild(snippetEl);
    });

    return listContainer;
  }

  /**
   * @param {LH.Audit.Details.NodeValue} item
   * @return {Element}
   */
  renderNode(item) {
    const element = this._dom.createElement('span', 'lh-node');
    if (item.nodeLabel) {
      const nodeLabelEl = this._dom.createElement('div');
      nodeLabelEl.textContent = item.nodeLabel;
      element.appendChild(nodeLabelEl);
    }
    if (item.snippet) {
      const snippetEl = this._dom.createElement('div');
      snippetEl.classList.add('lh-node__snippet');
      snippetEl.textContent = item.snippet;
      element.appendChild(snippetEl);
    }
    if (item.selector) {
      element.title = item.selector;
    }
    if (item.path) element.setAttribute('data-path', item.path);
    if (item.selector) element.setAttribute('data-selector', item.selector);
    if (item.snippet) element.setAttribute('data-snippet', item.snippet);

    return element;
  }

  /**
   * @param {LH.Audit.Details.SourceLocationValue} item
   * @return {Element|null}
   * @protected
   */
  renderSourceLocation(item) {
    if (!item.url) {
      return null;
    }

    // Lines are shown as one-indexed.
    const line = item.line + 1;
    const column = item.column;

    let element;
    if (item.urlProvider === 'network') {
      element = this.renderTextURL(item.url);
      this._dom.find('a', element).textContent += `:${line}:${column}`;
    } else {
      element = this._renderText(`${item.url}:${line}:${column} (from sourceURL)`);
    }

    element.classList.add('lh-source-location');
    element.setAttribute('data-source-url', item.url);
    // DevTools expects zero-indexed lines.
    element.setAttribute('data-source-line', String(item.line));
    element.setAttribute('data-source-column', String(item.column));
    return element;
  }

  /**
   * @param {LH.Audit.Details.Filmstrip} details
   * @return {Element}
   */
  _renderFilmstrip(details) {
    const filmstripEl = this._dom.createElement('div', 'lh-filmstrip');

    for (const thumbnail of details.items) {
      const frameEl = this._dom.createChildOf(filmstripEl, 'div', 'lh-filmstrip__frame');
      this._dom.createChildOf(frameEl, 'img', 'lh-filmstrip__thumbnail', {
        src: thumbnail.data,
        alt: `Screenshot`,
      });
    }
    return filmstripEl;
  }

  /**
   * @param {string} text
   * @return {Element}
   */
  _renderCode(text) {
    const pre = this._dom.createElement('pre', 'lh-code');
    pre.textContent = text;
    return pre;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DetailsRenderer;
} else {
  self.DetailsRenderer = DetailsRenderer;
}
;
/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * @fileoverview This file contains helpers for constructing and rendering the
 * critical request chains network tree.
 */

/* globals self Util */

/** @typedef {import('./dom.js')} DOM */
/** @typedef {import('./details-renderer.js')} DetailsRenderer */

class CriticalRequestChainRenderer {
  /**
   * Create render context for critical-request-chain tree display.
   * @param {LH.Audit.SimpleCriticalRequestNode} tree
   * @return {{tree: LH.Audit.SimpleCriticalRequestNode, startTime: number, transferSize: number}}
   */
  static initTree(tree) {
    let startTime = 0;
    const rootNodes = Object.keys(tree);
    if (rootNodes.length > 0) {
      const node = tree[rootNodes[0]];
      startTime = node.request.startTime;
    }

    return {tree, startTime, transferSize: 0};
  }

  /**
   * Helper to create context for each critical-request-chain node based on its
   * parent. Calculates if this node is the last child, whether it has any
   * children itself and what the tree looks like all the way back up to the root,
   * so the tree markers can be drawn correctly.
   * @param {LH.Audit.SimpleCriticalRequestNode} parent
   * @param {string} id
   * @param {number} startTime
   * @param {number} transferSize
   * @param {Array<boolean>=} treeMarkers
   * @param {boolean=} parentIsLastChild
   * @return {CRCSegment}
   */
  static createSegment(parent, id, startTime, transferSize, treeMarkers, parentIsLastChild) {
    const node = parent[id];
    const siblings = Object.keys(parent);
    const isLastChild = siblings.indexOf(id) === (siblings.length - 1);
    const hasChildren = !!node.children && Object.keys(node.children).length > 0;

    // Copy the tree markers so that we don't change by reference.
    const newTreeMarkers = Array.isArray(treeMarkers) ? treeMarkers.slice(0) : [];

    // Add on the new entry.
    if (typeof parentIsLastChild !== 'undefined') {
      newTreeMarkers.push(!parentIsLastChild);
    }

    return {
      node,
      isLastChild,
      hasChildren,
      startTime,
      transferSize: transferSize + node.request.transferSize,
      treeMarkers: newTreeMarkers,
    };
  }

  /**
   * Creates the DOM for a tree segment.
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {CRCSegment} segment
   * @param {DetailsRenderer} detailsRenderer
   * @return {Node}
   */
  static createChainNode(dom, tmpl, segment, detailsRenderer) {
    const chainsEl = dom.cloneTemplate('#tmpl-lh-crc__chains', tmpl);

    // Hovering over request shows full URL.
    dom.find('.crc-node', chainsEl).setAttribute('title', segment.node.request.url);

    const treeMarkeEl = dom.find('.crc-node__tree-marker', chainsEl);

    // Construct lines and add spacers for sub requests.
    segment.treeMarkers.forEach(separator => {
      if (separator) {
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert'));
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
      } else {
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
        treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker'));
      }
    });

    if (segment.isLastChild) {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker up-right'));
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    } else {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker vert-right'));
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    }

    if (segment.hasChildren) {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker horiz-down'));
    } else {
      treeMarkeEl.appendChild(dom.createElement('span', 'tree-marker right'));
    }

    // Fill in url, host, and request size information.
    const url = segment.node.request.url;
    const linkEl = detailsRenderer.renderTextURL(url);
    const treevalEl = dom.find('.crc-node__tree-value', chainsEl);
    treevalEl.appendChild(linkEl);

    if (!segment.hasChildren) {
      const {startTime, endTime, transferSize} = segment.node.request;
      const span = dom.createElement('span', 'crc-node__chain-duration');
      span.textContent = ' - ' + Util.i18n.formatMilliseconds((endTime - startTime) * 1000) + ', ';
      const span2 = dom.createElement('span', 'crc-node__chain-duration');
      span2.textContent = Util.i18n.formatBytesToKB(transferSize, 0.01);

      treevalEl.appendChild(span);
      treevalEl.appendChild(span2);
    }

    return chainsEl;
  }

  /**
   * Recursively builds a tree from segments.
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {CRCSegment} segment
   * @param {Element} elem Parent element.
   * @param {LH.Audit.Details.CriticalRequestChain} details
   * @param {DetailsRenderer} detailsRenderer
   */
  static buildTree(dom, tmpl, segment, elem, details, detailsRenderer) {
    elem.appendChild(CRCRenderer.createChainNode(dom, tmpl, segment, detailsRenderer));
    if (segment.node.children) {
      for (const key of Object.keys(segment.node.children)) {
        const childSegment = CRCRenderer.createSegment(segment.node.children, key,
          segment.startTime, segment.transferSize, segment.treeMarkers, segment.isLastChild);
        CRCRenderer.buildTree(dom, tmpl, childSegment, elem, details, detailsRenderer);
      }
    }
  }

  /**
   * @param {DOM} dom
   * @param {ParentNode} templateContext
   * @param {LH.Audit.Details.CriticalRequestChain} details
   * @param {DetailsRenderer} detailsRenderer
   * @return {Element}
   */
  static render(dom, templateContext, details, detailsRenderer) {
    const tmpl = dom.cloneTemplate('#tmpl-lh-crc', templateContext);
    const containerEl = dom.find('.lh-crc', tmpl);

    // Fill in top summary.
    dom.find('.crc-initial-nav', tmpl).textContent = Util.i18n.strings.crcInitialNavigation;
    dom.find('.lh-crc__longest_duration_label', tmpl).textContent =
        Util.i18n.strings.crcLongestDurationLabel;
    dom.find('.lh-crc__longest_duration', tmpl).textContent =
        Util.i18n.formatMilliseconds(details.longestChain.duration);

    // Construct visual tree.
    const root = CRCRenderer.initTree(details.chains);
    for (const key of Object.keys(root.tree)) {
      const segment = CRCRenderer.createSegment(root.tree, key, root.startTime, root.transferSize);
      CRCRenderer.buildTree(dom, tmpl, segment, containerEl, details, detailsRenderer);
    }

    return dom.find('.lh-crc-container', tmpl);
  }
}

// Alias b/c the name is really long.
const CRCRenderer = CriticalRequestChainRenderer;

// Allow Node require()'ing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CriticalRequestChainRenderer;
} else {
  self.CriticalRequestChainRenderer = CriticalRequestChainRenderer;
}

/** @typedef {{
      node: LH.Audit.SimpleCriticalRequestNode[string],
      isLastChild: boolean,
      hasChildren: boolean,
      startTime: number,
      transferSize: number,
      treeMarkers: Array<boolean>
  }} CRCSegment
 */
;
/**
 * @license Copyright 2019 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* globals self, Util */

/** @typedef {import('./details-renderer')} DetailsRenderer */
/** @typedef {import('./dom')} DOM */

/** @enum {number} */
const LineVisibility = {
  /** Show regardless of whether the snippet is collapsed or expanded */
  ALWAYS: 0,
  WHEN_COLLAPSED: 1,
  WHEN_EXPANDED: 2,
};

/** @enum {number} */
const LineContentType = {
  /** A line of content */
  CONTENT_NORMAL: 0,
  /** A line of content that's emphasized by setting the CSS background color */
  CONTENT_HIGHLIGHTED: 1,
  /** Use when some lines are hidden, shows the "..." placeholder */
  PLACEHOLDER: 2,
  /** A message about a line of content or the snippet in general */
  MESSAGE: 3,
};

/** @typedef {{
    content: string;
    lineNumber: string | number;
    contentType: LineContentType;
    truncated?: boolean;
    visibility?: LineVisibility;
}} LineDetails */

const classNamesByContentType = {
  [LineContentType.CONTENT_NORMAL]: ['lh-snippet__line--content'],
  [LineContentType.CONTENT_HIGHLIGHTED]: [
    'lh-snippet__line--content',
    'lh-snippet__line--content-highlighted',
  ],
  [LineContentType.PLACEHOLDER]: ['lh-snippet__line--placeholder'],
  [LineContentType.MESSAGE]: ['lh-snippet__line--message'],
};

/**
 * @param {LH.Audit.Details.SnippetValue['lines']} lines
 * @param {number} lineNumber
 * @return {{line?: LH.Audit.Details.SnippetValue['lines'][0], previousLine?: LH.Audit.Details.SnippetValue['lines'][0]}}
 */
function getLineAndPreviousLine(lines, lineNumber) {
  return {
    line: lines.find(l => l.lineNumber === lineNumber),
    previousLine: lines.find(l => l.lineNumber === lineNumber - 1),
  };
}

/**
 * @param {LH.Audit.Details.SnippetValue["lineMessages"]} messages
 * @param {number} lineNumber
 */
function getMessagesForLineNumber(messages, lineNumber) {
  return messages.filter(h => h.lineNumber === lineNumber);
}

/**
 * @param {LH.Audit.Details.SnippetValue} details
 * @return {LH.Audit.Details.SnippetValue['lines']}
 */
function getLinesWhenCollapsed(details) {
  const SURROUNDING_LINES_TO_SHOW_WHEN_COLLAPSED = 2;
  return Util.filterRelevantLines(
    details.lines,
    details.lineMessages,
    SURROUNDING_LINES_TO_SHOW_WHEN_COLLAPSED
  );
}

/**
 * Render snippet of text with line numbers and annotations.
 * By default we only show a few lines around each annotation and the user
 * can click "Expand snippet" to show more.
 * Content lines with annotations are highlighted.
 */
class SnippetRenderer {
  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LH.Audit.Details.SnippetValue} details
   * @param {DetailsRenderer} detailsRenderer
   * @param {function} toggleExpandedFn
   * @return {DocumentFragment}
   */
  static renderHeader(dom, tmpl, details, detailsRenderer, toggleExpandedFn) {
    const linesWhenCollapsed = getLinesWhenCollapsed(details);
    const canExpand = linesWhenCollapsed.length < details.lines.length;

    const header = dom.cloneTemplate('#tmpl-lh-snippet__header', tmpl);
    dom.find('.lh-snippet__title', header).textContent = details.title;

    const {
      snippetCollapseButtonLabel,
      snippetExpandButtonLabel,
    } = Util.i18n.strings;
    dom.find(
      '.lh-snippet__btn-label-collapse',
      header
    ).textContent = snippetCollapseButtonLabel;
    dom.find(
      '.lh-snippet__btn-label-expand',
      header
    ).textContent = snippetExpandButtonLabel;

    const toggleExpandButton = dom.find('.lh-snippet__toggle-expand', header);
    // If we're already showing all the available lines of the snippet, we don't need an
    // expand/collapse button and can remove it from the DOM.
    // If we leave the button in though, wire up the click listener to toggle visibility!
    if (!canExpand) {
      toggleExpandButton.remove();
    } else {
      toggleExpandButton.addEventListener('click', () => toggleExpandedFn());
    }

    // We only show the source node of the snippet in DevTools because then the user can
    // access the full element detail. Just being able to see the outer HTML isn't very useful.
    if (details.node && dom.isDevTools()) {
      const nodeContainer = dom.find('.lh-snippet__node', header);
      nodeContainer.appendChild(detailsRenderer.renderNode(details.node));
    }

    return header;
  }

  /**
   * Renders a line (text content, message, or placeholder) as a DOM element.
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LineDetails} lineDetails
   * @return {Element}
   */
  static renderSnippetLine(
      dom,
      tmpl,
      {content, lineNumber, truncated, contentType, visibility}
  ) {
    const clonedTemplate = dom.cloneTemplate('#tmpl-lh-snippet__line', tmpl);
    const contentLine = dom.find('.lh-snippet__line', clonedTemplate);
    const {classList} = contentLine;

    classNamesByContentType[contentType].forEach(typeClass =>
      classList.add(typeClass)
    );

    if (visibility === LineVisibility.WHEN_COLLAPSED) {
      classList.add('lh-snippet__show-if-collapsed');
    } else if (visibility === LineVisibility.WHEN_EXPANDED) {
      classList.add('lh-snippet__show-if-expanded');
    }

    const lineContent = content + (truncated ? '…' : '');
    const lineContentEl = dom.find('.lh-snippet__line code', contentLine);
    if (contentType === LineContentType.MESSAGE) {
      lineContentEl.appendChild(dom.convertMarkdownLinkSnippets(lineContent));
    } else {
      lineContentEl.textContent = lineContent;
    }

    dom.find(
      '.lh-snippet__line-number',
      contentLine
    ).textContent = lineNumber.toString();

    return contentLine;
  }

  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {{message: string}} message
   * @return {Element}
   */
  static renderMessage(dom, tmpl, message) {
    return SnippetRenderer.renderSnippetLine(dom, tmpl, {
      lineNumber: ' ',
      content: message.message,
      contentType: LineContentType.MESSAGE,
    });
  }

  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LineVisibility} visibility
   * @return {Element}
   */
  static renderOmittedLinesPlaceholder(dom, tmpl, visibility) {
    return SnippetRenderer.renderSnippetLine(dom, tmpl, {
      lineNumber: '…',
      content: '',
      visibility,
      contentType: LineContentType.PLACEHOLDER,
    });
  }

  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LH.Audit.Details.SnippetValue} details
   * @return {DocumentFragment}
   */
  static renderSnippetContent(dom, tmpl, details) {
    const template = dom.cloneTemplate('#tmpl-lh-snippet__content', tmpl);
    const snippetEl = dom.find('.lh-snippet__snippet-inner', template);

    // First render messages that don't belong to specific lines
    details.generalMessages.forEach(m =>
      snippetEl.append(SnippetRenderer.renderMessage(dom, tmpl, m))
    );
    // Then render the lines and their messages, as well as placeholders where lines are omitted
    snippetEl.append(SnippetRenderer.renderSnippetLines(dom, tmpl, details));

    return template;
  }

  /**
   * @param {DOM} dom
   * @param {DocumentFragment} tmpl
   * @param {LH.Audit.Details.SnippetValue} details
   * @return {DocumentFragment}
   */
  static renderSnippetLines(dom, tmpl, details) {
    const {lineMessages, generalMessages, lineCount, lines} = details;
    const linesWhenCollapsed = getLinesWhenCollapsed(details);
    const hasOnlyGeneralMessages =
      generalMessages.length > 0 && lineMessages.length === 0;

    const lineContainer = dom.createFragment();

    // When a line is not shown in the collapsed state we try to see if we also need an
    // omitted lines placeholder for the expanded state, rather than rendering two separate
    // placeholders.
    let hasPendingOmittedLinesPlaceholderForCollapsedState = false;

    for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
      const {line, previousLine} = getLineAndPreviousLine(lines, lineNumber);
      const {
        line: lineWhenCollapsed,
        previousLine: previousLineWhenCollapsed,
      } = getLineAndPreviousLine(linesWhenCollapsed, lineNumber);

      const showLineWhenCollapsed = !!lineWhenCollapsed;
      const showPreviousLineWhenCollapsed = !!previousLineWhenCollapsed;

      // If we went from showing lines in the collapsed state to not showing them
      // we need to render a placeholder
      if (showPreviousLineWhenCollapsed && !showLineWhenCollapsed) {
        hasPendingOmittedLinesPlaceholderForCollapsedState = true;
      }
      // If we are back to lines being visible in the collapsed and the placeholder
      // hasn't been rendered yet then render it now
      if (
        showLineWhenCollapsed &&
        hasPendingOmittedLinesPlaceholderForCollapsedState
      ) {
        lineContainer.append(
          SnippetRenderer.renderOmittedLinesPlaceholder(
            dom,
            tmpl,
            LineVisibility.WHEN_COLLAPSED
          )
        );
        hasPendingOmittedLinesPlaceholderForCollapsedState = false;
      }

      // Render omitted lines placeholder if we have not already rendered one for this gap
      const isFirstOmittedLineWhenExpanded = !line && !!previousLine;
      const isFirstLineOverallAndIsOmittedWhenExpanded =
        !line && lineNumber === 1;
      if (
        isFirstOmittedLineWhenExpanded ||
        isFirstLineOverallAndIsOmittedWhenExpanded
      ) {
        // In the collapsed state we don't show omitted lines placeholders around
        // the edges of the snippet
        const hasRenderedAllLinesVisibleWhenCollapsed = !linesWhenCollapsed.some(
          l => l.lineNumber > lineNumber
        );
        const onlyShowWhenExpanded =
          hasRenderedAllLinesVisibleWhenCollapsed || lineNumber === 1;
        lineContainer.append(
          SnippetRenderer.renderOmittedLinesPlaceholder(
            dom,
            tmpl,
            onlyShowWhenExpanded
              ? LineVisibility.WHEN_EXPANDED
              : LineVisibility.ALWAYS
          )
        );
        hasPendingOmittedLinesPlaceholderForCollapsedState = false;
      }

      if (!line) {
        // Can't render the line if we don't know its content (instead we've rendered a placeholder)
        continue;
      }

      // Now render the line and any messages
      const messages = getMessagesForLineNumber(lineMessages, lineNumber);
      const highlightLine = messages.length > 0 || hasOnlyGeneralMessages;
      const contentLineDetails = Object.assign({}, line, {
        contentType: highlightLine
          ? LineContentType.CONTENT_HIGHLIGHTED
          : LineContentType.CONTENT_NORMAL,
        visibility: lineWhenCollapsed
          ? LineVisibility.ALWAYS
          : LineVisibility.WHEN_EXPANDED,
      });
      lineContainer.append(
        SnippetRenderer.renderSnippetLine(dom, tmpl, contentLineDetails)
      );

      messages.forEach(message => {
        lineContainer.append(SnippetRenderer.renderMessage(dom, tmpl, message));
      });
    }

    return lineContainer;
  }

  /**
   * @param {DOM} dom
   * @param {ParentNode} templateContext
   * @param {LH.Audit.Details.SnippetValue} details
   * @param {DetailsRenderer} detailsRenderer
   * @return {!Element}
   */
  static render(dom, templateContext, details, detailsRenderer) {
    const tmpl = dom.cloneTemplate('#tmpl-lh-snippet', templateContext);
    const snippetEl = dom.find('.lh-snippet', tmpl);

    const header = SnippetRenderer.renderHeader(
      dom,
      tmpl,
      details,
      detailsRenderer,
      () => snippetEl.classList.toggle('lh-snippet--expanded')
    );
    const content = SnippetRenderer.renderSnippetContent(dom, tmpl, details);
    snippetEl.append(header, content);

    return snippetEl;
  }
}

// Allow Node require()'ing.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SnippetRenderer;
} else {
  self.SnippetRenderer = SnippetRenderer;
}
;
/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* global URL */

/**
 * @fileoverview
 * @suppress {reportUnknownTypes}
 */

/**
 * Generate a filenamePrefix of hostname_YYYY-MM-DD_HH-MM-SS
 * Date/time uses the local timezone, however Node has unreliable ICU
 * support, so we must construct a YYYY-MM-DD date format manually. :/
 * @param {{finalUrl: string, fetchTime: string}} lhr
 * @return {string}
 */
function getFilenamePrefix(lhr) {
  const hostname = new URL(lhr.finalUrl).hostname;
  const date = (lhr.fetchTime && new Date(lhr.fetchTime)) || new Date();

  const timeStr = date.toLocaleTimeString('en-US', {hour12: false});
  const dateParts = date.toLocaleDateString('en-US', {
    year: 'numeric', month: '2-digit', day: '2-digit',
  }).split('/');
  // @ts-ignore - parts exists
  dateParts.unshift(dateParts.pop());
  const dateStr = dateParts.join('-');

  const filenamePrefix = `${hostname}_${dateStr}_${timeStr}`;
  // replace characters that are unfriendly to filenames
  return filenamePrefix.replace(/[/?<>\\:*|"]/g, '-');
}

// don't attempt to export in the browser.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {getFilenamePrefix};
}
;
/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * Logs messages via a UI butter.
 */
class Logger {
  /**
   * @param {Element} element
   */
  constructor(element) {
    /** @type {Element} */
    this.el = element;
    this._id = undefined;
  }

  /**
   * Shows a butter bar.
   * @param {string} msg The message to show.
   * @param {boolean=} autoHide True to hide the message after a duration.
   *     Default is true.
   */
  log(msg, autoHide = true) {
    this._id && clearTimeout(this._id);

    this.el.textContent = msg;
    this.el.classList.add('show');
    if (autoHide) {
      this._id = setTimeout(_ => {
        this.el.classList.remove('show');
      }, 7000);
    }
  }

  /**
   * @param {string} msg
   */
  warn(msg) {
    this.log('Warning: ' + msg);
  }

  /**
   * @param {string} msg
   */
  error(msg) {
    this.log(msg);

    // Rethrow to make sure it's auditable as an error, but in a setTimeout so page
    // recovers gracefully and user can try loading a report again.
    setTimeout(_ => {
      throw new Error(msg);
    }, 0);
  }

  /**
   * Explicitly hides the butter bar.
   */
  hide() {
    this._id && clearTimeout(this._id);
    this.el.classList.remove('show');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Logger;
}
;
/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* eslint-env browser */

/**
 * @fileoverview Adds tools button, print, and other dynamic functionality to
 * the report.
 */

/* globals getFilenamePrefix Util */

/** @typedef {import('./dom')} DOM */

/**
 * @param {HTMLTableElement} tableEl
 * @return {Array<HTMLTableRowElement>}
 */
function getTableRows(tableEl) {
  return Array.from(tableEl.tBodies[0].rows);
}

class ReportUIFeatures {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {LH.Result} */
    this.json; // eslint-disable-line no-unused-expressions
    /** @type {DOM} */
    this._dom = dom;
    /** @type {Document} */
    this._document = this._dom.document();
    /** @type {ParentNode} */
    this._templateContext = this._dom.document();
    /** @type {DropDown} */
    this._dropDown = new DropDown(this._dom);
    /** @type {boolean} */
    this._copyAttempt = false;
    /** @type {HTMLElement} */
    this.topbarEl; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.scoreScaleEl; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.stickyHeaderEl; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this.highlightEl; // eslint-disable-line no-unused-expressions

    this.onMediaQueryChange = this.onMediaQueryChange.bind(this);
    this.onCopy = this.onCopy.bind(this);
    this.onDropDownMenuClick = this.onDropDownMenuClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.collapseAllDetails = this.collapseAllDetails.bind(this);
    this.expandAllDetails = this.expandAllDetails.bind(this);
    this._toggleDarkTheme = this._toggleDarkTheme.bind(this);
    this._updateStickyHeaderOnScroll = this._updateStickyHeaderOnScroll.bind(this);
  }

  /**
   * Adds tools button, print, and other functionality to the report. The method
   * should be called whenever the report needs to be re-rendered.
   * @param {LH.Result} report
   */
  initFeatures(report) {
    this.json = report;

    this._setupMediaQueryListeners();
    this._dropDown.setup(this.onDropDownMenuClick);
    this._setupThirdPartyFilter();
    this._setUpCollapseDetailsAfterPrinting();
    this._resetUIState();
    this._document.addEventListener('keyup', this.onKeyUp);
    this._document.addEventListener('copy', this.onCopy);

    const topbarLogo = this._dom.find('.lh-topbar__logo', this._document);
    topbarLogo.addEventListener('click', () => this._toggleDarkTheme());

    let turnOffTheLights = false;
    // Do not query the system preferences for DevTools - DevTools should only apply dark theme
    // if dark is selected in the settings panel.
    if (!this._dom.isDevTools() && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      turnOffTheLights = true;
    }

    // Fireworks.
    const scoresAll100 = Object.values(report.categories).every(cat => cat.score === 1);
    const hasAllCoreCategories =
      Object.keys(report.categories).filter(id => !Util.isPluginCategory(id)).length >= 5;
    if (scoresAll100 && hasAllCoreCategories) {
      turnOffTheLights = true;
      this._enableFireworks();
    }

    if (turnOffTheLights) {
      this._toggleDarkTheme(true);
    }

    // There is only a sticky header when at least 2 categories are present.
    if (Object.keys(this.json.categories).length >= 2) {
      this._setupStickyHeaderElements();
      const containerEl = this._dom.find('.lh-container', this._document);
      const elToAddScrollListener = this._getScrollParent(containerEl);
      elToAddScrollListener.addEventListener('scroll', this._updateStickyHeaderOnScroll);

      // Use ResizeObserver where available.
      // TODO: there is an issue with incorrect position numbers and, as a result, performance
      // issues due to layout thrashing.
      // See https://github.com/GoogleChrome/lighthouse/pull/9023/files#r288822287 for details.
      // For now, limit to DevTools.
      if (this._dom.isDevTools()) {
        const resizeObserver = new window.ResizeObserver(this._updateStickyHeaderOnScroll);
        resizeObserver.observe(containerEl);
      } else {
        window.addEventListener('resize', this._updateStickyHeaderOnScroll);
      }
    }

    // Show the metric descriptions by default when there is an error.
    const hasMetricError = report.categories.performance && report.categories.performance.auditRefs
      .some(audit => Boolean(audit.group === 'metrics' && report.audits[audit.id].errorMessage));
    if (hasMetricError) {
      const toggleInputEl = /** @type {HTMLInputElement} */ (
        this._dom.find('.lh-metrics-toggle__input', this._document));
      toggleInputEl.checked = true;
    }

    // Fill in all i18n data.
    for (const node of this._dom.findAll('[data-i18n]', this._dom.document())) {
      // These strings are guaranteed to (at least) have a default English string in Util.UIStrings,
      // so this cannot be undefined as long as `report-ui-features.data-i18n` test passes.
      const i18nAttr = /** @type {keyof LH.I18NRendererStrings} */ (node.getAttribute('data-i18n'));
      node.textContent = Util.i18n.strings[i18nAttr];
    }
  }

  /**
   * Define a custom element for <templates> to be extracted from. For example:
   *     this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html'))
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this._templateContext = context;
  }

  /**
   * Finds the first scrollable ancestor of `element`. Falls back to the document.
   * @param {HTMLElement} element
   * @return {Node}
   */
  _getScrollParent(element) {
    const {overflowY} = window.getComputedStyle(element);
    const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

    if (isScrollable) {
      return element;
    }

    if (element.parentElement) {
      return this._getScrollParent(element.parentElement);
    }

    return document;
  }

  _enableFireworks() {
    const scoresContainer = this._dom.find('.lh-scores-container', this._document);
    scoresContainer.classList.add('score100');
    scoresContainer.addEventListener('click', _ => {
      scoresContainer.classList.toggle('fireworks-paused');
    });
  }

  /**
   * Fires a custom DOM event on target.
   * @param {string} name Name of the event.
   * @param {Node=} target DOM node to fire the event on.
   * @param {*=} detail Custom data to include.
   */
  _fireEventOn(name, target = this._document, detail) {
    const event = new CustomEvent(name, detail ? {detail} : undefined);
    target.dispatchEvent(event);
  }

  _setupMediaQueryListeners() {
    const mediaQuery = self.matchMedia('(max-width: 500px)');
    mediaQuery.addListener(this.onMediaQueryChange);
    // Ensure the handler is called on init
    this.onMediaQueryChange(mediaQuery);
  }

  /**
   * Handle media query change events.
   * @param {MediaQueryList|MediaQueryListEvent} mql
   */
  onMediaQueryChange(mql) {
    const root = this._dom.find('.lh-root', this._document);
    root.classList.toggle('lh-narrow', mql.matches);
  }

  _setupThirdPartyFilter() {
    // Some audits should not display the third party filter option.
    const thirdPartyFilterAuditExclusions = [
      // This audit deals explicitly with third party resources.
      'uses-rel-preconnect',
    ];
    // Some audits should hide third party by default.
    const thirdPartyFilterAuditHideByDefault = [
      // Only first party resources are actionable.
      'legacy-javascript',
    ];

    // Get all tables with a text url column.
    /** @type {Array<HTMLTableElement>} */
    const tables = Array.from(this._document.querySelectorAll('.lh-table'));
    const tablesWithUrls = tables
      .filter(el =>
        el.querySelector('td.lh-table-column--url, td.lh-table-column--source-location'))
      .filter(el => {
        const containingAudit = el.closest('.lh-audit');
        if (!containingAudit) throw new Error('.lh-table not within audit');
        return !thirdPartyFilterAuditExclusions.includes(containingAudit.id);
      });

    tablesWithUrls.forEach((tableEl, index) => {
      const rowEls = getTableRows(tableEl);
      const thirdPartyRows = this._getThirdPartyRows(rowEls, this.json.finalUrl);

      // create input box
      const filterTemplate = this._dom.cloneTemplate('#tmpl-lh-3p-filter', this._templateContext);
      const filterInput =
        /** @type {HTMLInputElement} */ (this._dom.find('input', filterTemplate));
      const id = `lh-3p-filter-label--${index}`;

      filterInput.id = id;
      filterInput.addEventListener('change', e => {
        // Remove rows from the dom and keep track of them to re-add on uncheck.
        // Why removing instead of hiding? To keep nth-child(even) background-colors working.
        if (e.target instanceof HTMLInputElement && !e.target.checked) {
          for (const row of thirdPartyRows.values()) {
            row.remove();
          }
        } else {
          // Add row elements back to original positions.
          for (const [position, row] of thirdPartyRows.entries()) {
            const childrenArr = getTableRows(tableEl);
            tableEl.tBodies[0].insertBefore(row, childrenArr[position]);
          }
        }
      });

      this._dom.find('label', filterTemplate).setAttribute('for', id);
      this._dom.find('.lh-3p-filter-count', filterTemplate).textContent =
          `${thirdPartyRows.size}`;
      this._dom.find('.lh-3p-ui-string', filterTemplate).textContent =
          Util.i18n.strings.thirdPartyResourcesLabel;

      const allThirdParty = thirdPartyRows.size === rowEls.length;
      const allFirstParty = !thirdPartyRows.size;

      // If all or none of the rows are 3rd party, disable the checkbox.
      if (allThirdParty || allFirstParty) {
        filterInput.disabled = true;
        filterInput.checked = allThirdParty;
      }

      // Add checkbox to the DOM.
      if (!tableEl.parentNode) return; // Keep tsc happy.
      tableEl.parentNode.insertBefore(filterTemplate, tableEl);

      // Hide third-party rows for some audits by default.
      const containingAudit = tableEl.closest('.lh-audit');
      if (!containingAudit) throw new Error('.lh-table not within audit');
      if (thirdPartyFilterAuditHideByDefault.includes(containingAudit.id) && !allThirdParty) {
        filterInput.click();
      }
    });
  }

  /**
   * From a table with URL entries, finds the rows containing third-party URLs
   * and returns a Map of those rows, mapping from row index to row Element.
   * @param {HTMLElement[]} rowEls
   * @param {string} finalUrl
   * @return {Map<number, HTMLElement>}
   */
  _getThirdPartyRows(rowEls, finalUrl) {
    /** @type {Map<number, HTMLElement>} */
    const thirdPartyRows = new Map();
    const finalUrlRootDomain = Util.getRootDomain(finalUrl);

    rowEls.forEach((rowEl, rowPosition) => {
      /** @type {HTMLElement|null} */
      const urlItem = rowEl.querySelector('.lh-text__url');
      if (!urlItem) return;

      const datasetUrl = urlItem.dataset.url;
      if (!datasetUrl) return;
      const isThirdParty = Util.getRootDomain(datasetUrl) !== finalUrlRootDomain;
      if (!isThirdParty) return;

      thirdPartyRows.set(Number(rowPosition), rowEl);
    });

    return thirdPartyRows;
  }

  /**
   * From a table, finds and returns URL items.
   * @param {HTMLTableElement} tableEl
   * @return {Array<HTMLElement>}
   */
  _getUrlItems(tableEl) {
    return this._dom.findAll('.lh-text__url', tableEl);
  }

  _setupStickyHeaderElements() {
    this.topbarEl = this._dom.find('.lh-topbar', this._document);
    this.scoreScaleEl = this._dom.find('.lh-scorescale', this._document);
    this.stickyHeaderEl = this._dom.find('.lh-sticky-header', this._document);

    // Highlighter will be absolutely positioned at first gauge, then transformed on scroll.
    this.highlightEl = this._dom.createChildOf(this.stickyHeaderEl, 'div', 'lh-highlighter');
  }

  /**
   * Handle copy events.
   * @param {ClipboardEvent} e
   */
  onCopy(e) {
    // Only handle copy button presses (e.g. ignore the user copying page text).
    if (this._copyAttempt && e.clipboardData) {
      // We want to write our own data to the clipboard, not the user's text selection.
      e.preventDefault();
      e.clipboardData.setData('text/plain', JSON.stringify(this.json, null, 2));

      this._fireEventOn('lh-log', this._document, {
        cmd: 'log', msg: 'Report JSON copied to clipboard',
      });
    }

    this._copyAttempt = false;
  }

  /**
   * Copies the report JSON to the clipboard (if supported by the browser).
   */
  onCopyButtonClick() {
    this._fireEventOn('lh-analytics', this._document, {
      cmd: 'send',
      fields: {hitType: 'event', eventCategory: 'report', eventAction: 'copy'},
    });

    try {
      if (this._document.queryCommandSupported('copy')) {
        this._copyAttempt = true;

        // Note: In Safari 10.0.1, execCommand('copy') returns true if there's
        // a valid text selection on the page. See http://caniuse.com/#feat=clipboard.
        if (!this._document.execCommand('copy')) {
          this._copyAttempt = false; // Prevent event handler from seeing this as a copy attempt.

          this._fireEventOn('lh-log', this._document, {
            cmd: 'warn', msg: 'Your browser does not support copy to clipboard.',
          });
        }
      }
    } catch (/** @type {Error} */ e) {
      this._copyAttempt = false;
      this._fireEventOn('lh-log', this._document, {cmd: 'log', msg: e.message});
    }
  }

  /**
   * Resets the state of page before capturing the page for export.
   * When the user opens the exported HTML page, certain UI elements should
   * be in their closed state (not opened) and the templates should be unstamped.
   */
  _resetUIState() {
    this._dropDown.close();
    this._dom.resetTemplates();
  }

  /**
   * Handler for tool button.
   * @param {Event} e
   */
  onDropDownMenuClick(e) {
    e.preventDefault();

    const el = /** @type {?Element} */ (e.target);

    if (!el || !el.hasAttribute('data-action')) {
      return;
    }

    switch (el.getAttribute('data-action')) {
      case 'copy':
        this.onCopyButtonClick();
        break;
      case 'print-summary':
        this.collapseAllDetails();
        this._print();
        break;
      case 'print-expanded':
        this.expandAllDetails();
        this._print();
        break;
      case 'save-json': {
        const jsonStr = JSON.stringify(this.json, null, 2);
        this._saveFile(new Blob([jsonStr], {type: 'application/json'}));
        break;
      }
      case 'save-html': {
        const htmlStr = this.getReportHtml();
        try {
          this._saveFile(new Blob([htmlStr], {type: 'text/html'}));
        } catch (/** @type {Error} */ e) {
          this._fireEventOn('lh-log', this._document, {
            cmd: 'error', msg: 'Could not export as HTML. ' + e.message,
          });
        }
        break;
      }
      case 'open-viewer': {
        const viewerPath = '/lighthouse/viewer/';
        ReportUIFeatures.openTabAndSendJsonReport(this.json, viewerPath);
        break;
      }
      case 'save-gist': {
        this.saveAsGist();
        break;
      }
      case 'toggle-dark': {
        this._toggleDarkTheme();
        break;
      }
    }

    this._dropDown.close();
  }

  _print() {
    self.print();
  }

  /**
   * Keyup handler for the document.
   * @param {KeyboardEvent} e
   */
  onKeyUp(e) {
    // Ctrl+P - Expands audit details when user prints via keyboard shortcut.
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) {
      this._dropDown.close();
    }
  }

  /**
   * Opens a new tab to the online viewer and sends the local page's JSON results
   * to the online viewer using postMessage.
   * @param {LH.Result} reportJson
   * @param {string} viewerPath
   * @protected
   */
  static openTabAndSendJsonReport(reportJson, viewerPath) {
    const VIEWER_ORIGIN = 'https://googlechrome.github.io';
    // Chrome doesn't allow us to immediately postMessage to a popup right
    // after it's created. Normally, we could also listen for the popup window's
    // load event, however it is cross-domain and won't fire. Instead, listen
    // for a message from the target app saying "I'm open".
    const json = reportJson;
    window.addEventListener('message', function msgHandler(messageEvent) {
      if (messageEvent.origin !== VIEWER_ORIGIN) {
        return;
      }
      if (popup && messageEvent.data.opened) {
        popup.postMessage({lhresults: json}, VIEWER_ORIGIN);
        window.removeEventListener('message', msgHandler);
      }
    });

    // The popup's window.name is keyed by version+url+fetchTime, so we reuse/select tabs correctly
    // @ts-ignore - If this is a v2 LHR, use old `generatedTime`.
    const fallbackFetchTime = /** @type {string} */ (json.generatedTime);
    const fetchTime = json.fetchTime || fallbackFetchTime;
    const windowName = `${json.lighthouseVersion}-${json.requestedUrl}-${fetchTime}`;
    const popup = window.open(`${VIEWER_ORIGIN}${viewerPath}`, windowName);
  }

  /**
   * Expands all audit `<details>`.
   * Ideally, a print stylesheet could take care of this, but CSS has no way to
   * open a `<details>` element.
   */
  expandAllDetails() {
    const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll(
        '.lh-categories details', this._document));
    details.map(detail => detail.open = true);
  }

  /**
   * Collapses all audit `<details>`.
   * open a `<details>` element.
   */
  collapseAllDetails() {
    const details = /** @type {Array<HTMLDetailsElement>} */ (this._dom.findAll(
        '.lh-categories details', this._document));
    details.map(detail => detail.open = false);
  }

  /**
   * Sets up listeners to collapse audit `<details>` when the user closes the
   * print dialog, all `<details>` are collapsed.
   */
  _setUpCollapseDetailsAfterPrinting() {
    // FF and IE implement these old events.
    if ('onbeforeprint' in self) {
      self.addEventListener('afterprint', this.collapseAllDetails);
    } else {
      const win = /** @type {Window} */ (self);
      // Note: FF implements both window.onbeforeprint and media listeners. However,
      // it doesn't matchMedia doesn't fire when matching 'print'.
      win.matchMedia('print').addListener(mql => {
        if (mql.matches) {
          this.expandAllDetails();
        } else {
          this.collapseAllDetails();
        }
      });
    }
  }

  /**
   * Returns the html that recreates this report.
   * @return {string}
   * @protected
   */
  getReportHtml() {
    this._resetUIState();
    return this._document.documentElement.outerHTML;
  }

  /**
   * Save json as a gist. Unimplemented in base UI features.
   * @protected
   */
  saveAsGist() {
    throw new Error('Cannot save as gist from base report');
  }

  /**
   * Downloads a file (blob) using a[download].
   * @param {Blob|File} blob The file to save.
   * @private
   */
  _saveFile(blob) {
    const filename = getFilenamePrefix({
      finalUrl: this.json.finalUrl,
      fetchTime: this.json.fetchTime,
    });

    const ext = blob.type.match('json') ? '.json' : '.html';
    const href = URL.createObjectURL(blob);

    const a = this._dom.createElement('a');
    a.download = `${filename}${ext}`;
    a.href = href;
    this._document.body.appendChild(a); // Firefox requires anchor to be in the DOM.
    a.click();

    // cleanup.
    this._document.body.removeChild(a);
    setTimeout(_ => URL.revokeObjectURL(href), 500);
  }

  /**
   * @private
   * @param {boolean} [force]
   */
  _toggleDarkTheme(force) {
    const el = this._dom.find('.lh-vars', this._document);
    // This seems unnecessary, but in DevTools, passing "undefined" as the second
    // parameter acts like passing "false".
    // https://github.com/ChromeDevTools/devtools-frontend/blob/dd6a6d4153647c2a4203c327c595692c5e0a4256/front_end/dom_extension/DOMExtension.js#L809-L819
    if (typeof force === 'undefined') {
      el.classList.toggle('dark');
    } else {
      el.classList.toggle('dark', force);
    }
  }

  _updateStickyHeaderOnScroll() {
    // Show sticky header when the score scale begins to go underneath the topbar.
    const topbarBottom = this.topbarEl.getBoundingClientRect().bottom;
    const scoreScaleTop = this.scoreScaleEl.getBoundingClientRect().top;
    const showStickyHeader = topbarBottom >= scoreScaleTop;

    // Highlight mini gauge when section is in view.
    // In view = the last category that starts above the middle of the window.
    const categoryEls = Array.from(this._document.querySelectorAll('.lh-category'));
    const categoriesAboveTheMiddle =
      categoryEls.filter(el => el.getBoundingClientRect().top - window.innerHeight / 2 < 0);
    const highlightIndex =
      categoriesAboveTheMiddle.length > 0 ? categoriesAboveTheMiddle.length - 1 : 0;

    // Category order matches gauge order in sticky header.
    const gaugeWrapperEls = this.stickyHeaderEl.querySelectorAll('.lh-gauge__wrapper');
    const gaugeToHighlight = gaugeWrapperEls[highlightIndex];
    const origin = gaugeWrapperEls[0].getBoundingClientRect().left;
    const offset = gaugeToHighlight.getBoundingClientRect().left - origin;

    // Mutate at end to avoid layout thrashing.
    this.highlightEl.style.transform = `translate(${offset}px)`;
    this.stickyHeaderEl.classList.toggle('lh-sticky-header--visible', showStickyHeader);
  }
}

class DropDown {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {DOM} */
    this._dom = dom;
    /** @type {HTMLElement} */
    this._toggleEl; // eslint-disable-line no-unused-expressions
    /** @type {HTMLElement} */
    this._menuEl; // eslint-disable-line no-unused-expressions

    this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onToggleKeydown = this.onToggleKeydown.bind(this);
    this.onMenuFocusOut = this.onMenuFocusOut.bind(this);
    this.onMenuKeydown = this.onMenuKeydown.bind(this);

    this._getNextMenuItem = this._getNextMenuItem.bind(this);
    this._getNextSelectableNode = this._getNextSelectableNode.bind(this);
    this._getPreviousMenuItem = this._getPreviousMenuItem.bind(this);
  }

  /**
   * @param {function(MouseEvent): any} menuClickHandler
   */
  setup(menuClickHandler) {
    this._toggleEl = this._dom.find('.lh-tools__button', this._dom.document());
    this._toggleEl.addEventListener('click', this.onToggleClick);
    this._toggleEl.addEventListener('keydown', this.onToggleKeydown);

    this._menuEl = this._dom.find('.lh-tools__dropdown', this._dom.document());
    this._menuEl.addEventListener('keydown', this.onMenuKeydown);
    this._menuEl.addEventListener('click', menuClickHandler);
  }

  close() {
    this._toggleEl.classList.remove('active');
    this._toggleEl.setAttribute('aria-expanded', 'false');
    if (this._menuEl.contains(this._dom.document().activeElement)) {
      // Refocus on the tools button if the drop down last had focus
      this._toggleEl.focus();
    }
    this._menuEl.removeEventListener('focusout', this.onMenuFocusOut);
    this._dom.document().removeEventListener('keydown', this.onDocumentKeyDown);
  }

  /**
   * @param {HTMLElement} firstFocusElement
   */
  open(firstFocusElement) {
    if (this._toggleEl.classList.contains('active')) {
      // If the drop down is already open focus on the element
      firstFocusElement.focus();
    } else {
      // Wait for drop down transition to complete so options are focusable.
      this._menuEl.addEventListener('transitionend', () => {
        firstFocusElement.focus();
      }, {once: true});
    }

    this._toggleEl.classList.add('active');
    this._toggleEl.setAttribute('aria-expanded', 'true');
    this._menuEl.addEventListener('focusout', this.onMenuFocusOut);
    this._dom.document().addEventListener('keydown', this.onDocumentKeyDown);
  }

  /**
   * Click handler for tools button.
   * @param {Event} e
   */
  onToggleClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    if (this._toggleEl.classList.contains('active')) {
      this.close();
    } else {
      this.open(this._getNextMenuItem());
    }
  }

  /**
   * Handler for tool button.
   * @param {KeyboardEvent} e
   */
  onToggleKeydown(e) {
    switch (e.code) {
      case 'ArrowUp':
        e.preventDefault();
        this.open(this._getPreviousMenuItem());
        break;
      case 'ArrowDown':
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.open(this._getNextMenuItem());
        break;
      default:
       // no op
    }
  }

  /**
   * Handler for tool DropDown.
   * @param {KeyboardEvent} e
   */
  onMenuKeydown(e) {
    const el = /** @type {?HTMLElement} */ (e.target);

    switch (e.code) {
      case 'ArrowUp':
        e.preventDefault();
        this._getPreviousMenuItem(el).focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        this._getNextMenuItem(el).focus();
        break;
      case 'Home':
        e.preventDefault();
        this._getNextMenuItem().focus();
        break;
      case 'End':
        e.preventDefault();
        this._getPreviousMenuItem().focus();
        break;
      default:
       // no op
    }
  }

  /**
   * Keydown handler for the document.
   * @param {KeyboardEvent} e
   */
  onDocumentKeyDown(e) {
    if (e.keyCode === 27) { // ESC
      this.close();
    }
  }

  /**
   * Focus out handler for the drop down menu.
   * @param {Event} e
   */
  onMenuFocusOut(e) {
    // TODO: The focusout event is not supported in our current version of typescript (3.5.3)
    // https://github.com/microsoft/TypeScript/issues/30716
    const focusEvent = /** @type {FocusEvent} */ (e);
    const focusedEl = /** @type {?HTMLElement} */ (focusEvent.relatedTarget);

    if (!this._menuEl.contains(focusedEl)) {
      this.close();
    }
  }

  /**
   * @param {Array<Node>} allNodes
   * @param {?Node=} startNode
   * @returns {Node}
   */
  _getNextSelectableNode(allNodes, startNode) {
    const nodes = allNodes.filter((node) => {
      if (!(node instanceof HTMLElement)) {
        return false;
      }

      // 'Save as Gist' option may be disabled.
      if (node.hasAttribute('disabled')) {
        return false;
      }

      // 'Save as Gist' option may have display none.
      if (window.getComputedStyle(node).display === 'none') {
        return false;
      }

      return true;
    });

    let nextIndex = startNode ? (nodes.indexOf(startNode) + 1) : 0;
    if (nextIndex >= nodes.length) {
      nextIndex = 0;
    }

    return nodes[nextIndex];
  }

  /**
   * @param {?Element=} startEl
   * @returns {HTMLElement}
   */
  _getNextMenuItem(startEl) {
    const nodes = Array.from(this._menuEl.childNodes);
    return /** @type {HTMLElement} */ (this._getNextSelectableNode(nodes, startEl));
  }

  /**
   * @param {?Element=} startEl
   * @returns {HTMLElement}
   */
  _getPreviousMenuItem(startEl) {
    const nodes = Array.from(this._menuEl.childNodes).reverse();
    return /** @type {HTMLElement} */ (this._getNextSelectableNode(nodes, startEl));
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportUIFeatures;
} else {
  self.ReportUIFeatures = ReportUIFeatures;
}
;
/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self, Util */

/** @typedef {import('./dom.js')} DOM */
/** @typedef {import('./report-renderer.js')} ReportRenderer */
/** @typedef {import('./details-renderer.js')} DetailsRenderer */
/** @typedef {import('./util.js')} Util */
/** @typedef {'failed'|'warning'|'manual'|'passed'|'notApplicable'} TopLevelClumpId */

class CategoryRenderer {
  /**
   * @param {DOM} dom
   * @param {DetailsRenderer} detailsRenderer
   */
  constructor(dom, detailsRenderer) {
    /** @type {DOM} */
    this.dom = dom;
    /** @type {DetailsRenderer} */
    this.detailsRenderer = detailsRenderer;
    /** @type {ParentNode} */
    this.templateContext = this.dom.document();

    this.detailsRenderer.setTemplateContext(this.templateContext);
  }

  /**
   * Display info per top-level clump. Define on class to avoid race with Util init.
   */
  get _clumpTitles() {
    return {
      warning: Util.i18n.strings.warningAuditsGroupTitle,
      manual: Util.i18n.strings.manualAuditsGroupTitle,
      passed: Util.i18n.strings.passedAuditsGroupTitle,
      notApplicable: Util.i18n.strings.notApplicableAuditsGroupTitle,
    };
  }

  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @return {Element}
   */
  renderAudit(audit) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-audit', this.templateContext);
    return this.populateAuditValues(audit, tmpl);
  }

  /**
   * Populate an DOM tree with audit details. Used by renderAudit and renderOpportunity
   * @param {LH.ReportResult.AuditRef} audit
   * @param {DocumentFragment} tmpl
   * @return {!Element}
   */
  populateAuditValues(audit, tmpl) {
    const strings = Util.i18n.strings;
    const auditEl = this.dom.find('.lh-audit', tmpl);
    auditEl.id = audit.result.id;
    const scoreDisplayMode = audit.result.scoreDisplayMode;

    if (audit.result.displayValue) {
      this.dom.find('.lh-audit__display-text', auditEl).textContent = audit.result.displayValue;
    }

    const titleEl = this.dom.find('.lh-audit__title', auditEl);
    titleEl.appendChild(this.dom.convertMarkdownCodeSnippets(audit.result.title));
    this.dom.find('.lh-audit__description', auditEl)
        .appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description));

    if (audit.stackPacks) {
      audit.stackPacks.forEach(pack => {
        const packElm = this.dom.createElement('div');
        packElm.classList.add('lh-audit__stackpack');

        const packElmImg = this.dom.createElement('img');
        packElmImg.classList.add('lh-audit__stackpack__img');
        packElmImg.src = pack.iconDataURL;
        packElmImg.alt = pack.title;
        packElm.appendChild(packElmImg);

        packElm.appendChild(this.dom.convertMarkdownLinkSnippets(pack.description));

        this.dom.find('.lh-audit__stackpacks', auditEl)
          .appendChild(packElm);
      });
    }

    const header = /** @type {HTMLDetailsElement} */ (this.dom.find('details', auditEl));
    if (audit.result.details) {
      const elem = this.detailsRenderer.render(audit.result.details);
      if (elem) {
        elem.classList.add('lh-details');
        header.appendChild(elem);
      }
    }

    // Add chevron SVG to the end of the summary
    this.dom.find('.lh-chevron-container', auditEl).appendChild(this._createChevron());
    this._setRatingClass(auditEl, audit.result.score, scoreDisplayMode);

    if (audit.result.scoreDisplayMode === 'error') {
      auditEl.classList.add(`lh-audit--error`);
      const textEl = this.dom.find('.lh-audit__display-text', auditEl);
      textEl.textContent = strings.errorLabel;
      textEl.classList.add('tooltip-boundary');
      const tooltip = this.dom.createChildOf(textEl, 'div', 'tooltip tooltip--error');
      tooltip.textContent = audit.result.errorMessage || strings.errorMissingAuditInfo;
    } else if (audit.result.explanation) {
      const explEl = this.dom.createChildOf(titleEl, 'div', 'lh-audit-explanation');
      explEl.textContent = audit.result.explanation;
    }
    const warnings = audit.result.warnings;
    if (!warnings || warnings.length === 0) return auditEl;

    // Add list of warnings or singular warning
    const summaryEl = this.dom.find('summary', header);
    const warningsEl = this.dom.createChildOf(summaryEl, 'div', 'lh-warnings');
    this.dom.createChildOf(warningsEl, 'span').textContent = strings.warningHeader;
    if (warnings.length === 1) {
      warningsEl.appendChild(this.dom.document().createTextNode(warnings.join('')));
    } else {
      const warningsUl = this.dom.createChildOf(warningsEl, 'ul');
      for (const warning of warnings) {
        const item = this.dom.createChildOf(warningsUl, 'li');
        item.textContent = warning;
      }
    }
    return auditEl;
  }

  /**
   * @return {HTMLElement}
   */
  _createChevron() {
    const chevronTmpl = this.dom.cloneTemplate('#tmpl-lh-chevron', this.templateContext);
    const chevronEl = this.dom.find('.lh-chevron', chevronTmpl);
    return chevronEl;
  }

  /**
   * @param {Element} element DOM node to populate with values.
   * @param {number|null} score
   * @param {string} scoreDisplayMode
   * @return {!Element}
   */
  _setRatingClass(element, score, scoreDisplayMode) {
    const rating = Util.calculateRating(score, scoreDisplayMode);
    element.classList.add(`lh-audit--${scoreDisplayMode.toLowerCase()}`);
    if (scoreDisplayMode !== 'informative') {
      element.classList.add(`lh-audit--${rating}`);
    }
    return element;
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {Element}
   */
  renderCategoryHeader(category, groupDefinitions) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-category-header', this.templateContext);

    const gaugeContainerEl = this.dom.find('.lh-score__gauge', tmpl);
    const gaugeEl = this.renderScoreGauge(category, groupDefinitions);
    gaugeContainerEl.appendChild(gaugeEl);

    if (category.description) {
      const descEl = this.dom.convertMarkdownLinkSnippets(category.description);
      this.dom.find('.lh-category-header__description', tmpl).appendChild(descEl);
    }

    return /** @type {Element} */ (tmpl.firstElementChild);
  }

  /**
   * Renders the group container for a group of audits. Individual audit elements can be added
   * directly to the returned element.
   * @param {LH.Result.ReportGroup} group
   * @return {Element}
   */
  renderAuditGroup(group) {
    const groupEl = this.dom.createElement('div', 'lh-audit-group');

    const auditGroupHeader = this.dom.createElement('div', 'lh-audit-group__header');

    this.dom.createChildOf(auditGroupHeader, 'span', 'lh-audit-group__title')
      .textContent = group.title;
    if (group.description) {
      const descriptionEl = this.dom.convertMarkdownLinkSnippets(group.description);
      descriptionEl.classList.add('lh-audit-group__description');
      auditGroupHeader.appendChild(descriptionEl);
    }
    groupEl.appendChild(auditGroupHeader);

    return groupEl;
  }

  /**
   * Takes an array of auditRefs, groups them if requested, then returns an
   * array of audit and audit-group elements.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {Array<Element>}
   */
  _renderGroupedAudits(auditRefs, groupDefinitions) {
    // Audits grouped by their group (or under notAGroup).
    /** @type {Map<string, Array<LH.ReportResult.AuditRef>>} */
    const grouped = new Map();

    // Add audits without a group first so they will appear first.
    const notAGroup = 'NotAGroup';
    grouped.set(notAGroup, []);

    for (const auditRef of auditRefs) {
      const groupId = auditRef.group || notAGroup;
      const groupAuditRefs = grouped.get(groupId) || [];
      groupAuditRefs.push(auditRef);
      grouped.set(groupId, groupAuditRefs);
    }

    /** @type {Array<Element>} */
    const auditElements = [];

    for (const [groupId, groupAuditRefs] of grouped) {
      if (groupId === notAGroup) {
        // Push not-grouped audits individually.
        for (const auditRef of groupAuditRefs) {
          auditElements.push(this.renderAudit(auditRef));
        }
        continue;
      }

      // Push grouped audits as a group.
      const groupDef = groupDefinitions[groupId];
      const auditGroupElem = this.renderAuditGroup(groupDef);
      for (const auditRef of groupAuditRefs) {
        auditGroupElem.appendChild(this.renderAudit(auditRef));
      }
      auditGroupElem.classList.add(`lh-audit-group--${groupId}`);
      auditElements.push(auditGroupElem);
    }

    return auditElements;
  }

  /**
   * Take a set of audits, group them if they have groups, then render in a top-level
   * clump that can't be expanded/collapsed.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {Element}
   */
  renderUnexpandableClump(auditRefs, groupDefinitions) {
    const clumpElement = this.dom.createElement('div');
    const elements = this._renderGroupedAudits(auditRefs, groupDefinitions);
    elements.forEach(elem => clumpElement.appendChild(elem));
    return clumpElement;
  }

  /**
   * Take a set of audits and render in a top-level, expandable clump that starts
   * in a collapsed state.
   * @param {Exclude<TopLevelClumpId, 'failed'>} clumpId
   * @param {{auditRefs: Array<LH.ReportResult.AuditRef>, description?: string}} clumpOpts
   * @return {!Element}
   */
  renderClump(clumpId, {auditRefs, description}) {
    const clumpTmpl = this.dom.cloneTemplate('#tmpl-lh-clump', this.templateContext);
    const clumpElement = this.dom.find('.lh-clump', clumpTmpl);

    if (clumpId === 'warning') {
      clumpElement.setAttribute('open', '');
    }

    const summaryInnerEl = this.dom.find('.lh-audit-group__summary', clumpElement);
    const chevronEl = summaryInnerEl.appendChild(this._createChevron());
    chevronEl.title = Util.i18n.strings.auditGroupExpandTooltip;

    const headerEl = this.dom.find('.lh-audit-group__header', clumpElement);
    const title = this._clumpTitles[clumpId];
    this.dom.find('.lh-audit-group__title', headerEl).textContent = title;
    if (description) {
      const descriptionEl = this.dom.convertMarkdownLinkSnippets(description);
      descriptionEl.classList.add('lh-audit-group__description');
      headerEl.appendChild(descriptionEl);
    }

    const itemCountEl = this.dom.find('.lh-audit-group__itemcount', clumpElement);
    itemCountEl.textContent = `(${auditRefs.length})`;

    // Add all audit results to the clump.
    const auditElements = auditRefs.map(this.renderAudit.bind(this));
    clumpElement.append(...auditElements);

    clumpElement.classList.add(`lh-clump--${clumpId.toLowerCase()}`);
    return clumpElement;
  }

  /**
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this.templateContext = context;
    this.detailsRenderer.setTemplateContext(context);
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {DocumentFragment}
   */
  renderScoreGauge(category, groupDefinitions) { // eslint-disable-line no-unused-vars
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge', this.templateContext);
    const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge__wrapper', tmpl));
    wrapper.href = `#${category.id}`;
    wrapper.classList.add(`lh-gauge__wrapper--${Util.calculateRating(category.score)}`);

    if (Util.isPluginCategory(category.id)) {
      wrapper.classList.add('lh-gauge__wrapper--plugin');
    }

    // Cast `null` to 0
    const numericScore = Number(category.score);
    const gauge = this.dom.find('.lh-gauge', tmpl);
    /** @type {?SVGCircleElement} */
    const gaugeArc = gauge.querySelector('.lh-gauge-arc');

    if (gaugeArc) this._setGaugeArc(gaugeArc, numericScore);

    const scoreOutOf100 = Math.round(numericScore * 100);
    const percentageEl = this.dom.find('.lh-gauge__percentage', tmpl);
    percentageEl.textContent = scoreOutOf100.toString();
    if (category.score === null) {
      percentageEl.textContent = '?';
      percentageEl.title = Util.i18n.strings.errorLabel;
    }

    this.dom.find('.lh-gauge__label', tmpl).textContent = category.title;
    return tmpl;
  }

  /**
   * Define the score arc of the gauge
   * Credit to xgad for the original technique: https://codepen.io/xgad/post/svg-radial-progress-meters
   * @param {SVGCircleElement} arcElem
   * @param {number} percent
   */
  _setGaugeArc(arcElem, percent) {
    const circumferencePx = 2 * Math.PI * Number(arcElem.getAttribute('r'));
    // The rounded linecap of the stroke extends the arc past its start and end.
    // First, we tweak the -90deg rotation to start exactly at the top of the circle.
    const strokeWidthPx = Number(arcElem.getAttribute('stroke-width'));
    const rotationalAdjustmentPercent = 0.25 * strokeWidthPx / circumferencePx;
    arcElem.style.transform = `rotate(${-90 + rotationalAdjustmentPercent * 360}deg)`;

    // Then, we terminate the line a little early as well.
    let arcLengthPx = percent * circumferencePx - strokeWidthPx / 2;
    // Special cases. No dot for 0, and full ring if 100
    if (percent === 0) arcElem.style.opacity = '0';
    if (percent === 1) arcLengthPx = circumferencePx;

    arcElem.style.strokeDasharray = `${Math.max(arcLengthPx, 0)} ${circumferencePx}`;
  }

  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @return {boolean}
   */
  _auditHasWarning(audit) {
    return Boolean(audit.result.warnings && audit.result.warnings.length);
  }

  /**
   * Returns the id of the top-level clump to put this audit in.
   * @param {LH.ReportResult.AuditRef} auditRef
   * @return {TopLevelClumpId}
   */
  _getClumpIdForAuditRef(auditRef) {
    const scoreDisplayMode = auditRef.result.scoreDisplayMode;
    if (scoreDisplayMode === 'manual' || scoreDisplayMode === 'notApplicable') {
      return scoreDisplayMode;
    }

    if (Util.showAsPassed(auditRef.result)) {
      if (this._auditHasWarning(auditRef)) {
        return 'warning';
      } else {
        return 'passed';
      }
    } else {
      return 'failed';
    }
  }

  /**
   * Renders a set of top level sections (clumps), under a status of failed, warning,
   * manual, passed, or notApplicable. The result ends up something like:
   *
   * failed clump
   *   ├── audit 1 (w/o group)
   *   ├── audit 2 (w/o group)
   *   ├── audit group
   *   |  ├── audit 3
   *   |  └── audit 4
   *   └── audit group
   *      ├── audit 5
   *      └── audit 6
   * other clump (e.g. 'manual')
   *   ├── audit 1
   *   ├── audit 2
   *   ├── …
   *   ⋮
   * @param {LH.ReportResult.Category} category
   * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions]
   * @return {Element}
   */
  render(category, groupDefinitions = {}) {
    const element = this.dom.createElement('div', 'lh-category');
    this.createPermalinkSpan(element, category.id);
    element.appendChild(this.renderCategoryHeader(category, groupDefinitions));

    // Top level clumps for audits, in order they will appear in the report.
    /** @type {Map<TopLevelClumpId, Array<LH.ReportResult.AuditRef>>} */
    const clumps = new Map();
    clumps.set('failed', []);
    clumps.set('warning', []);
    clumps.set('manual', []);
    clumps.set('passed', []);
    clumps.set('notApplicable', []);

    // Sort audits into clumps.
    for (const auditRef of category.auditRefs) {
      const clumpId = this._getClumpIdForAuditRef(auditRef);
      const clump = /** @type {Array<LH.ReportResult.AuditRef>} */ (clumps.get(clumpId)); // already defined
      clump.push(auditRef);
      clumps.set(clumpId, clump);
    }

    // Render each clump.
    for (const [clumpId, auditRefs] of clumps) {
      if (auditRefs.length === 0) continue;

      if (clumpId === 'failed') {
        const clumpElem = this.renderUnexpandableClump(auditRefs, groupDefinitions);
        clumpElem.classList.add(`lh-clump--failed`);
        element.appendChild(clumpElem);
        continue;
      }

      const description = clumpId === 'manual' ? category.manualDescription : undefined;
      const clumpElem = this.renderClump(clumpId, {auditRefs, description});
      element.appendChild(clumpElem);
    }

    return element;
  }

  /**
   * Create a non-semantic span used for hash navigation of categories
   * @param {Element} element
   * @param {string} id
   */
  createPermalinkSpan(element, id) {
    const permalinkEl = this.dom.createChildOf(element, 'span', 'lh-permalink');
    permalinkEl.id = id;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CategoryRenderer;
} else {
  self.CategoryRenderer = CategoryRenderer;
}
;
/**
 * @license
 * Copyright 2018 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self, Util, CategoryRenderer */

/** @typedef {import('./dom.js')} DOM */

class PerformanceCategoryRenderer extends CategoryRenderer {
  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @return {!Element}
   */
  _renderMetric(audit) {
    const tmpl = this.dom.cloneTemplate('#tmpl-lh-metric', this.templateContext);
    const element = this.dom.find('.lh-metric', tmpl);
    element.id = audit.result.id;
    const rating = Util.calculateRating(audit.result.score, audit.result.scoreDisplayMode);
    element.classList.add(`lh-metric--${rating}`);

    const titleEl = this.dom.find('.lh-metric__title', tmpl);
    titleEl.textContent = audit.result.title;

    const valueEl = this.dom.find('.lh-metric__value', tmpl);
    valueEl.textContent = audit.result.displayValue || '';

    const descriptionEl = this.dom.find('.lh-metric__description', tmpl);
    descriptionEl.appendChild(this.dom.convertMarkdownLinkSnippets(audit.result.description));

    if (audit.result.scoreDisplayMode === 'error') {
      descriptionEl.textContent = '';
      valueEl.textContent = 'Error!';
      const tooltip = this.dom.createChildOf(descriptionEl, 'span');
      tooltip.textContent = audit.result.errorMessage || 'Report error: no metric information';
    }

    return element;
  }

  /**
   * @param {LH.ReportResult.AuditRef} audit
   * @param {number} scale
   * @return {!Element}
   */
  _renderOpportunity(audit, scale) {
    const oppTmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity', this.templateContext);
    const element = this.populateAuditValues(audit, oppTmpl);
    element.id = audit.result.id;

    if (!audit.result.details || audit.result.scoreDisplayMode === 'error') {
      return element;
    }
    const details = audit.result.details;
    if (details.type !== 'opportunity') {
      return element;
    }

    // Overwrite the displayValue with opportunity's wastedMs
    const displayEl = this.dom.find('.lh-audit__display-text', element);
    const sparklineWidthPct = `${details.overallSavingsMs / scale * 100}%`;
    this.dom.find('.lh-sparkline__bar', element).style.width = sparklineWidthPct;
    displayEl.textContent = Util.i18n.formatSeconds(details.overallSavingsMs, 0.01);

    // Set [title] tooltips
    if (audit.result.displayValue) {
      const displayValue = audit.result.displayValue;
      this.dom.find('.lh-load-opportunity__sparkline', element).title = displayValue;
      displayEl.title = displayValue;
    }

    return element;
  }

  /**
   * Get an audit's wastedMs to sort the opportunity by, and scale the sparkline width
   * Opportunities with an error won't have a details object, so MIN_VALUE is returned to keep any
   * erroring opportunities last in sort order.
   * @param {LH.ReportResult.AuditRef} audit
   * @return {number}
   */
  _getWastedMs(audit) {
    if (audit.result.details && audit.result.details.type === 'opportunity') {
      const details = audit.result.details;
      if (typeof details.overallSavingsMs !== 'number') {
        throw new Error('non-opportunity details passed to _getWastedMs');
      }
      return details.overallSavingsMs;
    } else {
      return Number.MIN_VALUE;
    }
  }

  /**
   * Get a link to the interactive scoring calculator with the metric values.
   * @param {LH.ReportResult.AuditRef[]} auditRefs
   * @return {string}
   */
  _getScoringCalculatorHref(auditRefs) {
    const v5andv6metrics = auditRefs.filter(audit => audit.group === 'metrics');
    const fci = auditRefs.find(audit => audit.id === 'first-cpu-idle');
    const fmp = auditRefs.find(audit => audit.id === 'first-meaningful-paint');
    if (fci) v5andv6metrics.push(fci);
    if (fmp) v5andv6metrics.push(fmp);

    const metricPairs = v5andv6metrics.map(audit => {
      const value = typeof audit.result.numericValue !== 'undefined' ?
        audit.result.numericValue.toString() : 'null';
      return [audit.id, value];
    });
    const paramPairs = [...metricPairs];

    if (Util.reportJson) {
      paramPairs.push(['device', Util.reportJson.configSettings.emulatedFormFactor]);
      paramPairs.push(['version', Util.reportJson.lighthouseVersion]);
    }

    const params = new URLSearchParams(paramPairs);
    const url = new URL('https://googlechrome.github.io/lighthouse/scorecalc/');
    url.hash = params.toString();
    return url.href;
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Object<string, LH.Result.ReportGroup>} groups
   * @param {'PSI'=} environment 'PSI' and undefined are the only valid values
   * @return {Element}
   * @override
   */
  render(category, groups, environment) {
    const strings = Util.i18n.strings;
    const element = this.dom.createElement('div', 'lh-category');
    if (environment === 'PSI') {
      const gaugeEl = this.dom.createElement('div', 'lh-score__gauge');
      gaugeEl.appendChild(this.renderScoreGauge(category, groups));
      element.appendChild(gaugeEl);
    } else {
      this.createPermalinkSpan(element, category.id);
      element.appendChild(this.renderCategoryHeader(category, groups));
    }

    // Metrics.
    const metricAuditsEl = this.renderAuditGroup(groups.metrics);

    // Metric descriptions toggle.
    const toggleTmpl = this.dom.cloneTemplate('#tmpl-lh-metrics-toggle', this.templateContext);
    const _toggleEl = this.dom.find('.lh-metrics-toggle', toggleTmpl);
    metricAuditsEl.append(..._toggleEl.childNodes);

    const metricAudits = category.auditRefs.filter(audit => audit.group === 'metrics');

    const keyMetrics = metricAudits.slice(0, 3);
    const otherMetrics = metricAudits.slice(3);

    const metricsBoxesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-columns');
    const metricsColumn1El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-column');
    const metricsColumn2El = this.dom.createChildOf(metricsBoxesEl, 'div', 'lh-column');

    keyMetrics.forEach(item => {
      metricsColumn1El.appendChild(this._renderMetric(item));
    });
    otherMetrics.forEach(item => {
      metricsColumn2El.appendChild(this._renderMetric(item));
    });

    // 'Values are estimated and may vary' is used as the category description for PSI
    if (environment !== 'PSI') {
      const estValuesEl = this.dom.createChildOf(metricAuditsEl, 'div', 'lh-metrics__disclaimer');
      const disclaimerEl = this.dom.convertMarkdownLinkSnippets(strings.varianceDisclaimer);
      estValuesEl.appendChild(disclaimerEl);

      // Add link to score calculator.
      const calculatorLink = this.dom.createChildOf(estValuesEl, 'a', 'lh-calclink');
      calculatorLink.target = '_blank';
      calculatorLink.textContent = strings.calculatorLink;
      calculatorLink.href = this._getScoringCalculatorHref(category.auditRefs);
    }

    metricAuditsEl.classList.add('lh-audit-group--metrics');
    element.appendChild(metricAuditsEl);

    // Filmstrip
    const timelineEl = this.dom.createChildOf(element, 'div', 'lh-filmstrip-container');
    const thumbnailAudit = category.auditRefs.find(audit => audit.id === 'screenshot-thumbnails');
    const thumbnailResult = thumbnailAudit && thumbnailAudit.result;
    if (thumbnailResult && thumbnailResult.details) {
      timelineEl.id = thumbnailResult.id;
      const filmstripEl = this.detailsRenderer.render(thumbnailResult.details);
      filmstripEl && timelineEl.appendChild(filmstripEl);
    }

    // Budgets
    /** @type {Array<Element>} */
    const budgetTableEls = [];
    ['performance-budget', 'timing-budget'].forEach((id) => {
      const audit = category.auditRefs.find(audit => audit.id === id);
      if (audit && audit.result.details) {
        const table = this.detailsRenderer.render(audit.result.details);
        if (table) {
          table.id = id;
          table.classList.add('lh-audit');
          budgetTableEls.push(table);
        }
      }
    });
    if (budgetTableEls.length > 0) {
      const budgetsGroupEl = this.renderAuditGroup(groups.budgets);
      budgetTableEls.forEach(table => budgetsGroupEl.appendChild(table));
      budgetsGroupEl.classList.add('lh-audit-group--budgets');
      element.appendChild(budgetsGroupEl);
    }

    // Opportunities
    const opportunityAudits = category.auditRefs
        .filter(audit => audit.group === 'load-opportunities' && !Util.showAsPassed(audit.result))
        .sort((auditA, auditB) => this._getWastedMs(auditB) - this._getWastedMs(auditA));

    if (opportunityAudits.length) {
      // Scale the sparklines relative to savings, minimum 2s to not overstate small savings
      const minimumScale = 2000;
      const wastedMsValues = opportunityAudits.map(audit => this._getWastedMs(audit));
      const maxWaste = Math.max(...wastedMsValues);
      const scale = Math.max(Math.ceil(maxWaste / 1000) * 1000, minimumScale);
      const groupEl = this.renderAuditGroup(groups['load-opportunities']);
      const tmpl = this.dom.cloneTemplate('#tmpl-lh-opportunity-header', this.templateContext);

      this.dom.find('.lh-load-opportunity__col--one', tmpl).textContent =
        strings.opportunityResourceColumnLabel;
      this.dom.find('.lh-load-opportunity__col--two', tmpl).textContent =
        strings.opportunitySavingsColumnLabel;

      const headerEl = this.dom.find('.lh-load-opportunity__header', tmpl);
      groupEl.appendChild(headerEl);
      opportunityAudits.forEach(item => groupEl.appendChild(this._renderOpportunity(item, scale)));
      groupEl.classList.add('lh-audit-group--load-opportunities');
      element.appendChild(groupEl);
    }

    // Diagnostics
    const diagnosticAudits = category.auditRefs
        .filter(audit => audit.group === 'diagnostics' && !Util.showAsPassed(audit.result))
        .sort((a, b) => {
          const scoreA = a.result.scoreDisplayMode === 'informative' ? 100 : Number(a.result.score);
          const scoreB = b.result.scoreDisplayMode === 'informative' ? 100 : Number(b.result.score);
          return scoreA - scoreB;
        });

    if (diagnosticAudits.length) {
      const groupEl = this.renderAuditGroup(groups['diagnostics']);
      diagnosticAudits.forEach(item => groupEl.appendChild(this.renderAudit(item)));
      groupEl.classList.add('lh-audit-group--diagnostics');
      element.appendChild(groupEl);
    }

    // Passed audits
    const passedAudits = category.auditRefs
        .filter(audit => (audit.group === 'load-opportunities' || audit.group === 'diagnostics') &&
            Util.showAsPassed(audit.result));

    if (!passedAudits.length) return element;

    const clumpOpts = {
      auditRefs: passedAudits,
      groupDefinitions: groups,
    };
    const passedElem = this.renderClump('passed', clumpOpts);
    element.appendChild(passedElem);
    return element;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceCategoryRenderer;
} else {
  self.PerformanceCategoryRenderer = PerformanceCategoryRenderer;
}
;
/**
 * @license
 * Copyright 2018 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/* globals self, Util, CategoryRenderer */

/**
 * An always-increasing counter for making unique SVG ID suffixes.
 */
const getUniqueSuffix = (() => {
  let svgSuffix = 0;
  return function() {
    return svgSuffix++;
  };
})();

class PwaCategoryRenderer extends CategoryRenderer {
  /**
   * @param {LH.ReportResult.Category} category
   * @param {Object<string, LH.Result.ReportGroup>} [groupDefinitions]
   * @return {Element}
   */
  render(category, groupDefinitions = {}) {
    const categoryElem = this.dom.createElement('div', 'lh-category');
    this.createPermalinkSpan(categoryElem, category.id);
    categoryElem.appendChild(this.renderCategoryHeader(category, groupDefinitions));

    const auditRefs = category.auditRefs;

    // Regular audits aren't split up into pass/fail/notApplicable clumps, they're
    // all put in a top-level clump that isn't expandable/collapsible.
    const regularAuditRefs = auditRefs.filter(ref => ref.result.scoreDisplayMode !== 'manual');
    const auditsElem = this._renderAudits(regularAuditRefs, groupDefinitions);
    categoryElem.appendChild(auditsElem);

    // Manual audits are still in a manual clump.
    const manualAuditRefs = auditRefs.filter(ref => ref.result.scoreDisplayMode === 'manual');
    const manualElem = this.renderClump('manual',
      {auditRefs: manualAuditRefs, description: category.manualDescription});
    categoryElem.appendChild(manualElem);

    return categoryElem;
  }

  /**
   * @param {LH.ReportResult.Category} category
   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {DocumentFragment}
   */
  renderScoreGauge(category, groupDefinitions) {
    // Defer to parent-gauge style if category error.
    if (category.score === null) {
      return super.renderScoreGauge(category, groupDefinitions);
    }

    const tmpl = this.dom.cloneTemplate('#tmpl-lh-gauge--pwa', this.templateContext);
    const wrapper = /** @type {HTMLAnchorElement} */ (this.dom.find('.lh-gauge--pwa__wrapper',
      tmpl));
    wrapper.href = `#${category.id}`;

    // Correct IDs in case multiple instances end up in the page.
    const svgRoot = tmpl.querySelector('svg');
    if (!svgRoot) throw new Error('no SVG element found in PWA score gauge template');
    PwaCategoryRenderer._makeSvgReferencesUnique(svgRoot);

    const allGroups = this._getGroupIds(category.auditRefs);
    const passingGroupIds = this._getPassingGroupIds(category.auditRefs);

    if (passingGroupIds.size === allGroups.size) {
      wrapper.classList.add('lh-badged--all');
    } else {
      for (const passingGroupId of passingGroupIds) {
        wrapper.classList.add(`lh-badged--${passingGroupId}`);
      }
    }

    this.dom.find('.lh-gauge__label', tmpl).textContent = category.title;
    wrapper.title = this._getGaugeTooltip(category.auditRefs, groupDefinitions);
    return tmpl;
  }

  /**
   * Returns the group IDs found in auditRefs.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @return {!Set<string>}
   */
  _getGroupIds(auditRefs) {
    const groupIds = auditRefs.map(ref => ref.group).filter(/** @return {g is string} */ g => !!g);
    return new Set(groupIds);
  }

  /**
   * Returns the group IDs whose audits are all considered passing.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @return {Set<string>}
   */
  _getPassingGroupIds(auditRefs) {
    const uniqueGroupIds = this._getGroupIds(auditRefs);

    // Remove any that have a failing audit.
    for (const auditRef of auditRefs) {
      if (!Util.showAsPassed(auditRef.result) && auditRef.group) {
        uniqueGroupIds.delete(auditRef.group);
      }
    }

    return uniqueGroupIds;
  }

  /**
   * Returns a tooltip string summarizing group pass rates.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @param {Record<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {string}
   */
  _getGaugeTooltip(auditRefs, groupDefinitions) {
    const groupIds = this._getGroupIds(auditRefs);

    const tips = [];
    for (const groupId of groupIds) {
      const groupAuditRefs = auditRefs.filter(ref => ref.group === groupId);
      const auditCount = groupAuditRefs.length;
      const passedCount = groupAuditRefs.filter(ref => Util.showAsPassed(ref.result)).length;

      const title = groupDefinitions[groupId].title;
      tips.push(`${title}: ${passedCount}/${auditCount}`);
    }

    return tips.join(', ');
  }

  /**
   * Render non-manual audits in groups, giving a badge to any group that has
   * all passing audits.
   * @param {Array<LH.ReportResult.AuditRef>} auditRefs
   * @param {Object<string, LH.Result.ReportGroup>} groupDefinitions
   * @return {Element}
   */
  _renderAudits(auditRefs, groupDefinitions) {
    const auditsElem = this.renderUnexpandableClump(auditRefs, groupDefinitions);

    // Add a 'badged' class to group if all audits in that group pass.
    const passsingGroupIds = this._getPassingGroupIds(auditRefs);
    for (const groupId of passsingGroupIds) {
      const groupElem = this.dom.find(`.lh-audit-group--${groupId}`, auditsElem);
      groupElem.classList.add('lh-badged');
    }

    return auditsElem;
  }

  /**
   * Alters SVG id references so multiple instances of an SVG element can coexist
   * in a single page. If `svgRoot` has a `<defs>` block, gives all elements defined
   * in it unique ids, then updates id references (`<use xlink:href="...">`,
   * `fill="url(#...)"`) to the altered ids in all descendents of `svgRoot`.
   * @param {SVGElement} svgRoot
   */
  static _makeSvgReferencesUnique(svgRoot) {
    const defsEl = svgRoot.querySelector('defs');
    if (!defsEl) return;

    const idSuffix = getUniqueSuffix();
    const elementsToUpdate = defsEl.querySelectorAll('[id]');
    for (const el of elementsToUpdate) {
      const oldId = el.id;
      const newId = `${oldId}-${idSuffix}`;
      el.id = newId;

      // Update all <use>s.
      const useEls = svgRoot.querySelectorAll(`use[href="#${oldId}"]`);
      for (const useEl of useEls) {
        useEl.setAttribute('href', `#${newId}`);
      }

      // Update all fill="url(#...)"s.
      const fillEls = svgRoot.querySelectorAll(`[fill="url(#${oldId})"]`);
      for (const fillEl of fillEls) {
        fillEl.setAttribute('fill', `url(#${newId})`);
      }
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PwaCategoryRenderer;
} else {
  self.PwaCategoryRenderer = PwaCategoryRenderer;
}
;
/**
 * @license
 * Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/**
 * @fileoverview The entry point for rendering the Lighthouse report based on the JSON output.
 *    This file is injected into the report HTML along with the JSON report.
 *
 * Dummy text for ensuring report robustness: \u003c/script> pre$`post %%LIGHTHOUSE_JSON%%
 */

/** @typedef {import('./category-renderer')} CategoryRenderer */
/** @typedef {import('./dom.js')} DOM */

/* globals self, Util, DetailsRenderer, CategoryRenderer, I18n, PerformanceCategoryRenderer, PwaCategoryRenderer */

class ReportRenderer {
  /**
   * @param {DOM} dom
   */
  constructor(dom) {
    /** @type {DOM} */
    this._dom = dom;
    /** @type {ParentNode} */
    this._templateContext = this._dom.document();
  }

  /**
   * @param {LH.Result} result
   * @param {Element} container Parent element to render the report into.
   * @return {!Element}
   */
  renderReport(result, container) {
    this._dom.setLighthouseChannel(result.configSettings.channel || 'unknown');

    const report = Util.prepareReportResult(result);

    container.textContent = ''; // Remove previous report.
    container.appendChild(this._renderReport(report));

    return container;
  }

  /**
   * Define a custom element for <templates> to be extracted from. For example:
   *     this.setTemplateContext(new DOMParser().parseFromString(htmlStr, 'text/html'))
   * @param {ParentNode} context
   */
  setTemplateContext(context) {
    this._templateContext = context;
  }

  /**
   * @param {LH.ReportResult} report
   * @return {DocumentFragment}
   */
  _renderReportTopbar(report) {
    const el = this._dom.cloneTemplate('#tmpl-lh-topbar', this._templateContext);
    const metadataUrl = /** @type {HTMLAnchorElement} */ (this._dom.find('.lh-topbar__url', el));
    metadataUrl.href = metadataUrl.textContent = report.finalUrl;
    metadataUrl.title = report.finalUrl;
    return el;
  }

  /**
   * @return {DocumentFragment}
   */
  _renderReportHeader() {
    const el = this._dom.cloneTemplate('#tmpl-lh-heading', this._templateContext);
    const domFragment = this._dom.cloneTemplate('#tmpl-lh-scores-wrapper', this._templateContext);
    const placeholder = this._dom.find('.lh-scores-wrapper-placeholder', el);
    /** @type {HTMLDivElement} */ (placeholder.parentNode).replaceChild(domFragment, placeholder);
    return el;
  }

  /**
   * @param {LH.ReportResult} report
   * @return {DocumentFragment}
   */
  _renderReportFooter(report) {
    const footer = this._dom.cloneTemplate('#tmpl-lh-footer', this._templateContext);

    const env = this._dom.find('.lh-env__items', footer);
    env.id = 'runtime-settings';
    this._dom.find('.lh-env__title', footer).textContent = Util.i18n.strings.runtimeSettingsTitle;

    const envValues = Util.getEnvironmentDisplayValues(report.configSettings || {});
    [
      {name: Util.i18n.strings.runtimeSettingsUrl, description: report.finalUrl},
      {name: Util.i18n.strings.runtimeSettingsFetchTime,
        description: Util.i18n.formatDateTime(report.fetchTime)},
      ...envValues,
      {name: Util.i18n.strings.runtimeSettingsChannel, description: report.configSettings.channel},
      {name: Util.i18n.strings.runtimeSettingsUA, description: report.userAgent},
      {name: Util.i18n.strings.runtimeSettingsUANetwork, description: report.environment &&
        report.environment.networkUserAgent},
      {name: Util.i18n.strings.runtimeSettingsBenchmark, description: report.environment &&
        report.environment.benchmarkIndex.toFixed(0)},
    ].forEach(runtime => {
      if (!runtime.description) return;

      const item = this._dom.cloneTemplate('#tmpl-lh-env__items', env);
      this._dom.find('.lh-env__name', item).textContent = runtime.name;
      this._dom.find('.lh-env__description', item).textContent = runtime.description;
      env.appendChild(item);
    });

    this._dom.find('.lh-footer__version_issue', footer).textContent = Util.i18n.strings.footerIssue;
    this._dom.find('.lh-footer__version', footer).textContent = report.lighthouseVersion;
    return footer;
  }

  /**
   * Returns a div with a list of top-level warnings, or an empty div if no warnings.
   * @param {LH.ReportResult} report
   * @return {Node}
   */
  _renderReportWarnings(report) {
    if (!report.runWarnings || report.runWarnings.length === 0) {
      return this._dom.createElement('div');
    }

    const container = this._dom.cloneTemplate('#tmpl-lh-warnings--toplevel', this._templateContext);
    const message = this._dom.find('.lh-warnings__msg', container);
    message.textContent = Util.i18n.strings.toplevelWarningsMessage;

    const warnings = this._dom.find('ul', container);
    for (const warningString of report.runWarnings) {
      const warning = warnings.appendChild(this._dom.createElement('li'));
      warning.textContent = warningString;
    }

    return container;
  }

  /**
   * @param {LH.ReportResult} report
   * @param {CategoryRenderer} categoryRenderer
   * @param {Record<string, CategoryRenderer>} specificCategoryRenderers
   * @return {!DocumentFragment[]}
   */
  _renderScoreGauges(report, categoryRenderer, specificCategoryRenderers) {
    // Group gauges in this order: default, pwa, plugins.
    const defaultGauges = [];
    const customGauges = []; // PWA.
    const pluginGauges = [];

    for (const category of Object.values(report.categories)) {
      const renderer = specificCategoryRenderers[category.id] || categoryRenderer;
      const categoryGauge = renderer.renderScoreGauge(category, report.categoryGroups || {});

      if (Util.isPluginCategory(category.id)) {
        pluginGauges.push(categoryGauge);
      } else if (renderer.renderScoreGauge === categoryRenderer.renderScoreGauge) {
        // The renderer for default categories is just the default CategoryRenderer.
        // If the functions are equal, then renderer is an instance of CategoryRenderer.
        // For example, the PWA category uses PwaCategoryRenderer, which overrides
        // CategoryRenderer.renderScoreGauge, so it would fail this check and be placed
        // in the customGauges bucket.
        defaultGauges.push(categoryGauge);
      } else {
        customGauges.push(categoryGauge);
      }
    }

    return [...defaultGauges, ...customGauges, ...pluginGauges];
  }

  /**
   * @param {LH.ReportResult} report
   * @return {!DocumentFragment}
   */
  _renderReport(report) {
    const i18n = new I18n(report.configSettings.locale, {
      // Set missing renderer strings to default (english) values.
      ...Util.UIStrings,
      ...report.i18n.rendererFormattedStrings,
    });
    Util.i18n = i18n;
    Util.reportJson = report;

    const detailsRenderer = new DetailsRenderer(this._dom);
    const categoryRenderer = new CategoryRenderer(this._dom, detailsRenderer);
    categoryRenderer.setTemplateContext(this._templateContext);

    /** @type {Record<string, CategoryRenderer>} */
    const specificCategoryRenderers = {
      performance: new PerformanceCategoryRenderer(this._dom, detailsRenderer),
      pwa: new PwaCategoryRenderer(this._dom, detailsRenderer),
    };
    Object.values(specificCategoryRenderers).forEach(renderer => {
      renderer.setTemplateContext(this._templateContext);
    });

    const headerContainer = this._dom.createElement('div');
    headerContainer.appendChild(this._renderReportHeader());

    const reportContainer = this._dom.createElement('div', 'lh-container');
    const reportSection = this._dom.createElement('div', 'lh-report');
    reportSection.appendChild(this._renderReportWarnings(report));

    let scoreHeader;
    const isSoloCategory = Object.keys(report.categories).length === 1;
    if (!isSoloCategory) {
      scoreHeader = this._dom.createElement('div', 'lh-scores-header');
    } else {
      headerContainer.classList.add('lh-header--solo-category');
    }

    if (scoreHeader) {
      const scoreScale = this._dom.cloneTemplate('#tmpl-lh-scorescale', this._templateContext);
      const scoresContainer = this._dom.find('.lh-scores-container', headerContainer);
      scoreHeader.append(
        ...this._renderScoreGauges(report, categoryRenderer, specificCategoryRenderers));
      scoresContainer.appendChild(scoreHeader);
      scoresContainer.appendChild(scoreScale);

      const stickyHeader = this._dom.createElement('div', 'lh-sticky-header');
      stickyHeader.append(
        ...this._renderScoreGauges(report, categoryRenderer, specificCategoryRenderers));
      reportContainer.appendChild(stickyHeader);
    }

    const categories = reportSection.appendChild(this._dom.createElement('div', 'lh-categories'));
    for (const category of Object.values(report.categories)) {
      const renderer = specificCategoryRenderers[category.id] || categoryRenderer;
      // .lh-category-wrapper is full-width and provides horizontal rules between categories.
      // .lh-category within has the max-width: var(--report-width);
      const wrapper = renderer.dom.createChildOf(categories, 'div', 'lh-category-wrapper');
      wrapper.appendChild(renderer.render(category, report.categoryGroups));
    }

    const reportFragment = this._dom.createFragment();
    const topbarDocumentFragment = this._renderReportTopbar(report);

    reportFragment.appendChild(topbarDocumentFragment);
    reportFragment.appendChild(reportContainer);
    reportContainer.appendChild(headerContainer);
    reportContainer.appendChild(reportSection);
    reportSection.appendChild(this._renderReportFooter(report));

    return reportFragment;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReportRenderer;
} else {
  self.ReportRenderer = ReportRenderer;
}
;
/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* globals self, URL */

// Not named `NBSP` because that creates a duplicate identifier (util.js).
const NBSP2 = '\xa0';

class I18n {
  /**
   * @param {LH.Locale} locale
   * @param {LH.I18NRendererStrings=} strings
   */
  constructor(locale, strings) {
    // When testing, use a locale with more exciting numeric formatting.
    if (locale === 'en-XA') locale = 'de';

    this._numberDateLocale = locale;
    this._numberFormatter = new Intl.NumberFormat(locale);
    this._strings = /** @type {LH.I18NRendererStrings} */ (strings || {});
  }

  get strings() {
    return this._strings;
  }

  /**
   * Format number.
   * @param {number} number
   * @param {number=} granularity Number of decimal places to include. Defaults to 0.1.
   * @return {string}
   */
  formatNumber(number, granularity = 0.1) {
    const coarseValue = Math.round(number / granularity) * granularity;
    return this._numberFormatter.format(coarseValue);
  }

  /**
   * @param {number} size
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 0.1
   * @return {string}
   */
  formatBytesToKB(size, granularity = 0.1) {
    const kbs = this._numberFormatter.format(Math.round(size / 1024 / granularity) * granularity);
    return `${kbs}${NBSP2}KB`;
  }

  /**
   * @param {number} ms
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 10
   * @return {string}
   */
  formatMilliseconds(ms, granularity = 10) {
    const coarseTime = Math.round(ms / granularity) * granularity;
    return `${this._numberFormatter.format(coarseTime)}${NBSP2}ms`;
  }

  /**
   * @param {number} ms
   * @param {number=} granularity Controls how coarse the displayed value is, defaults to 0.1
   * @return {string}
   */
  formatSeconds(ms, granularity = 0.1) {
    const coarseTime = Math.round(ms / 1000 / granularity) * granularity;
    return `${this._numberFormatter.format(coarseTime)}${NBSP2}s`;
  }

  /**
   * Format time.
   * @param {string} date
   * @return {string}
   */
  formatDateTime(date) {
    /** @type {Intl.DateTimeFormatOptions} */
    const options = {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: 'numeric', timeZoneName: 'short',
    };
    let formatter = new Intl.DateTimeFormat(this._numberDateLocale, options);

    // Force UTC if runtime timezone could not be detected.
    // See https://github.com/GoogleChrome/lighthouse/issues/1056
    const tz = formatter.resolvedOptions().timeZone;
    if (!tz || tz.toLowerCase() === 'etc/unknown') {
      options.timeZone = 'UTC';
      formatter = new Intl.DateTimeFormat(this._numberDateLocale, options);
    }
    return formatter.format(new Date(date));
  }
  /**
   * Converts a time in milliseconds into a duration string, i.e. `1d 2h 13m 52s`
   * @param {number} timeInMilliseconds
   * @return {string}
   */
  formatDuration(timeInMilliseconds) {
    let timeInSeconds = timeInMilliseconds / 1000;
    if (Math.round(timeInSeconds) === 0) {
      return 'None';
    }

    /** @type {Array<string>} */
    const parts = [];
    const unitLabels = /** @type {Object<string, number>} */ ({
      d: 60 * 60 * 24,
      h: 60 * 60,
      m: 60,
      s: 1,
    });

    Object.keys(unitLabels).forEach(label => {
      const unit = unitLabels[label];
      const numberOfUnits = Math.floor(timeInSeconds / unit);
      if (numberOfUnits > 0) {
        timeInSeconds -= numberOfUnits * unit;
        parts.push(`${numberOfUnits}\xa0${label}`);
      }
    });

    return parts.join(' ');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18n;
} else {
  self.I18n = I18n;
}

/*# sourceURL=third_party/lighthouse/report-assets/report.js */
  //# sourceURL=compiled-reportrenderer.js
  </script>
  <script>window.__LIGHTHOUSE_JSON__ = {"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36","environment":{"networkUserAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3963.0 Safari/537.36 Chrome-Lighthouse","hostUserAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36","benchmarkIndex":1986},"lighthouseVersion":"6.0.0","fetchTime":"2020-08-25T14:36:04.684Z","requestedUrl":"https://jolienhoop.com/","finalUrl":"https://jolienhoop.com/","runWarnings":[],"audits":{"is-on-https":{"id":"is-on-https","title":"Uses HTTPS","description":"All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being servedover HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://web.dev/is-on-https).","score":1,"scoreDisplayMode":"binary","displayValue":"","details":{"type":"table","headings":[],"items":[]}},"redirects-http":{"id":"redirects-http","title":"Redirects HTTP traffic to HTTPS","description":"If you've already set up HTTPS, make sure that you redirect all HTTP traffic to HTTPS in order to enable secure web features for all your users. [Learn more](https://web.dev/redirects-http).","score":1,"scoreDisplayMode":"binary"},"service-worker":{"id":"service-worker","title":"Does not register a service worker that controls page and `start_url`","description":"The service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. [Learn more](https://web.dev/service-worker).","score":0,"scoreDisplayMode":"binary"},"works-offline":{"id":"works-offline","title":"Current page does not respond with a 200 when offline","description":"If you're building a Progressive Web App, consider using a service worker so that your app can work offline. [Learn more](https://web.dev/works-offline).","score":0,"scoreDisplayMode":"binary","warnings":[]},"viewport":{"id":"viewport","title":"Has a `\u003cmeta name=\"viewport\">` tag with `width` or `initial-scale`","description":"Add a `\u003cmeta name=\"viewport\">` tag to optimize your app for mobile screens. [Learn more](https://web.dev/viewport).","score":1,"scoreDisplayMode":"binary","warnings":[]},"without-javascript":{"id":"without-javascript","title":"Contains some content when JavaScript is not available","description":"Your app should display some content when JavaScript is disabled, even if it's just a warning to the user that JavaScript is required to use the app. [Learn more](https://web.dev/without-javascript).","score":1,"scoreDisplayMode":"binary"},"first-contentful-paint":{"id":"first-contentful-paint","title":"First Contentful Paint","description":"First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint).","score":0.99,"scoreDisplayMode":"numeric","numericValue":560.6582,"numericUnit":"millisecond","displayValue":"0.6 s"},"largest-contentful-paint":{"id":"largest-contentful-paint","title":"Largest Contentful Paint","description":"Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn More](https://web.dev/lighthouse-largest-contentful-paint)","score":0.96,"scoreDisplayMode":"numeric","numericValue":947.5293999999999,"numericUnit":"millisecond","displayValue":"0.9 s"},"first-meaningful-paint":{"id":"first-meaningful-paint","title":"First Meaningful Paint","description":"First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint).","score":0.99,"scoreDisplayMode":"numeric","numericValue":560.6582,"numericUnit":"millisecond","displayValue":"0.6 s"},"load-fast-enough-for-pwa":{"id":"load-fast-enough-for-pwa","title":"Page load is fast enough on mobile networks","description":"A fast page load over a cellular network ensures a good mobile user experience. [Learn more](https://web.dev/load-fast-enough-for-pwa).","score":1,"scoreDisplayMode":"binary","numericValue":4897.6674,"numericUnit":"millisecond"},"speed-index":{"id":"speed-index","title":"Speed Index","description":"Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index).","score":1,"scoreDisplayMode":"numeric","numericValue":560.6582,"numericUnit":"millisecond","displayValue":"0.6 s"},"screenshot-thumbnails":{"id":"screenshot-thumbnails","title":"Screenshot Thumbnails","description":"This is what the load of your site looked like.","score":null,"scoreDisplayMode":"informative","details":{"type":"filmstrip","scale":3000,"items":[{"timing":300,"timestamp":10950711844,"data":"data:image/jpeg;base64,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"},{"timing":600,"timestamp":10951011844,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAGwAeAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APhvwjJoKwzLq9wLYyExtIbQ3L7SMrsGVEYDKSzgluUCjBeuqfOn7p87j/rbqxeHi5R0e9tU/eur+/dWtFq1uZt3scxWx7QUAFABQAUAFABQAUAFABQAUAFABQB6F8TNF+G+l+F/BE/gjxDquta7d6f5viS11C28uKxu9sf7qFtq713eb/e4CfMSSAlfqB57TAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDb8PeI7fQUm83QdL1eZpIpIptQWZjDskVyAqSKjq4UoyyK42u2MHBCtcDU0n4gRaHYXcVp4Z0Frq6YJJc3tn9rKQbVDRRrMXVC7DcZQPNUgCN41LKw1cDkOPYe1MAoAKACgAoAKACgAoAKACgAoAKACgD0jwN4B0rxf4UAS8jTVjLqVzdO0EpNlDaWQltYg4cR5vbiU26hlLeZFFszuZHnqB6BD8IfANnbeEZ11WDVbGPxbcQatNe3sdjNe6Qg0wNIgSWWILC892heGSTcBJKGMUTNHN3cDK1T4L6TpOh+IZYJ7eS802ze7NncJLcXEbzRacwtpHSSPE1sl1eOwEOd2n3O9SvyQu7A85uPCmhtqdva2Pi201AXF0tqJUtXhRcIN82ZdqiNpG2xFipKgtKLf7tVdgczewm2vLiFoJrVo5GQwXAIkjIONrZA+YdDwOR0FMCCgAoAKACgAoAKACgAoAKACgC3/ZF6NMj1JrSdNMlna1W9aJvIaZVDmMPjBcKynb1AYHvRcDQ1TwTrmjeF9F8Rahpc9pouszXMGn3cy4W5a3MYm2dyFMiLu6Z3KDlWALgU49f1SHTW06PUrtNPaIwNaLOwiaMyJIUK5wVLxRvjpuRT1UEAFHPOe9ACdKACgAoAKACgAoAKACgAoAKACgDasrJtT8PSxHX7a1SG6Rl0q5lkTzC42tMvymPgBVbLBsEYDANtT9AJNV0yz03wxp4h8RJqly15cb9NgV/Kt4/Lg2Th2wC0pLoV2hl+zjPUAIDsfFXws8Gad4gntvD/xh8N61o4QvDfXem6nZykhV+R4vsrgMW3hdruuFBYpuC0XYHJ+FNA0TVr7ULfXPEieH4o7SVrO8Fo91DPdLt2QuEO+NGyw80KwBH3WGcMCLVPDVnYWM1xbeJtI1R455Yvs1qt0kjIjhVlXzYUUq4O5RneADuVTxRqBlX9olnMiR3UN4rRRyeZAHCgsgYodyqdyklTxjKnaWXDFgVqACgAoAKACgAoAKACgAoA3fC3gXxB42/tA6FpNzqg0+A3N0bdMiKPpkn+Q6nBwOK56uIpUHFVJWvt8vyXm9D1MFlmMzHm+q03Ll3287JX3k7O0Vdu2iKp8NaoNC/tk2Ug0vzDELnjaWGM47kDIGenIr0Vhqzpe3Ufd7/f8A5M+clj8NDELCyn776a/8Nfrbe2trF/T/AIeeJtT1vRdHt9Dvm1LWkWXT7d4ShuY2JAkUtgeX8rEv90BWJIAJHmYjFUcJRlXry5Yx3f8AWt30W76Hq0aNSvUVKkryZZvPhX4r0/xFqWhXGjSxappoVrqEum2MMAV+fdtbcDkbScjJGcGujK5Rzql7fL37SNr3X/Btr0tvfTc480rU8llyZjJU3e1nvf5dPPbzOVZSjFWBVgcEHqDVPTRm24lABQAUAFABQAUAFABQAUAFAHe/DD41eI/hHHq6aCtg41O3e2m+3Won2IylWMefuMVJBYc46EV5uKwFLFtSno7W0tquzun+Gp9Hlmf4zKaTo0FFpyUteZWkut4yV+mjvHRaPpmD4la1/wAIY/hjzEOmvK0zHB8xnZssSc4OckdOhPrX0Cxc40fYpLa1+trt23t1fQ+FqZXRq4v65OTve9tLXta+172Xf5F3w/8AGHxB4b8W+HvEdnHpiX+hwi2tlTToYY5IwrIRMIlQysyswMjEyHPLZAI+fx+X0Myw0sLXvyytto000016NJ7P0ex9DhcTPCVVVp76rXZp6NP1R1WtftVeOtc8d6x4qluYYbzVbMWFzbW/mRwmHnKAB921izsVLEEuxx0x35JTjw/SlSw3v80uZuercr35tOVXXS2lla1jy89w0OIKkKmJbjyJxXI7Llas46810+vU8kvLua/u57q4fzJ55GlkfAG5mOSePc1rJuTcnuzeEI04qEdkQ1JYUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB1OheHtAvtCgudU1fVdIu7i++yxTDRvP05UXyjI73CzCQOiyZMaQueY+Rv4TbA1D8P9Bn+zx2Xi9bm4uIbKVUfSLpBbCRJGu3nKoxWO3WPzN0YkMkTowVW3pGXA6vxH8EfBfhvwn4ivLn4lXMXiHTdUFlb6Nd+EdQtxLA85WGaWZxtgeS3R7lYiGJVduc7ipqM434q+FvBvhPXILXwX44bx3p7xb5L46RLp3lv/AHNkhJb1z05HvQvMRxNMAoAKACgAoAKACgAoAKACgAoA2PDfjDW/B90txouqXOmuJ4Ll1hc+XK8MqywmSM5SQLIisFYEZUcdaVkwJtV8e+JdeeRtT8Q6pqBl/wBabq8kkMvzOx3knLfNLKec/wCsf+8aXKgMa6vbi9vJrq5nkuridzJLJO5dncjliTyT1OfU5qrICKgAoAKACgAoAKACgAoAKAP/2Q=="},{"timing":900,"timestamp":10951311844,"data":"data:image/jpeg;base64,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"},{"timing":1200,"timestamp":10951611844,"data":"data:image/jpeg;base64,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"},{"timing":1500,"timestamp":10951911844,"data":"data:image/jpeg;base64,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"},{"timing":1800,"timestamp":10952211844,"data":"data:image/jpeg;base64,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"},{"timing":2100,"timestamp":10952511844,"data":"data:image/jpeg;base64,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"},{"timing":2400,"timestamp":10952811844,"data":"data:image/jpeg;base64,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"},{"timing":2700,"timestamp":10953111844,"data":"data:image/jpeg;base64,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"},{"timing":3000,"timestamp":10953411844,"data":"data:image/jpeg;base64,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"}]}},"final-screenshot":{"id":"final-screenshot","title":"Final Screenshot","description":"The last screenshot captured of the pageload.","score":null,"scoreDisplayMode":"informative","details":{"type":"screenshot","timing":1269,"timestamp":10951681189,"data":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHCAfIDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAIGBAUHAwEI/8QASxAAAQQCAQMCBAMDBQsKBwAAAAECAwQFEQYSITEHExRBUWEiMnEVgbEzN0KRoQgWIzQ4UmJydbLwFyVDVFVWdHbBwpKTorO00eH/xAAbAQEBAQADAQEAAAAAAAAAAAAAAQIEBQYDB//EAC0RAQACAgEDAgMHBQAAAAAAAAABEQIDBBIhMQVBE3GBBjJRYZGh8BQjJLHh/9oADAMBAAIRAxEAPwD89HrUrTXLMdetG6SaRelrU8qp5Ft4Gvw9fOX42otitVVYvsq77/2IfXKai3E5O6dOqc4i59vnM1DFy3HauJoyLcysLsiiIrasSdXfadlX5dvshgZ3DSYl9VFkSVtiu2witaqdKL8lPK/jb0EFe5aYro7n42SdXV1Kvfv9+/zOgTVmz8pwtSdm0/ZSslavyRWuRdmZymPdwM+Tlx4jLLPr+9M+PaPEfKf+uYA+vTpe5qLvSqmz4fR2wAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOiel3BaXJaGSyWbkyUNKtLDBA2nEjn25pHa9piu7dX5fsm9rpCz+pXpni6eKzOSwtDL4zIUEhllxFjomRkL1VPdbIxzupm2u33XSou9Jolx4HFAAUQXyAvkBlM3PFcwmHyLnzM9ypOxYZ2a8sX6fc0wJMXFM7deO3CcM/EumYyG9WgVvG8vjrONcqvjitO/FDv9O/9f8AUYGQyEOCjuzyZBmRz9tntrJEu2QtX6f8fTt9aEDHQ67H0yOq88rj37REz859/wA/F+4AD6O1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHSvSrndDj2MyGKz82VSnLPDZpyUkY5ak7HKvuoj11/m7TS7RFRULX6mepmMmxeboYjMZPK5m+yGvJlEhZBB8O1VcsTGoqORF6nbXXdVXvrRwoE6YuwABRBfIC+QGUwAGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEF8gL5AZTAAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQXyAvkBlMABoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBfIC+QGUwAGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEF8gL5AZTAAaAAAAAAAAAAAAAAzsFjJ81mqGLqLG2xdnZXjWRVRqOe5GptURe21MEsPp1Yhp8/43ZtzRwV4cjXkklkcjWsakjVVVVeyIifMDFx/H7d6bLxQuhR2LryWZ+pyptrHNavT27rtyedGvSnZWKKRK8yxyu6I3IxdPX6IvzU6VjuWV7f8AfrXsV8HTZNjbDIJoIGRPmcsrNNRyfm2m1189bLHyrlkFXH3b2AkqOxz69X4FrsujlgfG6NzUZURvUx7Fau1XSa6u6775scNWN6MV6sd0I7pV2uyL9P1LBxvidzPV4LEM9eGvJfixyukVdtfI1zkdpE/KiMXff6F79SqsN6m2nxzoZVlgk5VdY9en2/e6EbH+rUXsn+mU6rbrN9K8lTdPElt+YrythV6dasSGZFcjfOkVUTf3Qt2K38FaWFZkrTrCmtye2vT38d/uedivNWlWKzFJDIndWSNVqp+5TsWP5g6pkcZFXz3tU4eJOiSNtrUbLKQPVrdb0kiPRmvntEKTzTKpleLcQksXvjMjFWsR2HPl9yVqe+9WI9VXf5V7b+SixTwAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEF8gL5AZTAAaAAAAAAAAAAAAAAAAD0rTPrWIp4un3InI9vU1HJtF2m0Xsv6L2PMAZ+SzORyVy3au3JZJ7SI2Zd9KPRNdLVRNJpOluk1pNJrwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQXyAvkBlMABoAAAAAAAAAAAAAAAAALjd43Rh9J8dyRjpv2hYyklN6K5OjobH1JpNb3v7gU4AAAC4xcbpP9I5+Sq6b9oszLaCJ1J7ftrD1+Nb3v57ApwBuasuBTil2OzXvO5Cs7FrTMc32Gxf0kcnnq8/2eO+w0wAAAAAC94TFUZ/R7k2Tlqxvv179WKKdU/Exrt9SJ+pRAAAAAAAAdJjwfF+LcTwmT5VUyGWyWZjdYhqVrCV44IEXSOc7pVVcvnXj/1kyObAuHqNxvH4WTD38FNYfiMxUS3XZZ17sPdWuY5U7LpU8/P+0p5QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEF8gL5AZTAAaAAAAAAAAAAAAAAAzsFDTs5vHwZSZ8FCWxGyxKzW2Rq5Ec5N9uybUDBOmZP/J4wv+35v/slZ9QuKWeJcsvYt8U61myr8JM9N+/Eq/gcioml2mt6+ey180rS4D0Y4thMmxYMpbvTZP4Z6afHCrehquT5dXlP3/QgyMrej9MMBg6eGqVHcoyNNmQuZCxA2Z1dkm1ZFGjkVGrpO667/wAJYLIt9UcXl8VnqtP++SrUku4/JV4GQvlWNNuhkRiIjkVPC67aUxfVurNnsRxvmGOY6fHTY2GlaexN/D2Yk6XMf/m77Km/J89GqkuEjzfMsgx0GLoUJoYZHppLFiRvQyNn1Xuu9eCe1jl50uv/AJOdv/zM3/8AGOaHTacb5f7nS22Jjnu/vlaumptf8WLI5kdEw1WB3oXyKy6CJbDMtWY2VWJ1tRWrtEXyiFC+Dtf9Wm/+BToeE7egXJt/9sVv91RI2NavY4HwrB3cNiG3OTZqJbjrstX4hKcG9RtjaqK1HO0qqqp9j3gde9QOI8iZyfFNizuJpuyNTJtppXdKxip7kUnS1Ed2Xadtp3Mnkmf5NY9NuJ5viOXycGPoUm4zIwUp3tSvNGumve1q9kc1U7/ZCmRZ/wBQM3gcpZ/bOds4ivFq4+S2/wBrocvT0rtdO3vXT3Xz2Mi1RZDGcd9F+LZVMRTt5yS3bjrS2IWvjj/Gm3uav53JpEai7RNqvyPnGeQWfUXA8pxXKYaVmzRxU2SpXWVY4ZYXxaXo2xqbaqLrRpuU/wAx3B//ABt7/eaPRH/HOY/+Wb38Globf02u4/G+jnLrmUotyEcN+q6KtIq+3JLpUb168tRe6p89a+Z6+nHNLvM+VVOL8qq425hcl110iZSiiWsvSqtdE5jUVFRUT6mj49/MRy7/AGnT/wDcYPoZ/O1xn/xP/tcK8jK9O8Bja7uT5/kMCXsbxxiaqqum2bD3qyJrv9HaKq/u+RKt6tZiS4jMvQw17COXT8WuPiZEjPmjFRvU1UTwu1/ebThEf7dxvqJxKu5v7UyLm2qUarr3nwSuc6NPq5Wr2T7Kc3xuCymSzUeIpULEmSfJ7fw/QqPa7ffqRfGvmq+B8x0mX03x0/q9TxNaeRnGrlZuXZKq/jbUVivVN/Xsrd/oprL3qvkq958PGqGKxmBY7piofARSNexPHuOc1XOcqeV2Xhc9i6XrTi8LLci+BqYVvG5baL+BJPbVqu39Ee5G/wBZxXPceymCzs2IyVOaO9G/20j6FXr79lb/AJyL8lTyI7+Ra/UvGYy1g8By/BVI6FbLtkitUov5OCzGqI7o+jXb2ifI6BxPjFflvp9x6LmEE0d/HpPJiakUzI7GVqonWsaI7uiI7w76b19Sr8thr8a4hwTjGcTVttp+TyVf+lBHI5qNY5Pk5WIqqnlDE9b35rH+qdnKLJNFF1Ry4q1Euo/ZREWP2nJ20n2+ex57CscszGT5jyFqMx7ovh40rVMdVjc5K0LEXTGt8rruqr9dqVg/SmGq/G4G56muxFqpyWPG2I31GRI1tyVWoz4tjfPSjXqrtJrfj7/mssSAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIL5AXyAymAA0AAAAAAAAAAAAAAAAt+F9SuYYXHx0cdnrcdWNOmON/TIkafRvUi9KfoVvLZO9mL8t3KW57duVdvmmer3L+9TEBKG74zyvO8XlkkwOTs0lk/lGxu2x/+s1dov70PvJuW57lD41z2Us3WxfybHqiMZ90Ymmov6IaMCgLBx3mnI+N05KuCzFujXkf7ro4XaRXaRN/1In9RXwUXX/lV5z/3nyX/AMz/APhWUzGQTGWceluX4KzMk80O/wAL5E8OX7mACUNtxzkmY41bdZwORs0ZnJp6xO0j0+jm+HJ+qGXybmvI+TxRxZ3LWbcDF6mwqqMjRfr0NRG7++ivAUM2fK3rGLq42a1I+hVc98ECr+GNzvzKn6jF5W9inWXY61JXWzA+tMrF11xO/M1fsukMIFGbDlb0OKsYyK1IyhYe2WWBF/C9zfyqv6EMVkbeJyEF7G2H1rkDuqOWNdOav1QxQB7Mt2I7iW455GWkf7iSscrXI7e+pFTwuy22vVHmtqi6nNyO8sLm9DlarWvcn0V6Ijl/rKYBQfMuOO9TuZ47HspVOQ3W12N6WI5WvcxPo1zkVyfuUpwJQ9rlqxdtS2bk8tixK5XSSyuVznr9VVe6qWTAeofLMBRbSxWctQ1G/khd0yMZ/qo9F6f3FVBRv5eZcjlzzM1Jmr78oxFaywsqq5rVTStT5Infx4NFK90sj5HqiucquXSa7qRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQXyAvkBlMABoAAAAAAAAAAAAAAAAAAAGVkMfax0scd2B0L5ImTsR3zY9qOa79FRUUxQANlncNZws1SK06JzrNSG4z21VdMkYjmou0Tvpe5rQgDK/Z9r9mJkfZd8Es3w/vfL3Onq6f113MUKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIL5AXyAymAA0AAAAAAAAAAAAABu+DxQzcxw0dm3BThdbj6p52NeyNOpO7mu/Cqfr2+vY0gA616tPdPw7EvyCzrlI8hYYvxmQhuWGxKyNW7dG1OliqjlRq+O+l0pm42zYk9OGRfGRUKcGKlVJILUUlWaRHOcjJIHIj2WVXSI9qqv5VTscYBKHcsnat56axHNfbbfkeJQRUfetNX3J2rXdK1Nu7P2x+0XSqqKHpPSppSwtqpFyuLj1OKB8NmPrbqeRZ2Mk3pJOnp3pd6R2jhoJQ/Qsl6J2QySpZdPyj9lYxjZMffhhmVGxr76Ryqjm76ujaN7qiLrts0me5TNjsdds4aWLE3pc9D7zK9mKV6olZvWqvYiIqOeiq7SIm1VDioHSOxc/vTTcT5XQxV5HY6ryWZy1orCdDa7l2zpZvuz3O6aTW+5x0AsRQAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC+QF8gMpgANAAAAAAAAAAAAAAZmGxtrM5apjcexJLdqVsMTFcjUc5V0ibXshhlt9JP5z+L/wC0Yf8AeQCpvarHua7yi6U+HbquHu5NMO3kmJxtDLOzaxUm2Me2Js1dInOe1Y2dHutRyRo3a91drelUzb2KY25xG9Y47YsX5UyDJILFCvUsSIxjFjckCfge5vWrmsVNu0id+xnqHBAd5gwtdM3ZsXKzJMuuFbYpQxYaNltXe/0ufJTc721lRiLrXlunaVUMS/VX2c3Z4xx6ReTMZRbNWtYuFZUjc2T3ZmVk62t6lSLq0nbqXsmx1Dkl7BZCjm48TYhal+T2kbGj2qi+41rmd967o5vz7bNfPE+CeSGVOmSNyscm96VF0vg6jy6FJ/X3HwXa8Wn2sayWBWJ0d44Ec3p8a8prwb/EfDVsvwzGMxuLdVyuVu1rnuUonuli+J6EZ1K1VaiIvbSp8vogscdwOEyOfuuqYmstidsbpXN62tRGN8uVXKiaQlncDk8DNFFlqb67pW9cblVHNkbvW2uRVRe/bspcPR+D3OQ8hgZSlvdWGuMSrEq9c3ZE6E0irtfHYu0FWKrDx9trCMxzqmKy8zMNkGe+sbmxq9s7kem9OXwjk/6Pt5EzQ4MDuvF20bfGsNkZcTYybbz7LswyjiK8rXP63J0PkVzfh0SPpc3pRETe+5j4yxBBdw2MbjMVLRk4s+/IyahE90k7IZXte56t6lXcbfnrz9VFjiQO38ar0M5Bgcrkqdd+YmxN50La1CFyzzxTI1ipB+Fkj2sV6oi+elPOiGXlrUMXn8lBhfhstXxdRzn5LFwROWR1rp95IEVzWKrFRPCb1vXcWOJm8wfE83naq2cXQdLXST2kkc9kbXv1voarlTqd47Jte6G79Tca92Vbk6tJkVaShQmsugjRkbZpq6PX8KaRvUqPXSJ8lNvDi5eQcO4YtHH5LKU6CWYLsGL7zRTulc9rl/C7SOarPxKml6VT5Fsc1swS1bEsFmJ8U8TlZJG9qtc1yLpUVF8Kinmd9gxNOnZ5FJSW/nMtFmkgsTMx0OTndB7bVRHteqI1rnq9Fc1N7aibT56+R9Ctb4nSxuJp16GU5HYinjsVYpJvaZZh6Ylf+LSJtU7L3TttUJ1DiQOuZPPzVuLZbIQ4/CtuUs8lKvJ+zK/+DgcyRyx66NKm4291RV89+6lrxvHIqnLMw3H4uKbHu5C6q+Gti47To4tNVWyukXUUOnLrpTfZ3fsiCx+eAdzx8VXFZfiOJr4zGrVyGeu0bST045XyQpYYxGdTkVyIiOXwqL/UaeCril4TPyFtWotvHQT4P4f2mqslh7/8DKrdd3JE+T8XncSFsckB736dnH3Zql6CSvagerJIpG9LmOTyioeBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEF8gL5AZTAAaAAAAAAAAAAAAAAIqou0XSgASdJI/p63ud0ppu13pPsfXyyPf1vke5+99SuVV39SAAms0qze6sj1l3vr6l3v8AUNmkbIsjZHpIu9uRy7XfnuQAR96l3va7+o6nbRepe3jv4PgCvrXOau2qqL9UUK9yuVVcu18rs+ACTJHsY5rHua1/ZyIukX9T51O+q+NefkfAB9RzkVqo5UVvdNL4Pr5Hvc5z3uc535lVdqv6kQBlpkraYqTGpMqUpJmzvj0n4ntarWqq+eyOXSeO6mPFLJEqrFI9iqml6VVNp9CAAlHI+JVWN7mKqaVWrrsfOpe3de3j7HwANrrW115Jtlkaj0bI9Ef+bSr3/UgAPvU7aL1LtF2nc2tzOzWOP1MPHWrVqkMizvWJHddiTWkfIqqvdE2iImkTa9u6mpAH1yq5yq5VVV7qq/M+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBfIC+QGUwAGgAAAAAAAAAAAAAAAAAAAAAAAQAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQXyAvkBlMABoAAAAAAAAAAAAAAAB0/094h8V8I74b4nIWlT2o1TaNRfH28d1VfBe+QcUSlSctu1ibbGv9uSGGdJHMd9Fbr7L4PH0vzlSlax1+dXJVfC6F7o/wA0fU1WqqfopbWtwuGwWQjs2MHlHuje2m6CJXWFe7w56r2aifT+08/lPxZyyznv39/D3+P+Jjr1aMbwmI8RfVfm5/Lt+v4PzfzLCMxF1jq+/hptqxF79Kp5T+0zOGYKK6+Ga17f+FkRkfu/kb311O+3/wCjP9TLDPbp10VFk256p9E7J/x+hnen9yGJmKneumV5mrJpN66XbX+w9F6P/exjLZ3mpeC+1uOPE356+P2xmY8e1xc/z6NrkcQ6rbs1EbHZjhc5qyQt6o3InlUXXgoPKcRHU6bVVvTE93S5ieGr9vsfplnqLjIstj1huzNoLdty22+07T4376Nprv3Xwfn3mk0bMarNpuSROlPsnf8A4/U7TZe3VM7MaqHmONWnkYxpzuJnvH6fz6KZBGj1VXeEOm4z0kzlzDpdfdwtKRzEe2lbuJHOqKiK3bdaaqoqKiOVPKHN6jtNXxtF2dc5Ne4ty71AxGbt5eajUvs9y/ravpuiiTTUTXzVuk1vztPonTS9I5TlsfPj7lirbhdBarvWOWJyaVrkXSopvfTXiycpz3s2Fc2jXb7k6t7KqfJqfr/BFJ+pWeg5LzLM5irGsde1MqxNcml6URGoq/dUTa/qWj+5/vQxZLLUnqiTTxxyR7+aMV20/wDqRf3HB9S3bNPDz2a/vRH8/Ry+Drw2cjHDPw7NSwdXD4+u2lShrVpEXoSNqJ1aXS7+q/qUz1S9PKt6jZnq1WVsvAz3U9tuvdTW+lyJ5VU8L9TrONyVVIFbO1rHMhWNEenW3q+TkT5L9U+ZoeS5avBVnvTdTK9aFVc6R3U5yN2u1X6r9P3Hi8M/6fLHfp2XnMx2/H8b+f5/u9Llj8aJ1bcKxi+/+qfkTE0XZHIQ1mL09a/id9ETyp0/GYyCo1kFKunUvZNN25y/r5UoXDrDIs+zr0nutcxPsq90/ho7PxDksuBsqipuo9VWVImNbK7t2akmupqKut6XxvXc/YfTcIjTOzGLyfk3rm3LLkY6c8pxwpWeV8PmbVhXKUXVJZ2udDI5qNf27d086+ynJLET4J5IZU0+Nytcn3Q/RXqNyOtyPL17FCN8NSGu2Nsbk10r3Vf4/wBh+f8ANTss5a3NEu2PkcrV+qb8nw9QxvXhszisp8uT6NsmNuzThl1YRVSwgAdU9CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgvkBfIDKYADQAAAAAAAAAAAAAAADcYDkNvDKrYtSQOXaxO8b+qL8jf2OfSOiVIKLWSL/SdJ1In7tIUgHHz4urZl1ZY93YaPVuZx9fwtedR9P2vw971ua9ZfYtPV8r/ACqnri8lYxsyvgVFa78zHeHGGDk4T0VOPanXbY+NfxO9+bWleWr0dqadf1WTt/Ar+QvT35/dsO2vhETw1PohjA+uzkbNkVlLjaeHp0T1a8al9a5WrtPJ7JZ7d29/1PAHwpyU5JFevfx9D1x92xjrsNulK6GxE7qY9vlFMcCYiYqfCxNd4dbxvrPZjrNZkcTHPMifykU3to79yov8Sq815/k+UR/DPaypQRd+xGu+pfl1O+f9iFOBwNPpXE07Pi4YVP1cvZz+Rsw6MsuwiqioqKqKndFT5FpocwsQxNZbgSdUTXWjulV/XsVYHbad+zTN65p1fI4mnkx07cbWHL8ps3oXQwxpXid2dp23OT6b+hXgDO3dnunqzm5a0cbVx8ejVjUAAPm+4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC+QF8gMpgANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIL5AXyAymAA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgvkBfIDKYADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC+QF8gMpgANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIL5AXyAymAA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgvkBfIDKYADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACC+QF8gMpgANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIL5AXyAymAA0AAAAAAAAAAAAAAB70KdnIXYalGCSxamejI4o29TnuXwiIEeAOgY30wytujl2yOjZlql+PHV6jZI1bYmVjnvYj+rSK1rd6Te1XXkp9XCZS3kJqFXHW5bsO0lgZE5Xs0ul6k1tO6onf5rolq14Nrc49lKcONls05Y25HfwyKmleqP6VTXyXfy+6Fs9T/AE+i9P6eJr38i6znbkfvywRRokMLPGuve3LvaeE8L9haOfA3NHjeSyGClytCvJZghmdFK2JjnOZpnWrl0nZNfwUwLWOuVGudaqzwta/2lWRitRH6Renv89Ki6+ilVig39biOZuY/FWsdUkvftJZkhhrMdJIntK1Hq5qJ2T8SdzGx/H7939sIjEgkxVd1mzHPtj2ta9rFbrX5tvTsuvmSxqQb6txPMXYMbJjKdi/JehknZFWgke9rGPViqv4dL3TyiqndEXS9j1xfCs/floKuLu16duzHVbcmrvbC1z5PbTbteOrt+vYqK4Cx2eEclgzMmLTB5KW41iypGyq9VfGi69xE1vpVU8mFFxvOTUG3YsRkH03TJXSZK71Ysiu6UZvWt9XbX17EtWpBsMzhcphJ44cxj7dCWRvWxlmJ0aub42iKng15QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQXyAvkBlMABoAAAAAAAAAAAAADOweWvYLLVsnibD612s/rjkZ5Rf8A1RU2ip80UwTZ8axjcxnKtGSVYYpHKskjW9StY1Fc5UT5rpF0n1CLtkfUtFr4GXF4ynDdqW7ORtQvrp8M6zIqIxzGdS/laiKm/wCkV/CctfXzmQyubrvylu4iOdK97Uej0e13UnUx7e/TrxtEXsqHmzCY7KRutYq46hThj6rTsiqvSJyv6Wojo2bd1bReze2l342ZjvT/ACETkis38dBb/G51eR7+pjGWFge9VRnT0o5qr2XfT3RDPZWJyDlK5S1RtwVnVbdSxNOx3uo9unzOmamulO7Veqb33TXZDpXqF6m8L5/xypJn8JlouRVY1bG+nJGyPa+UV7tr0b76VqqnyXypQK/ArrPbdkbVSqqzwQOrvc9JVfLJKxrOzHIir7L3bXtpWr89GVhOAPtZejDcu1mxSWIPerMe732wSWGwo5F6Oja9W/O9aXXyHbwnju1vGOUwYWhHDLQksT17a3a8jbCMa2To6UR7elepvz0ipvwT5XyCG9Fx+s32bkdCuz4hUR7WWJdNau96d/JxxMVe3diqnnZ9s8ObXwd3Juy9OWKOvHYr+0yVUna6Z0Sp+JidKo5jk7p37fLuZOH4lQsYSnZvWrDLN5VSH2mq5rNKnlqNXq7Oav5m+deUHbyNk31Gx0VVuLq8ekgwK1p4H1m31WbcsrJVVsqs7IixsREVq9t7VVXZr4edxS8m5PlMrilsQZ2u+vLXgs+ysbVkY9FR6tdtU9tE7p33s1nFcNjshbsVMnJbZMxy9UkCtSOvG1FV8z1VF6kRUT8Ka3vsu9Iuwm4ziK1Bstqxea+tHTmtuYjXI9tiFZEbG3SKip+Fu1Vd7VdJrSuy23OD9UYcPTr4+thHfs6Gs+ujX2GSSpuws7HI58St2irruxd+U0uj7F6tTpfZamxfuyJHEx27GupzLy21d2ZpNqvR4+/2MODhmKfkIoZpb8XxFqnRbB1sWSrNO16r7i9OndHSm2ojV/FpelUU569qse5q+UXRagt0un6osbQioXsO+eo3qc727ixyOf8AFOsMVHdC6RFd0qml352hnUPVltjI158jjWQ2pJUimtMmVYmV3XEsv1D093ou0R2/Hy2clBOmC1z9SuV1ORW4a+Lqvgx9OezJE+SVZHyrNKr3O7tb0p403Xb5qqlMALEVFAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIL5AXyAymAA0AAAAAAAAAAAAAB74+5Yx92C3TlWKzC9HxvT5Kn8f0PAAWBOX5ZJE06mkCR+18MlOL2NdXX/J9PTvqRF3rf7uxlX+aXb+Oq07DUVvtvjuTo1nv2UfYfM7Uit21FVydu6bTfzVCqglCyZnmOTyOYtXmSuiSa1Baax2pFa6FqtiVXKndUa5d+EVV2qGxr8/t1cJHXrw/86NfG746RInK1GTe81Gp7aO7OROznOTz28apQFQNq3kGRTGrQWZjqi1/hvbdE1dM91Zey63vrc5d+e+vB7Y3lOYxuOWjTtrHXXwnQ1Vb3Veyqm00qqqfRVVU0vc0gFI2mKzt7F07VWp8MsFpWrMyatHL19O+n87V7d968b19DMh5hmYY6bY54E+FfHJG5a0SuVY0VI+pVb+NGoqo1Hb12+iFfBRYK3L8vVsyz15KsckjmSKrakSIkjOrpkROnSPTrdpyd+/k0c8zp1Yr0jRWsRidDEbtETyuk7r9VXup5gUoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIL5AXyAybGwApsbAAbGwAGxsABsbAAbGwAGxsABsbAAbGwAGxsABsbAAbGwAGxsABsbAAbGwAGxsABsbAAbGwAGxsABsbAAbGwAGxsABsbAAbGwAGxsABsbAAbGwAGxsABsbAAbGwAGxsAD4AAj//Z"}},"estimated-input-latency":{"id":"estimated-input-latency","title":"Estimated Input Latency","description":"Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://web.dev/estimated-input-latency).","score":1,"scoreDisplayMode":"numeric","numericValue":12.8,"numericUnit":"millisecond","displayValue":"10 ms"},"total-blocking-time":{"id":"total-blocking-time","title":"Total Blocking Time","description":"Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time).","score":1,"scoreDisplayMode":"numeric","numericValue":4,"numericUnit":"millisecond","displayValue":"0 ms"},"max-potential-fid":{"id":"max-potential-fid","title":"Max Potential First Input Delay","description":"The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid).","score":1,"scoreDisplayMode":"numeric","numericValue":54,"numericUnit":"millisecond","displayValue":"50 ms"},"cumulative-layout-shift":{"id":"cumulative-layout-shift","title":"Cumulative Layout Shift","description":"Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls).","score":1,"scoreDisplayMode":"numeric","numericValue":0.0019525756674231229,"numericUnit":"unitless","displayValue":"0.002","details":{"type":"debugdata","items":[{"finalLayoutShiftTraceEventFound":true}]}},"errors-in-console":{"id":"errors-in-console","title":"No browser errors logged to the console","description":"Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more](https://web.dev/errors-in-console)","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"server-response-time":{"id":"server-response-time","title":"Initial server response time was short","description":"Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte).","score":1,"scoreDisplayMode":"binary","numericValue":19.794999999999998,"numericUnit":"millisecond","displayValue":"Root document took 20 ms","details":{"type":"opportunity","overallSavingsMs":-580.205,"headings":[],"items":[]}},"first-cpu-idle":{"id":"first-cpu-idle","title":"First CPU Idle","description":"First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input.  [Learn more](https://web.dev/first-cpu-idle).","score":1,"scoreDisplayMode":"numeric","numericValue":678.7134,"numericUnit":"millisecond","displayValue":"0.7 s"},"interactive":{"id":"interactive","title":"Time to Interactive","description":"Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive).","score":1,"scoreDisplayMode":"numeric","numericValue":678.7134,"numericUnit":"millisecond","displayValue":"0.7 s"},"user-timings":{"id":"user-timings","title":"User Timing marks and measures","description":"Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings).","score":null,"scoreDisplayMode":"notApplicable","details":{"type":"table","headings":[],"items":[]}},"critical-request-chains":{"id":"critical-request-chains","title":"Avoid chaining critical requests","description":"The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains).","score":null,"scoreDisplayMode":"informative","displayValue":"10 chains found","details":{"type":"criticalrequestchain","chains":{"824AAA90C59B86B189C509132E1B3972":{"request":{"url":"https://jolienhoop.com/","startTime":10950.413364,"endTime":10950.434336,"responseReceivedTime":10950.433755,"transferSize":6361},"children":{"15856.61":{"request":{"url":"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap","startTime":10950.445194,"endTime":10950.496495,"responseReceivedTime":10950.495472999999,"transferSize":889},"children":{"15856.87":{"request":{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2","startTime":10950.561244,"endTime":10950.605478,"responseReceivedTime":10950.604926,"transferSize":11073}},"15856.80":{"request":{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2","startTime":10950.561403,"endTime":10950.605632,"responseReceivedTime":10950.605096,"transferSize":11242}},"15856.101":{"request":{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2","startTime":10950.561803,"endTime":10950.607287,"responseReceivedTime":10950.607049,"transferSize":11082}},"15856.94":{"request":{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2","startTime":10950.561986,"endTime":10950.606762,"responseReceivedTime":10950.605234,"transferSize":11113}}}},"15856.62":{"request":{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css","startTime":10950.445387,"endTime":10950.480668,"responseReceivedTime":10950.473852,"transferSize":12743},"children":{"15856.102":{"request":{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/webfonts/fa-brands-400.woff2","startTime":10950.561521,"endTime":10950.602401,"responseReceivedTime":10950.595182,"transferSize":136997}},"15856.108":{"request":{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/webfonts/fa-solid-900.woff2","startTime":10950.561697,"endTime":10950.603452,"responseReceivedTime":10950.594971999999,"transferSize":159097}}}},"15856.63":{"request":{"url":"https://fonts.googleapis.com/icon?family=Material+Icons","startTime":10950.445618,"endTime":10950.500356,"responseReceivedTime":10950.499432999999,"transferSize":442}},"15856.64":{"request":{"url":"https://jolienhoop.com/static/css/main.74121ead.chunk.css","startTime":10950.445851,"endTime":10950.468207,"responseReceivedTime":10950.467754000001,"transferSize":746}},"15856.65":{"request":{"url":"https://jolienhoop.com/static/js/2.2bf8d81e.chunk.js","startTime":10950.446108,"endTime":10950.484248,"responseReceivedTime":10950.471959,"transferSize":100158}},"15856.66":{"request":{"url":"https://jolienhoop.com/static/js/main.dbed5442.chunk.js","startTime":10950.446372,"endTime":10950.485061,"responseReceivedTime":10950.484399,"transferSize":4518}}}},"15856.112":{"request":{"url":"https://jolienhoop.com/manifest.json","startTime":10950.626919,"endTime":10950.660048,"responseReceivedTime":10950.659665000001,"transferSize":590}}},"longestChain":{"duration":246.6839999997319,"length":1,"transferSize":590}}},"redirects":{"id":"redirects","title":"Avoid multiple page redirects","description":"Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0}},"installable-manifest":{"id":"installable-manifest","title":"Web app manifest meets the installability requirements","description":"Browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more](https://web.dev/installable-manifest).","score":1,"scoreDisplayMode":"binary","details":{"type":"debugdata","items":[{"failures":[],"isParseFailure":false,"hasStartUrl":true,"hasIconsAtLeast144px":true,"hasIconsAtLeast512px":true,"fetchesIcon":true,"hasPWADisplayValue":true,"hasBackgroundColor":true,"hasThemeColor":true,"hasShortName":true,"shortNameLength":false,"hasName":true,"hasMaskableIcon":false}]}},"apple-touch-icon":{"id":"apple-touch-icon","title":"Provides a valid `apple-touch-icon`","description":"For ideal appearance on iOS when users add a progressive web app to the home screen, define an `apple-touch-icon`. It must point to a non-transparent 192px (or 180px) square PNG. [Learn More](https://web.dev/apple-touch-icon/).","score":1,"scoreDisplayMode":"binary","warnings":[]},"splash-screen":{"id":"splash-screen","title":"Configured for a custom splash screen","description":"A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more](https://web.dev/splash-screen).","score":1,"scoreDisplayMode":"binary","details":{"type":"debugdata","items":[{"failures":[],"isParseFailure":false,"hasStartUrl":true,"hasIconsAtLeast144px":true,"hasIconsAtLeast512px":true,"fetchesIcon":true,"hasPWADisplayValue":true,"hasBackgroundColor":true,"hasThemeColor":true,"hasShortName":true,"shortNameLength":false,"hasName":true,"hasMaskableIcon":false}]}},"themed-omnibox":{"id":"themed-omnibox","title":"Sets a theme color for the address bar.","description":"The browser address bar can be themed to match your site. [Learn more](https://web.dev/themed-omnibox).","score":1,"scoreDisplayMode":"binary","details":{"type":"debugdata","items":[{"failures":[],"themeColor":"#17b978","isParseFailure":false,"hasStartUrl":true,"hasIconsAtLeast144px":true,"hasIconsAtLeast512px":true,"fetchesIcon":true,"hasPWADisplayValue":true,"hasBackgroundColor":true,"hasThemeColor":true,"hasShortName":true,"shortNameLength":false,"hasName":true,"hasMaskableIcon":false}]}},"maskable-icon":{"id":"maskable-icon","title":"Manifest doesn't have a maskable icon","description":"A maskable icon ensures that the image fills the entire shape without being letterboxed when installing the app on a device. [Learn more](https://web.dev/maskable-icon-audit/).","score":0,"scoreDisplayMode":"binary"},"content-width":{"id":"content-width","title":"Content is sized correctly for the viewport","description":"If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn more](https://web.dev/content-width).","score":null,"scoreDisplayMode":"notApplicable"},"image-aspect-ratio":{"id":"image-aspect-ratio","title":"Displays images with correct aspect ratio","description":"Image display dimensions should match natural aspect ratio. [Learn more](https://web.dev/image-aspect-ratio).","score":1,"scoreDisplayMode":"binary","warnings":[],"details":{"type":"table","headings":[],"items":[]}},"image-size-responsive":{"id":"image-size-responsive","title":"Displays images with appropriate size","description":"Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn more](https://web.dev/image-size-responsive).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"deprecations":{"id":"deprecations","title":"Avoids deprecated APIs","description":"Deprecated APIs will eventually be removed from the browser. [Learn more](https://web.dev/deprecations).","score":1,"scoreDisplayMode":"binary","displayValue":"","details":{"type":"table","headings":[],"items":[]}},"mainthread-work-breakdown":{"id":"mainthread-work-breakdown","title":"Minimizes main-thread work","description":"Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown)","score":1,"scoreDisplayMode":"numeric","numericValue":181.56100000000032,"numericUnit":"millisecond","displayValue":"0.2 s","details":{"type":"table","headings":[{"key":"groupLabel","itemType":"text","text":"Category"},{"key":"duration","itemType":"ms","granularity":1,"text":"Time Spent"}],"items":[{"group":"scriptEvaluation","groupLabel":"Script Evaluation","duration":79.31200000000018},{"group":"other","groupLabel":"Other","duration":37.073000000000086},{"group":"scriptParseCompile","groupLabel":"Script Parsing & Compilation","duration":23.307000000000006},{"group":"styleLayout","groupLabel":"Style & Layout","duration":22.789},{"group":"parseHTML","groupLabel":"Parse HTML & CSS","duration":9.744000000000003},{"group":"paintCompositeRender","groupLabel":"Rendering","duration":9.336000000000006}]}},"bootup-time":{"id":"bootup-time","title":"JavaScript execution time","description":"Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time).","score":1,"scoreDisplayMode":"numeric","numericValue":73.9450000000001,"numericUnit":"millisecond","displayValue":"0.1 s","details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"total","granularity":1,"itemType":"ms","text":"Total CPU Time"},{"key":"scripting","granularity":1,"itemType":"ms","text":"Script Evaluation"},{"key":"scriptParseCompile","granularity":1,"itemType":"ms","text":"Script Parse"}],"items":[{"url":"https://jolienhoop.com/","total":63.821,"scripting":6.575999999999994,"scriptParseCompile":9.949999999999998},{"url":"https://jolienhoop.com/static/js/main.dbed5442.chunk.js","total":58.097000000000115,"scripting":57.05600000000012,"scriptParseCompile":0.363}],"summary":{"wastedMs":73.9450000000001}}},"uses-rel-preload":{"id":"uses-rel-preload","title":"Preload key requests","description":"Consider using `\u003clink rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0}},"uses-rel-preconnect":{"id":"uses-rel-preconnect","title":"Preconnect to required origins","description":"Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","warnings":[],"details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0}},"font-display":{"id":"font-display","title":"All text remains visible during webfont loads","description":"Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display).","score":1,"scoreDisplayMode":"binary","warnings":[],"details":{"type":"table","headings":[],"items":[]}},"diagnostics":{"id":"diagnostics","title":"Diagnostics","description":"Collection of useful page vitals.","score":null,"scoreDisplayMode":"informative","details":{"type":"debugdata","items":[{"numRequests":16,"numScripts":3,"numStylesheets":4,"numFonts":6,"numTasks":556,"numTasksOver10ms":3,"numTasksOver25ms":1,"numTasksOver50ms":1,"numTasksOver100ms":0,"numTasksOver500ms":0,"rtt":0.0314,"throughput":254599884.69873807,"maxRtt":0.060599999999999994,"maxServerLatency":49.546600000000005,"totalByteWeight":938487,"totalTaskTime":181.56099999999952,"mainDocumentTransferSize":6361}]}},"network-requests":{"id":"network-requests","title":"Network Requests","description":"Lists the network requests that were made during page load.","score":null,"scoreDisplayMode":"informative","details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"startTime","itemType":"ms","granularity":1,"text":"Start Time"},{"key":"endTime","itemType":"ms","granularity":1,"text":"End Time"},{"key":"transferSize","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Transfer Size"},{"key":"resourceSize","itemType":"bytes","displayUnit":"kb","granularity":1,"text":"Resource Size"},{"key":"statusCode","itemType":"text","text":"Status Code"},{"key":"mimeType","itemType":"text","text":"MIME Type"},{"key":"resourceType","itemType":"text","text":"Resource Type"}],"items":[{"url":"https://jolienhoop.com/","startTime":0,"endTime":20.97200000025623,"finished":true,"transferSize":6361,"resourceSize":49196,"statusCode":200,"mimeType":"text/html","resourceType":"Document"},{"url":"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap","startTime":31.829999999899883,"endTime":83.13099999941187,"finished":true,"transferSize":889,"resourceSize":20096,"statusCode":200,"mimeType":"text/css","resourceType":"Stylesheet"},{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css","startTime":32.022999999753665,"endTime":67.30400000014924,"finished":true,"transferSize":12743,"resourceSize":117156,"statusCode":200,"mimeType":"text/css","resourceType":"Stylesheet"},{"url":"https://fonts.googleapis.com/icon?family=Material+Icons","startTime":32.25399999973888,"endTime":86.99200000046403,"finished":true,"transferSize":442,"resourceSize":1148,"statusCode":200,"mimeType":"text/css","resourceType":"Stylesheet"},{"url":"https://jolienhoop.com/static/css/main.74121ead.chunk.css","startTime":32.48700000040117,"endTime":54.84299999989162,"finished":true,"transferSize":746,"resourceSize":3194,"statusCode":200,"mimeType":"text/css","resourceType":"Stylesheet"},{"url":"https://jolienhoop.com/static/js/2.2bf8d81e.chunk.js","startTime":32.744000000093365,"endTime":70.88400000066031,"finished":true,"transferSize":100158,"resourceSize":630074,"statusCode":200,"mimeType":"application/javascript","resourceType":"Script"},{"url":"https://jolienhoop.com/static/js/main.dbed5442.chunk.js","startTime":33.008000000336324,"endTime":71.69699999940349,"finished":true,"transferSize":4518,"resourceSize":23376,"statusCode":200,"mimeType":"application/javascript","resourceType":"Script"},{"url":"chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js","startTime":53.59099999986938,"endTime":57.12900000071386,"finished":true,"transferSize":455049,"resourceSize":910098,"statusCode":200,"mimeType":"text/javascript","resourceType":"Script"},{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2","startTime":147.8800000004412,"endTime":192.11399999949208,"finished":true,"transferSize":11073,"resourceSize":22032,"statusCode":200,"mimeType":"font/woff2","resourceType":"Font"},{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2","startTime":148.03899999969872,"endTime":192.26800000069488,"finished":true,"transferSize":11242,"resourceSize":22360,"statusCode":200,"mimeType":"font/woff2","resourceType":"Font"},{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/webfonts/fa-brands-400.woff2","startTime":148.15699999962817,"endTime":189.0370000000985,"finished":true,"transferSize":136997,"resourceSize":153152,"statusCode":200,"mimeType":"font/woff2","resourceType":"Font"},{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/webfonts/fa-solid-900.woff2","startTime":148.3329999991838,"endTime":190.08799999937764,"finished":true,"transferSize":159097,"resourceSize":158928,"statusCode":200,"mimeType":"font/woff2","resourceType":"Font"},{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2","startTime":148.4390000005078,"endTime":193.92300000072282,"finished":true,"transferSize":11082,"resourceSize":22040,"statusCode":200,"mimeType":"font/woff2","resourceType":"Font"},{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2","startTime":148.6220000006142,"endTime":193.39799999943352,"finished":true,"transferSize":11113,"resourceSize":22112,"statusCode":200,"mimeType":"font/woff2","resourceType":"Font"},{"url":"https://jolienhoop.com/manifest.json","startTime":213.5550000002695,"endTime":246.6839999997319,"finished":true,"transferSize":590,"resourceSize":984,"statusCode":200,"mimeType":"application/json","resourceType":"Manifest"},{"url":"https://jolienhoop.com/android-chrome-192x192.png","startTime":249.5519999993121,"endTime":274.8040000005858,"finished":true,"transferSize":16387,"resourceSize":32606,"statusCode":200,"mimeType":"image/png","resourceType":"Other"}]}},"network-rtt":{"id":"network-rtt","title":"Network Round Trip Times","description":"Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).","score":null,"scoreDisplayMode":"informative","numericValue":0.060599999999999994,"numericUnit":"millisecond","displayValue":"0 ms","details":{"type":"table","headings":[{"key":"origin","itemType":"text","text":"URL"},{"key":"rtt","itemType":"ms","granularity":1,"text":"Time Spent"}],"items":[{"origin":"https://fonts.gstatic.com","rtt":0.060599999999999994},{"origin":"https://cdn.jsdelivr.net","rtt":0.0522},{"origin":"https://jolienhoop.com","rtt":0.049800000000000004},{"origin":"https://fonts.googleapis.com","rtt":0.0314}]}},"network-server-latency":{"id":"network-server-latency","title":"Server Backend Latencies","description":"Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).","score":null,"scoreDisplayMode":"informative","numericValue":49.546600000000005,"numericUnit":"millisecond","displayValue":"50 ms","details":{"type":"table","headings":[{"key":"origin","itemType":"text","text":"URL"},{"key":"serverResponseTime","itemType":"ms","granularity":1,"text":"Time Spent"}],"items":[{"origin":"https://fonts.googleapis.com","serverResponseTime":49.546600000000005},{"origin":"https://fonts.gstatic.com","serverResponseTime":42.691399999999994},{"origin":"https://cdn.jsdelivr.net","serverResponseTime":32.4758},{"origin":"https://jolienhoop.com","serverResponseTime":24.4742}]}},"main-thread-tasks":{"id":"main-thread-tasks","title":"Tasks","description":"Lists the toplevel main thread tasks that executed during page load.","score":null,"scoreDisplayMode":"informative","details":{"type":"table","headings":[{"key":"startTime","itemType":"ms","granularity":1,"text":"Start Time"},{"key":"duration","itemType":"ms","granularity":1,"text":"End Time"}],"items":[{"duration":20.078,"startTime":34.893},{"duration":13.088,"startTime":61.508},{"duration":53.55,"startTime":92.037},{"duration":6.116,"startTime":204.886}]}},"metrics":{"id":"metrics","title":"Metrics","description":"Collects all available metrics.","score":null,"scoreDisplayMode":"informative","numericValue":679,"numericUnit":"millisecond","details":{"type":"debugdata","items":[{"firstContentfulPaint":561,"firstMeaningfulPaint":561,"largestContentfulPaint":948,"firstCPUIdle":679,"interactive":679,"speedIndex":561,"estimatedInputLatency":13,"totalBlockingTime":4,"maxPotentialFID":54,"cumulativeLayoutShift":0.0019525756674231229,"observedNavigationStart":0,"observedNavigationStartTs":10950411844,"observedFirstPaint":153,"observedFirstPaintTs":10950564405,"observedFirstContentfulPaint":153,"observedFirstContentfulPaintTs":10950564405,"observedFirstMeaningfulPaint":153,"observedFirstMeaningfulPaintTs":10950564405,"observedLargestContentfulPaint":153,"observedLargestContentfulPaintTs":10950564405,"observedTraceEnd":1271,"observedTraceEndTs":10951682542,"observedLoad":213,"observedLoadTs":10950624934,"observedDomContentLoaded":138,"observedDomContentLoadedTs":10950550317,"observedCumulativeLayoutShift":0.0019525756674231229,"observedFirstVisualChange":152,"observedFirstVisualChangeTs":10950563844,"observedLastVisualChange":1269,"observedLastVisualChangeTs":10951680844,"observedSpeedIndex":169,"observedSpeedIndexTs":10950581074},{"lcpInvalidated":false}]}},"offline-start-url":{"id":"offline-start-url","title":"`start_url` does not respond with a 200 when offline","description":"A service worker enables your web app to be reliable in unpredictable network conditions. [Learn more](https://web.dev/offline-start-url).","score":0,"scoreDisplayMode":"binary","explanation":"Timed out waiting for start_url (https://jolienhoop.com/) to respond.","warnings":[]},"performance-budget":{"id":"performance-budget","title":"Performance budget","description":"Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).","score":null,"scoreDisplayMode":"notApplicable"},"timing-budget":{"id":"timing-budget","title":"Timing budget","description":"Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).","score":null,"scoreDisplayMode":"notApplicable"},"resource-summary":{"id":"resource-summary","title":"Keep request counts low and transfer sizes small","description":"To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).","score":null,"scoreDisplayMode":"informative","displayValue":"16 requests • 916 KB","details":{"type":"table","headings":[{"key":"label","itemType":"text","text":"Resource Type"},{"key":"requestCount","itemType":"numeric","text":"Requests"},{"key":"transferSize","itemType":"bytes","text":"Transfer Size"}],"items":[{"resourceType":"total","label":"Total","requestCount":16,"transferSize":938487},{"resourceType":"script","label":"Script","requestCount":3,"transferSize":559725},{"resourceType":"font","label":"Font","requestCount":6,"transferSize":340604},{"resourceType":"other","label":"Other","requestCount":2,"transferSize":16977},{"resourceType":"stylesheet","label":"Stylesheet","requestCount":4,"transferSize":14820},{"resourceType":"document","label":"Document","requestCount":1,"transferSize":6361},{"resourceType":"image","label":"Image","requestCount":0,"transferSize":0},{"resourceType":"media","label":"Media","requestCount":0,"transferSize":0},{"resourceType":"third-party","label":"Third-party","requestCount":10,"transferSize":809727}]}},"third-party-summary":{"id":"third-party-summary","title":"Minimize third-party usage","description":"Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).","score":1,"scoreDisplayMode":"binary","displayValue":"Third-party code blocked the main thread for 0 ms","details":{"type":"table","headings":[{"key":"entity","itemType":"link","text":"Third-Party"},{"key":"transferSize","granularity":1,"itemType":"bytes","text":"Transfer Size"},{"key":"blockingTime","granularity":1,"itemType":"ms","text":"Main-Thread Blocking Time"}],"items":[{"entity":{"type":"link","text":"JSDelivr CDN","url":"https://www.jsdelivr.com/"},"transferSize":308837,"mainThreadTime":2.127,"blockingTime":0},{"entity":{"type":"link","text":"Google Fonts","url":"https://fonts.google.com/"},"transferSize":45841,"mainThreadTime":0.6220000000000001,"blockingTime":0}],"summary":{"wastedBytes":354678,"wastedMs":0}}},"largest-contentful-paint-element":{"id":"largest-contentful-paint-element","title":"Largest Contentful Paint element","description":"This is the element that was identified as the Largest Contentful Paint. [Learn More](https://web.dev/lighthouse-largest-contentful-paint)","score":null,"scoreDisplayMode":"informative","displayValue":"1 element found","details":{"type":"table","headings":[{"key":"node","itemType":"node","text":"Element"}],"items":[{"node":{"type":"node","path":"1,HTML,1,BODY,1,DIV,0,DIV,1,MAIN,0,DIV,3,H2","selector":"div.jss1 > main.MuiContainer-root > div.centerTextMobile > h2.MuiTypography-root","nodeLabel":"based in Bremen, Germany.","snippet":"\u003ch2 class=\"MuiTypography-root MuiTypography-h5 MuiTypography-gutterBottom\">"}}]}},"layout-shift-elements":{"id":"layout-shift-elements","title":"Avoid large layout shifts","description":"These DOM elements contribute most to the CLS of the page.","score":null,"scoreDisplayMode":"informative","displayValue":"5 elements found","details":{"type":"table","headings":[{"key":"node","itemType":"node","text":"Element"}],"items":[{"node":{"type":"node","path":"1,HTML,1,BODY,1,DIV,0,DIV,1,MAIN,0,DIV,1,H1,0,P","selector":"main.MuiContainer-root > div.centerTextMobile > h1.MuiTypography-root > p","nodeLabel":"Jo Lienhoop ","snippet":"\u003cp>"}},{"node":{"type":"node","path":"1,HTML,1,BODY,1,DIV,0,DIV,1,MAIN,0,DIV,0,H2,0,P","selector":"main.MuiContainer-root > div.centerTextMobile > h2.MuiTypography-root > p","nodeLabel":"Hey, I'm ","snippet":"\u003cp>"}},{"node":{"type":"node","path":"1,HTML,1,BODY,1,DIV,0,DIV,2,FOOTER,0,DIV,0,DIV,0,A,0,P,4,STRONG","selector":"div.centerTextMobile > a.MuiTypography-root > p.MuiTypography-root > strong","nodeLabel":"Jo Lienhoop","snippet":"\u003cstrong>"}},{"node":{"type":"node","path":"1,HTML,1,BODY,1,DIV,0,DIV,2,FOOTER,0,DIV,0,DIV,0,A,0,P","selector":"div.MuiContainer-root > div.centerTextMobile > a.MuiTypography-root > p.MuiTypography-root","nodeLabel":" at  by Jo Lienhoop","snippet":"\u003cp class=\"MuiTypography-root MuiTypography-body1\">"}},{"node":{"type":"node","path":"1,HTML,1,BODY,1,DIV,0,DIV,2,FOOTER,0,DIV,0,DIV,0,A,0,P","selector":"div.MuiContainer-root > div.centerTextMobile > a.MuiTypography-root > p.MuiTypography-root","nodeLabel":" at  by Jo Lienhoop","snippet":"\u003cp class=\"MuiTypography-root MuiTypography-body1\">"}}]}},"pwa-cross-browser":{"id":"pwa-cross-browser","title":"Site works cross-browser","description":"To reach the most number of users, sites should work across every major browser. [Learn more](https://web.dev/pwa-cross-browser).","score":null,"scoreDisplayMode":"manual"},"pwa-page-transitions":{"id":"pwa-page-transitions","title":"Page transitions don't feel like they block on the network","description":"Transitions should feel snappy as you tap around, even on a slow network. This experience is key to a user's perception of performance. [Learn more](https://web.dev/pwa-page-transitions).","score":null,"scoreDisplayMode":"manual"},"pwa-each-page-has-url":{"id":"pwa-each-page-has-url","title":"Each page has a URL","description":"Ensure individual pages are deep linkable via URL and that URLs are unique for the purpose of shareability on social media. [Learn more](https://web.dev/pwa-each-page-has-url).","score":null,"scoreDisplayMode":"manual"},"accesskeys":{"id":"accesskeys","title":"`[accesskey]` values are unique","description":"Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://web.dev/accesskeys/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-allowed-attr":{"id":"aria-allowed-attr","title":"`[aria-*]` attributes match their roles","description":"Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://web.dev/aria-allowed-attr/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"aria-hidden-body":{"id":"aria-hidden-body","title":"`[aria-hidden=\"true\"]` is not present on the document `\u003cbody>`","description":"Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `\u003cbody>`. [Learn more](https://web.dev/aria-hidden-body/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"aria-hidden-focus":{"id":"aria-hidden-focus","title":"`[aria-hidden=\"true\"]` elements do not contain focusable descendents","description":"Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn more](https://web.dev/aria-hidden-focus/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"aria-input-field-name":{"id":"aria-input-field-name","title":"ARIA input fields have accessible names","description":"When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-input-field-name/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-required-attr":{"id":"aria-required-attr","title":"`[role]`s have all required `[aria-*]` attributes","description":"Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://web.dev/aria-required-attr/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-required-children":{"id":"aria-required-children","title":"Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.","description":"Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-children/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-required-parent":{"id":"aria-required-parent","title":"`[role]`s are contained by their required parent element","description":"Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-parent/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-roles":{"id":"aria-roles","title":"`[role]` values are valid","description":"ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://web.dev/aria-roles/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-toggle-field-name":{"id":"aria-toggle-field-name","title":"ARIA toggle fields have accessible names","description":"When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-toggle-field-name/).","score":null,"scoreDisplayMode":"notApplicable"},"aria-valid-attr-value":{"id":"aria-valid-attr-value","title":"`[aria-*]` attributes have valid values","description":"Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://web.dev/aria-valid-attr-value/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"aria-valid-attr":{"id":"aria-valid-attr","title":"`[aria-*]` attributes are valid and not misspelled","description":"Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://web.dev/aria-valid-attr/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"button-name":{"id":"button-name","title":"Buttons have an accessible name","description":"When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn more](https://web.dev/button-name/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"bypass":{"id":"bypass","title":"The page contains a heading, skip link, or landmark region","description":"Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://web.dev/bypass/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"color-contrast":{"id":"color-contrast","title":"Background and foreground colors have a sufficient contrast ratio","description":"Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"definition-list":{"id":"definition-list","title":"`\u003cdl>`'s contain only properly-ordered `\u003cdt>` and `\u003cdd>` groups, `\u003cscript>`, `\u003ctemplate>` or `\u003cdiv>` elements.","description":"When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://web.dev/definition-list/).","score":null,"scoreDisplayMode":"notApplicable"},"dlitem":{"id":"dlitem","title":"Definition list items are wrapped in `\u003cdl>` elements","description":"Definition list items (`\u003cdt>` and `\u003cdd>`) must be wrapped in a parent `\u003cdl>` element to ensure that screen readers can properly announce them. [Learn more](https://web.dev/dlitem/).","score":null,"scoreDisplayMode":"notApplicable"},"document-title":{"id":"document-title","title":"Document has a `\u003ctitle>` element","description":"The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"duplicate-id-active":{"id":"duplicate-id-active","title":"`[id]` attributes on active, focusable elements are unique","description":"All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn more](https://web.dev/duplicate-id-active/).","score":null,"scoreDisplayMode":"notApplicable"},"duplicate-id-aria":{"id":"duplicate-id-aria","title":"ARIA IDs are unique","description":"The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://web.dev/duplicate-id-aria/).","score":null,"scoreDisplayMode":"notApplicable"},"form-field-multiple-labels":{"id":"form-field-multiple-labels","title":"No form fields have multiple labels","description":"Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn more](https://web.dev/form-field-multiple-labels/).","score":null,"scoreDisplayMode":"notApplicable"},"frame-title":{"id":"frame-title","title":"`\u003cframe>` or `\u003ciframe>` elements have a title","description":"Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://web.dev/frame-title/).","score":null,"scoreDisplayMode":"notApplicable"},"heading-order":{"id":"heading-order","title":"Heading elements appear in a sequentially-descending order","description":"Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more](https://web.dev/heading-order/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"html-has-lang":{"id":"html-has-lang","title":"`\u003chtml>` element has a `[lang]` attribute","description":"If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://web.dev/html-has-lang/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"html-lang-valid":{"id":"html-lang-valid","title":"`\u003chtml>` element has a valid value for its `[lang]` attribute","description":"Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://web.dev/html-lang-valid/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"image-alt":{"id":"image-alt","title":"Image elements have `[alt]` attributes","description":"Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://web.dev/image-alt/).","score":null,"scoreDisplayMode":"notApplicable"},"input-image-alt":{"id":"input-image-alt","title":"`\u003cinput type=\"image\">` elements have `[alt]` text","description":"When an image is being used as an `\u003cinput>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://web.dev/input-image-alt/).","score":null,"scoreDisplayMode":"notApplicable"},"label":{"id":"label","title":"Form elements have associated labels","description":"Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://web.dev/label/).","score":null,"scoreDisplayMode":"notApplicable"},"layout-table":{"id":"layout-table","title":"Presentational `\u003ctable>` elements avoid using `\u003cth>`, `\u003ccaption>` or the `[summary]` attribute.","description":"A table being used for layout purposes should not include data elements, such as the th or caption elements or the summary attribute, because this can create a confusing experience for screen reader users. [Learn more](https://web.dev/layout-table/).","score":null,"scoreDisplayMode":"notApplicable"},"link-name":{"id":"link-name","title":"Links have a discernible name","description":"Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://web.dev/link-name/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"list":{"id":"list","title":"Lists contain only `\u003cli>` elements and script supporting elements (`\u003cscript>` and `\u003ctemplate>`).","description":"Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://web.dev/list/).","score":null,"scoreDisplayMode":"notApplicable"},"listitem":{"id":"listitem","title":"List items (`\u003cli>`) are contained within `\u003cul>` or `\u003col>` parent elements","description":"Screen readers require list items (`\u003cli>`) to be contained within a parent `\u003cul>` or `\u003col>` to be announced properly. [Learn more](https://web.dev/listitem/).","score":null,"scoreDisplayMode":"notApplicable"},"meta-refresh":{"id":"meta-refresh","title":"The document does not use `\u003cmeta http-equiv=\"refresh\">`","description":"Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://web.dev/meta-refresh/).","score":null,"scoreDisplayMode":"notApplicable"},"meta-viewport":{"id":"meta-viewport","title":"`[user-scalable=\"no\"]` is not used in the `\u003cmeta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.","description":"Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://web.dev/meta-viewport/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"object-alt":{"id":"object-alt","title":"`\u003cobject>` elements have `[alt]` text","description":"Screen readers cannot translate non-text content. Adding alt text to `\u003cobject>` elements helps screen readers convey meaning to users. [Learn more](https://web.dev/object-alt/).","score":null,"scoreDisplayMode":"notApplicable"},"tabindex":{"id":"tabindex","title":"No element has a `[tabindex]` value greater than 0","description":"A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://web.dev/tabindex/).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"td-headers-attr":{"id":"td-headers-attr","title":"Cells in a `\u003ctable>` element that use the `[headers]` attribute refer to table cells within the same table.","description":"Screen readers have features to make navigating tables easier. Ensuring `\u003ctd>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://web.dev/td-headers-attr/).","score":null,"scoreDisplayMode":"notApplicable"},"th-has-data-cells":{"id":"th-has-data-cells","title":"`\u003cth>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.","description":"Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://web.dev/th-has-data-cells/).","score":null,"scoreDisplayMode":"notApplicable"},"valid-lang":{"id":"valid-lang","title":"`[lang]` attributes have a valid value","description":"Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://web.dev/valid-lang/).","score":null,"scoreDisplayMode":"notApplicable"},"video-caption":{"id":"video-caption","title":"`\u003cvideo>` elements contain a `\u003ctrack>` element with `[kind=\"captions\"]`","description":"When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://web.dev/video-caption/).","score":null,"scoreDisplayMode":"notApplicable"},"video-description":{"id":"video-description","title":"`\u003cvideo>` elements contain a `\u003ctrack>` element with `[kind=\"description\"]`","description":"Audio descriptions provide relevant information for videos that dialogue cannot, such as facial expressions and scenes. [Learn more](https://web.dev/video-description/).","score":null,"scoreDisplayMode":"notApplicable"},"custom-controls-labels":{"id":"custom-controls-labels","title":"Custom controls have associated labels","description":"Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://web.dev/custom-controls-labels/).","score":null,"scoreDisplayMode":"manual"},"custom-controls-roles":{"id":"custom-controls-roles","title":"Custom controls have ARIA roles","description":"Custom interactive controls have appropriate ARIA roles. [Learn more](https://web.dev/custom-control-roles/).","score":null,"scoreDisplayMode":"manual"},"focus-traps":{"id":"focus-traps","title":"User focus is not accidentally trapped in a region","description":"A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://web.dev/focus-traps/).","score":null,"scoreDisplayMode":"manual"},"focusable-controls":{"id":"focusable-controls","title":"Interactive controls are keyboard focusable","description":"Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://web.dev/focusable-controls/).","score":null,"scoreDisplayMode":"manual"},"interactive-element-affordance":{"id":"interactive-element-affordance","title":"Interactive elements indicate their purpose and state","description":"Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn more](https://web.dev/interactive-element-affordance/).","score":null,"scoreDisplayMode":"manual"},"logical-tab-order":{"id":"logical-tab-order","title":"The page has a logical tab order","description":"Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://web.dev/logical-tab-order/).","score":null,"scoreDisplayMode":"manual"},"managed-focus":{"id":"managed-focus","title":"The user's focus is directed to new content added to the page","description":"If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://web.dev/managed-focus/).","score":null,"scoreDisplayMode":"manual"},"offscreen-content-hidden":{"id":"offscreen-content-hidden","title":"Offscreen content is hidden from assistive technology","description":"Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://web.dev/offscreen-content-hidden/).","score":null,"scoreDisplayMode":"manual"},"use-landmarks":{"id":"use-landmarks","title":"HTML5 landmark elements are used to improve navigation","description":"Landmark elements (\u003cmain>, \u003cnav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://web.dev/use-landmarks/).","score":null,"scoreDisplayMode":"manual"},"visual-order-follows-dom":{"id":"visual-order-follows-dom","title":"Visual order on the page follows DOM order","description":"DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://web.dev/visual-order-follows-dom/).","score":null,"scoreDisplayMode":"manual"},"uses-long-cache-ttl":{"id":"uses-long-cache-ttl","title":"Uses efficient cache policy on static assets","description":"A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"byte","displayValue":"0 resources found","details":{"type":"table","headings":[],"items":[],"summary":{"wastedBytes":0}}},"total-byte-weight":{"id":"total-byte-weight","title":"Avoids enormous network payloads","description":"Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight).","score":1,"scoreDisplayMode":"numeric","numericValue":938487,"numericUnit":"byte","displayValue":"Total size was 916 KB","details":{"type":"table","headings":[{"key":"url","itemType":"url","text":"URL"},{"key":"totalBytes","itemType":"bytes","text":"Transfer Size"}],"items":[{"url":"chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js","totalBytes":455049},{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/webfonts/fa-solid-900.woff2","totalBytes":159097},{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/webfonts/fa-brands-400.woff2","totalBytes":136997},{"url":"https://jolienhoop.com/static/js/2.2bf8d81e.chunk.js","totalBytes":100158},{"url":"https://jolienhoop.com/android-chrome-192x192.png","totalBytes":16387},{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css","totalBytes":12743},{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2","totalBytes":11242},{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2","totalBytes":11113},{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2","totalBytes":11082},{"url":"https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2","totalBytes":11073}]}},"offscreen-images":{"id":"offscreen-images","title":"Defer offscreen images","description":"Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","warnings":[],"details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0,"overallSavingsBytes":0}},"render-blocking-resources":{"id":"render-blocking-resources","title":"Eliminate render-blocking resources","description":"Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources).","score":0.87,"scoreDisplayMode":"numeric","numericValue":160,"numericUnit":"millisecond","displayValue":"Potential savings of 160 ms","details":{"type":"opportunity","headings":[{"key":"url","valueType":"url","label":"URL"},{"key":"totalBytes","valueType":"bytes","label":"Transfer Size"},{"key":"wastedMs","valueType":"timespanMs","label":"Potential Savings"}],"items":[{"url":"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap","totalBytes":889,"wastedMs":250},{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css","totalBytes":12743,"wastedMs":273}],"overallSavingsMs":160}},"unminified-css":{"id":"unminified-css","title":"Minify CSS","description":"Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0,"overallSavingsBytes":0}},"unminified-javascript":{"id":"unminified-javascript","title":"Minify JavaScript","description":"Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript).","score":0.89,"scoreDisplayMode":"numeric","numericValue":130,"numericUnit":"millisecond","displayValue":"Potential savings of 179 KB","warnings":[],"details":{"type":"opportunity","headings":[{"key":"url","valueType":"url","label":"URL"},{"key":"totalBytes","valueType":"bytes","label":"Transfer Size"},{"key":"wastedBytes","valueType":"bytes","label":"Potential Savings"}],"items":[{"url":"chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js","totalBytes":455049,"wastedBytes":182818,"wastedPercent":40.175459416219454}],"overallSavingsMs":130,"overallSavingsBytes":182818}},"unused-css-rules":{"id":"unused-css-rules","title":"Remove unused CSS","description":"Remove dead rules from stylesheets and defer the loading of CSS not used for above-the-fold content to reduce unnecessary bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"Potential savings of 12 KB","details":{"type":"opportunity","headings":[{"key":"url","valueType":"url","label":"URL"},{"key":"totalBytes","valueType":"bytes","label":"Transfer Size"},{"key":"wastedBytes","valueType":"bytes","label":"Potential Savings"}],"items":[{"url":"https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@5.13.0/css/all.min.css","wastedBytes":12617,"wastedPercent":99.01328143671687,"totalBytes":12743}],"overallSavingsMs":0,"overallSavingsBytes":12617}},"unused-javascript":{"id":"unused-javascript","title":"Remove unused JavaScript","description":"Remove unused JavaScript to reduce bytes consumed by network activity. [Learn more](https://web.dev/remove-unused-code/).","score":0.79,"scoreDisplayMode":"numeric","numericValue":250,"numericUnit":"millisecond","displayValue":"Potential savings of 301 KB","details":{"type":"opportunity","headings":[{"key":"url","valueType":"url","subRows":{"key":"sources","valueType":"code"},"label":"URL"},{"key":"totalBytes","valueType":"bytes","subRows":{"key":"sourceBytes"},"label":"Transfer Size"},{"key":"wastedBytes","valueType":"bytes","subRows":{"key":"sourceWastedBytes"},"label":"Potential Savings"}],"items":[{"url":"chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/react_devtools_backend.js","totalBytes":455049,"wastedBytes":267805,"wastedPercent":58.85186601440772},{"url":"https://jolienhoop.com/static/js/2.2bf8d81e.chunk.js","totalBytes":100158,"wastedBytes":40365,"wastedPercent":40.301297942781325}],"overallSavingsMs":250,"overallSavingsBytes":308170}},"uses-webp-images":{"id":"uses-webp-images","title":"Serve images in next-gen formats","description":"Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","warnings":[],"details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0,"overallSavingsBytes":0}},"uses-optimized-images":{"id":"uses-optimized-images","title":"Efficiently encode images","description":"Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","warnings":[],"details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0,"overallSavingsBytes":0}},"uses-text-compression":{"id":"uses-text-compression","title":"Enable text compression","description":"Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0,"overallSavingsBytes":0}},"uses-responsive-images":{"id":"uses-responsive-images","title":"Properly size images","description":"Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images).","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","warnings":[],"details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0,"overallSavingsBytes":0}},"efficient-animated-content":{"id":"efficient-animated-content","title":"Use video formats for animated content","description":"Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content)","score":1,"scoreDisplayMode":"numeric","numericValue":0,"numericUnit":"millisecond","displayValue":"","details":{"type":"opportunity","headings":[],"items":[],"overallSavingsMs":0,"overallSavingsBytes":0}},"appcache-manifest":{"id":"appcache-manifest","title":"Avoids Application Cache","description":"Application Cache is deprecated. [Learn more](https://web.dev/appcache-manifest).","score":1,"scoreDisplayMode":"binary"},"doctype":{"id":"doctype","title":"Page has the HTML doctype","description":"Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more](https://web.dev/doctype).","score":1,"scoreDisplayMode":"binary"},"charset":{"id":"charset","title":"Properly defines charset","description":"A character encoding declaration is required. It can be done with a \u003cmeta> tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more](https://web.dev/charset).","score":1,"scoreDisplayMode":"binary"},"dom-size":{"id":"dom-size","title":"Avoids an excessive DOM size","description":"A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size).","score":1,"scoreDisplayMode":"numeric","numericValue":51,"numericUnit":"element","displayValue":"51 elements","details":{"type":"table","headings":[{"key":"statistic","itemType":"text","text":"Statistic"},{"key":"element","itemType":"code","text":"Element"},{"key":"value","itemType":"numeric","text":"Value"}],"items":[{"statistic":"Total DOM Elements","element":"","value":"51"},{"statistic":"Maximum DOM Depth","element":{"type":"code","value":"\u003cpath d=\"M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\">"},"value":"9"},{"statistic":"Maximum Child Elements","element":{"type":"code","value":"\u003cdiv class=\"centerTextMobile\">"},"value":"6"}]}},"external-anchors-use-rel-noopener":{"id":"external-anchors-use-rel-noopener","title":"Links to cross-origin destinations are safe","description":"Add `rel=\"noopener\"` or `rel=\"noreferrer\"` to any external links to improve performance and prevent security vulnerabilities. [Learn more](https://web.dev/external-anchors-use-rel-noopener).","score":1,"scoreDisplayMode":"binary","warnings":[],"details":{"type":"table","headings":[],"items":[]}},"geolocation-on-start":{"id":"geolocation-on-start","title":"Avoids requesting the geolocation permission on page load","description":"Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more](https://web.dev/geolocation-on-start).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"no-document-write":{"id":"no-document-write","title":"Avoids `document.write()`","description":"For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"no-vulnerable-libraries":{"id":"no-vulnerable-libraries","title":"Avoids front-end JavaScript libraries with known security vulnerabilities","description":"Some third-party scripts may contain known security vulnerabilities that are easily identified and exploited by attackers. [Learn more](https://web.dev/no-vulnerable-libraries).","score":1,"scoreDisplayMode":"binary","displayValue":"","details":{"type":"table","headings":[],"items":[],"summary":{}}},"js-libraries":{"id":"js-libraries","title":"Detected JavaScript libraries","description":"All front-end JavaScript libraries detected on the page. [Learn more](https://web.dev/js-libraries).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[{"key":"name","itemType":"text","text":"Name"},{"key":"version","itemType":"text","text":"Version"}],"items":[{"name":"React","npm":"react"},{"name":"Create React App","npm":"react-scripts"}],"summary":{},"debugData":{"type":"debugdata","stacks":[{"id":"react"},{"id":"create-react-app"}]}}},"notification-on-start":{"id":"notification-on-start","title":"Avoids requesting the notification permission on page load","description":"Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more](https://web.dev/notification-on-start).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"password-inputs-can-be-pasted-into":{"id":"password-inputs-can-be-pasted-into","title":"Allows users to paste into password fields","description":"Preventing password pasting undermines good security policy. [Learn more](https://web.dev/password-inputs-can-be-pasted-into).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"uses-http2":{"id":"uses-http2","title":"Uses HTTP/2 for its own resources","description":"HTTP/2 offers many benefits over HTTP/1.1, including binary headers, multiplexing, and server push. [Learn more](https://web.dev/uses-http2).","score":1,"scoreDisplayMode":"binary","displayValue":"","details":{"type":"table","headings":[],"items":[]}},"uses-passive-event-listeners":{"id":"uses-passive-event-listeners","title":"Uses passive listeners to improve scrolling performance","description":"Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"meta-description":{"id":"meta-description","title":"Document has a meta description","description":"Meta descriptions may be included in search results to concisely summarize page content. [Learn more](https://web.dev/meta-description).","score":1,"scoreDisplayMode":"binary"},"http-status-code":{"id":"http-status-code","title":"Page has successful HTTP status code","description":"Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more](https://web.dev/http-status-code).","score":1,"scoreDisplayMode":"binary"},"font-size":{"id":"font-size","title":"Document uses legible font sizes","description":"Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://web.dev/font-size).","score":null,"scoreDisplayMode":"notApplicable"},"link-text":{"id":"link-text","title":"Links have descriptive text","description":"Descriptive link text helps search engines understand your content. [Learn more](https://web.dev/link-text).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[],"summary":{}}},"is-crawlable":{"id":"is-crawlable","title":"Page isn’t blocked from indexing","description":"Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more](https://web.dev/is-crawable).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"robots-txt":{"id":"robots-txt","title":"robots.txt is valid","description":"If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more](https://web.dev/robots-txt).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[],"summary":{}}},"tap-targets":{"id":"tap-targets","title":"Tap targets are sized appropriately","description":"Interactive elements like buttons and links should be large enough (48x48px), and have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more](https://web.dev/tap-targets).","score":null,"scoreDisplayMode":"notApplicable"},"hreflang":{"id":"hreflang","title":"Document has a valid `hreflang`","description":"hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more](https://web.dev/hreflang).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"plugins":{"id":"plugins","title":"Document avoids plugins","description":"Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more](https://web.dev/plugins).","score":1,"scoreDisplayMode":"binary","details":{"type":"table","headings":[],"items":[]}},"canonical":{"id":"canonical","title":"Document has a valid `rel=canonical`","description":"Canonical links suggest which URL to show in search results. [Learn more](https://web.dev/canonical).","score":null,"scoreDisplayMode":"notApplicable"},"structured-data":{"id":"structured-data","title":"Structured data is valid","description":"Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more](https://web.dev/structured-data).","score":null,"scoreDisplayMode":"manual"}},"configSettings":{"output":"json","maxWaitForFcp":30000,"maxWaitForLoad":45000,"throttlingMethod":"simulate","throttling":{"rttMs":40,"throughputKbps":10240,"requestLatencyMs":0,"downloadThroughputKbps":0,"uploadThroughputKbps":0,"cpuSlowdownMultiplier":1},"auditMode":false,"gatherMode":false,"disableStorageReset":false,"emulatedFormFactor":"desktop","internalDisableDeviceScreenEmulation":true,"channel":"devtools","budgets":null,"locale":"en-US","blockedUrlPatterns":null,"additionalTraceCategories":null,"extraHeaders":null,"precomputedLanternData":null,"onlyAudits":null,"onlyCategories":["performance","pwa","best-practices","accessibility","seo"],"skipAudits":null},"categories":{"performance":{"title":"Performance","auditRefs":[{"id":"first-contentful-paint","weight":15,"group":"metrics"},{"id":"speed-index","weight":15,"group":"metrics"},{"id":"largest-contentful-paint","weight":25,"group":"metrics"},{"id":"interactive","weight":15,"group":"metrics"},{"id":"total-blocking-time","weight":25,"group":"metrics"},{"id":"cumulative-layout-shift","weight":5,"group":"metrics"},{"id":"first-cpu-idle","weight":0},{"id":"max-potential-fid","weight":0},{"id":"first-meaningful-paint","weight":0},{"id":"estimated-input-latency","weight":0},{"id":"render-blocking-resources","weight":0,"group":"load-opportunities"},{"id":"uses-responsive-images","weight":0,"group":"load-opportunities"},{"id":"offscreen-images","weight":0,"group":"load-opportunities"},{"id":"unminified-css","weight":0,"group":"load-opportunities"},{"id":"unminified-javascript","weight":0,"group":"load-opportunities"},{"id":"unused-css-rules","weight":0,"group":"load-opportunities"},{"id":"unused-javascript","weight":0,"group":"load-opportunities"},{"id":"uses-optimized-images","weight":0,"group":"load-opportunities"},{"id":"uses-webp-images","weight":0,"group":"load-opportunities"},{"id":"uses-text-compression","weight":0,"group":"load-opportunities"},{"id":"uses-rel-preconnect","weight":0,"group":"load-opportunities"},{"id":"server-response-time","weight":0,"group":"load-opportunities"},{"id":"redirects","weight":0,"group":"load-opportunities"},{"id":"uses-rel-preload","weight":0,"group":"load-opportunities"},{"id":"efficient-animated-content","weight":0,"group":"load-opportunities"},{"id":"total-byte-weight","weight":0,"group":"diagnostics"},{"id":"uses-long-cache-ttl","weight":0,"group":"diagnostics"},{"id":"dom-size","weight":0,"group":"diagnostics"},{"id":"critical-request-chains","weight":0,"group":"diagnostics"},{"id":"user-timings","weight":0,"group":"diagnostics"},{"id":"bootup-time","weight":0,"group":"diagnostics"},{"id":"mainthread-work-breakdown","weight":0,"group":"diagnostics"},{"id":"font-display","weight":0,"group":"diagnostics"},{"id":"performance-budget","weight":0,"group":"budgets"},{"id":"timing-budget","weight":0,"group":"budgets"},{"id":"resource-summary","weight":0,"group":"diagnostics"},{"id":"third-party-summary","weight":0,"group":"diagnostics"},{"id":"largest-contentful-paint-element","weight":0,"group":"diagnostics"},{"id":"layout-shift-elements","weight":0,"group":"diagnostics"},{"id":"uses-http2","weight":0,"group":"diagnostics"},{"id":"uses-passive-event-listeners","weight":0,"group":"diagnostics"},{"id":"no-document-write","weight":0,"group":"diagnostics"},{"id":"network-requests","weight":0},{"id":"network-rtt","weight":0},{"id":"network-server-latency","weight":0},{"id":"main-thread-tasks","weight":0},{"id":"diagnostics","weight":0},{"id":"metrics","weight":0},{"id":"screenshot-thumbnails","weight":0},{"id":"final-screenshot","weight":0}],"id":"performance","score":0.99},"accessibility":{"title":"Accessibility","description":"These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.","manualDescription":"These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).","auditRefs":[{"id":"accesskeys","weight":0,"group":"a11y-navigation"},{"id":"aria-allowed-attr","weight":10,"group":"a11y-aria"},{"id":"aria-hidden-body","weight":10,"group":"a11y-aria"},{"id":"aria-hidden-focus","weight":3,"group":"a11y-aria"},{"id":"aria-input-field-name","weight":0,"group":"a11y-aria"},{"id":"aria-required-attr","weight":0,"group":"a11y-aria"},{"id":"aria-required-children","weight":0,"group":"a11y-aria"},{"id":"aria-required-parent","weight":0,"group":"a11y-aria"},{"id":"aria-roles","weight":0,"group":"a11y-aria"},{"id":"aria-toggle-field-name","weight":0,"group":"a11y-aria"},{"id":"aria-valid-attr-value","weight":10,"group":"a11y-aria"},{"id":"aria-valid-attr","weight":10,"group":"a11y-aria"},{"id":"button-name","weight":10,"group":"a11y-names-labels"},{"id":"bypass","weight":3,"group":"a11y-navigation"},{"id":"color-contrast","weight":3,"group":"a11y-color-contrast"},{"id":"definition-list","weight":0,"group":"a11y-tables-lists"},{"id":"dlitem","weight":0,"group":"a11y-tables-lists"},{"id":"document-title","weight":3,"group":"a11y-names-labels"},{"id":"duplicate-id-active","weight":0,"group":"a11y-navigation"},{"id":"duplicate-id-aria","weight":0,"group":"a11y-aria"},{"id":"form-field-multiple-labels","weight":0,"group":"a11y-names-labels"},{"id":"frame-title","weight":0,"group":"a11y-names-labels"},{"id":"heading-order","weight":2,"group":"a11y-navigation"},{"id":"html-has-lang","weight":3,"group":"a11y-language"},{"id":"html-lang-valid","weight":3,"group":"a11y-language"},{"id":"image-alt","weight":0,"group":"a11y-names-labels"},{"id":"input-image-alt","weight":0,"group":"a11y-names-labels"},{"id":"label","weight":0,"group":"a11y-names-labels"},{"id":"layout-table","weight":0,"group":"a11y-tables-lists"},{"id":"link-name","weight":3,"group":"a11y-names-labels"},{"id":"list","weight":0,"group":"a11y-tables-lists"},{"id":"listitem","weight":0,"group":"a11y-tables-lists"},{"id":"meta-refresh","weight":0,"group":"a11y-best-practices"},{"id":"meta-viewport","weight":10,"group":"a11y-best-practices"},{"id":"object-alt","weight":0,"group":"a11y-names-labels"},{"id":"tabindex","weight":3,"group":"a11y-navigation"},{"id":"td-headers-attr","weight":0,"group":"a11y-tables-lists"},{"id":"th-has-data-cells","weight":0,"group":"a11y-tables-lists"},{"id":"valid-lang","weight":0,"group":"a11y-language"},{"id":"video-caption","weight":0,"group":"a11y-audio-video"},{"id":"video-description","weight":0,"group":"a11y-audio-video"},{"id":"logical-tab-order","weight":0},{"id":"focusable-controls","weight":0},{"id":"interactive-element-affordance","weight":0},{"id":"managed-focus","weight":0},{"id":"focus-traps","weight":0},{"id":"custom-controls-labels","weight":0},{"id":"custom-controls-roles","weight":0},{"id":"visual-order-follows-dom","weight":0},{"id":"offscreen-content-hidden","weight":0},{"id":"use-landmarks","weight":0}],"id":"accessibility","score":1},"best-practices":{"title":"Best Practices","auditRefs":[{"id":"is-on-https","weight":1,"group":"best-practices-trust-safety"},{"id":"external-anchors-use-rel-noopener","weight":1,"group":"best-practices-trust-safety"},{"id":"geolocation-on-start","weight":1,"group":"best-practices-trust-safety"},{"id":"notification-on-start","weight":1,"group":"best-practices-trust-safety"},{"id":"no-vulnerable-libraries","weight":1,"group":"best-practices-trust-safety"},{"id":"password-inputs-can-be-pasted-into","weight":1,"group":"best-practices-ux"},{"id":"image-aspect-ratio","weight":1,"group":"best-practices-ux"},{"id":"image-size-responsive","weight":1,"group":"best-practices-ux"},{"id":"doctype","weight":1,"group":"best-practices-browser-compat"},{"id":"charset","weight":1,"group":"best-practices-browser-compat"},{"id":"appcache-manifest","weight":1,"group":"best-practices-general"},{"id":"js-libraries","weight":0,"group":"best-practices-general"},{"id":"deprecations","weight":1,"group":"best-practices-general"},{"id":"errors-in-console","weight":1,"group":"best-practices-general"}],"id":"best-practices","score":1},"seo":{"title":"SEO","description":"These checks ensure that your page is optimized for search engine results ranking. There are additional factors Lighthouse does not check that may affect your search ranking. [Learn more](https://support.google.com/webmasters/answer/35769).","manualDescription":"Run these additional validators on your site to check additional SEO best practices.","auditRefs":[{"id":"viewport","weight":1,"group":"seo-mobile"},{"id":"document-title","weight":1,"group":"seo-content"},{"id":"meta-description","weight":1,"group":"seo-content"},{"id":"http-status-code","weight":1,"group":"seo-crawl"},{"id":"link-text","weight":1,"group":"seo-content"},{"id":"is-crawlable","weight":1,"group":"seo-crawl"},{"id":"robots-txt","weight":1,"group":"seo-crawl"},{"id":"image-alt","weight":0,"group":"seo-content"},{"id":"hreflang","weight":1,"group":"seo-content"},{"id":"canonical","weight":0,"group":"seo-content"},{"id":"font-size","weight":0,"group":"seo-mobile"},{"id":"plugins","weight":1,"group":"seo-content"},{"id":"tap-targets","weight":0,"group":"seo-mobile"},{"id":"structured-data","weight":0}],"id":"seo","score":1},"pwa":{"title":"Progressive Web App","description":"These checks validate the aspects of a Progressive Web App. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist).","manualDescription":"These checks are required by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.","auditRefs":[{"id":"load-fast-enough-for-pwa","weight":7,"group":"pwa-fast-reliable"},{"id":"works-offline","weight":5,"group":"pwa-fast-reliable"},{"id":"offline-start-url","weight":1,"group":"pwa-fast-reliable"},{"id":"is-on-https","weight":2,"group":"pwa-installable"},{"id":"service-worker","weight":1,"group":"pwa-installable"},{"id":"installable-manifest","weight":2,"group":"pwa-installable"},{"id":"redirects-http","weight":2,"group":"pwa-optimized"},{"id":"splash-screen","weight":1,"group":"pwa-optimized"},{"id":"themed-omnibox","weight":1,"group":"pwa-optimized"},{"id":"content-width","weight":0,"group":"pwa-optimized"},{"id":"viewport","weight":2,"group":"pwa-optimized"},{"id":"without-javascript","weight":1,"group":"pwa-optimized"},{"id":"apple-touch-icon","weight":1,"group":"pwa-optimized"},{"id":"maskable-icon","weight":1,"group":"pwa-optimized"},{"id":"pwa-cross-browser","weight":0},{"id":"pwa-page-transitions","weight":0},{"id":"pwa-each-page-has-url","weight":0}],"id":"pwa","score":0.7}},"categoryGroups":{"metrics":{"title":"Metrics"},"load-opportunities":{"title":"Opportunities","description":"These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score."},"budgets":{"title":"Budgets","description":"Performance budgets set standards for the performance of your site."},"diagnostics":{"title":"Diagnostics","description":"More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score."},"pwa-fast-reliable":{"title":"Fast and reliable"},"pwa-installable":{"title":"Installable"},"pwa-optimized":{"title":"PWA Optimized"},"a11y-best-practices":{"title":"Best practices","description":"These items highlight common accessibility best practices."},"a11y-color-contrast":{"title":"Contrast","description":"These are opportunities to improve the legibility of your content."},"a11y-names-labels":{"title":"Names and labels","description":"These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."},"a11y-navigation":{"title":"Navigation","description":"These are opportunities to improve keyboard navigation in your application."},"a11y-aria":{"title":"ARIA","description":"These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."},"a11y-language":{"title":"Internationalization and localization","description":"These are opportunities to improve the interpretation of your content by users in different locales."},"a11y-audio-video":{"title":"Audio and video","description":"These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."},"a11y-tables-lists":{"title":"Tables and lists","description":"These are opportunities to to improve the experience of reading tabular or list data using assistive technology, like a screen reader."},"seo-mobile":{"title":"Mobile Friendly","description":"Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/)."},"seo-content":{"title":"Content Best Practices","description":"Format your HTML in a way that enables crawlers to better understand your app’s content."},"seo-crawl":{"title":"Crawling and Indexing","description":"To appear in search results, crawlers need access to your app."},"best-practices-trust-safety":{"title":"Trust and Safety"},"best-practices-ux":{"title":"User Experience"},"best-practices-browser-compat":{"title":"Browser Compatibility"},"best-practices-general":{"title":"General"},"lighthouse-plugin-publisher-ads-metrics":{"title":"Metrics"},"lighthouse-plugin-publisher-ads-ads-performance":{"title":"Ad Speed"},"lighthouse-plugin-publisher-ads-ads-best-practices":{"title":"Tag Best Practices"}},"timing":{"entries":[{"startTime":101.11,"name":"lh:init:config","duration":74.63,"entryType":"measure"},{"startTime":107,"name":"lh:config:requireGatherers","duration":6.14,"entryType":"measure"},{"startTime":113.22,"name":"lh:config:requireAudits","duration":50.13,"entryType":"measure"},{"startTime":176.42,"name":"lh:init:connect","duration":1.43,"entryType":"measure"},{"startTime":177.9,"name":"lh:gather:loadBlank","duration":16.52,"entryType":"measure"},{"startTime":194.56,"name":"lh:gather:getVersion","duration":0.69,"entryType":"measure"},{"startTime":195.36,"name":"lh:gather:getBenchmarkIndex","duration":501.25,"entryType":"measure"},{"startTime":696.75,"name":"lh:gather:setupDriver","duration":12.67,"entryType":"measure"},{"startTime":709.66,"name":"lh:gather:runPass-defaultPass","duration":2060.97,"entryType":"measure"},{"startTime":709.75,"name":"lh:gather:loadBlank","duration":10.83,"entryType":"measure"},{"startTime":720.69,"name":"lh:gather:setupPassNetwork","duration":1.01,"entryType":"measure"},{"startTime":721.76,"name":"lh:driver:cleanBrowserCaches","duration":22.29,"entryType":"measure"},{"startTime":744.18,"name":"lh:gather:beforePass","duration":57.97,"entryType":"measure"},{"startTime":744.22,"name":"lh:gather:beforePass:CSSUsage","duration":0.05,"entryType":"measure"},{"startTime":744.29,"name":"lh:gather:beforePass:JsUsage","duration":55.79,"entryType":"measure"},{"startTime":800.13,"name":"lh:gather:beforePass:ViewportDimensions","duration":0.04,"entryType":"measure"},{"startTime":800.18,"name":"lh:gather:beforePass:RuntimeExceptions","duration":0.07,"entryType":"measure"},{"startTime":800.28,"name":"lh:gather:beforePass:ConsoleMessages","duration":0.97,"entryType":"measure"},{"startTime":801.27,"name":"lh:gather:beforePass:AnchorElements","duration":0.03,"entryType":"measure"},{"startTime":801.31,"name":"lh:gather:beforePass:ImageElements","duration":0.02,"entryType":"measure"},{"startTime":801.34,"name":"lh:gather:beforePass:LinkElements","duration":0.02,"entryType":"measure"},{"startTime":801.36,"name":"lh:gather:beforePass:MetaElements","duration":0.02,"entryType":"measure"},{"startTime":801.4,"name":"lh:gather:beforePass:ScriptElements","duration":0.01,"entryType":"measure"},{"startTime":801.41,"name":"lh:gather:beforePass:MainDocumentContent","duration":0.01,"entryType":"measure"},{"startTime":801.44,"name":"lh:gather:beforePass:AppCacheManifest","duration":0.01,"entryType":"measure"},{"startTime":801.47,"name":"lh:gather:beforePass:Doctype","duration":0.01,"entryType":"measure"},{"startTime":801.49,"name":"lh:gather:beforePass:DOMStats","duration":0.01,"entryType":"measure"},{"startTime":801.51,"name":"lh:gather:beforePass:OptimizedImages","duration":0.01,"entryType":"measure"},{"startTime":801.53,"name":"lh:gather:beforePass:PasswordInputsWithPreventedPaste","duration":0.02,"entryType":"measure"},{"startTime":801.56,"name":"lh:gather:beforePass:ResponseCompression","duration":0.01,"entryType":"measure"},{"startTime":801.57,"name":"lh:gather:beforePass:TagsBlockingFirstPaint","duration":0.39,"entryType":"measure"},{"startTime":801.98,"name":"lh:gather:beforePass:FontSize","duration":0.02,"entryType":"measure"},{"startTime":802,"name":"lh:gather:beforePass:EmbeddedContent","duration":0.02,"entryType":"measure"},{"startTime":802.03,"name":"lh:gather:beforePass:RobotsTxt","duration":0.02,"entryType":"measure"},{"startTime":802.05,"name":"lh:gather:beforePass:TapTargets","duration":0.01,"entryType":"measure"},{"startTime":802.07,"name":"lh:gather:beforePass:Accessibility","duration":0.05,"entryType":"measure"},{"startTime":802.13,"name":"lh:gather:beforePass:TraceElements","duration":0.01,"entryType":"measure"},{"startTime":802.2,"name":"lh:gather:beginRecording","duration":2.16,"entryType":"measure"},{"startTime":802.36,"name":"lh:gather:getVersion","duration":0.37,"entryType":"measure"},{"startTime":804.43,"name":"lh:gather:loadPage-defaultPass","duration":1270.57,"entryType":"measure"},{"startTime":2075.1,"name":"lh:gather:pass","duration":0.92,"entryType":"measure"},{"startTime":2076.08,"name":"lh:gather:getTrace","duration":182.97,"entryType":"measure"},{"startTime":2259.08,"name":"lh:gather:getDevtoolsLog","duration":1.15,"entryType":"measure"},{"startTime":2261.05,"name":"lh:gather:afterPass","duration":509.48,"entryType":"measure"},{"startTime":2264.51,"name":"lh:gather:afterPass:CSSUsage","duration":53.49,"entryType":"measure"},{"startTime":2318.01,"name":"lh:gather:afterPass:JsUsage","duration":27.59,"entryType":"measure"},{"startTime":2345.62,"name":"lh:gather:afterPass:ViewportDimensions","duration":1.76,"entryType":"measure"},{"startTime":2347.41,"name":"lh:gather:afterPass:RuntimeExceptions","duration":0.95,"entryType":"measure"},{"startTime":2348.38,"name":"lh:gather:afterPass:ConsoleMessages","duration":1.69,"entryType":"measure"},{"startTime":2350.09,"name":"lh:gather:afterPass:AnchorElements","duration":3.73,"entryType":"measure"},{"startTime":2353.83,"name":"lh:gather:afterPass:ImageElements","duration":2.87,"entryType":"measure"},{"startTime":2356.71,"name":"lh:gather:afterPass:LinkElements","duration":2.01,"entryType":"measure"},{"startTime":2358.74,"name":"lh:gather:afterPass:MetaElements","duration":2.13,"entryType":"measure"},{"startTime":2360.89,"name":"lh:gather:afterPass:ScriptElements","duration":29.09,"entryType":"measure"},{"startTime":2390.01,"name":"lh:gather:afterPass:MainDocumentContent","duration":2.68,"entryType":"measure"},{"startTime":2392.7,"name":"lh:gather:afterPass:AppCacheManifest","duration":2.48,"entryType":"measure"},{"startTime":2395.2,"name":"lh:gather:afterPass:Doctype","duration":1.55,"entryType":"measure"},{"startTime":2396.76,"name":"lh:gather:afterPass:DOMStats","duration":3.04,"entryType":"measure"},{"startTime":2399.83,"name":"lh:gather:afterPass:OptimizedImages","duration":0.94,"entryType":"measure"},{"startTime":2400.78,"name":"lh:gather:afterPass:PasswordInputsWithPreventedPaste","duration":1.58,"entryType":"measure"},{"startTime":2402.38,"name":"lh:gather:afterPass:ResponseCompression","duration":0.87,"entryType":"measure"},{"startTime":2403.28,"name":"lh:gather:afterPass:TagsBlockingFirstPaint","duration":2.25,"entryType":"measure"},{"startTime":2405.54,"name":"lh:gather:afterPass:FontSize","duration":14.1,"entryType":"measure"},{"startTime":2419.65,"name":"lh:gather:afterPass:EmbeddedContent","duration":1.77,"entryType":"measure"},{"startTime":2421.44,"name":"lh:gather:afterPass:RobotsTxt","duration":184.35,"entryType":"measure"},{"startTime":2605.82,"name":"lh:gather:afterPass:TapTargets","duration":5.78,"entryType":"measure"},{"startTime":2611.62,"name":"lh:gather:afterPass:Accessibility","duration":133.46,"entryType":"measure"},{"startTime":2745.11,"name":"lh:gather:afterPass:TraceElements","duration":25.4,"entryType":"measure"},{"startTime":3046.96,"name":"lh:gather:runPass-offlinePass","duration":3281.52,"entryType":"measure"},{"startTime":3047.03,"name":"lh:gather:loadBlank","duration":13.85,"entryType":"measure"},{"startTime":3060.91,"name":"lh:gather:setupPassNetwork","duration":1.9,"entryType":"measure"},{"startTime":3062.83,"name":"lh:gather:beforePass","duration":4.31,"entryType":"measure"},{"startTime":3062.85,"name":"lh:gather:beforePass:ServiceWorker","duration":3.7,"entryType":"measure"},{"startTime":3066.57,"name":"lh:gather:beforePass:Offline","duration":0.51,"entryType":"measure"},{"startTime":3067.11,"name":"lh:gather:beforePass:StartUrl","duration":0.02,"entryType":"measure"},{"startTime":3067.14,"name":"lh:gather:beginRecording","duration":0.06,"entryType":"measure"},{"startTime":3067.21,"name":"lh:gather:loadPage-offlinePass","duration":68.93,"entryType":"measure"},{"startTime":3136.16,"name":"lh:gather:pass","duration":0.16,"entryType":"measure"},{"startTime":3136.34,"name":"lh:gather:getDevtoolsLog","duration":0.27,"entryType":"measure"},{"startTime":3184.2,"name":"lh:gather:afterPass","duration":3144.25,"entryType":"measure"},{"startTime":3250.25,"name":"lh:gather:afterPass:ServiceWorker","duration":58.01,"entryType":"measure"},{"startTime":3308.28,"name":"lh:gather:afterPass:Offline","duration":7.98,"entryType":"measure"},{"startTime":3316.29,"name":"lh:gather:afterPass:StartUrl","duration":3012.15,"entryType":"measure"},{"startTime":6328.52,"name":"lh:gather:runPass-redirectPass","duration":204.81,"entryType":"measure"},{"startTime":6328.58,"name":"lh:gather:loadBlank","duration":66.56,"entryType":"measure"},{"startTime":6395.16,"name":"lh:gather:setupPassNetwork","duration":3.45,"entryType":"measure"},{"startTime":6398.64,"name":"lh:gather:beforePass","duration":0.19,"entryType":"measure"},{"startTime":6398.66,"name":"lh:gather:beforePass:HTTPRedirect","duration":0.1,"entryType":"measure"},{"startTime":6398.78,"name":"lh:gather:beforePass:HTMLWithoutJavaScript","duration":0.03,"entryType":"measure"},{"startTime":6398.83,"name":"lh:gather:beginRecording","duration":0.06,"entryType":"measure"},{"startTime":6398.91,"name":"lh:gather:loadPage-redirectPass","duration":123.63,"entryType":"measure"},{"startTime":6522.56,"name":"lh:gather:pass","duration":0.12,"entryType":"measure"},{"startTime":6522.68,"name":"lh:gather:getDevtoolsLog","duration":1.05,"entryType":"measure"},{"startTime":6524.19,"name":"lh:gather:afterPass","duration":9.12,"entryType":"measure"},{"startTime":6527.85,"name":"lh:gather:afterPass:HTTPRedirect","duration":1.98,"entryType":"measure"},{"startTime":6529.84,"name":"lh:gather:afterPass:HTMLWithoutJavaScript","duration":3.46,"entryType":"measure"},{"startTime":6533.4,"name":"lh:gather:disconnect","duration":3.12,"entryType":"measure"},{"startTime":175.93,"name":"lh:runner:run","duration":6972.28,"entryType":"measure"},{"startTime":6536.75,"name":"lh:runner:auditing","duration":610.96,"entryType":"measure"},{"startTime":6548.6,"name":"lh:audit:is-on-https","duration":1.29,"entryType":"measure"},{"startTime":6548.91,"name":"lh:computed:NetworkRecords","duration":0.61,"entryType":"measure"},{"startTime":6550.17,"name":"lh:audit:redirects-http","duration":0.26,"entryType":"measure"},{"startTime":6550.66,"name":"lh:audit:service-worker","duration":0.56,"entryType":"measure"},{"startTime":6551.4,"name":"lh:audit:works-offline","duration":0.32,"entryType":"measure"},{"startTime":6551.91,"name":"lh:audit:viewport","duration":0.74,"entryType":"measure"},{"startTime":6552.06,"name":"lh:computed:ViewportMeta","duration":0.43,"entryType":"measure"},{"startTime":6552.84,"name":"lh:audit:without-javascript","duration":0.28,"entryType":"measure"},{"startTime":6553.25,"name":"lh:audit:first-contentful-paint","duration":18.65,"entryType":"measure"},{"startTime":6553.44,"name":"lh:computed:FirstContentfulPaint","duration":18.23,"entryType":"measure"},{"startTime":6553.54,"name":"lh:computed:TraceOfTab","duration":9.56,"entryType":"measure"},{"startTime":6563.21,"name":"lh:computed:LanternFirstContentfulPaint","duration":8.45,"entryType":"measure"},{"startTime":6563.34,"name":"lh:computed:PageDependencyGraph","duration":3.32,"entryType":"measure"},{"startTime":6566.68,"name":"lh:computed:LoadSimulator","duration":1.44,"entryType":"measure"},{"startTime":6566.78,"name":"lh:computed:NetworkAnalysis","duration":1.19,"entryType":"measure"},{"startTime":6572.04,"name":"lh:audit:largest-contentful-paint","duration":2.3,"entryType":"measure"},{"startTime":6572.24,"name":"lh:computed:LargestContentfulPaint","duration":1.95,"entryType":"measure"},{"startTime":6572.29,"name":"lh:computed:LanternLargestContentfulPaint","duration":1.83,"entryType":"measure"},{"startTime":6574.46,"name":"lh:audit:first-meaningful-paint","duration":1.78,"entryType":"measure"},{"startTime":6574.63,"name":"lh:computed:FirstMeaningfulPaint","duration":1.46,"entryType":"measure"},{"startTime":6574.68,"name":"lh:computed:LanternFirstMeaningfulPaint","duration":1.4,"entryType":"measure"},{"startTime":6576.41,"name":"lh:audit:load-fast-enough-for-pwa","duration":6.74,"entryType":"measure"},{"startTime":6576.63,"name":"lh:computed:Interactive","duration":6.36,"entryType":"measure"},{"startTime":6576.68,"name":"lh:computed:LanternInteractive","duration":6.29,"entryType":"measure"},{"startTime":6576.76,"name":"lh:computed:LanternFirstMeaningfulPaint","duration":2.74,"entryType":"measure"},{"startTime":6576.79,"name":"lh:computed:LanternFirstContentfulPaint","duration":1.43,"entryType":"measure"},{"startTime":6576.88,"name":"lh:computed:LoadSimulator","duration":0.05,"entryType":"measure"},{"startTime":6583.27,"name":"lh:audit:speed-index","duration":240.65,"entryType":"measure"},{"startTime":6583.45,"name":"lh:computed:SpeedIndex","duration":240.31,"entryType":"measure"},{"startTime":6583.51,"name":"lh:computed:LanternSpeedIndex","duration":240.23,"entryType":"measure"},{"startTime":6583.55,"name":"lh:computed:Speedline","duration":237.12,"entryType":"measure"},{"startTime":6823.95,"name":"lh:audit:screenshot-thumbnails","duration":133.22,"entryType":"measure"},{"startTime":6957.21,"name":"lh:audit:final-screenshot","duration":0.71,"entryType":"measure"},{"startTime":6957.41,"name":"lh:computed:Screenshots","duration":0.47,"entryType":"measure"},{"startTime":6958.12,"name":"lh:audit:estimated-input-latency","duration":6.77,"entryType":"measure"},{"startTime":6958.31,"name":"lh:computed:EstimatedInputLatency","duration":6.42,"entryType":"measure"},{"startTime":6958.36,"name":"lh:computed:LanternEstimatedInputLatency","duration":6.35,"entryType":"measure"},{"startTime":6965.04,"name":"lh:audit:total-blocking-time","duration":6.52,"entryType":"measure"},{"startTime":6965.28,"name":"lh:computed:TotalBlockingTime","duration":6.14,"entryType":"measure"},{"startTime":6965.33,"name":"lh:computed:LanternTotalBlockingTime","duration":6.06,"entryType":"measure"},{"startTime":6965.42,"name":"lh:computed:LanternInteractive","duration":1.86,"entryType":"measure"},{"startTime":6971.72,"name":"lh:audit:max-potential-fid","duration":2.66,"entryType":"measure"},{"startTime":6971.92,"name":"lh:computed:MaxPotentialFID","duration":2.29,"entryType":"measure"},{"startTime":6971.97,"name":"lh:computed:LanternMaxPotentialFID","duration":2.23,"entryType":"measure"},{"startTime":6974.51,"name":"lh:audit:cumulative-layout-shift","duration":0.6,"entryType":"measure"},{"startTime":6974.68,"name":"lh:computed:CumulativeLayoutShift","duration":0.1,"entryType":"measure"},{"startTime":6975.27,"name":"lh:audit:errors-in-console","duration":0.36,"entryType":"measure"},{"startTime":6975.79,"name":"lh:audit:server-response-time","duration":0.49,"entryType":"measure"},{"startTime":6975.96,"name":"lh:computed:MainResource","duration":0.07,"entryType":"measure"},{"startTime":6976.39,"name":"lh:audit:first-cpu-idle","duration":2.02,"entryType":"measure"},{"startTime":6976.56,"name":"lh:computed:FirstCPUIdle","duration":1.72,"entryType":"measure"},{"startTime":6976.61,"name":"lh:computed:LanternFirstCPUIdle","duration":1.66,"entryType":"measure"},{"startTime":6978.64,"name":"lh:audit:interactive","duration":0.6,"entryType":"measure"},{"startTime":6979.02,"name":"lh:computed:Interactive","duration":0.08,"entryType":"measure"},{"startTime":6979.36,"name":"lh:audit:user-timings","duration":0.77,"entryType":"measure"},{"startTime":6979.51,"name":"lh:computed:UserTimings","duration":0.44,"entryType":"measure"},{"startTime":6980.26,"name":"lh:audit:critical-request-chains","duration":0.92,"entryType":"measure"},{"startTime":6980.4,"name":"lh:computed:CriticalRequestChains","duration":0.3,"entryType":"measure"},{"startTime":6981.33,"name":"lh:audit:redirects","duration":0.45,"entryType":"measure"},{"startTime":6981.92,"name":"lh:audit:installable-manifest","duration":0.9,"entryType":"measure"},{"startTime":6982.08,"name":"lh:computed:ManifestValues","duration":0.52,"entryType":"measure"},{"startTime":6982.96,"name":"lh:audit:apple-touch-icon","duration":0.27,"entryType":"measure"},{"startTime":6983.37,"name":"lh:audit:splash-screen","duration":0.37,"entryType":"measure"},{"startTime":6983.51,"name":"lh:computed:ManifestValues","duration":0.07,"entryType":"measure"},{"startTime":6983.88,"name":"lh:audit:themed-omnibox","duration":0.43,"entryType":"measure"},{"startTime":6984.04,"name":"lh:computed:ManifestValues","duration":0.07,"entryType":"measure"},{"startTime":6984.44,"name":"lh:audit:maskable-icon","duration":0.28,"entryType":"measure"},{"startTime":6984.86,"name":"lh:audit:content-width","duration":0.24,"entryType":"measure"},{"startTime":6985.23,"name":"lh:audit:image-aspect-ratio","duration":0.29,"entryType":"measure"},{"startTime":6985.65,"name":"lh:audit:image-size-responsive","duration":0.33,"entryType":"measure"},{"startTime":6986.1,"name":"lh:audit:deprecations","duration":0.29,"entryType":"measure"},{"startTime":6986.51,"name":"lh:audit:mainthread-work-breakdown","duration":8.27,"entryType":"measure"},{"startTime":6986.71,"name":"lh:computed:MainThreadTasks","duration":7.53,"entryType":"measure"},{"startTime":6994.9,"name":"lh:audit:bootup-time","duration":1.58,"entryType":"measure"},{"startTime":6996.59,"name":"lh:audit:uses-rel-preload","duration":0.86,"entryType":"measure"},{"startTime":6996.82,"name":"lh:computed:LoadSimulator","duration":0.06,"entryType":"measure"},{"startTime":6997.56,"name":"lh:audit:uses-rel-preconnect","duration":0.42,"entryType":"measure"},{"startTime":6998.15,"name":"lh:audit:font-display","duration":1.46,"entryType":"measure"},{"startTime":6999.64,"name":"lh:audit:diagnostics","duration":0.44,"entryType":"measure"},{"startTime":7000.09,"name":"lh:audit:network-requests","duration":0.4,"entryType":"measure"},{"startTime":7000.6,"name":"lh:audit:network-rtt","duration":0.35,"entryType":"measure"},{"startTime":7001.08,"name":"lh:audit:network-server-latency","duration":0.33,"entryType":"measure"},{"startTime":7001.42,"name":"lh:audit:main-thread-tasks","duration":0.2,"entryType":"measure"},{"startTime":7001.64,"name":"lh:audit:metrics","duration":0.9,"entryType":"measure"},{"startTime":7001.77,"name":"lh:computed:TimingSummary","duration":0.67,"entryType":"measure"},{"startTime":7002.68,"name":"lh:audit:offline-start-url","duration":0.28,"entryType":"measure"},{"startTime":7003.06,"name":"lh:audit:performance-budget","duration":0.82,"entryType":"measure"},{"startTime":7003.24,"name":"lh:computed:ResourceSummary","duration":0.53,"entryType":"measure"},{"startTime":7003.98,"name":"lh:audit:timing-budget","duration":0.25,"entryType":"measure"},{"startTime":7004.35,"name":"lh:audit:resource-summary","duration":0.41,"entryType":"measure"},{"startTime":7004.88,"name":"lh:audit:third-party-summary","duration":6.42,"entryType":"measure"},{"startTime":7011.41,"name":"lh:audit:largest-contentful-paint-element","duration":0.25,"entryType":"measure"},{"startTime":7011.76,"name":"lh:audit:layout-shift-elements","duration":0.25,"entryType":"measure"},{"startTime":7012.16,"name":"lh:audit:pwa-cross-browser","duration":0.18,"entryType":"measure"},{"startTime":7012.49,"name":"lh:audit:pwa-page-transitions","duration":0.16,"entryType":"measure"},{"startTime":7012.75,"name":"lh:audit:pwa-each-page-has-url","duration":0.15,"entryType":"measure"},{"startTime":7013.02,"name":"lh:audit:accesskeys","duration":0.31,"entryType":"measure"},{"startTime":7013.46,"name":"lh:audit:aria-allowed-attr","duration":0.67,"entryType":"measure"},{"startTime":7014.27,"name":"lh:audit:aria-hidden-body","duration":1.54,"entryType":"measure"},{"startTime":7016,"name":"lh:audit:aria-hidden-focus","duration":1.51,"entryType":"measure"},{"startTime":7017.64,"name":"lh:audit:aria-input-field-name","duration":0.23,"entryType":"measure"},{"startTime":7018.01,"name":"lh:audit:aria-required-attr","duration":0.24,"entryType":"measure"},{"startTime":7018.44,"name":"lh:audit:aria-required-children","duration":0.26,"entryType":"measure"},{"startTime":7018.83,"name":"lh:audit:aria-required-parent","duration":0.27,"entryType":"measure"},{"startTime":7019.22,"name":"lh:audit:aria-roles","duration":0.29,"entryType":"measure"},{"startTime":7019.64,"name":"lh:audit:aria-toggle-field-name","duration":0.3,"entryType":"measure"},{"startTime":7020.06,"name":"lh:audit:aria-valid-attr-value","duration":0.68,"entryType":"measure"},{"startTime":7020.87,"name":"lh:audit:aria-valid-attr","duration":0.7,"entryType":"measure"},{"startTime":7021.7,"name":"lh:audit:button-name","duration":0.68,"entryType":"measure"},{"startTime":7022.52,"name":"lh:audit:bypass","duration":0.75,"entryType":"measure"},{"startTime":7023.41,"name":"lh:audit:color-contrast","duration":0.56,"entryType":"measure"},{"startTime":7024.15,"name":"lh:audit:definition-list","duration":0.29,"entryType":"measure"},{"startTime":7024.57,"name":"lh:audit:dlitem","duration":0.29,"entryType":"measure"},{"startTime":7024.97,"name":"lh:audit:document-title","duration":0.54,"entryType":"measure"},{"startTime":7025.64,"name":"lh:audit:duplicate-id-active","duration":0.3,"entryType":"measure"},{"startTime":7026.05,"name":"lh:audit:duplicate-id-aria","duration":0.33,"entryType":"measure"},{"startTime":7026.49,"name":"lh:audit:form-field-multiple-labels","duration":0.33,"entryType":"measure"},{"startTime":7026.94,"name":"lh:audit:frame-title","duration":0.33,"entryType":"measure"},{"startTime":7027.4,"name":"lh:audit:heading-order","duration":0.55,"entryType":"measure"},{"startTime":7028.07,"name":"lh:audit:html-has-lang","duration":0.54,"entryType":"measure"},{"startTime":7028.74,"name":"lh:audit:html-lang-valid","duration":0.55,"entryType":"measure"},{"startTime":7029.4,"name":"lh:audit:image-alt","duration":0.36,"entryType":"measure"},{"startTime":7029.88,"name":"lh:audit:input-image-alt","duration":0.36,"entryType":"measure"},{"startTime":7030.37,"name":"lh:audit:label","duration":0.38,"entryType":"measure"},{"startTime":7030.9,"name":"lh:audit:layout-table","duration":0.39,"entryType":"measure"},{"startTime":7031.4,"name":"lh:audit:link-name","duration":0.56,"entryType":"measure"},{"startTime":7032.11,"name":"lh:audit:list","duration":0.41,"entryType":"measure"},{"startTime":7032.66,"name":"lh:audit:listitem","duration":0.43,"entryType":"measure"},{"startTime":7033.23,"name":"lh:audit:meta-refresh","duration":0.43,"entryType":"measure"},{"startTime":7033.84,"name":"lh:audit:meta-viewport","duration":0.55,"entryType":"measure"},{"startTime":7034.51,"name":"lh:audit:object-alt","duration":0.44,"entryType":"measure"},{"startTime":7035.08,"name":"lh:audit:tabindex","duration":0.55,"entryType":"measure"},{"startTime":7035.8,"name":"lh:audit:td-headers-attr","duration":0.48,"entryType":"measure"},{"startTime":7037.19,"name":"lh:audit:th-has-data-cells","duration":0.5,"entryType":"measure"},{"startTime":7037.81,"name":"lh:audit:valid-lang","duration":0.5,"entryType":"measure"},{"startTime":7038.45,"name":"lh:audit:video-caption","duration":0.51,"entryType":"measure"},{"startTime":7039.1,"name":"lh:audit:video-description","duration":0.53,"entryType":"measure"},{"startTime":7039.66,"name":"lh:audit:custom-controls-labels","duration":0.07,"entryType":"measure"},{"startTime":7039.75,"name":"lh:audit:custom-controls-roles","duration":0.06,"entryType":"measure"},{"startTime":7039.82,"name":"lh:audit:focus-traps","duration":0.05,"entryType":"measure"},{"startTime":7039.89,"name":"lh:audit:focusable-controls","duration":0.06,"entryType":"measure"},{"startTime":7039.96,"name":"lh:audit:interactive-element-affordance","duration":0.05,"entryType":"measure"},{"startTime":7040.02,"name":"lh:audit:logical-tab-order","duration":0.06,"entryType":"measure"},{"startTime":7040.09,"name":"lh:audit:managed-focus","duration":0.05,"entryType":"measure"},{"startTime":7040.16,"name":"lh:audit:offscreen-content-hidden","duration":0.05,"entryType":"measure"},{"startTime":7040.22,"name":"lh:audit:use-landmarks","duration":0.06,"entryType":"measure"},{"startTime":7040.29,"name":"lh:audit:visual-order-follows-dom","duration":0.06,"entryType":"measure"},{"startTime":7040.47,"name":"lh:audit:uses-long-cache-ttl","duration":0.95,"entryType":"measure"},{"startTime":7041.54,"name":"lh:audit:total-byte-weight","duration":0.37,"entryType":"measure"},{"startTime":7042.01,"name":"lh:audit:offscreen-images","duration":1.73,"entryType":"measure"},{"startTime":7043.85,"name":"lh:audit:render-blocking-resources","duration":2.54,"entryType":"measure"},{"startTime":7044.22,"name":"lh:computed:UnusedCSS","duration":0.65,"entryType":"measure"},{"startTime":7044.92,"name":"lh:computed:FirstContentfulPaint","duration":0.88,"entryType":"measure"},{"startTime":7044.96,"name":"lh:computed:LanternFirstContentfulPaint","duration":0.83,"entryType":"measure"},{"startTime":7046.54,"name":"lh:audit:unminified-css","duration":17.52,"entryType":"measure"},{"startTime":7064.17,"name":"lh:audit:unminified-javascript","duration":40.73,"entryType":"measure"},{"startTime":7105.05,"name":"lh:audit:unused-css-rules","duration":1.63,"entryType":"measure"},{"startTime":7106.85,"name":"lh:audit:unused-javascript","duration":22.86,"entryType":"measure"},{"startTime":7107.14,"name":"lh:computed:UnusedJavascriptSummary","duration":11.3,"entryType":"measure"},{"startTime":7118.49,"name":"lh:computed:UnusedJavascriptSummary","duration":0.2,"entryType":"measure"},{"startTime":7118.73,"name":"lh:computed:UnusedJavascriptSummary","duration":5.38,"entryType":"measure"},{"startTime":7124.14,"name":"lh:computed:UnusedJavascriptSummary","duration":4.74,"entryType":"measure"},{"startTime":7129.85,"name":"lh:audit:uses-webp-images","duration":0.93,"entryType":"measure"},{"startTime":7130.87,"name":"lh:audit:uses-optimized-images","duration":0.9,"entryType":"measure"},{"startTime":7131.88,"name":"lh:audit:uses-text-compression","duration":0.83,"entryType":"measure"},{"startTime":7132.81,"name":"lh:audit:uses-responsive-images","duration":0.84,"entryType":"measure"},{"startTime":7133.76,"name":"lh:audit:efficient-animated-content","duration":1.17,"entryType":"measure"},{"startTime":7135.05,"name":"lh:audit:appcache-manifest","duration":0.21,"entryType":"measure"},{"startTime":7135.37,"name":"lh:audit:doctype","duration":0.22,"entryType":"measure"},{"startTime":7135.71,"name":"lh:audit:charset","duration":0.39,"entryType":"measure"},{"startTime":7136.22,"name":"lh:audit:dom-size","duration":0.51,"entryType":"measure"},{"startTime":7136.87,"name":"lh:audit:external-anchors-use-rel-noopener","duration":0.3,"entryType":"measure"},{"startTime":7137.31,"name":"lh:audit:geolocation-on-start","duration":0.35,"entryType":"measure"},{"startTime":7137.76,"name":"lh:audit:no-document-write","duration":0.23,"entryType":"measure"},{"startTime":7138.13,"name":"lh:audit:no-vulnerable-libraries","duration":2.64,"entryType":"measure"},{"startTime":7140.88,"name":"lh:audit:js-libraries","duration":0.27,"entryType":"measure"},{"startTime":7141.29,"name":"lh:audit:notification-on-start","duration":0.22,"entryType":"measure"},{"startTime":7141.78,"name":"lh:audit:password-inputs-can-be-pasted-into","duration":0.24,"entryType":"measure"},{"startTime":7142.14,"name":"lh:audit:uses-http2","duration":0.44,"entryType":"measure"},{"startTime":7142.71,"name":"lh:audit:uses-passive-event-listeners","duration":0.23,"entryType":"measure"},{"startTime":7143.06,"name":"lh:audit:meta-description","duration":0.22,"entryType":"measure"},{"startTime":7143.39,"name":"lh:audit:http-status-code","duration":0.24,"entryType":"measure"},{"startTime":7143.75,"name":"lh:audit:font-size","duration":0.29,"entryType":"measure"},{"startTime":7144.15,"name":"lh:audit:link-text","duration":0.32,"entryType":"measure"},{"startTime":7144.64,"name":"lh:audit:is-crawlable","duration":0.76,"entryType":"measure"},{"startTime":7145.51,"name":"lh:audit:robots-txt","duration":0.4,"entryType":"measure"},{"startTime":7146.03,"name":"lh:audit:tap-targets","duration":0.26,"entryType":"measure"},{"startTime":7146.39,"name":"lh:audit:hreflang","duration":0.24,"entryType":"measure"},{"startTime":7146.77,"name":"lh:audit:plugins","duration":0.24,"entryType":"measure"},{"startTime":7147.12,"name":"lh:audit:canonical","duration":0.34,"entryType":"measure"},{"startTime":7147.56,"name":"lh:audit:structured-data","duration":0.14,"entryType":"measure"},{"startTime":7147.72,"name":"lh:runner:generate","duration":0.47,"entryType":"measure"}],"total":6972.28},"i18n":{"rendererFormattedStrings":{},"icuMessagePaths":{"lighthouse-core/audits/is-on-https.js | title":["audits[is-on-https].title"],"lighthouse-core/audits/is-on-https.js | description":["audits[is-on-https].description"],"lighthouse-core/audits/redirects-http.js | title":["audits[redirects-http].title"],"lighthouse-core/audits/redirects-http.js | description":["audits[redirects-http].description"],"lighthouse-core/audits/service-worker.js | failureTitle":["audits[service-worker].title"],"lighthouse-core/audits/service-worker.js | description":["audits[service-worker].description"],"lighthouse-core/audits/works-offline.js | failureTitle":["audits[works-offline].title"],"lighthouse-core/audits/works-offline.js | description":["audits[works-offline].description"],"lighthouse-core/audits/viewport.js | title":["audits.viewport.title"],"lighthouse-core/audits/viewport.js | description":["audits.viewport.description"],"lighthouse-core/audits/without-javascript.js | title":["audits[without-javascript].title"],"lighthouse-core/audits/without-javascript.js | description":["audits[without-javascript].description"],"lighthouse-core/lib/i18n/i18n.js | firstContentfulPaintMetric":["audits[first-contentful-paint].title"],"lighthouse-core/audits/metrics/first-contentful-paint.js | description":["audits[first-contentful-paint].description"],"lighthouse-core/lib/i18n/i18n.js | seconds":[{"values":{"timeInMs":560.6582},"path":"audits[first-contentful-paint].displayValue"},{"values":{"timeInMs":947.5293999999999},"path":"audits[largest-contentful-paint].displayValue"},{"values":{"timeInMs":560.6582},"path":"audits[first-meaningful-paint].displayValue"},{"values":{"timeInMs":560.6582},"path":"audits[speed-index].displayValue"},{"values":{"timeInMs":678.7134},"path":"audits[first-cpu-idle].displayValue"},{"values":{"timeInMs":678.7134},"path":"audits.interactive.displayValue"},{"values":{"timeInMs":181.56100000000032},"path":"audits[mainthread-work-breakdown].displayValue"},{"values":{"timeInMs":73.9450000000001},"path":"audits[bootup-time].displayValue"}],"lighthouse-core/lib/i18n/i18n.js | largestContentfulPaintMetric":["audits[largest-contentful-paint].title"],"lighthouse-core/audits/metrics/largest-contentful-paint.js | description":["audits[largest-contentful-paint].description"],"lighthouse-core/lib/i18n/i18n.js | firstMeaningfulPaintMetric":["audits[first-meaningful-paint].title"],"lighthouse-core/audits/metrics/first-meaningful-paint.js | description":["audits[first-meaningful-paint].description"],"lighthouse-core/audits/load-fast-enough-for-pwa.js | title":["audits[load-fast-enough-for-pwa].title"],"lighthouse-core/audits/load-fast-enough-for-pwa.js | description":["audits[load-fast-enough-for-pwa].description"],"lighthouse-core/lib/i18n/i18n.js | speedIndexMetric":["audits[speed-index].title"],"lighthouse-core/audits/metrics/speed-index.js | description":["audits[speed-index].description"],"lighthouse-core/lib/i18n/i18n.js | estimatedInputLatencyMetric":["audits[estimated-input-latency].title"],"lighthouse-core/audits/metrics/estimated-input-latency.js | description":["audits[estimated-input-latency].description"],"lighthouse-core/lib/i18n/i18n.js | ms":[{"values":{"timeInMs":12.8},"path":"audits[estimated-input-latency].displayValue"},{"values":{"timeInMs":4},"path":"audits[total-blocking-time].displayValue"},{"values":{"timeInMs":54},"path":"audits[max-potential-fid].displayValue"},{"values":{"timeInMs":0.060599999999999994},"path":"audits[network-rtt].displayValue"},{"values":{"timeInMs":49.546600000000005},"path":"audits[network-server-latency].displayValue"}],"lighthouse-core/lib/i18n/i18n.js | totalBlockingTimeMetric":["audits[total-blocking-time].title"],"lighthouse-core/audits/metrics/total-blocking-time.js | description":["audits[total-blocking-time].description"],"lighthouse-core/lib/i18n/i18n.js | maxPotentialFIDMetric":["audits[max-potential-fid].title"],"lighthouse-core/audits/metrics/max-potential-fid.js | description":["audits[max-potential-fid].description"],"lighthouse-core/lib/i18n/i18n.js | cumulativeLayoutShiftMetric":["audits[cumulative-layout-shift].title"],"lighthouse-core/audits/metrics/cumulative-layout-shift.js | description":["audits[cumulative-layout-shift].description"],"lighthouse-core/audits/errors-in-console.js | title":["audits[errors-in-console].title"],"lighthouse-core/audits/errors-in-console.js | description":["audits[errors-in-console].description"],"lighthouse-core/audits/server-response-time.js | title":["audits[server-response-time].title"],"lighthouse-core/audits/server-response-time.js | description":["audits[server-response-time].description"],"lighthouse-core/audits/server-response-time.js | displayValue":[{"values":{"timeInMs":19.794999999999998},"path":"audits[server-response-time].displayValue"}],"lighthouse-core/lib/i18n/i18n.js | firstCPUIdleMetric":["audits[first-cpu-idle].title"],"lighthouse-core/audits/metrics/first-cpu-idle.js | description":["audits[first-cpu-idle].description"],"lighthouse-core/lib/i18n/i18n.js | interactiveMetric":["audits.interactive.title"],"lighthouse-core/audits/metrics/interactive.js | description":["audits.interactive.description"],"lighthouse-core/audits/user-timings.js | title":["audits[user-timings].title"],"lighthouse-core/audits/user-timings.js | description":["audits[user-timings].description"],"lighthouse-core/audits/critical-request-chains.js | title":["audits[critical-request-chains].title"],"lighthouse-core/audits/critical-request-chains.js | description":["audits[critical-request-chains].description"],"lighthouse-core/audits/critical-request-chains.js | displayValue":[{"values":{"itemCount":10},"path":"audits[critical-request-chains].displayValue"}],"lighthouse-core/audits/redirects.js | title":["audits.redirects.title"],"lighthouse-core/audits/redirects.js | description":["audits.redirects.description"],"lighthouse-core/audits/installable-manifest.js | title":["audits[installable-manifest].title"],"lighthouse-core/audits/installable-manifest.js | description":["audits[installable-manifest].description"],"lighthouse-core/audits/apple-touch-icon.js | title":["audits[apple-touch-icon].title"],"lighthouse-core/audits/apple-touch-icon.js | description":["audits[apple-touch-icon].description"],"lighthouse-core/audits/splash-screen.js | title":["audits[splash-screen].title"],"lighthouse-core/audits/splash-screen.js | description":["audits[splash-screen].description"],"lighthouse-core/audits/themed-omnibox.js | title":["audits[themed-omnibox].title"],"lighthouse-core/audits/themed-omnibox.js | description":["audits[themed-omnibox].description"],"lighthouse-core/audits/maskable-icon.js | failureTitle":["audits[maskable-icon].title"],"lighthouse-core/audits/maskable-icon.js | description":["audits[maskable-icon].description"],"lighthouse-core/audits/content-width.js | title":["audits[content-width].title"],"lighthouse-core/audits/content-width.js | description":["audits[content-width].description"],"lighthouse-core/audits/image-aspect-ratio.js | title":["audits[image-aspect-ratio].title"],"lighthouse-core/audits/image-aspect-ratio.js | description":["audits[image-aspect-ratio].description"],"lighthouse-core/audits/image-size-responsive.js | title":["audits[image-size-responsive].title"],"lighthouse-core/audits/image-size-responsive.js | description":["audits[image-size-responsive].description"],"lighthouse-core/audits/deprecations.js | title":["audits.deprecations.title"],"lighthouse-core/audits/deprecations.js | description":["audits.deprecations.description"],"lighthouse-core/audits/mainthread-work-breakdown.js | title":["audits[mainthread-work-breakdown].title"],"lighthouse-core/audits/mainthread-work-breakdown.js | description":["audits[mainthread-work-breakdown].description"],"lighthouse-core/audits/mainthread-work-breakdown.js | columnCategory":["audits[mainthread-work-breakdown].details.headings[0].text"],"lighthouse-core/lib/i18n/i18n.js | columnTimeSpent":["audits[mainthread-work-breakdown].details.headings[1].text","audits[network-rtt].details.headings[1].text","audits[network-server-latency].details.headings[1].text"],"lighthouse-core/audits/bootup-time.js | title":["audits[bootup-time].title"],"lighthouse-core/audits/bootup-time.js | description":["audits[bootup-time].description"],"lighthouse-core/lib/i18n/i18n.js | columnURL":["audits[bootup-time].details.headings[0].text","audits[network-rtt].details.headings[0].text","audits[network-server-latency].details.headings[0].text","audits[total-byte-weight].details.headings[0].text","audits[render-blocking-resources].details.headings[0].label","audits[unminified-javascript].details.headings[0].label","audits[unused-css-rules].details.headings[0].label","audits[unused-javascript].details.headings[0].label"],"lighthouse-core/audits/bootup-time.js | columnTotal":["audits[bootup-time].details.headings[1].text"],"lighthouse-core/audits/bootup-time.js | columnScriptEval":["audits[bootup-time].details.headings[2].text"],"lighthouse-core/audits/bootup-time.js | columnScriptParse":["audits[bootup-time].details.headings[3].text"],"lighthouse-core/audits/uses-rel-preload.js | title":["audits[uses-rel-preload].title"],"lighthouse-core/audits/uses-rel-preload.js | description":["audits[uses-rel-preload].description"],"lighthouse-core/audits/uses-rel-preconnect.js | title":["audits[uses-rel-preconnect].title"],"lighthouse-core/audits/uses-rel-preconnect.js | description":["audits[uses-rel-preconnect].description"],"lighthouse-core/audits/font-display.js | title":["audits[font-display].title"],"lighthouse-core/audits/font-display.js | description":["audits[font-display].description"],"lighthouse-core/audits/network-rtt.js | title":["audits[network-rtt].title"],"lighthouse-core/audits/network-rtt.js | description":["audits[network-rtt].description"],"lighthouse-core/audits/network-server-latency.js | title":["audits[network-server-latency].title"],"lighthouse-core/audits/network-server-latency.js | description":["audits[network-server-latency].description"],"lighthouse-core/audits/offline-start-url.js | failureTitle":["audits[offline-start-url].title"],"lighthouse-core/audits/offline-start-url.js | description":["audits[offline-start-url].description"],"lighthouse-core/audits/performance-budget.js | title":["audits[performance-budget].title"],"lighthouse-core/audits/performance-budget.js | description":["audits[performance-budget].description"],"lighthouse-core/audits/timing-budget.js | title":["audits[timing-budget].title"],"lighthouse-core/audits/timing-budget.js | description":["audits[timing-budget].description"],"lighthouse-core/audits/resource-summary.js | title":["audits[resource-summary].title"],"lighthouse-core/audits/resource-summary.js | description":["audits[resource-summary].description"],"lighthouse-core/audits/resource-summary.js | displayValue":[{"values":{"requestCount":16,"byteCount":938487},"path":"audits[resource-summary].displayValue"}],"lighthouse-core/lib/i18n/i18n.js | columnResourceType":["audits[resource-summary].details.headings[0].text"],"lighthouse-core/lib/i18n/i18n.js | columnRequests":["audits[resource-summary].details.headings[1].text"],"lighthouse-core/lib/i18n/i18n.js | columnTransferSize":["audits[resource-summary].details.headings[2].text","audits[third-party-summary].details.headings[1].text","audits[total-byte-weight].details.headings[1].text","audits[render-blocking-resources].details.headings[1].label","audits[unminified-javascript].details.headings[1].label","audits[unused-css-rules].details.headings[1].label","audits[unused-javascript].details.headings[1].label"],"lighthouse-core/lib/i18n/i18n.js | totalResourceType":["audits[resource-summary].details.items[0].label"],"lighthouse-core/lib/i18n/i18n.js | scriptResourceType":["audits[resource-summary].details.items[1].label"],"lighthouse-core/lib/i18n/i18n.js | fontResourceType":["audits[resource-summary].details.items[2].label"],"lighthouse-core/lib/i18n/i18n.js | otherResourceType":["audits[resource-summary].details.items[3].label"],"lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType":["audits[resource-summary].details.items[4].label"],"lighthouse-core/lib/i18n/i18n.js | documentResourceType":["audits[resource-summary].details.items[5].label"],"lighthouse-core/lib/i18n/i18n.js | imageResourceType":["audits[resource-summary].details.items[6].label"],"lighthouse-core/lib/i18n/i18n.js | mediaResourceType":["audits[resource-summary].details.items[7].label"],"lighthouse-core/lib/i18n/i18n.js | thirdPartyResourceType":["audits[resource-summary].details.items[8].label"],"lighthouse-core/audits/third-party-summary.js | title":["audits[third-party-summary].title"],"lighthouse-core/audits/third-party-summary.js | description":["audits[third-party-summary].description"],"lighthouse-core/audits/third-party-summary.js | displayValue":[{"values":{"timeInMs":0},"path":"audits[third-party-summary].displayValue"}],"lighthouse-core/audits/third-party-summary.js | columnThirdParty":["audits[third-party-summary].details.headings[0].text"],"lighthouse-core/audits/third-party-summary.js | columnBlockingTime":["audits[third-party-summary].details.headings[2].text"],"lighthouse-core/audits/largest-contentful-paint-element.js | title":["audits[largest-contentful-paint-element].title"],"lighthouse-core/audits/largest-contentful-paint-element.js | description":["audits[largest-contentful-paint-element].description"],"lighthouse-core/audits/largest-contentful-paint-element.js | displayValue":[{"values":{"itemCount":1},"path":"audits[largest-contentful-paint-element].displayValue"}],"lighthouse-core/lib/i18n/i18n.js | columnElement":["audits[largest-contentful-paint-element].details.headings[0].text","audits[layout-shift-elements].details.headings[0].text","audits[dom-size].details.headings[1].text"],"lighthouse-core/audits/layout-shift-elements.js | title":["audits[layout-shift-elements].title"],"lighthouse-core/audits/layout-shift-elements.js | description":["audits[layout-shift-elements].description"],"lighthouse-core/audits/layout-shift-elements.js | displayValue":[{"values":{"nodeCount":5},"path":"audits[layout-shift-elements].displayValue"}],"lighthouse-core/audits/manual/pwa-cross-browser.js | title":["audits[pwa-cross-browser].title"],"lighthouse-core/audits/manual/pwa-cross-browser.js | description":["audits[pwa-cross-browser].description"],"lighthouse-core/audits/manual/pwa-page-transitions.js | title":["audits[pwa-page-transitions].title"],"lighthouse-core/audits/manual/pwa-page-transitions.js | description":["audits[pwa-page-transitions].description"],"lighthouse-core/audits/manual/pwa-each-page-has-url.js | title":["audits[pwa-each-page-has-url].title"],"lighthouse-core/audits/manual/pwa-each-page-has-url.js | description":["audits[pwa-each-page-has-url].description"],"lighthouse-core/audits/accessibility/accesskeys.js | title":["audits.accesskeys.title"],"lighthouse-core/audits/accessibility/accesskeys.js | description":["audits.accesskeys.description"],"lighthouse-core/audits/accessibility/aria-allowed-attr.js | title":["audits[aria-allowed-attr].title"],"lighthouse-core/audits/accessibility/aria-allowed-attr.js | description":["audits[aria-allowed-attr].description"],"lighthouse-core/audits/accessibility/aria-hidden-body.js | title":["audits[aria-hidden-body].title"],"lighthouse-core/audits/accessibility/aria-hidden-body.js | description":["audits[aria-hidden-body].description"],"lighthouse-core/audits/accessibility/aria-hidden-focus.js | title":["audits[aria-hidden-focus].title"],"lighthouse-core/audits/accessibility/aria-hidden-focus.js | description":["audits[aria-hidden-focus].description"],"lighthouse-core/audits/accessibility/aria-input-field-name.js | title":["audits[aria-input-field-name].title"],"lighthouse-core/audits/accessibility/aria-input-field-name.js | description":["audits[aria-input-field-name].description"],"lighthouse-core/audits/accessibility/aria-required-attr.js | title":["audits[aria-required-attr].title"],"lighthouse-core/audits/accessibility/aria-required-attr.js | description":["audits[aria-required-attr].description"],"lighthouse-core/audits/accessibility/aria-required-children.js | title":["audits[aria-required-children].title"],"lighthouse-core/audits/accessibility/aria-required-children.js | description":["audits[aria-required-children].description"],"lighthouse-core/audits/accessibility/aria-required-parent.js | title":["audits[aria-required-parent].title"],"lighthouse-core/audits/accessibility/aria-required-parent.js | description":["audits[aria-required-parent].description"],"lighthouse-core/audits/accessibility/aria-roles.js | title":["audits[aria-roles].title"],"lighthouse-core/audits/accessibility/aria-roles.js | description":["audits[aria-roles].description"],"lighthouse-core/audits/accessibility/aria-toggle-field-name.js | title":["audits[aria-toggle-field-name].title"],"lighthouse-core/audits/accessibility/aria-toggle-field-name.js | description":["audits[aria-toggle-field-name].description"],"lighthouse-core/audits/accessibility/aria-valid-attr-value.js | title":["audits[aria-valid-attr-value].title"],"lighthouse-core/audits/accessibility/aria-valid-attr-value.js | description":["audits[aria-valid-attr-value].description"],"lighthouse-core/audits/accessibility/aria-valid-attr.js | title":["audits[aria-valid-attr].title"],"lighthouse-core/audits/accessibility/aria-valid-attr.js | description":["audits[aria-valid-attr].description"],"lighthouse-core/audits/accessibility/button-name.js | title":["audits[button-name].title"],"lighthouse-core/audits/accessibility/button-name.js | description":["audits[button-name].description"],"lighthouse-core/audits/accessibility/bypass.js | title":["audits.bypass.title"],"lighthouse-core/audits/accessibility/bypass.js | description":["audits.bypass.description"],"lighthouse-core/audits/accessibility/color-contrast.js | title":["audits[color-contrast].title"],"lighthouse-core/audits/accessibility/color-contrast.js | description":["audits[color-contrast].description"],"lighthouse-core/audits/accessibility/definition-list.js | title":["audits[definition-list].title"],"lighthouse-core/audits/accessibility/definition-list.js | description":["audits[definition-list].description"],"lighthouse-core/audits/accessibility/dlitem.js | title":["audits.dlitem.title"],"lighthouse-core/audits/accessibility/dlitem.js | description":["audits.dlitem.description"],"lighthouse-core/audits/accessibility/document-title.js | title":["audits[document-title].title"],"lighthouse-core/audits/accessibility/document-title.js | description":["audits[document-title].description"],"lighthouse-core/audits/accessibility/duplicate-id-active.js | title":["audits[duplicate-id-active].title"],"lighthouse-core/audits/accessibility/duplicate-id-active.js | description":["audits[duplicate-id-active].description"],"lighthouse-core/audits/accessibility/duplicate-id-aria.js | title":["audits[duplicate-id-aria].title"],"lighthouse-core/audits/accessibility/duplicate-id-aria.js | description":["audits[duplicate-id-aria].description"],"lighthouse-core/audits/accessibility/form-field-multiple-labels.js | title":["audits[form-field-multiple-labels].title"],"lighthouse-core/audits/accessibility/form-field-multiple-labels.js | description":["audits[form-field-multiple-labels].description"],"lighthouse-core/audits/accessibility/frame-title.js | title":["audits[frame-title].title"],"lighthouse-core/audits/accessibility/frame-title.js | description":["audits[frame-title].description"],"lighthouse-core/audits/accessibility/heading-order.js | title":["audits[heading-order].title"],"lighthouse-core/audits/accessibility/heading-order.js | description":["audits[heading-order].description"],"lighthouse-core/audits/accessibility/html-has-lang.js | title":["audits[html-has-lang].title"],"lighthouse-core/audits/accessibility/html-has-lang.js | description":["audits[html-has-lang].description"],"lighthouse-core/audits/accessibility/html-lang-valid.js | title":["audits[html-lang-valid].title"],"lighthouse-core/audits/accessibility/html-lang-valid.js | description":["audits[html-lang-valid].description"],"lighthouse-core/audits/accessibility/image-alt.js | title":["audits[image-alt].title"],"lighthouse-core/audits/accessibility/image-alt.js | description":["audits[image-alt].description"],"lighthouse-core/audits/accessibility/input-image-alt.js | title":["audits[input-image-alt].title"],"lighthouse-core/audits/accessibility/input-image-alt.js | description":["audits[input-image-alt].description"],"lighthouse-core/audits/accessibility/label.js | title":["audits.label.title"],"lighthouse-core/audits/accessibility/label.js | description":["audits.label.description"],"lighthouse-core/audits/accessibility/layout-table.js | title":["audits[layout-table].title"],"lighthouse-core/audits/accessibility/layout-table.js | description":["audits[layout-table].description"],"lighthouse-core/audits/accessibility/link-name.js | title":["audits[link-name].title"],"lighthouse-core/audits/accessibility/link-name.js | description":["audits[link-name].description"],"lighthouse-core/audits/accessibility/list.js | title":["audits.list.title"],"lighthouse-core/audits/accessibility/list.js | description":["audits.list.description"],"lighthouse-core/audits/accessibility/listitem.js | title":["audits.listitem.title"],"lighthouse-core/audits/accessibility/listitem.js | description":["audits.listitem.description"],"lighthouse-core/audits/accessibility/meta-refresh.js | title":["audits[meta-refresh].title"],"lighthouse-core/audits/accessibility/meta-refresh.js | description":["audits[meta-refresh].description"],"lighthouse-core/audits/accessibility/meta-viewport.js | title":["audits[meta-viewport].title"],"lighthouse-core/audits/accessibility/meta-viewport.js | description":["audits[meta-viewport].description"],"lighthouse-core/audits/accessibility/object-alt.js | title":["audits[object-alt].title"],"lighthouse-core/audits/accessibility/object-alt.js | description":["audits[object-alt].description"],"lighthouse-core/audits/accessibility/tabindex.js | title":["audits.tabindex.title"],"lighthouse-core/audits/accessibility/tabindex.js | description":["audits.tabindex.description"],"lighthouse-core/audits/accessibility/td-headers-attr.js | title":["audits[td-headers-attr].title"],"lighthouse-core/audits/accessibility/td-headers-attr.js | description":["audits[td-headers-attr].description"],"lighthouse-core/audits/accessibility/th-has-data-cells.js | title":["audits[th-has-data-cells].title"],"lighthouse-core/audits/accessibility/th-has-data-cells.js | description":["audits[th-has-data-cells].description"],"lighthouse-core/audits/accessibility/valid-lang.js | title":["audits[valid-lang].title"],"lighthouse-core/audits/accessibility/valid-lang.js | description":["audits[valid-lang].description"],"lighthouse-core/audits/accessibility/video-caption.js | title":["audits[video-caption].title"],"lighthouse-core/audits/accessibility/video-caption.js | description":["audits[video-caption].description"],"lighthouse-core/audits/accessibility/video-description.js | title":["audits[video-description].title"],"lighthouse-core/audits/accessibility/video-description.js | description":["audits[video-description].description"],"lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | title":["audits[uses-long-cache-ttl].title"],"lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description":["audits[uses-long-cache-ttl].description"],"lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue":[{"values":{"itemCount":0},"path":"audits[uses-long-cache-ttl].displayValue"}],"lighthouse-core/audits/byte-efficiency/total-byte-weight.js | title":["audits[total-byte-weight].title"],"lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description":["audits[total-byte-weight].description"],"lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue":[{"values":{"totalBytes":938487},"path":"audits[total-byte-weight].displayValue"}],"lighthouse-core/audits/byte-efficiency/offscreen-images.js | title":["audits[offscreen-images].title"],"lighthouse-core/audits/byte-efficiency/offscreen-images.js | description":["audits[offscreen-images].description"],"lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | title":["audits[render-blocking-resources].title"],"lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | description":["audits[render-blocking-resources].description"],"lighthouse-core/lib/i18n/i18n.js | displayValueMsSavings":[{"values":{"wastedMs":160},"path":"audits[render-blocking-resources].displayValue"}],"lighthouse-core/lib/i18n/i18n.js | columnWastedBytes":["audits[render-blocking-resources].details.headings[2].label","audits[unminified-javascript].details.headings[2].label","audits[unused-css-rules].details.headings[2].label","audits[unused-javascript].details.headings[2].label"],"lighthouse-core/audits/byte-efficiency/unminified-css.js | title":["audits[unminified-css].title"],"lighthouse-core/audits/byte-efficiency/unminified-css.js | description":["audits[unminified-css].description"],"lighthouse-core/audits/byte-efficiency/unminified-javascript.js | title":["audits[unminified-javascript].title"],"lighthouse-core/audits/byte-efficiency/unminified-javascript.js | description":["audits[unminified-javascript].description"],"lighthouse-core/lib/i18n/i18n.js | displayValueByteSavings":[{"values":{"wastedBytes":182818},"path":"audits[unminified-javascript].displayValue"},{"values":{"wastedBytes":12617},"path":"audits[unused-css-rules].displayValue"},{"values":{"wastedBytes":308170},"path":"audits[unused-javascript].displayValue"}],"lighthouse-core/audits/byte-efficiency/unused-css-rules.js | title":["audits[unused-css-rules].title"],"lighthouse-core/audits/byte-efficiency/unused-css-rules.js | description":["audits[unused-css-rules].description"],"lighthouse-core/audits/byte-efficiency/unused-javascript.js | title":["audits[unused-javascript].title"],"lighthouse-core/audits/byte-efficiency/unused-javascript.js | description":["audits[unused-javascript].description"],"lighthouse-core/audits/byte-efficiency/uses-webp-images.js | title":["audits[uses-webp-images].title"],"lighthouse-core/audits/byte-efficiency/uses-webp-images.js | description":["audits[uses-webp-images].description"],"lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | title":["audits[uses-optimized-images].title"],"lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | description":["audits[uses-optimized-images].description"],"lighthouse-core/audits/byte-efficiency/uses-text-compression.js | title":["audits[uses-text-compression].title"],"lighthouse-core/audits/byte-efficiency/uses-text-compression.js | description":["audits[uses-text-compression].description"],"lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | title":["audits[uses-responsive-images].title"],"lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | description":["audits[uses-responsive-images].description"],"lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | title":["audits[efficient-animated-content].title"],"lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | description":["audits[efficient-animated-content].description"],"lighthouse-core/audits/dobetterweb/appcache-manifest.js | title":["audits[appcache-manifest].title"],"lighthouse-core/audits/dobetterweb/appcache-manifest.js | description":["audits[appcache-manifest].description"],"lighthouse-core/audits/dobetterweb/doctype.js | title":["audits.doctype.title"],"lighthouse-core/audits/dobetterweb/doctype.js | description":["audits.doctype.description"],"lighthouse-core/audits/dobetterweb/charset.js | title":["audits.charset.title"],"lighthouse-core/audits/dobetterweb/charset.js | description":["audits.charset.description"],"lighthouse-core/audits/dobetterweb/dom-size.js | title":["audits[dom-size].title"],"lighthouse-core/audits/dobetterweb/dom-size.js | description":["audits[dom-size].description"],"lighthouse-core/audits/dobetterweb/dom-size.js | displayValue":[{"values":{"itemCount":51},"path":"audits[dom-size].displayValue"}],"lighthouse-core/audits/dobetterweb/dom-size.js | columnStatistic":["audits[dom-size].details.headings[0].text"],"lighthouse-core/audits/dobetterweb/dom-size.js | columnValue":["audits[dom-size].details.headings[2].text"],"lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMElements":["audits[dom-size].details.items[0].statistic"],"lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMDepth":["audits[dom-size].details.items[1].statistic"],"lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMWidth":["audits[dom-size].details.items[2].statistic"],"lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | title":["audits[external-anchors-use-rel-noopener].title"],"lighthouse-core/audits/dobetterweb/external-anchors-use-rel-noopener.js | description":["audits[external-anchors-use-rel-noopener].description"],"lighthouse-core/audits/dobetterweb/geolocation-on-start.js | title":["audits[geolocation-on-start].title"],"lighthouse-core/audits/dobetterweb/geolocation-on-start.js | description":["audits[geolocation-on-start].description"],"lighthouse-core/audits/dobetterweb/no-document-write.js | title":["audits[no-document-write].title"],"lighthouse-core/audits/dobetterweb/no-document-write.js | description":["audits[no-document-write].description"],"lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | title":["audits[no-vulnerable-libraries].title"],"lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | description":["audits[no-vulnerable-libraries].description"],"lighthouse-core/audits/dobetterweb/js-libraries.js | title":["audits[js-libraries].title"],"lighthouse-core/audits/dobetterweb/js-libraries.js | description":["audits[js-libraries].description"],"lighthouse-core/lib/i18n/i18n.js | columnName":["audits[js-libraries].details.headings[0].text"],"lighthouse-core/audits/dobetterweb/js-libraries.js | columnVersion":["audits[js-libraries].details.headings[1].text"],"lighthouse-core/audits/dobetterweb/notification-on-start.js | title":["audits[notification-on-start].title"],"lighthouse-core/audits/dobetterweb/notification-on-start.js | description":["audits[notification-on-start].description"],"lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | title":["audits[password-inputs-can-be-pasted-into].title"],"lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | description":["audits[password-inputs-can-be-pasted-into].description"],"lighthouse-core/audits/dobetterweb/uses-http2.js | title":["audits[uses-http2].title"],"lighthouse-core/audits/dobetterweb/uses-http2.js | description":["audits[uses-http2].description"],"lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | title":["audits[uses-passive-event-listeners].title"],"lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | description":["audits[uses-passive-event-listeners].description"],"lighthouse-core/audits/seo/meta-description.js | title":["audits[meta-description].title"],"lighthouse-core/audits/seo/meta-description.js | description":["audits[meta-description].description"],"lighthouse-core/audits/seo/http-status-code.js | title":["audits[http-status-code].title"],"lighthouse-core/audits/seo/http-status-code.js | description":["audits[http-status-code].description"],"lighthouse-core/audits/seo/font-size.js | title":["audits[font-size].title"],"lighthouse-core/audits/seo/font-size.js | description":["audits[font-size].description"],"lighthouse-core/audits/seo/link-text.js | title":["audits[link-text].title"],"lighthouse-core/audits/seo/link-text.js | description":["audits[link-text].description"],"lighthouse-core/audits/seo/is-crawlable.js | title":["audits[is-crawlable].title"],"lighthouse-core/audits/seo/is-crawlable.js | description":["audits[is-crawlable].description"],"lighthouse-core/audits/seo/robots-txt.js | title":["audits[robots-txt].title"],"lighthouse-core/audits/seo/robots-txt.js | description":["audits[robots-txt].description"],"lighthouse-core/audits/seo/tap-targets.js | title":["audits[tap-targets].title"],"lighthouse-core/audits/seo/tap-targets.js | description":["audits[tap-targets].description"],"lighthouse-core/audits/seo/hreflang.js | title":["audits.hreflang.title"],"lighthouse-core/audits/seo/hreflang.js | description":["audits.hreflang.description"],"lighthouse-core/audits/seo/plugins.js | title":["audits.plugins.title"],"lighthouse-core/audits/seo/plugins.js | description":["audits.plugins.description"],"lighthouse-core/audits/seo/canonical.js | title":["audits.canonical.title"],"lighthouse-core/audits/seo/canonical.js | description":["audits.canonical.description"],"lighthouse-core/audits/seo/manual/structured-data.js | title":["audits[structured-data].title"],"lighthouse-core/audits/seo/manual/structured-data.js | description":["audits[structured-data].description"],"lighthouse-core/config/default-config.js | performanceCategoryTitle":["categories.performance.title"],"lighthouse-core/config/default-config.js | a11yCategoryTitle":["categories.accessibility.title"],"lighthouse-core/config/default-config.js | a11yCategoryDescription":["categories.accessibility.description"],"lighthouse-core/config/default-config.js | a11yCategoryManualDescription":["categories.accessibility.manualDescription"],"lighthouse-core/config/default-config.js | bestPracticesCategoryTitle":["categories[best-practices].title"],"lighthouse-core/config/default-config.js | seoCategoryTitle":["categories.seo.title"],"lighthouse-core/config/default-config.js | seoCategoryDescription":["categories.seo.description"],"lighthouse-core/config/default-config.js | seoCategoryManualDescription":["categories.seo.manualDescription"],"lighthouse-core/config/default-config.js | pwaCategoryTitle":["categories.pwa.title"],"lighthouse-core/config/default-config.js | pwaCategoryDescription":["categories.pwa.description"],"lighthouse-core/config/default-config.js | pwaCategoryManualDescription":["categories.pwa.manualDescription"],"lighthouse-core/config/default-config.js | metricGroupTitle":["categoryGroups.metrics.title"],"lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle":["categoryGroups[load-opportunities].title"],"lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription":["categoryGroups[load-opportunities].description"],"lighthouse-core/config/default-config.js | budgetsGroupTitle":["categoryGroups.budgets.title"],"lighthouse-core/config/default-config.js | budgetsGroupDescription":["categoryGroups.budgets.description"],"lighthouse-core/config/default-config.js | diagnosticsGroupTitle":["categoryGroups.diagnostics.title"],"lighthouse-core/config/default-config.js | diagnosticsGroupDescription":["categoryGroups.diagnostics.description"],"lighthouse-core/config/default-config.js | pwaFastReliableGroupTitle":["categoryGroups[pwa-fast-reliable].title"],"lighthouse-core/config/default-config.js | pwaInstallableGroupTitle":["categoryGroups[pwa-installable].title"],"lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle":["categoryGroups[pwa-optimized].title"],"lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle":["categoryGroups[a11y-best-practices].title"],"lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription":["categoryGroups[a11y-best-practices].description"],"lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle":["categoryGroups[a11y-color-contrast].title"],"lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription":["categoryGroups[a11y-color-contrast].description"],"lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle":["categoryGroups[a11y-names-labels].title"],"lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription":["categoryGroups[a11y-names-labels].description"],"lighthouse-core/config/default-config.js | a11yNavigationGroupTitle":["categoryGroups[a11y-navigation].title"],"lighthouse-core/config/default-config.js | a11yNavigationGroupDescription":["categoryGroups[a11y-navigation].description"],"lighthouse-core/config/default-config.js | a11yAriaGroupTitle":["categoryGroups[a11y-aria].title"],"lighthouse-core/config/default-config.js | a11yAriaGroupDescription":["categoryGroups[a11y-aria].description"],"lighthouse-core/config/default-config.js | a11yLanguageGroupTitle":["categoryGroups[a11y-language].title"],"lighthouse-core/config/default-config.js | a11yLanguageGroupDescription":["categoryGroups[a11y-language].description"],"lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle":["categoryGroups[a11y-audio-video].title"],"lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription":["categoryGroups[a11y-audio-video].description"],"lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle":["categoryGroups[a11y-tables-lists].title"],"lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription":["categoryGroups[a11y-tables-lists].description"],"lighthouse-core/config/default-config.js | seoMobileGroupTitle":["categoryGroups[seo-mobile].title"],"lighthouse-core/config/default-config.js | seoMobileGroupDescription":["categoryGroups[seo-mobile].description"],"lighthouse-core/config/default-config.js | seoContentGroupTitle":["categoryGroups[seo-content].title"],"lighthouse-core/config/default-config.js | seoContentGroupDescription":["categoryGroups[seo-content].description"],"lighthouse-core/config/default-config.js | seoCrawlingGroupTitle":["categoryGroups[seo-crawl].title"],"lighthouse-core/config/default-config.js | seoCrawlingGroupDescription":["categoryGroups[seo-crawl].description"],"lighthouse-core/config/default-config.js | bestPracticesTrustSafetyGroupTitle":["categoryGroups[best-practices-trust-safety].title"],"lighthouse-core/config/default-config.js | bestPracticesUXGroupTitle":["categoryGroups[best-practices-ux].title"],"lighthouse-core/config/default-config.js | bestPracticesBrowserCompatGroupTitle":["categoryGroups[best-practices-browser-compat].title"],"lighthouse-core/config/default-config.js | bestPracticesGeneralGroupTitle":["categoryGroups[best-practices-general].title"],"node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__METRICS":["categoryGroups[lighthouse-plugin-publisher-ads-metrics].title"],"node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__ADS_PERFORMANCE":["categoryGroups[lighthouse-plugin-publisher-ads-ads-performance].title"],"node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__ADS_BEST_PRACTICES":["categoryGroups[lighthouse-plugin-publisher-ads-ads-best-practices].title"],"stack-packs/packs/react.js | unminified_css":["stackPacks[0].descriptions[unminified-css]"],"stack-packs/packs/react.js | unminified_javascript":["stackPacks[0].descriptions[unminified-javascript]"],"stack-packs/packs/react.js | unused_javascript":["stackPacks[0].descriptions[unused-javascript]"],"stack-packs/packs/react.js | server_response_time":["stackPacks[0].descriptions[server-response-time]"],"stack-packs/packs/react.js | redirects":["stackPacks[0].descriptions.redirects"],"stack-packs/packs/react.js | user_timings":["stackPacks[0].descriptions[user-timings]"],"stack-packs/packs/react.js | dom_size":["stackPacks[0].descriptions[dom-size]"]}},"stackPacks":[{"id":"react","title":"React","iconDataURL":"data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 841.9 595.3\"%3E %3Cg fill=\"%2361DAFB\"%3E%3Cpath d=\"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z\"/%3E %3Ccircle cx=\"420.9\" cy=\"296.5\" r=\"45.7\"/%3E %3Cpath d=\"M520.5 78.1z\"/%3E%3C/g%3E%3C/svg%3E","descriptions":{"unminified-css":"If your build system minifies your CSS files automatically, ensure that you are deploying the production build of your application. You can check this with the React Developer Tools extension. [Learn more](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build).","unminified-javascript":"If your build system minifies your JS files automatically, ensure that you are deploying the production build of your application. You can check this with the React Developer Tools extension. [Learn more](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build).","unused-javascript":"If you are not server-side rendering, [split your JavaScript bundles](https://web.dev/code-splitting-suspense/) with `React.lazy()`. Otherwise, code-split using a third-party library such as [loadable-components](https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/).","server-response-time":"If you are server-side rendering any React components, consider using `renderToNodeStream()` or `renderToStaticNodeStream()` to allow the client to receive and hydrate different parts of the markup instead of all at once. [Learn more](https://reactjs.org/docs/react-dom-server.html#rendertonodestream).","redirects":"If you are using React Router, minimize usage of the `\u003cRedirect>` component for [route navigations](https://reacttraining.com/react-router/web/api/Redirect).","user-timings":"Use the React DevTools Profiler, which makes use of the Profiler API, to measure the rendering performance of your components. [Learn more.](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)","dom-size":"Consider using a “windowing” library like `react-window` to minimize the number of DOM nodes created if you are rendering many repeated elements on the page. [Learn more](https://web.dev/virtualize-long-lists-react-window/). Also, minimize unecessary re-renders using [shouldComponentUpdate](https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action), [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent), or [React.memo](https://reactjs.org/docs/react-api.html#reactmemo) and [skip effects](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) only until certain dependencies have changed if you are using the Effect hook to improve runtime performance."}}]};</script>
  <script>
    function __initLighthouseReport__() {
      const dom = new DOM(document);
      const renderer = new ReportRenderer(dom);

      const container = document.querySelector('main');
      renderer.renderReport(window.__LIGHTHOUSE_JSON__, container);

      // Hook in JS features and page-level event listeners after the report
      // is in the document.
      const features = new ReportUIFeatures(dom);
      features.initFeatures(window.__LIGHTHOUSE_JSON__);
    }
    window.addEventListener('DOMContentLoaded', __initLighthouseReport__);

    document.addEventListener('lh-analytics', e => {
      if (window.ga) {
        ga(e.detail.cmd, e.detail.fields);
      }
    });

    document.addEventListener('lh-log', e => {
      const logger = new Logger(document.querySelector('#lh-log'));

      switch (e.detail.cmd) {
        case 'log':
          logger.log(e.detail.msg);
          break;
        case 'warn':
          logger.warn(e.detail.msg);
          break;
        case 'error':
          logger.error(e.detail.msg);
          break;
        case 'hide':
          logger.hide();
          break;
      }
    });
  </script>
</body>
</html>

/*# sourceURL=third_party/lighthouse/report-assets/template.html */
